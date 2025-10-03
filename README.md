# Welcome to your Lovable project.

## Project info

**URL**: https://lovable.dev/projects/ba45f9e0-6a18-435c-97f6-2c3aad27a9da

## Contributor Guide

New contributors should review `AGENTS.md` for project structure, coding standards, and PR expectations before making changes.

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/ba45f9e0-6a18-435c-97f6-2c3aad27a9da) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## E-Commerce Image Management

This project includes scripts to download and manage product images from INAPROC's catalog:

```sh
# Download product images from INAPROC API (skips existing images)
npm run download-images

# Force re-download all product images (clears cache first)
npm run update-images
```

**How it works:**
- Fetches current product catalog from INAPROC GraphQL API
- Downloads product images to `public/ecommerce/` directory
- Creates image mapping file for the React app to use
- Automatically handles duplicate detection and caching
- Uses proper browser headers to avoid CORS issues

**When to use:**
- `download-images`: Regular updates, only downloads new images
- `update-images`: When you need fresh copies of all images

## Image Optimization

Convert portfolio images to WebP format for better performance:

```sh
# Convert all PNG images in src/assets/portfolio to WebP format
npm run convert-to-webp
```

**Benefits:**
- Reduces image file sizes by ~93% on average
- Faster page loading times
- Better user experience
- Maintains high image quality

**Last conversion results:**
- 23 images converted from PNG to WebP
- Total size reduced from 16.10MB to 1.06MB (93.4% savings)

## Production Deployment

The E-Commerce section automatically detects the environment:

- **Development**: Uses Vite proxy (`/api/inaproc/graphql`) with fallback to direct API
- **Production**: Skips proxy and calls INAPROC API directly with proper CORS headers

**Production domain**: https://www.inibejo.com/

The app automatically sets the correct `origin` and `referer` headers for production deployment.

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/ba45f9e0-6a18-435c-97f6-2c3aad27a9da) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

# PT Bejo Berkat Makmur Website

A modern website for PT Bejo Berkat Makmur built with React, TypeScript, and Tailwind CSS. Konten menekankan inovasi, efisiensi, dan pertumbuhan berkelanjutan sesuai profil perusahaan.

## Features

- Modern and responsive design
- About page with company information
- Services showcase
- Portfolio gallery
- Static E-Commerce integration with INAPROC
- Contact information and forms

## E-Commerce Static Data System

The E-Commerce section uses a static data approach for better performance and reliability in production. 

### Updating E-Commerce Data

To update the product catalog and images, run:

```bash
npm run update-commerce
```

This command will:
1. Fetch all products from INAPROC API (200 products per page)
2. Download all product images locally to `public/ecommerce/`
3. Create static JSON files:
   - `public/ecommerce/products.json` - All products raw data
   - `public/ecommerce/products-paginated.json` - Paginated data for UI (10 products per page)
   - `public/ecommerce/image-mapping.json` - URL mapping for downloaded images

### How It Works

1. **Data Fetching**: The script fetches products using the same GraphQL query as the original dynamic version
2. **Image Download**: All product images are downloaded and stored locally with MD5-hashed filenames
3. **Static Pagination**: Products are pre-paginated into 10-item pages for smooth UI navigation
4. **Fallback Handling**: The UI gracefully falls back to original URLs if local images aren't available

### File Structure

```
public/ecommerce/
├── products.json              # Raw product data
├── products-paginated.json    # Pre-paginated data for UI
├── image-mapping.json         # Local image filename mapping
└── *.jpeg/*.png              # Downloaded product images
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Update e-commerce data
npm run update-commerce
```

## Scripts

- `dev` - Start development server
- `build` - Build for production
- `build:dev` - Build in development mode
- `preview` - Preview production build
- `update-commerce` - Update e-commerce products and images
- `download-images` - Download images only (legacy)
- `update-images` - Clean and re-download images (legacy)

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Framer Motion
- React Router DOM
