import React from 'react';
import { Briefcase, Package, ShieldCheck, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Services: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const services = [
    {
      title: "IT Advisory (Konsultasi TI Strategis)",
      icon: <Briefcase size={30} />,
      description: "Pendampingan strategis berbasis insight industri untuk mempercepat transformasi digital dan pengambilan keputusan yang lebih cerdas.",
      items: [
        "Analisis kebutuhan dan kesiapan transformasi digital",
        "Perancangan roadmap inovasi dan efisiensi operasional",
        "Rekomendasi teknologi yang relevan dan berdampak"
      ],
      color: "bg-company-accent/20"
    },
    {
      title: "Pengadaan Hardware & Software",
      icon: <Package size={30} />,
      description: "Solusi pengadaan end-to-end untuk infrastruktur TI, mulai dari perangkat keras hingga lisensi perangkat lunak resmi.",
      items: [
        "Manajemen vendor dan proses pengadaan terintegrasi",
        "Ketersediaan produk original dengan garansi resmi",
        "Implementasi, instalasi, dan dukungan teknis berkelanjutan"
      ],
      color: "bg-company-softblue/15"
    },
    {
      title: "Sistem Keamanan Terintegrasi",
      icon: <ShieldCheck size={30} />,
      description: "Pengadaan perangkat keamanan modern untuk perlindungan operasional yang menyeluruh dan andal.",
      items: [
        "CCTV, akses kontrol, dan perangkat deteksi intrusi",
        "Integrasi teknologi keamanan sesuai kebutuhan operasional",
        "Pemeliharaan dan peningkatan sistem secara berkelanjutan"
      ],
      color: "bg-company-primary/15"
    }
  ];

  return (
    <section
      id="layanan"
      className="section relative overflow-hidden bg-white py-20 md:py-28"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-x-0 top-[-40%] h-80 rounded-full bg-company-secondary/15 blur-3xl" />
      <div className="absolute bottom-[-30%] left-[-10%] h-72 w-72 rounded-full bg-company-primary/10 blur-3xl" />
      <div className="absolute right-[-16%] top-1/2 h-60 w-60 rounded-full bg-company-accent/10 blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <span className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-company-primary/20 bg-white/70 text-company-primary text-xs font-semibold uppercase tracking-[0.28em] mb-4">
            Layanan Kami
          </span>
          <h2 className="section-title mb-5 text-balance">Layanan Perusahaan</h2>
          <div className="mx-auto mb-6 h-px w-24 rounded-full bg-company-primary"></div>
          <p className="section-description mx-auto max-w-2xl text-gray-700 text-balance">
            Solusi dan layanan teknologi terdepan untuk mendukung transformasi digital dan meningkatkan efisiensi operasional bisnis Anda.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-2xl border border-white/50 bg-white/80 p-[1.1px] shadow-[0_18px_40px_-30px_rgba(15,23,42,0.45)]"
              variants={fadeIn}
              whileHover={{ y: -6, boxShadow: "0 28px 60px -35px rgba(15, 23, 42, 0.55)" }}
              transition={{ duration: 0.3 }}
            >
              <div className={cn(
                "service-card relative h-full overflow-hidden rounded-[calc(theme(borderRadius.2xl)-1px)] bg-white px-8 py-8"
              )}>
                <div className="absolute inset-x-6 bottom-0 h-32 rounded-3xl bg-company-primary/5 blur-2xl" />

                <div className="relative flex items-start">
                  <div className={cn(
                    "mr-5 flex-shrink-0 rounded-2xl p-3",
                    service.color
                  )}>
                    <div className="text-company-primary">
                      {service.icon}
                    </div>
                  </div>

                  <div className="flex-grow">
                    <h3 className="mb-4 text-xl font-semibold text-company-primary">
                      {service.title}
                    </h3>
                    <p className="mb-4 text-base leading-relaxed text-gray-700 text-balance">
                      {service.description}
                    </p>

                    {service.items && (
                      <ul className="mb-4 space-y-3">
                        {service.items.map((item, i) => (
                          <li key={i} className="flex items-center text-gray-700">
                            <div className="mr-2 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-company-primary/10">
                              <ChevronRight className="h-3.5 w-3.5 text-company-primary" />
                            </div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {service.longDescription && (
                      <p className="text-base leading-relaxed text-gray-700">
                        {service.longDescription}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link
            to="/services"
            className={cn(
              "inline-flex items-center justify-center gap-2 rounded-full bg-company-primary/95 px-8 py-3 text-sm font-semibold text-white",
              "transition-all duration-300 hover:bg-company-primary",
              "hover:-translate-y-0.5 hover:shadow-lg"
            )}
          >
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
