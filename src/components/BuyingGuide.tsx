import React from 'react';
import { motion } from 'framer-motion';

const BuyingGuide: React.FC = () => {
  const steps = [
    {
      number: 1,
      content: <p>Buka <a href="https://katalog.inaproc.id/" className="text-company-primary hover:text-company-accent transition-colors duration-300 font-medium">https://katalog.inaproc.id/</a>, lalu masuk menggunakan akun Anda</p>
    },
    {
      number: 2,
      content: <p>Pilih etalase yang diinginkan</p>
    },
    {
      number: 3,
      content: <p>Sortir pilihan penyedia dan pilih <span className="font-medium text-company-primary">PT Bejo Berkat Makmur</span></p>
    },
    {
      number: 4,
      content: <p>Pilih produk yang akan dibeli</p>
    },
    {
      number: 5,
      content: <p>Masukkan barang ke keranjang, lalu proses paket</p>
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      backgroundColor: "rgba(37, 150, 190, 0.08)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <section id="ecommerce" className="section py-16 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-company-softblue opacity-5 rounded-full translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-company-primary opacity-5 rounded-full -translate-x-1/3 translate-y-1/4"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-company-primary mb-2">Cara Membeli di e-katalog INAPROC</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-company-primary to-company-softblue mx-auto mb-8 rounded-full"></div>

          <motion.div
            className="mt-8 space-y-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {steps.map((step) => (
              <motion.div
                key={step.number}
                className="flex items-center p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow transition-all duration-300"
                variants={itemVariants}
                whileHover="hover"
              >
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-company-primary to-company-accent flex items-center justify-center text-white font-bold shadow-md">
                    {step.number}
                  </div>
                </div>
                <div className="text-gray-700">
                  {step.content}
                </div>
                <div className="ml-auto pl-4">
                  <svg className="w-5 h-5 text-company-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <a
              href="https://katalog.inaproc.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2.5 rounded-full bg-gradient-to-r from-company-primary to-company-accent text-white text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Kunjungi E-Katalog INAPROC
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BuyingGuide;
