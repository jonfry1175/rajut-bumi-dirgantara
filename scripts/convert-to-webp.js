import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Portfolio assets directory
const portfolioDir = path.join(__dirname, '..', 'src', 'assets', 'portfolio');

// Function to convert image to WebP
async function convertToWebP(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ quality: 80 }) // Good quality with smaller file size
      .toFile(outputPath);
    
    const inputStats = fs.statSync(inputPath);
    const outputStats = fs.statSync(outputPath);
    const savings = ((inputStats.size - outputStats.size) / inputStats.size * 100).toFixed(1);
    
    console.log(`✅ Converted: ${path.basename(inputPath)} -> ${path.basename(outputPath)}`);
    console.log(`   Size: ${(inputStats.size / 1024).toFixed(1)}KB -> ${(outputStats.size / 1024).toFixed(1)}KB (${savings}% smaller)`);
    
    return { original: inputStats.size, converted: outputStats.size };
  } catch (error) {
    console.error(`❌ Failed to convert ${inputPath}:`, error.message);
    return null;
  }
}

// Function to recursively find and convert PNG files
async function convertImagesInDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  const results = [];
  
  for (const item of items) {
    const itemPath = path.join(dirPath, item);
    const stat = fs.statSync(itemPath);
    
    if (stat.isDirectory() && item !== '.DS_Store') {
      // Recursively process subdirectories
      const subResults = await convertImagesInDirectory(itemPath);
      results.push(...subResults);
    } else if (stat.isFile() && path.extname(item).toLowerCase() === '.png') {
      // Convert PNG files to WebP
      const outputPath = itemPath.replace(/\.png$/i, '.webp');
      const result = await convertToWebP(itemPath, outputPath);
      if (result) {
        results.push(result);
      }
    }
  }
  
  return results;
}

// Main conversion function
async function convertAllImages() {
  console.log('🚀 Starting PNG to WebP conversion...');
  console.log(`📁 Processing directory: ${portfolioDir}\n`);
  
  if (!fs.existsSync(portfolioDir)) {
    console.error('❌ Portfolio directory not found!');
    process.exit(1);
  }
  
  try {
    const results = await convertImagesInDirectory(portfolioDir);
    
    if (results.length === 0) {
      console.log('ℹ️  No PNG files found to convert.');
      return;
    }
    
    // Calculate total savings
    const totalOriginal = results.reduce((sum, r) => sum + r.original, 0);
    const totalConverted = results.reduce((sum, r) => sum + r.converted, 0);
    const totalSavings = ((totalOriginal - totalConverted) / totalOriginal * 100).toFixed(1);
    
    console.log('\n📊 Conversion Summary:');
    console.log(`   Files converted: ${results.length}`);
    console.log(`   Total original size: ${(totalOriginal / 1024 / 1024).toFixed(2)}MB`);
    console.log(`   Total converted size: ${(totalConverted / 1024 / 1024).toFixed(2)}MB`);
    console.log(`   Total space saved: ${((totalOriginal - totalConverted) / 1024 / 1024).toFixed(2)}MB (${totalSavings}%)`);
    
    console.log('\n✅ Conversion completed successfully!');
    console.log('\n📝 Next steps:');
    console.log('   1. Update import statements in ProductSection.tsx to use .webp extensions');
    console.log('   2. Test the application to ensure images load correctly');
    console.log('   3. Optionally remove the original .png files after testing');
    
  } catch (error) {
    console.error('❌ Error during conversion:', error);
    process.exit(1);
  }
}

// Run the conversion
convertAllImages(); 