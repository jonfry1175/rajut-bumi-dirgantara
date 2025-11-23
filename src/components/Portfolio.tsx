import React from "react";
import { motion } from "framer-motion";

const Portfolio: React.FC = () => {
  const categories = [
    {
      title: "BRAND FASHION LOKAL",
      brands: [
        { name: "Local Brand A", logo: "/clients/client-1.png" },
        { name: "Local Brand B", logo: "/clients/client-2.png" },
        { name: "Local Brand C", logo: "/clients/client-3.png" },
        { name: "Local Brand D", logo: "/clients/client-4.png" },
      ],
    },
    {
      title: "GARMENT EKSPOR",
      brands: [
        { name: "Global Brand X", logo: "/clients/client-5.png" },
        { name: "Global Brand Y", logo: "/clients/client-6.png" },
        { name: "Global Brand Z", logo: "/clients/client-7.png" },
      ],
    },
    {
      title: "SERAGAM KORPORAT",
      brands: [
        { name: "Corporate A", logo: "/clients/client-8.png" },
        { name: "Corporate B", logo: "/clients/client-9.png" },
        { name: "Corporate C", logo: "/clients/client-10.png" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const brandVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
    hover: {
      scale: 1.08,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  };

  return (
    <section
      id="portofolio"
      className="section py-20 bg-company-light relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-company-softblue opacity-5 rounded-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-company-accent opacity-5 rounded-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-company-primary">
            Portofolio
          </h2>
          <div className="w-24 h-1 bg-company-accent/70 mx-auto mb-6 rounded-sm"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Kami dipercaya oleh berbagai brand fashion lokal dan internasional
            serta perusahaan besar untuk kebutuhan tekstil mereka.
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
              <div className="relative">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <motion.h3
                    className="text-sm md:text-lg lg:text-xl font-semibold text-company-primary px-5 py-2.5 rounded-lg inline-flex items-center border border-company-primary/15 bg-white shadow-sm"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {category.title}
                  </motion.h3>
                  <div className="h-1 w-24 bg-company-accent/70 rounded-sm hidden md:block"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"></div>
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
          <p className="text-xl font-medium text-company-primary mb-8">
            Dan masih banyak lagi mitra teknologi terkemuka lainnya!
          </p>

          <motion.a
            href="#contact"
            className="inline-flex items-center px-8 py-3 rounded-lg bg-company-primary text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Diskusikan Kebutuhan Anda
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
