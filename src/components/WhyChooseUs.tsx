import React from 'react';
import { BadgeCheck, Headphones, HandshakeIcon, ShieldCheck, Tags, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const WhyChooseUs: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const features = [
    {
      icon: <BadgeCheck strokeWidth={1.5} />,
      title: "PRODUK 100% ORIGINAL",
      description: "Seluruh perangkat dan solusi yang kami sediakan terjamin keasliannya untuk menjaga kepercayaan dan performa terbaik.",
      color: "from-company-primary to-company-softblue"
    },
    {
      icon: <ShieldCheck strokeWidth={1.5} />,
      title: "GARANSI RESMI",
      description: "Dukungan garansi sesuai standar principal sehingga investasi teknologi Anda lebih aman dan terkelola.",
      color: "from-company-softblue to-company-primary"
    },
    {
      icon: <Tags strokeWidth={1.5} />,
      title: "HARGA BERSAING",
      description: "Struktur harga yang transparan dan kompetitif tanpa mengurangi kualitas layanan maupun produk.",
      color: "from-company-primary to-company-softblue"
    },
    {
      icon: <HandshakeIcon strokeWidth={1.5} />,
      title: "PRINCIPAL TERPERCAYA",
      description: "Bermitra dengan merek-merek global sehingga setiap solusi memenuhi standar industri tertinggi.",
      color: "from-company-softblue to-company-accent"
    },
    {
      icon: <Headphones strokeWidth={1.5} />,
      title: "AFTER-SALES SERVICE",
      description: "Layanan purna jual yang responsif untuk memastikan operasional teknologi Anda berjalan optimal.",
      color: "from-company-primary to-company-softblue"
    },
    {
      icon: <Lock strokeWidth={1.5} />,
      title: "KEAMANAN TRANSAKSI",
      description: "Proses pengadaan yang aman, jelas, dan terverifikasi untuk menjaga kenyamanan setiap mitra.",
      color: "from-company-softblue to-company-accent"
    }
  ];

  return (
    <section className="section bg-company-light relative overflow-hidden py-24">
      {/* Decorative elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-company-primary/20 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-company-primary/20 to-transparent"></div>

      <div className="absolute left-0 top-20 w-32 h-32 bg-company-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute right-0 bottom-20 w-48 h-48 bg-company-softblue/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <span className="inline-block px-4 py-1.5 bg-company-softblue/10 text-company-primary rounded-full text-sm font-medium mb-4">Keunggulan Kami</span>
          <h2 className="section-title mb-5">Mengapa Memilih Kami</h2>
          <div className="w-24 h-1 bg-company-primary mx-auto mb-6 rounded-full"></div>
          <p className="section-description max-w-2xl mx-auto text-gray-700">
            PT Bejo Berkat Makmur menghadirkan nilai tambah yang memastikan setiap kolaborasi memberikan hasil nyata dan berkelanjutan.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={fadeIn}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white to-company-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="bg-white rounded-2xl shadow-md p-8 relative z-10 h-full flex flex-col items-center text-center border border-company-primary/5">
                <div className={cn(
                  "w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110",
                  "bg-gradient-to-br", feature.color
                )}>
                  <div className="text-white w-8 h-8 flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-3 text-company-primary">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-company-primary to-company-softblue rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="bg-white p-8 max-w-3xl mx-auto rounded-2xl shadow-md border border-company-primary/5">
            <h3 className="text-xl font-bold mb-4 text-company-primary">Mulai Kerjasama Dengan Kami</h3>
            <p className="text-gray-700 mb-6">
              Temukan solusi teknologi terbaik untuk kebutuhan bisnis Anda bersama PT Bejo Berkat Makmur.
            </p>
            <a
              href="tel:+622138879246"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center justify-center gap-2 bg-company-primary text-white",
                "font-medium px-8 py-3 rounded-full transition-all duration-300 hover:bg-company-primary/90",
                "hover:shadow-lg hover:-translate-y-1"
              )}
            >
              Hubungi Kami Sekarang
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
