import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Sparkles, BatteryCharging, ShieldCheck, Gauge, Repeat } from 'lucide-react';

const highlightFeatures = [
  {
    icon: Sparkles,
    title: 'Desain Ultralight Premium',
    description:
      'Sasis magnesium setebal 14 mm dengan berat hanya 1,08 kg memudahkan profesional bergerak dinamis tanpa kompromi.'
  },
  {
    icon: Cpu,
    title: 'Performa Proaktif',
    description:
      'Prosesor Korisu CoreFusion™ Gen 4 dengan grafis terintegrasi VegaX siap menjalankan multitasking berat sepanjang hari.'
  },
  {
    icon: BatteryCharging,
    title: 'Daya Tahan Sehari Penuh',
    description:
      'Baterai 78Wh dengan teknologi SmartFlow menjaga suhu optimal dan mendukung pengisian cepat 60% dalam 30 menit.'
  }
];

const specificationHighlights = [
  { label: 'Ukuran Layar', value: '14" QHD+ (2560 × 1600) 120Hz, 100% sRGB' },
  { label: 'Prosesor', value: 'Korisu CoreFusion™ Gen 4 (8P + 4E cores, 4.8GHz boost)' },
  { label: 'Memori', value: '16GB / 32GB LPDDR5X 6400MHz' },
  { label: 'Penyimpanan', value: '1TB NVMe PCIe 4.0 SSD dengan slot tambahan M.2' },
  { label: 'Keamanan', value: 'Sensor sidik jari, modul TPM 2.0, webcam IR Windows Hello' },
  { label: 'Konektivitas', value: 'Wi-Fi 6E, Bluetooth 5.3, Thunderbolt 4, HDMI 2.1, USB-A 3.2' }
];

const afterSalesBenefits = [
  {
    icon: ShieldCheck,
    title: 'Garansi 3 Tahun',
    description:
      'Dukungan resmi PT Bejo Berkat Makmur mencakup servis on-site dan perpanjangan garansi opsional.'
  },
  {
    icon: Gauge,
    title: 'Monitoring Kinerja',
    description:
      'Dashboard Korisu Insight memantau kesehatan perangkat, pembaruan firmware, dan optimasi energi.'
  },
  {
    icon: Repeat,
    title: 'Program Trade-In',
    description:
      'Upgrade ke generasi terbaru Korisu dengan valuasi perangkat lama yang transparan dan cepat.'
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

const KorisuProductDetail: React.FC = () => {
  return (
    <section id="korisu-product" className="section py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-x-0 -top-32 h-72 bg-company-softblue/20 blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="grid gap-12 lg:grid-cols-2 items-center"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-company-accent/15 px-4 py-1 text-sm font-semibold text-company-accent">
              Korisu Edge 14 Pro
            </span>
            <h2 className="text-4xl font-bold text-company-primary leading-tight">
              Laptop flagship Korisu yang siap mengakselerasi tim modern Anda
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Korisu menghadirkan perangkat komputasi profesional dengan fokus pada kecepatan, keandalan, dan pengalaman pengguna yang intuitif. PT Bejo Berkat Makmur sebagai mitra resmi menghadirkan konfigurasi terbaik serta dukungan implementasi di seluruh Indonesia.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <Sparkles className="mt-1 h-5 w-5 text-company-accent" />
                <span>Konstruksi premium yang tahan lama menggunakan material aerospace-grade dan lapisan anti gores.</span>
              </li>
              <li className="flex items-start gap-3">
                <Cpu className="mt-1 h-5 w-5 text-company-accent" />
                <span>Optimisasi firmware Korisu Velocity memastikan performa stabil untuk aplikasi analitik, kreatif, dan pengembangan.</span>
              </li>
              <li className="flex items-start gap-3">
                <BatteryCharging className="mt-1 h-5 w-5 text-company-accent" />
                <span>Sistem pendingin VaporFlow menjaga temperatur ideal, cocok untuk sesi kerja maraton di ruang rapat maupun perjalanan dinas.</span>
              </li>
            </ul>
            <a
              href="#kontak"
              className="inline-flex items-center gap-2 rounded-lg bg-company-primary px-6 py-3 text-white font-semibold shadow-md hover:bg-company-primary/90 transition"
            >
              Konsultasi ketersediaan dengan tim kami
            </a>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute inset-0 -translate-y-6 scale-110 bg-company-accent/10 blur-2xl rounded-full"></div>
            <div className="relative rounded-3xl bg-white/80 p-10 shadow-xl backdrop-blur">
              <img
                src="/products/korisu.png"
                alt="Logo Korisu"
                className="mx-auto mb-8 h-32 w-auto"
                loading="lazy"
              />
              <div className="space-y-2 text-center">
                <p className="text-2xl font-semibold text-company-primary">Korisu Edge 14 Pro</p>
                <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Crafted for Visionaries</p>
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
          <motion.h3
            className="text-3xl font-bold text-company-primary mb-8 text-center"
            variants={itemVariants}
          >
            Sorotan Fitur Korisu Edge 14 Pro
          </motion.h3>
          <div className="grid gap-6 md:grid-cols-3">
            {highlightFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="h-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow"
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
          <motion.div
            className="lg:col-span-1 rounded-3xl bg-company-primary px-8 py-10 text-white shadow-xl"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold mb-4">Dukungan Implementasi</h3>
            <p className="text-white/70 leading-relaxed">
              PT Bejo Berkat Makmur memastikan setiap unit Korisu siap produksi dengan layanan pra-konfigurasi, deployment skala besar, dan workshop adopsi untuk tim Anda.
            </p>
            <div className="mt-6 space-y-3 text-sm text-white/70">
              <p>- Imaging OS dan aplikasi korporat.</p>
              <p>- Integrasi ke solusi endpoint management (Intune, Workspace ONE).</p>
              <p>- Pelatihan pengguna akhir dan dokumentasi administrasi.</p>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-2 grid gap-6 md:grid-cols-2"
            variants={itemVariants}
          >
            {afterSalesBenefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-company-accent/15 text-company-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-semibold text-company-primary mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default KorisuProductDetail;
