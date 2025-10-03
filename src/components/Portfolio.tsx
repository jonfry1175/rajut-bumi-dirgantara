import React from 'react';
import { motion } from 'framer-motion';
import ProductSection from '@/components/ProductSection';

const Portfolio: React.FC = () => {
  const categories = [
    {
      title: "COMPUTER (PC & LAPTOP)",
      brands: [
        { name: "HP", logo: "/clients/clint-logo-hewlett-packerd-enterprise.png" },
        { name: "Dell", logo: "/clients/clint-logo-dell.png" },
        { name: "Lenovo", logo: "/clients/clint-logo-lenovo.png" },
        { name: "Apple", logo: "/clients/clint-logo-apple.png" },
        { name: "Asus", logo: "/clients/clint-logo-asus_.png" },
        { name: "Acer", logo: "/clients/clint-logo-acer.png" }
      ]
    },
    {
      title: "SERVER, STORAGE, DATA CENTER",
      brands: [
        { name: "Dell EMC", logo: "/clients/clint-logo-dell.png" },
        { name: "HP Enterprise", logo: "/clients/clint-logo-hewlett-packerd-enterprise.png" },
        { name: "Synology", logo: "/clients/clint-logo-synology.png" },
        { name: "Nutanix", logo: "/clients/clint-logo-nutanix.png" },
        { name: "APC", logo: "/clients/clint-logo-apc.png" }
      ]
    },
    {
      title: "NETWORKING",
      brands: [
        { name: "Cisco", logo: "/clients/clint-logo-cisco.png" },
        { name: "Fortinet", logo: "/clients/clint-logo-fortinet.png" },
        { name: "Mikrotik", logo: "/clients/clint-logo-miktotik.png" },
        { name: "D-Link", logo: "/clients/clint-logo-d-link.png" },
        { name: "Ubiquiti", logo: "/clients/clint-logo-ubiquiti.png" }
      ]
    },
    {
      title: "SURVEILLANCE & SECURITY SYSTEM",
      brands: [
        { name: "Hikvision", logo: "/clients/clint-logo-hikvision.png" },
        { name: "Axis Communications", logo: "/clients/clint-logo-axis communications.png" },
        { name: "Bosch", logo: "/clients/clint-logo-bosch.png" },
        { name: "Dahua", logo: "/clients/clint-logo-dahua.png" },
        { name: "Hanwha", logo: "/clients/clint-logo-hanwha.png" }
      ]
    },
    {
      title: "SOFTWARE",
      brands: [
        { name: "Microsoft", logo: "/clients/clint-logo-microsoft.png" },
        { name: "Symantec", logo: "/clients/clint-logo-symantec.png" },
        { name: "Trend Micro", logo: "/clients/clint-logo-trend-micro.png" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const brandVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    },
    hover: {
      scale: 1.08,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  return (
    <section id="portofolio" className="section py-20 bg-gradient-to-b from-company-light to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-company-softblue opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-company-accent opacity-5 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-company-primary">Portofolio</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-company-primary to-company-softblue mx-auto mb-6 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Kami bermitra dengan berbagai merek terkemuka di industri teknologi untuk memberikan solusi terbaik bagi kebutuhan Anda.
          </p>
        </motion.div>

        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden relative"
              variants={itemVariants}
            >
              {/* Subtle gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-company-secondary opacity-50"></div>

              <div className="relative">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <motion.h3
                    className="text-sm md:text-lg lg:text-xl font-bold text-company-primary px-5 py-2.5 rounded-full relative inline-block"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {/* Gradient border */}
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-company-primary to-company-softblue opacity-10"></span>
                    {/* Accent border */}
                    <span className="absolute inset-0 rounded-full border-2 border-company-softblue opacity-20"></span>
                    {category.title}
                  </motion.h3>
                  <div className="h-1 w-24 bg-gradient-to-r from-company-primary via-company-accent to-company-softblue rounded-full hidden md:block"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xl font-medium text-company-primary mb-8">Dan masih banyak lagi mitra teknologi terkemuka lainnya!</p>

          <motion.a
            href="#contact"
            className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-company-primary to-company-accent text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Diskusikan Kebutuhan Anda
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </motion.a>
        </motion.div>
      </div>

      {/* Product Section */}
      <div className="mt-20">
        <ProductSection />
      </div>
    </section>
  );
};

export default Portfolio;
