import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '/', path: '/' },
    { name: 'About Us', href: '/about', path: '/about' },
    { name: 'Service', href: '/services', path: '/services' },
    { name: 'Produk Korisu', href: '/katalog', path: '/katalog' },
    { name: 'Contact Us', href: '/contact', path: '/contact' }
  ];

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-company-primary/95 py-2 shadow-lg backdrop-blur-sm"
          : "bg-company-primary py-3"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-200">
              <div className="bg-white rounded-lg p-1 shadow-md flex items-center justify-center h-10 md:h-12">
                {!logoError ? (
                  <img
                    src="/logo-bejo.png"
                    alt="PT Bejo Berkat Makmur"
                    className="h-full object-contain px-1"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <div className="h-full aspect-square flex items-center justify-center">
                    <span className="text-company-primary font-bold text-xl">BBM</span>
                  </div>
                )}
              </div>
              <span className="text-xl md:text-2xl font-bold text-white hidden sm:inline-block">
                PT Bejo Berkat Makmur
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path;

              return (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <Link
                    to={item.href}
                    className={cn(
                      "relative inline-flex items-center justify-center overflow-hidden rounded-md px-3 py-2 text-base font-medium tracking-wide transition-all duration-300",
                      isActive ? "text-white" : "text-white/80 hover:text-white"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavHighlight"
                        className="absolute inset-0 rounded-lg bg-white/10 backdrop-blur-sm"
                        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                      />
                    )}
                    <span className="relative z-[2]">{item.name}</span>
                    {isActive && (
                      <motion.span
                        className="absolute bottom-0 left-3 right-3 h-0.5 rounded bg-company-softblue z-[1]"
                        layoutId="activeNavIndicator"
                        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <a
                href="tel:+622138879246"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-company-accent text-company-primary font-semibold rounded-lg px-6 py-2.5 transition-all duration-300 hover:bg-company-accent/90 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
              >
                Hubungi Kami
              </a>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none text-white p-2 rounded-md hover:bg-company-accent/20 transition-colors duration-200"
              aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={cn(
            "md:hidden absolute top-[100%] left-0 right-0 bg-company-primary shadow-lg",
            isOpen ? "block" : "hidden"
          )}
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col py-2">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.href}
                  className={cn(
                    "relative overflow-hidden px-6 py-4 text-lg transition-colors duration-200 border-b border-company-accent/10 last:border-b-0",
                    isActive ? "text-white" : "text-white/80 hover:text-white"
                  )}
                  onClick={toggleMenu}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeMobileHighlight"
                      className="absolute inset-0 rounded-lg bg-company-accent/15"
                      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                    />
                  )}
                  <span className="relative z-[1] flex items-center gap-3">
                    <span
                      className={cn(
                        "h-6 w-1.5 rounded bg-company-softblue transition-opacity duration-300",
                        isActive ? "opacity-100" : "opacity-0"
                      )}
                    />
                    <span className="font-medium tracking-wide">{item.name}</span>
                  </span>
                </Link>
              );
            })}
            <div className="px-6 py-5">
              <a
                href="tel:+622138879246"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-company-accent text-company-primary font-semibold rounded-lg px-5 py-3 transition-all duration-300 hover:bg-company-accent/90 hover:-translate-y-0.5 shadow-sm hover:shadow-md inline-flex items-center justify-center"
                onClick={toggleMenu}
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
