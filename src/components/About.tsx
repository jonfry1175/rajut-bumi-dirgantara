import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const About: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="tentang" className="section bg-white relative overflow-hidden py-20 md:py-28">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-80 bg-company-secondary rounded-bl-full opacity-30" />
      <div className="absolute bottom-0 left-0 w-1/4 h-64 bg-company-secondary rounded-tr-full opacity-20" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <span className="inline-block px-4 py-1.5 bg-company-softblue/10 text-company-primary rounded-full text-sm font-medium mb-4">Tentang Kami</span>
          <h2 className="section-title mb-5">Tentang Perusahaan</h2>
          <div className="w-24 h-1 bg-company-primary mx-auto mb-6 rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            className="prose prose-lg mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerChildren}
          >
            <motion.p
              className="text-lg mb-6 text-gray-700 leading-relaxed"
              variants={fadeIn}
            >
              PT. Persada Artha Selaras merupakan perusahaan Teknologi Informasi dan Komunikasi (TIK)
              terkemuka di Indonesia yang berkomitmen menghadirkan produk dan solusi unggulan guna
              mempercepat transformasi digital nasional.
            </motion.p>

            <motion.p
              className="text-lg mb-6 text-gray-700 leading-relaxed"
              variants={fadeIn}
            >
              Kami menjalin kemitraan strategis dengan berbagai instansi pemerintah sebagai wujud
              komitmen kami dalam mendukung peningkatan efisiensi sektor publik serta percepatan
              inovasi teknologi. Melalui kolaborasi ini, kami mampu menghadirkan solusi yang disesuaikan
              dengan kebutuhan spesifik masing-masing lembaga, sehingga memberikan kontribusi nyata
              terhadap pencapaian visi dan misi mereka.
            </motion.p>

            <motion.p
              className="text-lg text-gray-700 leading-relaxed"
              variants={fadeIn}
            >
              Lebih dari sekadar penyedia layanan teknologi, PT. Persada Artha Selaras adalah mitra
              terpercaya Anda dalam mewujudkan kemajuan dan keunggulan di era digital yang terus berkembang.
            </motion.p>
          </motion.div>



          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/about"
              className={cn(
                "inline-flex items-center justify-center gap-2 bg-company-primary text-white",
                "font-medium px-8 py-3 rounded-full transition-all duration-300 hover:bg-company-primary/90",
                "hover:shadow-lg hover:-translate-y-1"
              )}
            >
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
