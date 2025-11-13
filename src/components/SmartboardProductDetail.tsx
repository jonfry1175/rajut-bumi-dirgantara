import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, PenTool, Share2, Users, LifeBuoy, Settings } from 'lucide-react';

const highlightFeatures = [
  {
    icon: Sparkles,
    title: 'Visual 4K yang Memukau',
    description:
      'Panel LCD 4K UHD dengan brightness 350 cd/m² menghadirkan detail tajam di ruang kelas maupun ruang rapat.'
  },
  {
    icon: PenTool,
    title: 'Sentuhan Multi-Pengguna',
    description:
      'Teknologi kapasitif zero-gap dengan hingga 40 titik sentuh menjaga pengalaman menulis dan menggambar tetap natural.'
  },
  {
    icon: Share2,
    title: 'Screen Share Fleksibel',
    description:
      'Berbagi layar dari laptop, tablet, atau perangkat mobile secara kabel maupun nirkabel untuk kolaborasi real-time.'
  }
];

const specificationHighlights = [
  { label: 'Ukuran & Resolusi', value: '75", 86", 98" 4K UHD (3840 × 2160)' },
  { label: 'Sistem Operasi', value: 'Android 13 (dual OS) dengan Quad-core ARM Cortex-A55' },
  { label: 'Grafis & Memori', value: 'GPU Mali-G52 MP2, RAM 8GB DDR, ROM 128GB eMMC' },
  { label: 'Teknologi Sentuh', value: 'Zero-gap bonding, kapasitif hingga 40 titik, respons <7 ms' },
  { label: 'Audio & Kamera', value: 'Kamera AI 48MP, mikrofon 8-array, speaker 4×15W + opsional 30W' },
  { label: 'Aksesori', value: 'Wall mount, 2 stylus aktif, remote, OPS opsional i3/i5/i7' }
];

const afterSalesBenefits = [
  {
    icon: Users,
    title: 'Workshop Interaktif',
    description:
      'Tim PT Bejo Berkat Makmur memandu pelatihan guru, fasilitator, dan tim IT agar fitur anotasi dimanfaatkan optimal.'
  },
  {
    icon: LifeBuoy,
    title: 'Layanan On-site & Remote',
    description:
      'Dukungan instalasi, kalibrasi, serta bantuan jarak jauh memastikan smartboard selalu siap menghidupkan sesi kolaboratif.'
  },
  {
    icon: Settings,
    title: 'Integrasi Ruang Kolaborasi',
    description:
      'Pendampingan integrasi ke platform konferensi, OPS, dan manajemen perangkat untuk ekosistem hybrid meeting.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

const SmartboardProductDetail: React.FC = () => {
  return (
    <section
      id="smartboard-product"
      className="section relative overflow-hidden bg-white py-20"
    >
      <div className="absolute inset-x-0 -top-40 h-80 rounded-full bg-company-softblue/25 blur-3xl" />
      <div className="absolute bottom-[-45%] right-[-10%] h-80 w-80 rounded-full bg-company-accent/15 blur-3xl" />
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          className="grid gap-12 lg:grid-cols-2 items-center"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-company-accent/40 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-company-accent">
              Korisu Smartboard Series
            </span>
            <h2 className="text-balance text-4xl font-bold leading-tight text-company-primary">
              Smartboard interaktif yang menghubungkan pembelajaran dan kolaborasi
            </h2>
            <p className="text-balance text-lg leading-relaxed text-gray-600">
              Smartboard Korisu tersedia dalam ukuran 75 hingga 98 inci, memanfaatkan teknologi sentuhan kapasitif dan
              zero-gap bonding untuk meningkatkan akurasi menulis dan responsivitas. Digunakan di ruang kelas serta
              rapat eksekutif, perangkat ini menghadirkan pengalaman kolaborasi yang lebih hidup dan imersif.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <Sparkles className="mt-1 h-5 w-5 text-company-accent" />
                <span>Resolusi 4K 3840 × 2160 dengan brightness 350 cd/m² memastikan visual yang jernih di setiap sudut ruangan.</span>
              </li>
              <li className="flex items-start gap-3">
                <PenTool className="mt-1 h-5 w-5 text-company-accent" />
                <span>Tulisan stylus maupun jari terasa natural dengan dukungan hingga 40 titik sentuh secara bersamaan.</span>
              </li>
              <li className="flex items-start gap-3">
                <Share2 className="mt-1 h-5 w-5 text-company-accent" />
                <span>Screen share lintas perangkat (kabel maupun nirkabel) memperkuat kolaborasi presenter dan audiens.</span>
              </li>
            </ul>
            <a
              href="#kontak"
              className="inline-flex items-center gap-2 rounded-full bg-company-primary px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-company-primary/90"
            >
              Jadwalkan demo smartboard bersama kami
            </a>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute inset-0 -translate-y-6 scale-110 rounded-full bg-company-accent/15 blur-3xl" />
            <div className="relative rounded-3xl border border-white/60 bg-white/80 p-10 shadow-xl backdrop-blur">
              <img
                src="/products/smartboard.png"
                alt="Korisu Smartboard"
                className="mx-auto mb-8 h-32 w-auto"
                loading="lazy"
              />
              <div className="space-y-2 text-center">
                <p className="text-2xl font-semibold text-company-primary">Korisu Smartboard</p>
                <p className="text-sm uppercase tracking-[0.24em] text-gray-500">Engaged · Advanced · Connected</p>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-3 text-sm text-gray-600">
                {specificationHighlights.map((spec) => (
                  <div key={spec.label} className="rounded-xl border border-gray-100 bg-white px-5 py-4 text-left shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-wide text-company-primary/70">{spec.label}</p>
                    <p className="mt-1 text-base text-company-primary">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h3 className="mb-8 text-center text-3xl font-bold text-company-primary text-balance" variants={itemVariants}>
            Sorotan Fitur Korisu Smartboard
          </motion.h3>
          <div className="grid gap-6 md:grid-cols-3">
            {highlightFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="h-full rounded-2xl border border-white/60 bg-white/80 p-6 shadow-sm backdrop-blur transition-shadow hover:-translate-y-1 hover:shadow-xl"
                  variants={itemVariants}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-company-accent/15 text-company-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-xl font-semibold text-company-primary mb-2">{feature.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

          <motion.div
            className="mt-20 grid gap-8 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="rounded-3xl bg-company-primary px-8 py-10 text-white shadow-xl lg:col-span-1" variants={itemVariants}>
              <h3 className="mb-4 text-2xl font-semibold text-balance">Layanan Implementasi</h3>
              <p className="leading-relaxed text-white/75">
                PT Bejo Berkat Makmur memastikan setiap smartboard terpasang optimal dengan layanan end-to-end dari perencanaan hingga adopsi penggunaan.
              </p>
              <div className="mt-6 space-y-3 text-sm text-white/75">
                <p>- Survey lokasi serta instalasi bracket dinding atau standing.</p>
                <p>- Integrasi ke platform konferensi, OPS, dan jaringan perusahaan.</p>
                <p>- Pendampingan kurikulum, materi interaktif, dan dokumentasi pengguna.</p>
              </div>
            </motion.div>

            <motion.div
              className="grid gap-6 md:grid-cols-2 lg:col-span-2"
              variants={itemVariants}
            >
              {afterSalesBenefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={benefit.title}
                    className="rounded-2xl border border-white/60 bg-white/90 p-6 shadow-sm backdrop-blur transition-shadow hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-company-accent/15 text-company-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="mb-2 text-lg font-semibold text-company-primary">{benefit.title}</h4>
                    <p className="leading-relaxed text-gray-600 text-balance">{benefit.description}</p>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
      </div>
    </section>
  );
};

export default SmartboardProductDetail;
