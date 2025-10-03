import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const AboutPage: React.FC = () => {
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
            className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerChildren}
          >
            <motion.div
              className="bg-company-secondary p-8 md:p-10 rounded-2xl shadow-lg relative overflow-hidden group"
              variants={fadeIn}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="absolute right-0 top-0 h-24 w-24 bg-company-primary/10 rounded-bl-full" />
              <div className="absolute -right-4 -bottom-4 h-32 w-32 bg-company-primary/5 rounded-full" />

              <div className="relative">
                <div className="inline-flex items-center justify-center mb-6 h-14 w-14 rounded-xl bg-company-primary/10 text-company-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-company-primary">VISI</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Menjadi perusahaan terkemuka di bidang teknologi informasi yang mengedepankan inovasi dan
                  efisiensi di sektor Teknologi Informasi dan Komunikasi (TIK) melalui kolaborasi strategis dan
                  dedikasi terhadap kualitas unggul.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-company-secondary p-8 md:p-10 rounded-2xl shadow-lg relative overflow-hidden group"
              variants={fadeIn}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="absolute right-0 top-0 h-24 w-24 bg-company-primary/10 rounded-bl-full" />
              <div className="absolute -right-4 -bottom-4 h-32 w-32 bg-company-primary/5 rounded-full" />

              <div className="relative">
                <div className="inline-flex items-center justify-center mb-6 h-14 w-14 rounded-xl bg-company-primary/10 text-company-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-company-primary">MISI</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Menyediakan solusi TIK unggulan dan berkualitas tinggi yang selaras dengan tuntutan era
                  digital yang terus berkembang. Dengan menjalin kemitraan strategis bersama lembaga pemerintah
                  serta komitmen kuat terhadap keunggulan, kami bertekad meningkatkan efisiensi operasional
                  dan mendukung kemajuan bangsa.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage; 
