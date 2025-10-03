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
      <div className="absolute top-0 right-0 w-96 h-96 bg-company-softblue opacity-5 rounded-3xl translate-x-1/3 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-company-primary opacity-5 rounded-3xl -translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-company-accent opacity-5 rounded-3xl -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-company-primary">Kontak</h2>
          <div className="w-24 h-1 bg-company-accent/70 mx-auto mb-6 rounded-sm"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Jangan ragu menghubungi kami untuk berdiskusi mengenai solusi teknologi yang paling sesuai bagi organisasi Anda.
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
                className="flex items-start p-5 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="mr-4 flex-shrink-0 bg-company-accent/60 p-3 rounded-lg shadow-sm">
                  <Phone size={24} className="text-company-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-company-primary">Telepon</h4>
                  <p className="text-gray-700">+62 21 388 792 46</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start p-5 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="mr-4 flex-shrink-0 bg-company-accent/60 p-3 rounded-lg shadow-sm">
                  <Mail size={24} className="text-company-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-company-primary">Email</h4>
                  <p className="text-gray-700">info@inibejo.com</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start p-5 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="mr-4 flex-shrink-0 bg-company-accent/60 p-3 rounded-lg shadow-sm">
                  <MapPin size={24} className="text-company-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-company-primary">Alamat</h4>
                  <p className="text-gray-700">
                    Jl. Gading Kirana Timur Blok A13 No. 28,<br />Kelapa Gading, Jakarta Utara 14240, Indonesia
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
            <form className="space-y-5 p-8 rounded-xl border border-gray-200 shadow-lg relative z-10 bg-white">
              <motion.div variants={formItemVariants}>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-company-primary">Nama Lengkap</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-md bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-company-accent focus:border-transparent text-gray-700 shadow-sm"
                  placeholder="Masukkan nama lengkap Anda"
                />
              </motion.div>

              <motion.div variants={formItemVariants}>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-company-primary">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-md bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-company-accent focus:border-transparent text-gray-700 shadow-sm"
                  placeholder="Masukkan email Anda"
                />
              </motion.div>

              <motion.div variants={formItemVariants}>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-company-primary">Pesan</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-md bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-company-accent focus:border-transparent text-gray-700 shadow-sm"
                  placeholder="Apa yang bisa kami bantu?"
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="bg-company-accent text-company-primary font-semibold px-6 py-3 rounded-lg shadow-sm transition-all duration-300 flex items-center justify-center space-x-2 w-full md:w-auto hover:bg-company-accent/90"
                whileHover={{ y: -2 }}
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
