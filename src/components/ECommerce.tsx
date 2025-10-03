import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Star, Package, MapPin } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  images: string[];
  slug: string;
  defaultPrice: number;
  defaultPriceWithTax: number;
  minPrice: number;
  maxPrice: number;
  sellerName: string;
  stockAvailability: string;
  stockAccumulation: string;
  rating: {
    count: number;
    average: number;
  } | null;
  location: {
    name: string;
    regionCode: string;
  } | null;
  tkdn: {
    value: number;
    status: string;
    tkdnBmp: number;
  } | null;
  labels: string[] | null;
  isPreOrder: boolean;
}

interface PaginatedResponse {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  items: Product[];
}

// Import the image mapping
let imageMapping: Record<string, string> = {};

// Load image mapping on component initialization
const loadImageMapping = async () => {
  try {
    const response = await fetch('/ecommerce/image-mapping.json');
    if (response.ok) {
      imageMapping = await response.json();
      console.log('Image mapping loaded:', Object.keys(imageMapping).length, 'images');
    } else {
      console.warn('Image mapping not found, using fallback images');
    }
  } catch (error) {
    console.warn('Failed to load image mapping:', error);
  }
};

const ECommerce: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [perPage, setPerPage] = useState(10);

  // Load paginated products data from static JSON
  const loadPageData = async (page: number = 1) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/ecommerce/products-paginated.json');
      if (!response.ok) {
        throw new Error('Failed to load products data');
      }

      const paginatedData: Record<string, PaginatedResponse> = await response.json();
      const pageData = paginatedData[page.toString()];

      if (pageData) {
        setProducts(pageData.items);
        setCurrentPage(pageData.page);
        setTotalPages(pageData.totalPages);
        setTotal(pageData.total);
        setPerPage(pageData.perPage);
      } else {
        throw new Error('Page not found');
      }
    } catch (error) {
      console.error('Error loading products:', error);
      setError('Gagal memuat data produk. Silakan coba lagi nanti.');
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadImageMapping();
    loadPageData(1);
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleProductClick = (slug: string) => {
    const url = `https://katalog.inaproc.id/persada-artha-selaras/${slug}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const generatePlaceholder = (productName: string, productId: string) => {
    const cleanName = encodeURIComponent(productName.replace(/[^a-zA-Z0-9\s]/g, '').trim());
    const colors = ['3B82F6', '10B981', 'F59E0B', 'EF4444', '8B5CF6', '06B6D4'];
    const bgColor = colors[parseInt(productId.slice(-1), 16) % colors.length];
    
    return `https://via.placeholder.com/400x300/${bgColor}/FFFFFF?text=${cleanName}`;
  };

  const getImageUrl = (imageUrl: string, productName?: string, productId?: string) => {
    // First check if we have a local image mapping
    if (imageMapping[imageUrl]) {
      const localPath = `/ecommerce/${imageMapping[imageUrl]}`;
      console.log(`Using local image for ${imageUrl}: ${localPath}`);
      return localPath;
    }
    
    // Fallback to original URL
    console.log(`No local mapping found for ${imageUrl}, using original`);
    return imageUrl;
  };

  const getImageSrcSet = (imageUrl: string) => {
    const baseUrl = getImageUrl(imageUrl);
    return `${baseUrl} 1x, ${baseUrl} 2x`;
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      setCurrentPage(page);
      loadPageData(page);
      
      // Scroll to top of section
      document.getElementById('ecommerce')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderPagination = () => {
    const visiblePages = 5;
    const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    const endPage = Math.min(totalPages, startPage + visiblePages - 1);
    const adjustedStartPage = Math.max(1, endPage - visiblePages + 1);

    const pages = [];
    
    // Previous button
    pages.push(
      <button
        key="prev"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-4 h-4 mr-1" />
        Previous
      </button>
    );

    // Page numbers
    for (let i = adjustedStartPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
            i === currentPage
              ? 'text-white bg-company-primary border border-company-primary'
              : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
          }`}
        >
          {i}
        </button>
      );
    }

    // Next button
    pages.push(
      <button
        key="next"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
        <ChevronRight className="w-4 h-4 ml-1" />
      </button>
    );

    return pages;
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="ecommerce" className="section py-20 bg-gradient-to-b from-company-light to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-company-softblue opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-company-accent opacity-5 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-company-primary">E-Commerce</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-company-primary to-company-softblue mx-auto mb-6 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Jelajahi katalog produk teknologi terlengkap kami melalui platform INAPROC. Temukan solusi IT terbaik untuk kebutuhan bisnis Anda.
          </p>
          {total > 0 && (
            <p className="text-sm text-gray-500 mt-4">
              Menampilkan {((currentPage - 1) * perPage) + 1}-{Math.min(currentPage * perPage, total)} dari {total} produk
            </p>
          )}
        </motion.div>

        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-company-primary"></div>
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-lg mx-auto">
              <p className="text-red-600 mb-4">{error}</p>
              <p className="text-gray-600 mb-6 text-sm">
                Atau kunjungi langsung katalog kami di INAPROC:
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => loadPageData(currentPage)}
                  className="bg-company-primary text-white px-4 py-2 rounded-lg hover:bg-company-primary/90 transition-colors duration-200"
                >
                  Coba Lagi
                </button>
                <a
                  href="https://katalog.inaproc.id/persada-artha-selaras"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Buka Katalog INAPROC
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        )}

        {!loading && !error && products.length > 0 && (
          <>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  onClick={() => handleProductClick(product.slug)}
                >
                  <div className="relative">
                    {product.images && product.images.length > 0 && product.images[0] ? (
                      <img
                        key={product.id}
                        src={getImageUrl(product.images[0], product.name, product.id)}
                        alt={product.name || 'Product Image'}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          const currentSrc = target.src;
                          
                          // If local image failed, try original URL
                          if (currentSrc.includes('/ecommerce/') && product.images[0]) {
                            console.log('Local image failed, trying original URL:', product.images[0]);
                            target.src = product.images[0];
                          } 
                          // If original URL also failed, use placeholder
                          else if (!currentSrc.includes('placeholder.com')) {
                            console.log('Original image failed, using placeholder');
                            target.src = generatePlaceholder(product.name, product.id);
                          }
                        }}
                      />
                    ) : (
                      <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                        <Package className="w-12 h-12 text-gray-400" />
                        <span className="text-xs text-gray-500 ml-2">No Image</span>
                      </div>
                    )}
                    
                    {product.isPreOrder && (
                      <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                        Pre-Order
                      </div>
                    )}
                    
                    {product.labels && product.labels.length > 0 && (
                      <div className="absolute top-2 right-2 bg-company-primary text-white text-xs px-2 py-1 rounded-full">
                        {product.labels[0]}
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-company-primary transition-colors duration-200">
                      {product.name || 'Produk Tidak Diketahui'}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-2">
                      {product.rating && product.rating.count > 0 && (
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-company-accent fill-current" />
                          <span className="text-sm text-gray-600">
                            {product.rating.average.toFixed(1)} ({product.rating.count})
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-1 mb-3 text-sm text-gray-500">
                      <MapPin className="w-3 h-3" />
                      <span>{product.location?.name || 'Jakarta'}</span>
                    </div>

                    <div className="mb-3">
                      <p className="text-lg font-bold text-company-primary">
                        {formatPrice(product.defaultPriceWithTax)}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        Stok: {product.stockAccumulation || 'Tidak Diketahui'}
                      </span>
                      {product.tkdn && product.tkdn.tkdnBmp > 0 && (
                        <span className="text-xs bg-company-accent/10 text-company-accent px-2 py-1 rounded-full">
                          TKDN+BMP {product.tkdn.tkdnBmp.toFixed(2)}%
                        </span>
                      )}
                    </div>

                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">{product.sellerName || 'PT. Persada Artha Selaras'}</span>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-company-primary transition-colors duration-200" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-12">
                {renderPagination()}
              </div>
            )}
          </>
        )}

        {!loading && !error && products.length === 0 && (
          <div className="text-center py-20">
            <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">Tidak ada produk yang ditemukan</p>
            <p className="text-gray-500 text-sm mt-2">
              Jalankan <code className="bg-gray-100 px-2 py-1 rounded">npm run update-commerce</code> untuk memperbarui data produk
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ECommerce; 
