import React from 'react';
import { Briefcase, Package, ShieldCheck, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const ServicesPage: React.FC = () => {
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
      color: "bg-gradient-to-br from-company-primary/10 to-company-primary/5"
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
      color: "bg-gradient-to-br from-company-softblue/15 to-company-softblue/5"
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
      color: "bg-gradient-to-br from-company-primary/10 to-company-softblue/5"
    }
  ];

  return (
    <section id="layanan" className="section bg-white relative overflow-hidden py-20 md:py-28">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-48 bg-company-secondary -skew-y-3 transform origin-top-left -translate-y-24"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-64 bg-company-secondary/50 rounded-tl-full"></div>
      <div className="absolute top-1/4 right-0 w-24 h-24 bg-company-softblue/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/4 left-0 w-32 h-32 bg-company-primary/5 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <span className="inline-block px-4 py-1.5 bg-company-softblue/10 text-company-primary rounded-full text-sm font-medium mb-4">Layanan Kami</span>
          <h2 className="section-title mb-5">Layanan Perusahaan</h2>
          <div className="w-24 h-1 bg-company-primary mx-auto mb-6 rounded-full"></div>
          <p className="section-description max-w-2xl mx-auto text-gray-700">
            Solusi dan layanan teknologi terdepan untuk mendukung transformasi digital dan meningkatkan efisiensi operasional bisnis Anda.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="rounded-2xl p-1 bg-gradient-to-br from-company-primary/20 via-transparent to-company-softblue/20 overflow-hidden"
              variants={fadeIn}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              transition={{ duration: 0.3 }}
            >
              <div className={cn(
                "h-full service-card bg-white rounded-2xl p-8 relative overflow-hidden",
              )}>
                <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full opacity-10 bg-gradient-to-br from-company-primary to-company-softblue"></div>

                <div className="flex items-start relative">
                  <div className={cn(
                    "flex-shrink-0 mr-5 p-3 rounded-xl",
                    service.color
                  )}>
                    <div className="text-company-primary">
                      {service.icon}
                    </div>
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-4 text-company-primary">
                      {service.title}
                    </h3>
                    <p className="text-base mb-4 text-gray-700 leading-relaxed">
                      {service.description}
                    </p>

                    {service.items && (
                      <ul className="space-y-3 mb-4">
                        {service.items.map((item, i) => (
                          <li key={i} className="flex items-center text-gray-700">
                            <div className="mr-2 w-5 h-5 bg-company-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                              <ChevronRight className="text-company-primary w-3 h-3" />
                            </div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {service.longDescription && (
                      <p className="text-base text-gray-700 leading-relaxed">
                        {service.longDescription}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPage; 
