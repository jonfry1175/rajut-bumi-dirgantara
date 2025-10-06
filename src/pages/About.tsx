import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutPageComponent from '@/components/AboutPage';
import WhyChooseUs from '@/components/WhyChooseUs';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>Tentang PT Bejo Berkat Makmur | inibejo.com</title>
        <link rel="canonical" href="https://inibejo.com/about" />
        <meta
          name="description"
          content="Pelajari sejarah, visi, dan nilai PT Bejo Berkat Makmur yang membangun solusi TI inovatif untuk berbagai sektor industri."
        />
        <meta property="og:title" content="Tentang PT Bejo Berkat Makmur | inibejo.com" />
        <meta
          property="og:description"
          content="Kenali tim dan komitmen PT Bejo Berkat Makmur dalam menghadirkan solusi teknologi yang relevan dan berdampak di Indonesia."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://inibejo.com/about" />
        <meta property="og:image" content="https://inibejo.com/logo-bejo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tentang PT Bejo Berkat Makmur | inibejo.com" />
        <meta
          name="twitter:description"
          content="PT Bejo Berkat Makmur adalah mitra teknologi tepercaya untuk mewujudkan transformasi digital."
        />
        <meta name="twitter:image" content="https://inibejo.com/logo-bejo.png" />
      </Helmet>

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
                Tentang Kami
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Mengenal lebih dekat PT Bejo Berkat Makmur, mitra strategis Anda untuk solusi teknologi yang relevan dan berdampak
              </p>
            </motion.div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-3xl blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-company-softblue/20 rounded-3xl blur-xl"></div>
        </section>

        <main>
          <AboutPageComponent />
          <WhyChooseUs />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
