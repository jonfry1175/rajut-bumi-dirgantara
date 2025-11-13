import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import ClientsPartners from '@/components/ClientsPartners';
// import KorisuProductDetail from '@/components/KorisuProductDetail';
import SmartboardProductDetail from '@/components/SmartboardProductDetail';
import BuyingGuide from '@/components/BuyingGuide';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Inibejo.com | Solusi Teknologi PT Bejo Berkat Makmur</title>
        <link rel="canonical" href="https://inibejo.com/" />
        <meta
          name="description"
          content="Inibejo.com membantu perusahaan di Indonesia mempercepat transformasi digital melalui konsultasi TI, pengadaan perangkat, dan sistem keamanan terintegrasi."
        />
        <meta name="keywords" content="inibejo, pt bejo berkat makmur, solusi teknologi, konsultasi TI, transformasi digital" />
        <meta property="og:title" content="Inibejo.com | Solusi Teknologi PT Bejo Berkat Makmur" />
        <meta
          property="og:description"
          content="Jadikan PT Bejo Berkat Makmur mitra teknologi Anda untuk solusi inovatif, efisien, dan berkelanjutan."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://inibejo.com/" />
        <meta property="og:image" content="https://inibejo.com/logo-bejo.png" />
        <meta property="og:site_name" content="PT Bejo Berkat Makmur" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Inibejo.com | Solusi Teknologi PT Bejo Berkat Makmur" />
        <meta
          name="twitter:description"
          content="Inibejo.com menghadirkan layanan TI end-to-end untuk mendukung pertumbuhan bisnis Anda."
        />
        <meta name="twitter:image" content="https://inibejo.com/logo-bejo.png" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <WhyChooseUs />
          <ClientsPartners />
          <SmartboardProductDetail />
          {/* <KorisuProductDetail /> */}
          <BuyingGuide />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
