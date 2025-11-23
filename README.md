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

# PT RAJUT BUMI DIRGANTARA Website

A modern website for PT RAJUT BUMI DIRGANTARA built with React, TypeScript, and Tailwind CSS. Konten menekankan kualitas, kepercayaan, dan inovasi dalam produksi tekstil.

## Features

- Modern and responsive design
- About page with company information
- Services showcase
- Portfolio gallery
- Solusi pengadaan terpadu dengan dukungan konsultatif
- Contact information and forms

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Scripts

- `dev` - Start development server
- `build` - Build for production
- `build:dev` - Build in development mode
- `preview` - Preview production build

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Framer Motion
- React Router DOM
