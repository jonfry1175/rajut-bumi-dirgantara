import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesPageComponent from '@/components/ServicesPage';
import { motion } from 'framer-motion';

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section for Services Page */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2134&q=80')"
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
              Layanan Kami
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Solusi lengkap Teknologi Informasi dan Komunikasi yang disesuaikan dengan kebutuhan Anda
            </p>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-3xl blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-company-softblue/20 rounded-3xl blur-xl"></div>
      </section>

      <main>
        <ServicesPageComponent />

        {/* CTA Section */}
        <section className="bg-company-primary py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-company-primary/10"></div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              className="text-center text-white max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Siap Memulai Proyek Anda?
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                Hubungi tim ahli kami dan temukan solusi teknologi terbaik untuk kebutuhan bisnis Anda.
              </p>

              <div className="flex justify-center">
                <motion.a
                  href="tel:+622138879246"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-company-primary font-semibold px-8 py-4 rounded-lg text-lg shadow-sm hover:shadow-md transition-all duration-300"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Hubungi Kami Sekarang
                  <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-3xl blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-company-softblue/20 rounded-3xl blur-2xl"></div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage; 
