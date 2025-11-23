import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Check } from "lucide-react";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Mock product data - in a real app this would come from an API or context
  const product = {
    name: "Kain Cotton Combed 30s",
    description:
      "Kain katun berkualitas premium dengan tekstur lembut, menyerap keringat, dan nyaman digunakan sehari-hari. Sangat cocok untuk produksi kaos distro dan pakaian kasual.",
    features: [
      "100% Cotton Premium",
      "Gramasi 150-160 gsm",
      "Lebar 42 inch (Setting)",
      "Handfeel lembut dan halus",
      "Daya serap keringat tinggi",
      "Warna tidak mudah pudar",
    ],
    applications: [
      "Kaos Distro",
      "Pakaian Anak",
      "Pakaian Tidur",
      "Casual Wear",
    ],
    image: "/service-knitting.png", // Placeholder
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-6">
          <Link
            to="/services"
            className="inline-flex items-center text-company-primary hover:text-company-accent mb-8 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Kembali ke Produk
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[500px] object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=1000&auto=format&fit=crop";
                }}
              />
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h1 className="text-4xl font-bold text-company-primary mb-4">
                  {product.name}
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-company-primary">
                  Spesifikasi Unggulan
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <div className="w-6 h-6 rounded-full bg-company-accent/20 flex items-center justify-center mr-3 flex-shrink-0">
                        <Check size={14} className="text-company-primary" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-company-primary">
                  Rekomendasi Penggunaan
                </h3>
                <div className="flex flex-wrap gap-3">
                  {product.applications.map((app, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 font-medium text-sm"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 rounded-xl bg-company-primary text-white font-bold text-lg shadow-lg hover:bg-company-secondary transition-all hover:-translate-y-1"
                >
                  Pesan Sekarang
                </a>
                <p className="mt-4 text-sm text-gray-500 text-center md:text-left">
                  *Hubungi kami untuk ketersediaan stok dan harga grosir.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
