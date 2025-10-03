import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutPageComponent from '@/components/AboutPage';
import WhyChooseUs from '@/components/WhyChooseUs';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section for About Page */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')"
          }}
        ></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-company-primary/70 via-company-accent/65 to-company-softblue/70"></div>
        
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
              Tentang Kami
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Mengenal lebih dekat PT Bejo Berkat Makmur, mitra strategis Anda untuk solusi teknologi yang relevan dan berdampak
            </p>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-company-softblue/20 rounded-full blur-xl"></div>
      </section>

      <main>
        <AboutPageComponent />
        <WhyChooseUs />
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage; 
