import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import pasLogo from '../assets/pas-logo.png';

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
    { name: 'E-Commerce', href: '/katalog', path: '/katalog' },
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
                    src={pasLogo}
                    alt="PAS Logo"
                    className="h-full object-contain px-1"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <div className="h-full aspect-square flex items-center justify-center">
                    <span className="text-company-primary font-bold text-xl">PAS</span>
                  </div>
                )}
              </div>
              <span className="text-xl md:text-2xl font-bold text-white hidden sm:inline-block">
                Persada Artha Selaras
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <Link
                  to={item.href}
                  className={cn(
                    "text-white/90 hover:text-white relative group px-3 py-2 transition-all duration-300 text-base font-medium tracking-wide",
                    location.pathname === item.path && "text-white"
                  )}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.span
                      className="absolute bottom-0 left-0 h-0.5 bg-company-softblue w-full"
                      layoutId="activeNavIndicator"
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <a
                href="https://wa.me/6281385477596"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden group bg-gradient-to-r from-company-softblue to-company-accent text-white font-medium rounded-full px-7 py-2.5 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-base shadow-md"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-company-accent to-company-softblue opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
                <span className="relative z-10">Hubungi Kami</span>
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
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className={cn(
                  "text-white/90 px-6 py-4 border-b border-company-accent/10 transition-colors duration-200 text-lg",
                  location.pathname === item.path ? "text-white bg-company-accent/5" : "hover:bg-company-accent/5 hover:text-white"
                )}
                onClick={toggleMenu}
              >
                <div className="flex items-center">
                  {location.pathname === item.path && (
                    <div className="w-1 h-6 bg-company-softblue mr-3"></div>
                  )}
                  {item.name}
                </div>
              </Link>
            ))}
            <div className="px-6 py-5">
              <a
                href="https://wa.me/6281385477596"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden group w-full bg-gradient-to-r from-company-softblue to-company-accent text-white font-medium rounded-full px-5 py-3 transition-all duration-300 hover:shadow-md text-lg inline-flex items-center justify-center shadow-sm"
                onClick={toggleMenu}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-company-accent to-company-softblue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10">Hubungi Kami</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
