const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Ensure public/images directory exists
const imagesDir = path.join(__dirname, '../public/images');

if (!fs.existsSync(imagesDir)) {
  console.log('Creating images directory...');
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Image optimization configuration
const images = [
  'hero-buffet.jpg',
  'sweets.jpg',
  'live-counter.jpg',
  'paneer-dish.jpg',
  'chaat-counter.jpg',
  'thali.jpg',
  'biryani.jpg',
  'corporate-event.jpg',
  'hygiene.jpg',
  'wedding-catering.jpg',
  'dal-tadka.jpg',
  'dessert-counter.jpg',
];

async function optimizeImages() {
  console.log('Starting image optimization...\n');

  for (const imageName of images) {
    const imagePath = path.join(imagesDir, imageName);
    
    if (!fs.existsSync(imagePath)) {
      console.log(`⚠️  Skipping ${imageName} - file not found`);
      continue;
    }

    try {
      // Get original file size
      const originalStats = fs.statSync(imagePath);
      const originalSize = originalStats.size;

      // Optimize and convert to WebP
      const webpPath = imagePath.replace(/\.[^.]+$/, '.webp');
      await sharp(imagePath)
        .resize(1920, 1440, {
          fit: 'inside',
          withoutEnlargement: true,
        })
        .webp({ quality: 80, effort: 6 })
        .toFile(webpPath);

      // Also keep optimized JPEG
      const optimizedJpegPath = imagePath.replace(/\.jpg$/, '-opt.jpg');
      if (imagePath.endsWith('.jpg')) {
        await sharp(imagePath)
          .resize(1920, 1440, {
            fit: 'inside',
            withoutEnlargement: true,
          })
          .jpeg({ quality: 85, progressive: true })
          .toFile(optimizedJpegPath);
      }

      // Get new file sizes
      const webpStats = fs.statSync(webpPath);
      const webpSize = webpStats.size;
      const savings = ((1 - webpSize / originalSize) * 100).toFixed(1);

      console.log(`✅ ${imageName}`);
      console.log(`   Original: ${(originalSize / 1024 / 1024).toFixed(2)}MB → WebP: ${(webpSize / 1024 / 1024).toFixed(2)}MB (${savings}% reduction)`);
    } catch (error) {
      console.error(`❌ Error optimizing ${imageName}:`, error.message);
    }
  }

  console.log('\n✨ Image optimization complete!');
}

// Run optimization
optimizeImages().catch(console.error);
