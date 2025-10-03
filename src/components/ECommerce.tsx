import React from 'react';
import { motion } from 'framer-motion';
import { Package, Handshake, ShieldCheck } from 'lucide-react';

type IconType = (props: React.SVGProps<SVGSVGElement>) => JSX.Element;

interface HighlightCard {
  icon: IconType;
  title: string;
  description: string;
}

interface ServiceCard {
  title: string;
  description: string;
  points: string[];
}

const highlightCards: HighlightCard[] = [
  {
    icon: Package,
    title: 'Kurasi Produk Terkini',
    description:
      'Solusi perangkat keras dan lunak pilihan dari mitra global terpercaya yang siap mendukung transformasi digital Anda.'
  },
  {
    icon: Handshake,
    title: 'Pendekatan Konsultatif',
    description:
      'Tim kami membantu memetakan kebutuhan, menyiapkan alternatif, dan memastikan pengadaan selaras dengan standar internal Anda.'
  },
  {
    icon: ShieldCheck,
    title: 'Kepatuhan & Garansi',
    description:
      'Dokumentasi lengkap, dukungan garansi resmi, serta pendampingan audit untuk setiap transaksi yang diselesaikan.'
  }
];

const serviceCards: ServiceCard[] = [
  {
    title: 'Pengadaan Langsung',
    description:
      'Ideal untuk kebutuhan operasional cepat dengan volume menengah dan proses persetujuan yang ringkas.',
    points: [
      'Pilihan produk siap kirim',
      'SLA respons penawaran < 1 hari kerja',
      'Dukungan instalasi dasar di lokasi'
    ]
  },
  {
    title: 'Katalog Internal',
    description:
      'Koleksi produk tersertifikasi yang dapat disesuaikan dengan kebijakan pengadaan organisasi Anda.',
    points: [
      'Pembaruan produk berkala',
      'Kelengkapan dokumen teknis & legal',
      'Integrasi dengan proses persetujuan internal'
    ]
  },
  {
    title: 'Proyek Terintegrasi',
    description:
      'Pendekatan end-to-end untuk implementasi solusi skala besar beserta layanan purna jualnya.',
    points: [
      'Tim project manager dedikasi',
      'Rencana implementasi dan pelatihan',
      'Dukungan layanan purna jual berjenjang'
    ]
  }
];

const collaborationFlow = [
  {
    title: 'Diskusi Awal',
    description:
      'Kami mempelajari kebutuhan bisnis Anda dan menyarankan opsi solusi yang paling relevan.'
  },
  {
    title: 'Kurasi Solusi',
    description:
      'Tim teknis menyusun penawaran lengkap, termasuk detail teknis, SLA, dan estimasi pengiriman.'
  },
  {
    title: 'Implementasi & Dukungan',
    description:
      'Setelah kesepakatan tercapai, kami mengelola pengadaan, pengiriman, serta dukungan pasca implementasi.'
  }
];

const ECommerce: React.FC = () => {
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

  return (
    <section id="ecommerce" className="section py-20 bg-company-light relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-company-softblue opacity-5 rounded-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-company-accent opacity-5 rounded-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-company-primary">
            Solusi Pengadaan Terpadu
          </h2>
          <div className="w-24 h-1 bg-company-accent/70 mx-auto mb-6 rounded-sm"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Jelajahi katalog internal kami dan dapatkan dukungan menyeluruh, mulai dari konsultasi kebutuhan hingga implementasi solusi.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {highlightCards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300"
                variants={itemVariants}
              >
                <div className="w-12 h-12 rounded-lg bg-company-accent/20 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-company-primary" />
                </div>
                <h3 className="text-xl font-semibold text-company-primary">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {serviceCards.map((card) => (
            <motion.div
              key={card.title}
              className="bg-white border border-gray-100 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold text-company-primary mb-3">{card.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{card.description}</p>
              <ul className="space-y-3 text-gray-600">
                {card.points.map((point) => (
                  <li key={point} className="flex items-start">
                    <span className="mt-1 mr-3 rounded-full bg-company-accent/20 text-company-primary p-1">
                      <ShieldCheck className="w-4 h-4" />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {collaborationFlow.map((step, index) => (
            <motion.div
              key={step.title}
              className="bg-white border border-gray-100 rounded-xl shadow-sm p-6"
              variants={itemVariants}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-company-accent/80">Langkah {index + 1}</span>
                <span className="w-8 h-8 rounded-full bg-company-accent/10 text-company-primary flex items-center justify-center font-semibold">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-company-primary mb-2">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="bg-company-primary text-white rounded-2xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-2xl font-semibold mb-3">Siap memulai proyek Anda?</h3>
            <p className="text-white/80 max-w-xl">
              Hubungi kami untuk mendapatkan akses katalog terbaru dan rekomendasi solusi yang disesuaikan dengan kebutuhan bisnis Anda.
            </p>
          </div>
          <a
            href="#kontak"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-company-primary font-semibold shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            Konsultasi Dengan Kami
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ECommerce;
