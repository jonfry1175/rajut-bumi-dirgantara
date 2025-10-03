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
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Transformasi Digital <br />
              Untuk Indonesia
            </motion.h1>

            <motion.p
              className="text-base md:text-lg mb-8 opacity-90 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              PT. Persada Artha Selaras merupakan perusahaan Teknologi Informasi dan Komunikasi (TIK)
              terkemuka di Indonesia yang berkomitmen menghadirkan produk dan solusi unggulan
              guna mempercepat transformasi digital nasional.
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
                  "inline-flex items-center justify-center bg-gradient-to-r from-company-softblue to-company-accent text-white",
                  "font-medium px-6 py-3 rounded-full transition-all duration-300",
                  "hover:shadow-lg hover:-translate-y-1 shadow-md",
                  "relative overflow-hidden group"
                )}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-company-accent to-company-softblue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10">Layanan Kami</span>
              </Link>
              <a
                href="https://wa.me/6281385477596"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center justify-center border-2 border-white",
                  "text-white font-medium px-6 py-3 rounded-full transition-all duration-300",
                  "hover:bg-white hover:text-company-primary hover:shadow-lg hover:-translate-y-1"
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
                <p className="font-bold text-lg">Unggul, Digital, Profesional</p>
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
            <div className="relative w-full h-full min-h-[400px]">
              {/* Main circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-4 border-company-softblue/30 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full border-2 border-white/20 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-company-softblue/20 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-company-softblue/40 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-company-softblue pulse-slow"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute top-10 right-20 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                </svg>
              </motion.div>

              <motion.div
                className="absolute bottom-20 right-24 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                </svg>
              </motion.div>

              <motion.div
                className="absolute top-32 left-12 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
              </motion.div>

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  d="M250 250 L180 100"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
                <motion.path
                  d="M250 250 L350 120"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.7 }}
                />
                <motion.path
                  d="M250 250 L350 380"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.9 }}
                />
              </svg>

              {/* Glowing dots */}
              <motion.div
                className="absolute top-[100px] left-[180px] w-3 h-3 bg-company-softblue rounded-full shadow-glow"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute top-[120px] left-[350px] w-4 h-4 bg-company-softblue rounded-full shadow-glow"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              />
              <motion.div
                className="absolute top-[380px] left-[350px] w-3 h-3 bg-company-softblue rounded-full shadow-glow"
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
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

// Add this to your global CSS
const styles = `
  @keyframes pulse-slow {
    0% {
      box-shadow: 0 0 0 0 rgba(51, 195, 240, 0.7);
    }
    70% {
      box-shadow: 0 0 0 20px rgba(51, 195, 240, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(51, 195, 240, 0);
    }
  }
  
  .pulse-slow {
    animation: pulse-slow 3s infinite;
  }
  
  .shadow-glow {
    box-shadow: 0 0 15px 5px rgba(51, 195, 240, 0.3);
  }
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}

export default Hero;
