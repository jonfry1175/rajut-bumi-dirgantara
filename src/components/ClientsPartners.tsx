import React from 'react';
import { motion } from 'framer-motion';

type LogoEntry = {
  src: string;
  name: string;
};

const clientLogos: LogoEntry[] = [
  { src: '/clients/AXI.png', name: 'AXI' },
  { src: '/clients/BLIBLI.png', name: 'Blibli' },
  { src: '/clients/CUN.png', name: 'CUN' },
  { src: '/clients/IMN.png', name: 'IMN' },
  { src: '/clients/METRANET.png', name: 'Metranet' },
  { src: '/clients/PINS.png', name: 'PINS' },
  { src: '/clients/TRIMEDIA-SOLUSI-INFORMATIKA.png', name: 'Trimedia Solusi Informatika' },
  { src: '/clients/TURBO.png', name: 'Turbo' }
];

const partnerLogos: LogoEntry[] = [
  { src: '/partners/ACER.png', name: 'Acer' },
  { src: '/partners/ASUS.png', name: 'ASUS' },
  { src: '/partners/BENQ.png', name: 'BenQ' },
  { src: '/partners/DELL.png', name: 'Dell' },
  { src: '/partners/EPSON.png', name: 'Epson' },
  { src: '/partners/HITACHI.png', name: 'Hitachi' },
  { src: '/partners/HP.png', name: 'HP' },
  { src: '/partners/IBM.png', name: 'IBM' },
  { src: '/partners/LENOVO.png', name: 'Lenovo' },
  { src: '/partners/ONESIA.png', name: 'Onesia' }
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.1
    }
  })
};

const ClientsPartners: React.FC = () => {
  const renderLogoGrid = (logos: LogoEntry[]) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
      {logos.map((logo, index) => (
        <motion.div
          key={logo.name}
          className="flex items-center justify-center bg-white rounded-2xl border border-gray-200/60 shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-5 h-28 sm:h-32"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={index}
        >
          <img
            src={logo.src}
            alt={`${logo.name} logo`}
            className="max-h-full max-w-full object-contain saturate-[0.85] hover:saturate-100 transition duration-300"
            loading="lazy"
          />
        </motion.div>
      ))}
    </div>
  );

  return (
    <section className="bg-company-light/60 py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-company-primary">Klien & Partner Kami</h2>
          <div className="w-24 h-1 bg-company-accent/70 mx-auto mb-6 rounded-sm"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Kepercayaan yang kami bangun bersama perusahaan ternama dan para mitra teknologi terkemuka memperkuat komitmen kami memberikan solusi terbaik.
          </p>
        </motion.div>

        <div className="space-y-16">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-left md:text-center">
              <h3 className="text-2xl font-semibold text-company-primary">Klien</h3>
              <p className="text-gray-600 mt-2 max-w-2xl md:mx-auto">
                Perusahaan yang mempercayakan transformasi digital dan kebutuhan teknologinya kepada kami.
              </p>
            </div>
            {renderLogoGrid(clientLogos)}
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-left md:text-center">
              <h3 className="text-2xl font-semibold text-company-primary">Partner</h3>
              <p className="text-gray-600 mt-2 max-w-2xl md:mx-auto">
                Kolaborasi bersama brand global untuk menghadirkan produk dan layanan dengan kualitas terbaik.
              </p>
            </div>
            {renderLogoGrid(partnerLogos)}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientsPartners;
