import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, ExternalLink, ChevronRight, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const linkVariants = {
    hover: { x: 5, transition: { duration: 0.2 } },
  };

  return (
    <footer className="bg-company-primary text-white py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-company-softblue opacity-5 rounded-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-company-softblue opacity-5 rounded-3xl translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-company-accent opacity-10 rounded-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={itemVariants}>
            <div className="flex items-center mb-4">
              <img
                src="/new-logo.png"
                alt="PT RAJUT BUMI DIRGANTARA Logo"
                className="w-12 h-12 mr-4 rounded-lg bg-white p-2 shadow-sm"
              />
              <h3 className="text-2xl font-semibold tracking-tight flex items-center">
                <span>PT RAJUT BUMI DIRGANTARA</span>
                <div className="h-2 w-2 rounded bg-company-accent ml-2"></div>
              </h3>
            </div>
            <div className="h-1 w-16 bg-company-accent/70 mb-5 rounded-md"></div>
            <p className="text-base text-gray-300 leading-relaxed">
              Produsen tekstil terkemuka yang memadukan kualitas, inovasi, dan
              kepercayaan untuk menghadirkan produk kain terbaik bagi industri
              fashion Indonesia.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold tracking-tight mb-4 text-white">
              Tautan Cepat
            </h3>
            <div className="h-1 w-16 bg-company-accent/70 mb-5 rounded-md"></div>
            <ul className="space-y-3">
              {[
                { href: "#beranda", label: "Home" },
                { href: "#tentang", label: "About Us" },
                { href: "#layanan", label: "Service" },
                { href: "#produk", label: "Products" },
                { href: "#kontak", label: "Contact Us" },
              ].map((link, index) => (
                <motion.li key={index} whileHover="hover">
                  <motion.a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                    variants={linkVariants}
                  >
                    <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-company-softblue" />
                    <span>{link.label}</span>
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold tracking-tight mb-4 text-white">
              Hubungi Kami
            </h3>
            <div className="h-1 w-16 bg-company-accent/70 mb-5 rounded-md"></div>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center mr-3">
                  <Phone className="w-4 h-4 text-company-softblue" />
                </div>
                <p className="text-gray-300">+62 21 555 1234</p>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center mr-3">
                  <Mail className="w-4 h-4 text-company-softblue" />
                </div>
                <p className="text-gray-300">info@rajutbumidirgantara.com</p>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center mr-3">
                  <MapPin className="w-4 h-4 text-company-softblue" />
                </div>
                <p className="text-gray-300">
                  Jl. Industri Tekstil No. 88
                  <br />
                  Bandung, Jawa Barat
                  <br />
                  Indonesia
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} PT RAJUT BUMI DIRGANTARA. Hak
            Cipta Dilindungi.
          </p>
          <div className="mt-4 md:mt-0 flex items-center">
            <span className="text-sm text-gray-400 italic">
              Kualitas • Kepercayaan • Inovasi
            </span>
            <div className="ml-3 h-4 w-1 bg-company-accent rounded-sm"></div>
            <a
              href="#beranda"
              className="ml-3 opacity-70 hover:opacity-100 transition-opacity"
              aria-label="Kembali ke atas"
            >
              <div className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
