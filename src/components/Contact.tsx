import React from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const formItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="kontak"
      className="section relative overflow-hidden bg-white py-20"
    >
      {/* Decorative elements */}
      <div className="absolute top-[-30%] right-[-12%] h-96 w-96 rounded-full bg-company-softblue/20 blur-3xl" />
      <div className="absolute bottom-[-26%] left-[-12%] h-96 w-96 rounded-full bg-company-primary/15 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-company-accent/10 blur-2xl" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-company-primary/20 bg-white/70 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-company-primary">
            Terhubung Dengan Kami
          </span>
          <h2 className="mb-4 text-4xl font-bold text-company-primary text-balance">
            Kontak
          </h2>
          <div className="mx-auto mb-6 h-px w-24 rounded-full bg-company-primary"></div>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 text-balance">
            Jangan ragu menghubungi kami untuk berdiskusi mengenai solusi
            teknologi yang paling sesuai bagi organisasi Anda.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-12 md:grid-cols-2">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div className="space-y-7" variants={containerVariants}>
              <motion.div
                className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/80 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="absolute inset-x-6 top-0 h-px rounded-full bg-company-primary" />
                <div className="relative flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-company-accent/20 text-company-primary shadow-sm">
                    <Phone size={20} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xl font-semibold text-company-primary">
                      Telepon
                    </h4>
                    <span className="text-xs font-semibold uppercase tracking-[0.28em] text-company-primary/70">
                      Layanan Pelanggan
                    </span>
                    <p className="text-base text-gray-700">+62 21 555 1234</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/80 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="absolute inset-x-6 top-0 h-px rounded-full bg-company-primary" />
                <div className="relative flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-company-accent/20 text-company-primary shadow-sm">
                    <Mail size={20} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xl font-semibold text-company-primary">
                      Email
                    </h4>
                    <span className="text-xs font-semibold uppercase tracking-[0.28em] text-company-primary/70">
                      Tim Konsultasi
                    </span>
                    <p className="text-base text-gray-700">
                      info@rajutbumidirgantara.com
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/80 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="absolute inset-x-6 top-0 h-px rounded-full bg-company-primary" />
                <div className="relative flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-company-accent/20 text-company-primary shadow-sm">
                    <MapPin size={20} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xl font-semibold text-company-primary">
                      Alamat
                    </h4>
                    <span className="text-xs font-semibold uppercase tracking-[0.28em] text-company-primary/70">
                      Kantor Pusat
                    </span>
                    <p className="text-gray-700 text-balance leading-relaxed">
                      Jl. Industri Tekstil No. 88,
                      <br />
                      Bandung, Jawa Barat, Indonesia
                    </p>
                  </div>
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
            <form className="relative z-10 space-y-6 overflow-hidden rounded-2xl border border-white/60 bg-white/80 p-8 shadow-xl backdrop-blur">
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px rounded-full bg-company-accent" />
              <div className="space-y-2 text-left">
                <h3 className="text-lg font-semibold text-company-primary">
                  Formulir Konsultasi
                </h3>
                <p className="text-sm text-gray-500">
                  Kirimkan detail singkat kebutuhan Anda, tim kami akan
                  menghubungi dalam satu hari kerja.
                </p>
              </div>
              <motion.div variants={formItemVariants}>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-company-primary"
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-700 shadow-sm transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-company-accent"
                  placeholder="Masukkan nama lengkap Anda"
                />
              </motion.div>

              <motion.div variants={formItemVariants}>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-company-primary"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-700 shadow-sm transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-company-accent"
                  placeholder="Masukkan email Anda"
                />
              </motion.div>

              <motion.div variants={formItemVariants}>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-company-primary"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-700 shadow-sm transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-company-accent"
                  placeholder="Apa yang bisa kami bantu?"
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-company-primary/95 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-company-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-company-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white md:w-auto"
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
