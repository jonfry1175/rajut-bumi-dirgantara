import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="beranda"
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{ minHeight: windowHeight ? `${windowHeight}px` : "100vh" }}
    >
      {/* Background Media (Image/Video) */}
      <div className="absolute inset-0 w-full h-full">
        {/* 
          To use video background:
          1. Uncomment the video tag below
          2. Replace '/path-to-your-video.mp4' with your actual video file path
          3. Comment out or remove the img tag
        */}

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>

        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-company-primary/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Menajut Kualitas, <br className="hidden md:block" />
            Menenun Kepercayaan.
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Produsen Tekstil Berkualitas untuk Kebutuhan Industri Anda. PT RAJUT
            BUMI DIRGANTARA menghadirkan solusi kain rajut dan tenun terbaik
            dengan standar kualitas tinggi.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              to="/services"
              className={cn(
                "w-full sm:w-auto inline-flex items-center justify-center bg-company-accent text-company-primary",
                "font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300",
                "hover:bg-company-accent/90 hover:-translate-y-1 hover:shadow-lg shadow-md"
              )}
            >
              Lihat Produk Kami
            </Link>
            <a
              href="tel:+62215551234"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "w-full sm:w-auto inline-flex items-center justify-center border-2 border-white/80",
                "text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300",
                "hover:bg-white hover:text-company-primary hover:-translate-y-1 hover:shadow-lg backdrop-blur-sm"
              )}
            >
              Hubungi Kami
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, delay: 1, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2 backdrop-blur-sm">
          <div className="w-1.5 h-3 bg-white/80 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
