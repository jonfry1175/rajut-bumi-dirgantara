import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ECommerce from '@/components/ECommerce';
import BuyingGuide from '@/components/BuyingGuide';
import { motion } from 'framer-motion';

const PortfolioPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section for Katalog Page */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')"
          }}
        ></div>
        
        {/* Color Overlay */}
        <div className="absolute inset-0 bg-company-primary/80"></div>
        
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              E-Commerce
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Jelajahi katalog produk teknologi terlengkap kami dan panduan cara pembelian melalui e-katalog INAPROC
            </p>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-3xl blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-company-softblue/20 rounded-3xl blur-xl"></div>
      </section>

      <main>
        <ECommerce />
        <BuyingGuide />
      </main>
      
      <Footer />
    </div>
  );
};

export default PortfolioPage; 
