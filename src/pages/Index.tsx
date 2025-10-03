import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import ProductSection from '@/components/ProductSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ClientsPartners from '@/components/ClientsPartners';
import KorisuProductDetail from '@/components/KorisuProductDetail';
import BuyingGuide from '@/components/BuyingGuide';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <ProductSection />
        <WhyChooseUs />
        <ClientsPartners />
        <KorisuProductDetail />
        <BuyingGuide />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
