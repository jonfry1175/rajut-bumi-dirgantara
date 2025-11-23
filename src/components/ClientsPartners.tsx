import React from "react";
import { motion } from "framer-motion";

type LogoEntry = {
  src: string;
  name: string;
};

const clientLogos: LogoEntry[] = [
  { src: "/clients/AXI.png", name: "AXI" },
  { src: "/clients/BLIBLI.png", name: "Blibli" },
  { src: "/clients/CUN.png", name: "CUN" },
  { src: "/clients/IMN.png", name: "IMN" },
  { src: "/clients/METRANET.png", name: "Metranet" },
  { src: "/clients/PINS.png", name: "PINS" },
  {
    src: "/clients/TRIMEDIA-SOLUSI-INFORMATIKA.png",
    name: "Trimedia Solusi Informatika",
  },
  { src: "/clients/TURBO.png", name: "Turbo" },
];

const partnerLogos: LogoEntry[] = [
  { src: "/partners/ACER.png", name: "Acer" },
  { src: "/partners/ASUS.png", name: "ASUS" },
  { src: "/partners/BENQ.png", name: "BenQ" },
  { src: "/partners/DELL.png", name: "Dell" },
  { src: "/partners/EPSON.png", name: "Epson" },
  { src: "/partners/HITACHI.png", name: "Hitachi" },
  { src: "/partners/HP.png", name: "HP" },
  { src: "/partners/IBM.png", name: "IBM" },
  { src: "/partners/LENOVO.png", name: "Lenovo" },
  { src: "/partners/ONESIA.png", name: "Onesia" },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.1,
    },
  }),
};

const ClientsPartners: React.FC = () => {
  const renderLogoGrid = (logos: LogoEntry[]) => (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
      {logos.map((logo, index) => (
        <motion.div
          key={logo.name}
          className="group flex h-28 items-center justify-center rounded-2xl border border-white/60 bg-white/80 p-4 shadow-[0_14px_40px_-30px_rgba(15,23,42,0.6)] backdrop-blur transition-all duration-300 sm:h-32 sm:p-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={index}
        >
          <img
            src={logo.src}
            alt={`${logo.name} logo`}
            className="max-h-full max-w-full object-contain transition duration-300 saturate-[0.85] group-hover:saturate-100 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </motion.div>
      ))}
    </div>
  );

  return (
    <section className="relative overflow-hidden bg-company-light py-20">
      <div className="absolute inset-x-0 top-[-35%] h-80 rounded-full bg-company-secondary/20 blur-3xl" />
      <div className="absolute bottom-[-20%] right-[-12%] h-64 w-64 rounded-full bg-company-accent/15 blur-3xl" />

      <div className="container relative mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-company-primary/15 bg-white/70 text-company-primary text-xs font-semibold uppercase tracking-[0.28em] mb-4">
            Jejak Kolaborasi
          </span>
          <h2 className="mb-4 text-4xl font-bold text-company-primary text-balance">
            Partner Kami
          </h2>
          <div className="mx-auto mb-6 h-px w-24 rounded-full bg-company-primary"></div>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 text-balance">
            Kolaborasi bersama para mitra teknologi terkemuka memperkuat
            komitmen kami memberikan solusi terbaik.
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-left md:text-center">
              <h3 className="text-2xl font-semibold text-company-primary">Klien</h3>
              <p className="mt-2 max-w-2xl text-gray-600 md:mx-auto text-balance">
                Perusahaan yang mempercayakan transformasi digital dan kebutuhan teknologinya kepada kami.
              </p>
            </div>
            {renderLogoGrid(clientLogos)}
          </motion.div> */}

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-left md:text-center">
              <h3 className="text-2xl font-semibold text-company-primary">
                Jaringan Distribusi
              </h3>
              <p className="mt-2 max-w-2xl text-gray-600 md:mx-auto text-balance">
                Kolaborasi bersama brand fashion global untuk menghadirkan
                produk dan layanan dengan kualitas terbaik.
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
