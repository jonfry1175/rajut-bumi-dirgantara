import fs from 'fs';
import path from 'path';
import https from 'https';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imageDir = path.join(__dirname, '..', 'public', 'ecommerce');
if (!fs.existsSync(imageDir)) {
  fs.mkdirSync(imageDir, { recursive: true });
}

function generateImageFilename(imageUrl) {
  const hash = crypto.createHash('md5').update(imageUrl).digest('hex');
  const extension = path.extname(imageUrl).split('?')[0] || '.jpg';
  return `${hash}${extension}`;
}

function imageExists(filename) {
  return fs.existsSync(path.join(imageDir, filename));
}

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
      if (response.statusCode === 301 || response.statusCode === 302) {
        const redirectUrl = response.headers.location;
        https.get(redirectUrl, options, (redirectResponse) => {
          if (redirectResponse.statusCode !== 200) {
            reject(new Error(`Failed to download image after redirect: ${redirectResponse.statusCode}`));
            return;
          }
          redirectResponse.pipe(file);
          
          file.on('finish', () => {
            file.close();
            resolve(filename);
          });
          
          file.on('error', (err) => {
            fs.unlink(filePath, () => {});
            reject(err);
          });
        }).on('error', reject);
        return;
      }
      
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download image: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        resolve(filename);
      });
      
      file.on('error', (err) => {
        fs.unlink(filePath, () => {});
        reject(err);
      });
    }).on('error', reject);
  });
}

async function fetchProducts(page = 1, perPage = 200) {
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
            page: page,
            perPage: perPage
          }
        }
      }
    });

    const options = {
      hostname: 'katalog.inaproc.id',
      port: 443,
      path: '/graphql',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData),
        'Accept': '*/*',
        'Accept-Language': 'en-US,en;q=0.9',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Origin': 'https://www.persadaarthaselaras.com',
        'Referer': 'https://www.persadaarthaselaras.com/katalog'
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const jsonData = JSON.parse(data);
          resolve(jsonData);
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

async function fetchAllProducts() {
  const allProducts = [];
  let page = 1;
  let hasMore = true;
  const perPage = 200;

  console.log('Fetching all products...');

  while (hasMore) {
    try {
      const response = await fetchProducts(page, perPage);
      
      if (response.data?.searchProducts?.items) {
        const products = response.data.searchProducts.items;
        allProducts.push(...products);
        
        const total = response.data.searchProducts.total;
        const currentPage = response.data.searchProducts.currentPage;
        const lastPage = response.data.searchProducts.lastPage;
        
        console.log(`Page ${currentPage}/${lastPage} - Products: ${products.length} - Total: ${allProducts.length}/${total}`);
        
        hasMore = currentPage < lastPage;
        page++;
        
        if (hasMore) {
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      } else {
        break;
      }
    } catch (error) {
      console.error(`Error fetching page ${page}:`, error);
      break;
    }
  }

  return allProducts;
}

async function downloadAllImages(products) {
  const imageMapping = {};
  
  const uniqueImages = new Set();
  products.forEach(product => {
    if (product.images && Array.isArray(product.images)) {
      product.images.forEach(imageUrl => {
        if (imageUrl && typeof imageUrl === 'string') {
          uniqueImages.add(imageUrl);
        }
      });
    }
  });

  console.log(`Downloading ${uniqueImages.size} unique images...`);

  const batchSize = 5;
  const imageUrls = Array.from(uniqueImages);
  
  for (let i = 0; i < imageUrls.length; i += batchSize) {
    const batch = imageUrls.slice(i, i + batchSize);
    const batchPromises = batch.map(async (imageUrl) => {
      const filename = generateImageFilename(imageUrl);
      
      if (imageExists(filename)) {
        imageMapping[imageUrl] = filename;
        return filename;
      }
      
      try {
        await downloadImage(imageUrl, filename);
        imageMapping[imageUrl] = filename;
        return filename;
      } catch (error) {
        console.error(`Failed to download ${imageUrl}:`, error.message);
        return null;
      }
    });
    
    await Promise.all(batchPromises);
    
    if (i + batchSize < imageUrls.length) {
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }

  return imageMapping;
}

function saveProductsData(products, imageMapping) {
  const dataDir = path.join(__dirname, '..', 'public', 'ecommerce');
  
  // Save raw products
  fs.writeFileSync(path.join(dataDir, 'products.json'), JSON.stringify(products, null, 2));
  
  // Save image mapping
  fs.writeFileSync(path.join(dataDir, 'image-mapping.json'), JSON.stringify(imageMapping, null, 2));
  
  // Create paginated data
  const paginatedData = {};
  const itemsPerPage = 10;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  for (let page = 1; page <= totalPages; page++) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageProducts = products.slice(startIndex, endIndex);
    
    paginatedData[page] = {
      page,
      perPage: itemsPerPage,
      total: products.length,
      totalPages,
      items: pageProducts
    };
  }

  fs.writeFileSync(path.join(dataDir, 'products-paginated.json'), JSON.stringify(paginatedData, null, 2));
  
  console.log(`Saved ${products.length} products with ${totalPages} pages`);
}

async function main() {
  try {
    const products = await fetchAllProducts();
    
    if (products.length === 0) {
      console.log('No products found!');
      return;
    }
    
    const imageMapping = await downloadAllImages(products);
    saveProductsData(products, imageMapping);
    
    console.log('Update completed successfully!');
    console.log(`Products: ${products.length}`);
    console.log(`Images: ${Object.keys(imageMapping).length}`);
    
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();
