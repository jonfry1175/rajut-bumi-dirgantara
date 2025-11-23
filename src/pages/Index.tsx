import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import ClientsPartners from "@/components/ClientsPartners";
import BuyingGuide from "@/components/BuyingGuide";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>PT RAJUT BUMI DIRGANTARA | Produsen Tekstil Terpercaya</title>
        <link rel="canonical" href="https://rajutbumidirgantara.com/" />
        <meta
          name="description"
          content="PT RAJUT BUMI DIRGANTARA adalah produsen tekstil terkemuka di Indonesia, melayani produksi kain rajut, tenun, dan finishing berkualitas tinggi."
        />
        <meta
          name="keywords"
          content="tekstil, pabrik kain, knitting, weaving, garment, konveksi, kain rajut, pt rajut bumi dirgantara"
        />
        <meta
          property="og:title"
          content="PT RAJUT BUMI DIRGANTARA | Produsen Tekstil Terpercaya"
        />
        <meta
          property="og:description"
          content="Mitra produksi tekstil terbaik untuk kebutuhan industri fashion dan garmen Anda."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rajutbumidirgantara.com/" />
        <meta property="og:image" content="/new-logo.png" />
        <meta property="og:site_name" content="PT RAJUT BUMI DIRGANTARA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="PT RAJUT BUMI DIRGANTARA | Produsen Tekstil Terpercaya"
        />
        <meta
          name="twitter:description"
          content="Solusi manufaktur tekstil terintegrasi dengan standar kualitas ekspor."
        />
        <meta name="twitter:image" content="/new-logo.png" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <WhyChooseUs />
          <ClientsPartners />
          <BuyingGuide />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
