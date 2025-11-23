import React from "react";
import { motion } from "framer-motion";

const BuyingGuide: React.FC = () => {
  const steps = [
    {
      number: 1,
      content: (
        <p>
          Identifikasi kebutuhan pengadaan Anda dan siapkan detail spesifikasi
          produk yang diperlukan.
        </p>
      ),
    },
    {
      number: 2,
      content: (
        <p>
          Hubungi tim pengadaan kami melalui&nbsp;
          <a
            href="mailto:info@rajutbumidirgantara.com"
            className="text-company-primary hover:text-company-accent transition-colors duration-300 font-medium"
          >
            info@rajutbumidirgantara.com
          </a>
          &nbsp;atau telepon +62 21 555 1234 untuk konsultasi kebutuhan.
        </p>
      ),
    },
    {
      number: 3,
      content: (
        <p>
          Diskusikan solusi terbaik bersama konsultan kami, termasuk opsi
          pengembangan sampel (sampling), penyesuaian spesifikasi, dan jadwal
          pengiriman.
        </p>
      ),
    },
    {
      number: 4,
      content: (
        <p>
          Terima proposal dan penawaran resmi, kemudian lakukan evaluasi serta
          persetujuan internal di organisasi Anda.
        </p>
      ),
    },
    {
      number: 5,
      content: (
        <p>
          Finalisasikan pemesanan, tandatangani dokumen pendukung, dan pantau
          proses pengiriman hingga instalasi selesai.
        </p>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      backgroundColor: "rgba(37, 150, 190, 0.08)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <section
      id="ecommerce"
      className="section relative overflow-hidden bg-white py-16"
    >
      {/* Decorative elements */}
      <div className="absolute top-[-25%] right-[-10%] h-56 w-56 rounded-full bg-company-softblue/20 blur-3xl" />
      <div className="absolute bottom-[-20%] left-[-12%] h-72 w-72 rounded-full bg-company-primary/15 blur-3xl" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          className="mx-auto max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-company-primary/20 bg-white/70 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-company-primary">
            Proses Kerja Kami
          </span>
          <h2 className="mb-3 text-center text-3xl font-bold text-company-primary text-balance">
            Panduan Pengadaan Bersama PT RAJUT BUMI DIRGANTARA
          </h2>
          <div className="mx-auto mb-8 h-px w-32 rounded-full bg-company-primary"></div>

          <motion.div
            className="mt-8 space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {steps.map((step) => (
              <motion.div
                key={step.number}
                className="flex items-center rounded-2xl border border-white/60 bg-white/80 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                variants={itemVariants}
                whileHover="hover"
              >
                <div className="mr-4 flex-shrink-0">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-company-accent text-company-primary font-semibold shadow-sm">
                    {step.number}
                  </div>
                </div>
                <div className="max-w-lg text-gray-700 text-balance">
                  {step.content}
                </div>
                <div className="ml-auto pl-4">
                  <svg
                    className="h-5 w-5 text-company-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <a
              href="#kontak"
              className="inline-flex items-center gap-2 rounded-full bg-company-accent px-6 py-2.5 text-sm font-semibold text-company-primary shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-company-accent/90"
            >
              Hubungi Tim Pengadaan
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                ></path>
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BuyingGuide;
