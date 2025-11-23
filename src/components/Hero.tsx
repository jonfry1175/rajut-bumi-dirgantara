import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    // Set the initial window height on first load
    setWindowHeight(window.innerHeight);

    // Update height on resize
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const insightCards = [
    {
      id: "advisory",
      title: "IT Advisory",
      subtitle: "Konsultasi TI Strategis",
      position: "top-8 -left-12",
      animate: { y: [0, -12, 0], x: [0, 10, 0] },
      duration: 8,
      delay: 0,
    },
    {
      id: "procurement",
      title: "Pengadaan Teknologi",
      subtitle: "Hardware & Software",
      position: "bottom-16 -left-4",
      animate: { y: [0, 10, 0], x: [0, -6, 0] },
      duration: 7,
      delay: 0.6,
    },
    {
      id: "security",
      title: "Integrated Security",
      subtitle: "Sistem Keamanan Terintegrasi",
      position: "top-1/2 -translate-y-1/2 -right-10",
      animate: { y: [0, -10, 0], x: [0, 12, 0] },
      duration: 9,
      delay: 0.3,
    },
  ];

  const orbitSizes = [300, 380, 460];

  return (
    <section
      id="beranda"
      className="bg-company-primary text-white relative overflow-hidden flex flex-col justify-center"
      style={{
        minHeight: windowHeight ? `${windowHeight}px` : "100vh",
        paddingTop: "80px", // Account for navbar height
        paddingBottom: "20px",
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
              Menajut Kualitas, Menenun Kepercayaan.
            </motion.h1>

            <motion.p
              className="text-base md:text-lg mb-8 opacity-90 max-w-3xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Produsen Tekstil Berkualitas untuk Kebutuhan Industri Anda. PT
              RAJUT BUMI DIRGANTARA menghadirkan solusi kain rajut dan tenun
              terbaik dengan standar kualitas tinggi untuk mendukung industri
              fashion Indonesia.
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
                Lihat Produk Kami
              </Link>
              <a
                href="tel:+62215551234"
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
                <p className="font-bold text-lg">
                  Kualitas • Kepercayaan • Inovasi
                </p>
              </div>
            </motion.div>
          </div>

          {/* Hero Right Section - Textile Image */}
          <motion.div
            className="hidden lg:block relative h-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full h-full min-h-[420px] flex items-center justify-center">
              <img
                src="/hero-textile.png"
                alt="Textile Production"
                className="rounded-3xl shadow-2xl object-cover w-full h-[500px]"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=1000&auto=format&fit=crop";
                }}
              />
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
