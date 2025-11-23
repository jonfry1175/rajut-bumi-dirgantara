import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const About: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="tentang"
      className="section relative overflow-hidden bg-white py-20 md:py-28"
    >
      {/* Decorative elements */}
      <div className="absolute inset-y-0 right-[-16%] w-1/2 rounded-full bg-company-secondary/20 blur-3xl" />
      <div className="absolute bottom-[-30%] left-[-12%] h-72 w-72 rounded-full bg-company-accent/15 blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <span className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-company-primary/20 bg-white/60 text-company-primary text-xs font-semibold uppercase tracking-[0.3em] mb-4">
            Tentang Kami
          </span>
          <h2 className="section-title mb-5 text-balance">
            Tentang Perusahaan
          </h2>
          <div className="mx-auto mb-6 h-px w-24 rounded-full bg-company-primary"></div>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          <div className="pointer-events-none absolute inset-y-6 inset-x-4 rounded-3xl bg-white/70 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.4)]" />
          <motion.div
            className="relative z-10 space-y-6 rounded-3xl border border-white/60 bg-white px-8 py-10 text-left shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerChildren}
          >
            <motion.p
              className="text-lg text-gray-700 leading-relaxed text-balance"
              variants={fadeIn}
            >
              PT RAJUT BUMI DIRGANTARA berdiri dengan fokus utama pada industri
              tekstil, khususnya produksi kain rajut dan tenun berkualitas
              tinggi. Kami memadukan teknologi mesin modern dengan keahlian
              sumber daya manusia untuk menghasilkan produk tekstil yang unggul.
            </motion.p>

            <motion.p
              className="text-lg text-gray-700 leading-relaxed text-balance"
              variants={fadeIn}
            >
              Keunggulan kami terletak pada konsistensi kualitas, ketepatan
              waktu produksi, dan inovasi desain yang mengikuti tren pasar. Kami
              melayani berbagai kebutuhan industri fashion, mulai dari skala
              UMKM hingga brand besar nasional.
            </motion.p>

            <motion.p
              className="text-lg text-gray-700 leading-relaxed text-balance"
              variants={fadeIn}
            >
              Kami percaya bahwa kain berkualitas adalah dasar dari produk
              fashion yang sukses. PT RAJUT BUMI DIRGANTARA berkomitmen menjadi
              mitra strategis Anda dalam menyediakan bahan baku tekstil terbaik
              untuk pertumbuhan bisnis Anda.
            </motion.p>
          </motion.div>
          <motion.div
            className="relative z-10 mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/about"
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-full bg-company-primary/95 px-8 py-3 text-sm font-semibold text-white",
                "transition-all duration-300 hover:bg-company-primary",
                "hover:shadow-lg hover:-translate-y-0.5"
              )}
            >
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
