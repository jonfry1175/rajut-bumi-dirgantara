import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const formItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="kontak" className="section py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-company-softblue opacity-5 rounded-full translate-x-1/3 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-company-primary opacity-5 rounded-full -translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-company-accent opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-company-primary">Kontak</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-company-primary to-company-softblue mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Jangan ragu untuk menghubungi kami untuk informasi lebih lanjut tentang produk dan layanan kami.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div className="space-y-8" variants={containerVariants}>
              <motion.div
                className="flex items-start p-5 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="mr-4 flex-shrink-0 bg-gradient-to-br from-company-primary to-company-accent p-3 rounded-full shadow-md">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-company-primary">Telepon</h4>
                  <p className="text-gray-700">0813-8547-7596</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start p-5 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="mr-4 flex-shrink-0 bg-gradient-to-br from-company-primary to-company-accent p-3 rounded-full shadow-md">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-company-primary">Email</h4>
                  <p className="text-gray-700">admin@paspt.com</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start p-5 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="mr-4 flex-shrink-0 bg-gradient-to-br from-company-primary to-company-accent p-3 rounded-full shadow-md">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-company-primary">Alamat</h4>
                  <p className="text-gray-700">
                    Menara Pondok Indah 2nd Floor Kav. II/BA No.2, Pondok Indah, Jl. Metro Pondok Indah RT. 003 RW. 014, Pondok Pinang, Kebayoran Lama, Jakarta Selatan
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Subtle gradient background for the form */}
            <div className="absolute inset-0 bg-gradient-to-br from-company-light to-white rounded-2xl"></div>

            <form className="space-y-5 p-8 rounded-2xl border border-gray-200 shadow-lg relative z-10">
              <motion.div variants={formItemVariants}>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-company-primary">Nama Lengkap</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-company-softblue focus:border-transparent text-gray-700 shadow-sm"
                  placeholder="Masukkan nama lengkap Anda"
                />
              </motion.div>

              <motion.div variants={formItemVariants}>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-company-primary">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-company-softblue focus:border-transparent text-gray-700 shadow-sm"
                  placeholder="Masukkan email Anda"
                />
              </motion.div>

              <motion.div variants={formItemVariants}>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-company-primary">Pesan</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-company-softblue focus:border-transparent text-gray-700 shadow-sm"
                  placeholder="Apa yang bisa kami bantu?"
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="bg-gradient-to-r from-company-primary to-company-accent text-white font-medium px-6 py-3 rounded-lg shadow-md transition-all duration-300 flex items-center justify-center space-x-2 w-full md:w-auto"
                whileHover={{ scale: 1.03, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ scale: 0.98 }}
                variants={formItemVariants}
              >
                <span>Kirim Pesan</span>
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
