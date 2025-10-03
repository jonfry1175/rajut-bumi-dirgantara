import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    // Set the initial window height on first load
    setWindowHeight(window.innerHeight);

    // Update height on resize
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const insightCards = [
    {
      id: 'advisory',
      title: 'IT Advisory',
      subtitle: 'Konsultasi TI Strategis',
      position: 'top-8 -left-12',
      animate: { y: [0, -12, 0], x: [0, 10, 0] },
      duration: 8,
      delay: 0
    },
    {
      id: 'procurement',
      title: 'Pengadaan Teknologi',
      subtitle: 'Hardware & Software',
      position: 'bottom-16 -left-4',
      animate: { y: [0, 10, 0], x: [0, -6, 0] },
      duration: 7,
      delay: 0.6
    },
    {
      id: 'security',
      title: 'Integrated Security',
      subtitle: 'Sistem Keamanan Terintegrasi',
      position: 'top-1/2 -translate-y-1/2 -right-10',
      animate: { y: [0, -10, 0], x: [0, 12, 0] },
      duration: 9,
      delay: 0.3
    }
  ];

  const orbitSizes = [300, 380, 460];

  return (
    <section
      id="beranda"
      className="bg-company-primary text-white relative overflow-hidden flex flex-col justify-center"
      style={{
        minHeight: windowHeight ? `${windowHeight}px` : '100vh',
        paddingTop: '80px', // Account for navbar height
        paddingBottom: '20px'
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-20 overflow-hidden">
        <div className="absolute -right-48 -bottom-48 w-96 h-96 rounded-full bg-company-softblue/20 blur-3xl"></div>
        <div className="absolute top-1/4 -right-24 w-64 h-64 rounded-full bg-company-softblue/10 blur-2xl"></div>
        <div className="absolute bottom-1/3 -left-24 w-72 h-72 rounded-full bg-company-softblue/10 blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex-grow flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="max-w-5xl">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Inovasi Teknologi untuk Negeri
            </motion.h1>

            <motion.p
              className="text-base md:text-lg mb-8 opacity-90 max-w-3xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              PT Bejo Berkat Makmur adalah perusahaan teknologi yang berdiri pada Agustus 2021.
              Kami memadukan inovasi, efisiensi, dan pertumbuhan berkelanjutan untuk menghadirkan
              solusi TI yang relevan dan berdampak bagi setiap mitra.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                to="/services"
                className={cn(
                  "inline-flex items-center justify-center bg-company-accent text-company-primary",
                  "font-semibold px-6 py-3 rounded-lg transition-all duration-300",
                  "hover:bg-company-accent/90 hover:-translate-y-0.5 hover:shadow-md shadow-sm"
                )}
              >
                Layanan Kami
              </Link>
              <a
                href="tel:+622138879246"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center justify-center border border-white/90",
                  "text-white font-medium px-6 py-3 rounded-lg transition-all duration-300",
                  "hover:bg-white hover:text-company-primary hover:-translate-y-0.5 hover:shadow-md"
                )}
              >
                Hubungi Kami
              </a>
            </motion.div>

            <motion.div
              className="mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="inline-block border-t border-white/20 pt-4 px-4">
                <p className="font-bold text-lg">Inovasi • Efisiensi • Pertumbuhan Berkelanjutan</p>
              </div>
            </motion.div>
          </div>

          {/* Hero Right Section - Digital Transformation Visualization */}
          <motion.div
            className="hidden lg:block relative h-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full h-full min-h-[420px] flex items-center justify-center">
              <motion.div
                className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-company-softblue/20 via-transparent to-company-accent/30 blur-3xl"
                animate={{ opacity: [0.4, 0.8, 0.5], scale: [1, 1.05, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              />

              <motion.div
                className="relative z-20 w-60 h-60 rounded-[3rem] border border-white/10 bg-gradient-to-br from-company-accent/70 via-company-softblue/50 to-white/10 backdrop-blur-xl shadow-[0_20px_60px_rgba(51,195,240,0.25)]"
                animate={{ scale: [1, 1.04, 1], rotate: [0, 2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <motion.div
                  className="absolute inset-8 rounded-[2.5rem] border border-white/15"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                />

                <motion.div
                  className="absolute inset-1/3 rounded-[1.5rem] bg-white/20 backdrop-blur-2xl"
                  animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.9, 0.6] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                />

                <motion.div
                  className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/60"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0.4, 0.8] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />

                <motion.div
                  className="absolute left-1/2 top-6 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-white/70"
                  animate={{ opacity: [0.6, 1, 0.6], letterSpacing: ['0.3em', '0.35em', '0.3em'] }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                >
                  Inovasi • Efisiensi • Pertumbuhan
                </motion.div>

                <motion.div
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs font-semibold text-white/80"
                  animate={{ y: [0, -4, 0], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                >
                  Kemitraan Jangka Panjang
                </motion.div>
              </motion.div>

              {orbitSizes.map((size, index) => (
                <motion.div
                  key={size}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
                  style={{ width: `${size}px`, height: `${size}px` }}
                  animate={{ rotate: index % 2 === 0 ? 360 : -360 }}
                  transition={{ duration: 24 - index * 4, repeat: Infinity, ease: 'linear' }}
                >
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-company-accent shadow-[0_0_12px_rgba(51,195,240,0.6)]"></span>
                </motion.div>
              ))}

              <motion.div
                className="absolute inset-y-10 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"
                animate={{ opacity: [0.2, 0.6, 0.2] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              />

              <motion.div
                className="absolute inset-y-16 left-1/2 -translate-x-1/2 w-[280px] rounded-full bg-gradient-to-r from-white/5 via-white/10 to-white/5"
                animate={{ opacity: [0.1, 0.3, 0.1], scaleY: [1, 1.05, 1] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
              />

              {insightCards.map((card) => (
                <motion.div
                  key={card.id}
                  className={cn(
                    'absolute w-48 rounded-2xl border border-white/15 bg-white/10 p-4 text-left shadow-[0_20px_40px_rgba(8,23,53,0.35)] backdrop-blur-lg',
                    card.position
                  )}
                  animate={card.animate}
                  transition={{
                    duration: card.duration,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: card.delay
                  }}
                >
                  <div className="flex items-center text-white/80">
                    <span className="text-[11px] uppercase tracking-wide">{card.title}</span>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-white">{card.subtitle}</p>
                  <motion.div
                    className="mt-4 h-1 w-full rounded-full bg-white/10"
                    animate={{ backgroundPositionX: ['0%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    style={{
                      backgroundImage: 'linear-gradient(90deg, rgba(51,195,240,0.2), rgba(255,255,255,0.6), rgba(51,195,240,0.2))',
                      backgroundSize: '200% 100%'
                    }}
                  />
                </motion.div>
              ))}

              <motion.div
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-64 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-center text-xs uppercase tracking-[0.4em] text-white/60 backdrop-blur-lg"
                animate={{ opacity: [0.4, 0.8, 0.4], y: [0, -6, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              >
                Dampak Berkelanjutan
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, delay: 1, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
