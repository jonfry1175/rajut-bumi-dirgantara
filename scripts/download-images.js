import fs from 'fs';
import path from 'path';
import https from 'https';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create public/ecommerce directory if it doesn't exist
const imageDir = path.join(__dirname, '..', 'public', 'ecommerce');
if (!fs.existsSync(imageDir)) {
  fs.mkdirSync(imageDir, { recursive: true });
}

// Function to generate a hash from URL for filename
function generateImageFilename(imageUrl) {
  const hash = crypto.createHash('md5').update(imageUrl).digest('hex');
  const extension = path.extname(imageUrl).split('?')[0] || '.jpg';
  return `${hash}${extension}`;
}

// Function to check if image already exists
function imageExists(filename) {
  return fs.existsSync(path.join(imageDir, filename));
}

// Function to download image
function downloadImage(imageUrl, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(imageDir, filename);
    const file = fs.createWriteStream(filePath);
    
    console.log(`Downloading: ${imageUrl} -> ${filename}`);
    
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'cross-site'
      }
    };
    
    https.get(imageUrl, options, (response) => {
      console.log(`Response status for ${filename}: ${response.statusCode}`);
      
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirects
        const redirectUrl = response.headers.location;
        console.log(`Redirecting to: ${redirectUrl}`);
        https.get(redirectUrl, options, (redirectResponse) => {
          if (redirectResponse.statusCode !== 200) {
            reject(new Error(`Failed to download image after redirect: ${redirectResponse.statusCode}`));
            return;
          }
          redirectResponse.pipe(file);
          
          file.on('finish', () => {
            file.close();
            console.log(`Downloaded: ${filename}`);
            resolve(filename);
          });
          
          file.on('error', (err) => {
            fs.unlink(filePath, () => {}); // Delete the file on error
            reject(err);
          });
        }).on('error', (err) => {
          reject(err);
        });
        return;
      }
      
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download image: ${response.statusCode} - ${response.statusMessage}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename} (${response.headers['content-length']} bytes)`);
        resolve(filename);
      });
      
      file.on('error', (err) => {
        fs.unlink(filePath, () => {}); // Delete the file on error
        reject(err);
      });
    }).on('error', (err) => {
      console.error(`Network error for ${imageUrl}:`, err.message);
      reject(err);
    });
  });
}

// Function to fetch products from GraphQL API
async function fetchProducts() {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({
      query: `query searchProducts($input: SearchProductInput!) {
        searchProducts(input: $input) {
          ... on ListSearchProductResponse {
            total
            perPage
            currentPage
            lastPage
            items {
              id
              type
              isActive
              images
              isPreOrder
              isRegionPrice
              isSellerUMKK
              labels
              isWholesale
              defaultPrice
              defaultPriceWithTax
              createdAt
              maxPrice
              maxPriceWithTax
              minPrice
              minPriceWithTax
              ppnBmPercentage
              ppnPercentage
              tkdn {
                value
                bmpValue
                tkdnBmp
                status
              }
              location {
                name
                regionCode
                child {
                  name
                  regionCode
                  child {
                    name
                    regionCode
                    child {
                      name
                      regionCode
                    }
                  }
                }
              }
              name
              stockAvailability
              stockAccumulation
              sellerName
              sellerId
              score
              scoreDetail {
                keywordScore
                locationScore
                priceScore
                ratingScore
                tkdnScore
                umkkScore
                unitSoldScore
              }
              unitSold
              username
              slug
              rating {
                count
                average
              }
              variants {
                id
                isActive
                options {
                  name
                  value
                }
                price
                priceWithTax
                sortOrder
                stock
              }
              status
            }
          }
          ... on GenericError {
            __typename
            reqId
            message
            code
          }
        }
      }`,
      variables: {
        input: {
          sort: [{ field: "CREATED_AT", order: "DESC" }],
          filter: {
            strategy: "SELLER_CATALOGUE",
            keyword: null,
            sellerId: "01JRCNQK2H739KAJ86BCXBKK54"
          },
          pagination: {
            page: 1,
            perPage: 50
          }
        }
      },
      operationName: "searchProducts"
    });

    const options = {
      hostname: 'katalog.inaproc.id',
      port: 443,
      path: '/graphql',
      method: 'POST',
      headers: {
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'application/json',
        'origin': 'https://katalog.inaproc.id',
        'referer': 'https://katalog.inaproc.id/persada-artha-selaras',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          console.log('Response status:', res.statusCode);
          console.log('Response data preview:', data.substring(0, 200));
          
          const response = JSON.parse(data);
          resolve(response);
        } catch (err) {
          console.error('Failed to parse JSON response:', err);
          console.error('Raw response:', data.substring(0, 500));
          reject(err);
        }
      });
    });

    req.on('error', (err) => {
      reject(err);
    });

    req.write(postData);
    req.end();
  });
}

// Main function to download all product images
async function downloadAllImages() {
  try {
    console.log('Fetching products from INAPROC API...');
    const response = await fetchProducts();
    
    if (!response.data?.searchProducts?.items) {
      throw new Error('No products found in API response');
    }

    const products = response.data.searchProducts.items;
    console.log(`Found ${products.length} products`);

    const imageMapping = {};
    let downloadCount = 0;
    let skipCount = 0;

    for (const product of products) {
      if (product.images && product.images.length > 0) {
        for (const imageUrl of product.images) {
          if (imageUrl && imageUrl.startsWith('http')) {
            const filename = generateImageFilename(imageUrl);
            
            // Store mapping for later use
            imageMapping[imageUrl] = filename;
            
            if (imageExists(filename)) {
              console.log(`Skipping existing image: ${filename}`);
              skipCount++;
            } else {
              try {
                await downloadImage(imageUrl, filename);
                downloadCount++;
                // Add small delay to avoid overwhelming the server
                await new Promise(resolve => setTimeout(resolve, 100));
              } catch (err) {
                console.error(`Failed to download ${imageUrl}:`, err.message);
              }
            }
          }
        }
      }
    }

    // Save image mapping to a JSON file for the React app to use
    const mappingPath = path.join(imageDir, 'image-mapping.json');
    fs.writeFileSync(mappingPath, JSON.stringify(imageMapping, null, 2));

    console.log(`\nDownload complete!`);
    console.log(`Downloaded: ${downloadCount} new images`);
    console.log(`Skipped: ${skipCount} existing images`);
    console.log(`Image mapping saved to: ${mappingPath}`);

  } catch (err) {
    console.error('Error downloading images:', err);
    process.exit(1);
  }
}

// Run the script
downloadAllImages();

export { downloadAllImages, generateImageFilename, imageExists }; 