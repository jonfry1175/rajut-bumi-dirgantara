import React from "react";
import {
  BadgeCheck,
  Headphones,
  HandshakeIcon,
  ShieldCheck,
  Tags,
  Lock,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const WhyChooseUs: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const features = [
    {
      icon: <BadgeCheck strokeWidth={1.5} />,
      title: "KUALITAS GRADE A",
      description:
        "Seluruh kain yang kami produksi melalui proses Quality Control ketat untuk memastikan standar terbaik.",
      color: "bg-company-accent/20",
    },
    {
      icon: <ShieldCheck strokeWidth={1.5} />,
      title: "JAMINAN MUTU",
      description:
        "Dukungan garansi kualitas bahan dan warna yang tahan lama sesuai standar industri tekstil.",
      color: "bg-company-primary/15",
    },
    {
      icon: <Tags strokeWidth={1.5} />,
      title: "HARGA BERSAING",
      description:
        "Struktur harga yang transparan dan kompetitif tanpa mengurangi kualitas layanan maupun produk.",
      color: "bg-company-softblue/15",
    },
    {
      icon: <HandshakeIcon strokeWidth={1.5} />,
      title: "TEKNOLOGI TERKINI",
      description:
        "Menggunakan mesin rajut dan tenun modern untuk hasil produksi yang presisi dan efisien.",
      color: "bg-company-accent/15",
    },
    {
      icon: <Headphones strokeWidth={1.5} />,
      title: "AFTER-SALES SERVICE",
      description:
        "Layanan purna jual yang responsif untuk memastikan operasional teknologi Anda berjalan optimal.",
      color: "bg-company-primary/15",
    },
    {
      icon: <Lock strokeWidth={1.5} />,
      title: "PENGIRIMAN TEPAT WAKTU",
      description:
        "Komitmen kami pada jadwal produksi dan logistik yang terencana untuk kelancaran bisnis Anda.",
      color: "bg-company-softblue/15",
    },
  ];

  return (
    <section className="section relative overflow-hidden bg-company-light py-24">
      {/* Decorative elements */}
      <div className="absolute inset-x-0 top-0 h-px bg-company-primary/10" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-company-primary/10" />

      <div className="absolute left-[-12%] top-14 h-48 w-48 rounded-full bg-company-primary/15 blur-3xl" />
      <div className="absolute right-[-10%] bottom-10 h-60 w-60 rounded-full bg-company-softblue/15 blur-3xl" />

      <div className="container relative mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <span className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-company-primary/15 bg-white/70 text-company-primary text-xs font-semibold uppercase tracking-[0.3em] mb-4">
            Keunggulan Kami
          </span>
          <h2 className="section-title mb-5 text-balance">
            Mengapa Memilih Kami
          </h2>
          <div className="mx-auto mb-6 h-px w-24 rounded-full bg-company-primary"></div>
          <p className="section-description mx-auto max-w-2xl text-gray-700 text-balance">
            PT RAJUT BUMI DIRGANTARA menghadirkan nilai tambah yang memastikan
            setiap kolaborasi memberikan hasil nyata dan berkelanjutan.
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
              className="group relative"
              variants={fadeIn}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:bg-white/70" />

              <div className="relative z-10 flex h-full flex-col items-center rounded-2xl border border-company-primary/10 bg-white/90 p-8 text-center shadow-sm backdrop-blur">
                <div
                  className={cn(
                    "mb-6 flex h-16 w-16 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105",
                    feature.color
                  )}
                >
                  <div className="flex h-8 w-8 items-center justify-center text-company-primary">
                    {feature.icon}
                  </div>
                </div>

                <h3 className="mb-3 text-lg font-semibold text-company-primary">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-balance">
                  {feature.description}
                </p>

                <div className="absolute inset-x-8 bottom-6 h-px rounded-full bg-company-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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
          <div className="mx-auto max-w-3xl rounded-2xl border border-company-primary/10 bg-white/90 p-10 shadow-lg backdrop-blur">
            <h3 className="mb-4 text-xl font-semibold text-company-primary text-balance">
              Mulai Kerjasama Dengan Kami
            </h3>
            <p className="mb-6 text-gray-700 text-balance">
              Temukan solusi teknologi terbaik untuk kebutuhan bisnis Anda
              bersama PT RAJUT BUMI DIRGANTARA.
            </p>
            <a
              href="tel:+622138879246"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-full bg-company-primary/95 px-8 py-3 text-sm font-semibold text-white",
                "transition-all duration-300 hover:bg-company-primary",
                "hover:-translate-y-0.5 hover:shadow-lg"
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
