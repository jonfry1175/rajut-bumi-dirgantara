import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Import product images
import serverStorage1 from '@/assets/portfolio/server-storage/server-storage1.webp';
import serverStorage2 from '@/assets/portfolio/server-storage/server-storage2.webp';
import serverStorage3 from '@/assets/portfolio/server-storage/server-storage3.webp';
import serverStorage4 from '@/assets/portfolio/server-storage/server-storage4.webp';
import serverStorage5 from '@/assets/portfolio/server-storage/server-storage5.webp';
import serverStorage6 from '@/assets/portfolio/server-storage/server-storage6.webp';

import scanner from '@/assets/portfolio/computer-and-accessories/scanner.webp';
import printer1 from '@/assets/portfolio/computer-and-accessories/printer-1.webp';
import printer2 from '@/assets/portfolio/computer-and-accessories/printer-2.webp';
import printer3 from '@/assets/portfolio/computer-and-accessories/printer-3.webp';
import printer4 from '@/assets/portfolio/computer-and-accessories/printer-4.webp';
import printer5 from '@/assets/portfolio/computer-and-accessories/printer-5.webp';

import briefGate from '@/assets/portfolio/multimedia/brief-gate.webp';
import conferenceSystem1 from '@/assets/portfolio/multimedia/confrence-system-1.webp';
import conferenceSystem2 from '@/assets/portfolio/multimedia/confrence-system-2.webp';
import conferenceSystem3 from '@/assets/portfolio/multimedia/confrence-system-3.webp';
import monitorRapat from '@/assets/portfolio/multimedia/monitor-rapat.webp';
import videotronOutdoor1 from '@/assets/portfolio/multimedia/videotron-outdoor-1.webp';
import videotronOutdoor2 from '@/assets/portfolio/multimedia/videotron-outdoor-2.webp';
import videotronOutdoor3 from '@/assets/portfolio/multimedia/videotron-outdoor-3.webp';
import videotronOutdoor4 from '@/assets/portfolio/multimedia/videotron-outdoor-4.webp';
import videotronOutdoor5 from '@/assets/portfolio/multimedia/videotron-outdoor-5.webp';
import videotronOutdoor6 from '@/assets/portfolio/multimedia/videotron-outdoor-6.webp';

const ProductSection: React.FC = () => {
  // Product data for marquee animations
  const productCategories = [
    {
      title: "Server Storage",
      images: [serverStorage1, serverStorage2, serverStorage3, serverStorage4, serverStorage5, serverStorage6]
    },
    {
      title: "Computer and Accessories", 
      images: [scanner, printer1, printer2, printer3, printer4, printer5]
    },
    {
      title: "Multimedia",
      images: [briefGate, conferenceSystem1, conferenceSystem2, conferenceSystem3, monitorRapat, videotronOutdoor1, videotronOutdoor2, videotronOutdoor3, videotronOutdoor4, videotronOutdoor5, videotronOutdoor6]
    }
  ];

  // Mobile carousel state
  const [currentSlides, setCurrentSlides] = useState<{[key: number]: number}>({});

  // Auto-slide effect for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlides(prev => {
        const newSlides = { ...prev };
        productCategories.forEach((category, categoryIndex) => {
          const currentSlide = newSlides[categoryIndex] || 0;
          newSlides[categoryIndex] = (currentSlide + 1) % category.images.length;
        });
        return newSlides;
      });
    }, 1000); // Change every 1 second

    return () => clearInterval(interval);
  }, [productCategories]);

  const handleSlideChange = (categoryIndex: number, slideIndex: number) => {
    setCurrentSlides(prev => ({
      ...prev,
      [categoryIndex]: slideIndex
    }));
  };

  return (
    <section className="bg-gradient-to-b from-white to-company-light py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-company-primary">Produk Kami</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-company-primary to-company-softblue mx-auto mb-6 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Jelajahi berbagai produk teknologi berkualitas tinggi yang kami tawarkan untuk memenuhi kebutuhan bisnis Anda.
          </p>
        </motion.div>

        <div className="space-y-16">
          {productCategories.map((category, index) => (
            <motion.div
              key={index}
              className="overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-company-primary mb-8 text-center">
                {category.title}
              </h3>
              
              {/* Desktop: Marquee Container */}
              <div className="hidden md:block relative overflow-hidden bg-white rounded-2xl shadow-lg border border-gray-100 py-8">
                <div className={`animate-marquee gap-8 ${
                  category.title === 'Server Storage' ? 'animate-marquee-server' :
                  category.title === 'Computer and Accessories' ? 'animate-marquee-computer' :
                  'animate-marquee-multimedia'
                }`}>
                  {/* First set of images */}
                  {category.images.map((image, imgIndex) => (
                    <div
                      key={`first-${imgIndex}`}
                      className="flex-shrink-0 w-64 h-48 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                    >
                      <img
                        src={image}
                        alt={`${category.title} product ${imgIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {category.images.map((image, imgIndex) => (
                    <div
                      key={`second-${imgIndex}`}
                      className="flex-shrink-0 w-64 h-48 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                    >
                      <img
                        src={image}
                        alt={`${category.title} product ${imgIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile: Carousel Container */}
              <div className="md:hidden relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div 
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ 
                    transform: `translateX(-${(currentSlides[index] || 0) * 100}%)` 
                  }}
                >
                  {category.images.map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="w-full flex-shrink-0 h-64 bg-white overflow-hidden"
                    >
                      <img
                        src={image}
                        alt={`${category.title} product ${imgIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                
                {/* Snap scroll indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {category.images.map((_, imgIndex) => (
                    <button
                      key={imgIndex}
                      onClick={() => handleSlideChange(index, imgIndex)}
                      className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                        (currentSlides[index] || 0) === imgIndex 
                          ? 'bg-company-primary' 
                          : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection; 