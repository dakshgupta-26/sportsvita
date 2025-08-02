import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Search, Filter, Grid, List, Star, ShoppingCart, Heart, Eye, IndianRupee, TrendingUp, Zap, Shield, Truck, ExternalLink, Target, Users, Activity, Trophy, Sparkles, ArrowRight, Play, Pause, ChevronRight, ChevronLeft, Flame, Crown, Award, Gift } from 'lucide-react';
import '@/styles/shop.css';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  brand: string;
  inStock: boolean;
  discount?: number;
  isNew?: boolean;
  isTrending?: boolean;
}

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [cart, setCart] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  // Categories with icons and colors
  const categories = [
    { id: 'all', name: 'All Products', color: 'from-blue-500 to-purple-500', icon: Sparkles },
    { id: 'football', name: 'Football Gear', color: 'from-orange-500 to-red-500', icon: Target },
    { id: 'table-tennis', name: 'Table Tennis', color: 'from-green-500 to-emerald-500', icon: Trophy },
    { id: 'badminton', name: 'Badminton', color: 'from-blue-500 to-cyan-500', icon: Activity },
    { id: 'fitness', name: 'Sports Clothing', color: 'from-purple-500 to-pink-500', icon: Flame },
    { id: 'accessories', name: 'Sports Accessories', color: 'from-indigo-500 to-blue-500', icon: Gift }
  ];

  // Product data using shop1.jpeg to shop8.jpeg images with accurate names based on actual content
  const getProducts = (): Product[] => [
    {
      id: '1',
      name: "Premium Football Collection Pack",
      category: "football",
      price: 2499,
      originalPrice: 3499,
      rating: 4.8,
      reviews: 1247,
      image: "/src/assets/shop1.jpeg",
      description: "Complete football collection with multiple premium quality footballs for training and matches",
      brand: "Sports Elite",
      inStock: true,
      discount: 29,
      isTrending: true
    },
    {
      id: '2',
      name: "Professional Match Football",
      category: "football",
      price: 1899,
      originalPrice: 2499,
      rating: 4.9,
      reviews: 892,
      image: "/src/assets/shop2.jpeg",
      description: "Official match football with premium leather construction for professional play",
      brand: "Match Pro",
      inStock: true,
      discount: 24,
      isNew: true
    },
    {
      id: '3',
      name: "Nike Mercurial Vapor 15",
      category: "football",
      price: 24999,
      originalPrice: 29999,
      rating: 4.7,
      reviews: 567,
      image: "/src/assets/shop3.jpeg",
      description: "Lightweight speed boots with Flyknit technology for explosive acceleration",
      brand: "Nike",
      inStock: true,
      discount: 17
    },
    {
      id: '4',
      name: "Professional Table Tennis Set",
      category: "table-tennis",
      price: 3999,
      originalPrice: 5499,
      rating: 4.6,
      reviews: 423,
      image: "/src/assets/shop4.jpeg",
      description: "Complete table tennis kit with professional paddles, balls, and accessories",
      brand: "Table Tennis Pro",
      inStock: true,
      discount: 27
    },
    {
      id: '5',
      name: "Premium Badminton Racket Set",
      category: "badminton",
      price: 5999,
      originalPrice: 7999,
      rating: 4.5,
      reviews: 234,
      image: "/src/assets/shop5.jpeg",
      description: "High-performance badminton rackets with carbon fiber construction and premium strings",
      brand: "Badminton Elite",
      inStock: true,
      discount: 25
    },
    {
      id: '6',
      name: "Professional Football Kit",
      category: "football",
      price: 8999,
      originalPrice: 11999,
      rating: 4.4,
      reviews: 189,
      image: "/src/assets/shop6.jpeg",
      description: "Complete football kit with jersey, shorts, socks, and professional gear",
      brand: "Football Pro",
      inStock: true,
      discount: 25
    },
    {
      id: '7',
      name: "Sports Clothing Collection",
      category: "fitness",
      price: 3999,
      originalPrice: 5999,
      rating: 4.3,
      reviews: 456,
      image: "/src/assets/shop7.jpeg",
      description: "Premium sports clothing collection with moisture-wicking technology for all sports",
      brand: "Sports Wear",
      inStock: true,
      discount: 33
    },
    {
      id: '8',
      name: "Table Tennis Net & Accessories",
      category: "table-tennis",
      price: 1999,
      originalPrice: 2999,
      rating: 4.8,
      reviews: 678,
      image: "/src/assets/shop8.jpeg",
      description: "Professional table tennis net with mounting system and official measurements",
      brand: "Table Tennis Elite",
      inStock: true,
      discount: 33,
      isTrending: true
    }
  ];

  // Mouse tracking for custom cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    // Simulate loading with enhanced animation
    const timer = setTimeout(() => {
      setProducts(getProducts());
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let filtered = products;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered = [...filtered].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        filtered = [...filtered].sort((a, b) => (b.isTrending ? 1 : 0) - (a.isTrending ? 1 : 0));
    }

    setFilteredProducts(filtered);
  }, [products, searchTerm, selectedCategory, sortBy]);

  const addToCart = (product: Product) => {
    setCart(prev => [...prev, product]);
  };

  const toggleWishlist = (productId: string) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
        {/* Floating particles */}
        <div className="floating-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        
        <div className="text-center relative z-10">
          {/* Enhanced Animated Loading Spinner */}
          <div className="relative w-32 h-32 mx-auto mb-8">
            {/* Outer Ring */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute inset-0 border-4 border-blue-500/30 rounded-full"
            />
            
            {/* Middle Ring */}
            <motion.div
              animate={{ 
                rotate: -360,
                scale: [1, 0.8, 1]
              }}
              transition={{ 
                rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute inset-4 border-4 border-purple-500/50 rounded-full"
            />
            
            {/* Inner Ring */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.3, 1]
              }}
              transition={{ 
                rotate: { duration: 1.5, repeat: Infinity, ease: "linear" },
                scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute inset-8 border-4 border-pink-500/70 rounded-full"
            />
            
            {/* Center Dot */}
            <motion.div
              animate={{ 
                scale: [1, 1.8, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute inset-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            />
          </div>

          {/* Floating Icons */}
          <div className="relative">
            <motion.div
              animate={{ 
                y: [-10, 10, -10],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute -top-8 -left-8 text-blue-500"
            >
              <ShoppingCart size={24} />
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [10, -10, 10],
                rotate: [0, -5, 5, 0]
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute -top-6 -right-6 text-pink-500"
            >
              <Heart size={20} />
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [-5, 15, -5],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 3.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute -bottom-4 -left-4 text-yellow-500"
            >
              <Star size={18} />
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [15, -5, 15],
                rotate: [0, -10, 10, 0]
              }}
              transition={{ 
                duration: 2.8, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute -bottom-6 -right-4 text-purple-500"
            >
              <Zap size={22} />
            </motion.div>
          </div>
          
          <motion.h3 
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-[length:200%_100%] bg-clip-text text-transparent neon-text"
          >
            Loading Premium Store
          </motion.h3>
          
          {/* Enhanced loading dots */}
          <motion.div className="flex justify-center mt-6 space-x-2">
            {[1, 2, 3].map((dot) => (
              <motion.div
                key={dot}
                className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: dot * 0.2
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden morphing-bg">
      {/* Enhanced Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <div className="w-full h-full bg-white rounded-full opacity-80" />
      </motion.div>

      {/* Enhanced Floating 3D Elements */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div
          animate={{ 
            rotate: 360,
            y: [0, -20, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-20 right-20 text-blue-400/20"
        >
          <Trophy size={40} />
        </motion.div>
        
        <motion.div
          animate={{ 
            rotate: -360,
            y: [0, 30, 0],
            x: [0, -15, 0]
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 7, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-40 left-10 text-purple-400/20"
        >
          <Target size={32} />
        </motion.div>

        <motion.div
          animate={{ 
            rotate: 360,
            y: [0, -25, 0],
            x: [0, 20, 0]
          }}
          transition={{ 
            rotate: { duration: 18, repeat: Infinity, ease: "linear" },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-40 right-10 text-pink-400/20"
        >
          <Users size={36} />
        </motion.div>

        <motion.div
          animate={{ 
            rotate: -360,
            y: [0, 15, 0],
            x: [0, -10, 0]
          }}
          transition={{ 
            rotate: { duration: 22, repeat: Infinity, ease: "linear" },
            y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 5.5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-20 left-20 text-green-400/20"
        >
          <Crown size={28} />
        </motion.div>
      </motion.div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Enhanced Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-[length:200%_100%] text-white px-8 py-4 rounded-full mb-8"
          >
            <Sparkles className="w-6 h-6" />
            <span className="text-xl font-bold">PREMIUM SPORTS STORE</span>
            <Sparkles className="w-6 h-6" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 neon-text"
          >
            GenZ Sports
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Ultimate sports equipment with cutting-edge design and premium quality
          </motion.p>
          
          {/* Ultra Modern Floating Elements */}
          <motion.div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={{ 
                rotate: 360,
                y: [0, -30, 0],
                x: [0, 20, 0]
              }}
              transition={{ 
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                x: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute top-10 right-20 text-blue-400/30"
            >
              <Crown size={60} />
            </motion.div>
            
            <motion.div
              animate={{ 
                rotate: -360,
                y: [0, 40, 0],
                x: [0, -25, 0]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                x: { duration: 7, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute bottom-10 left-20 text-purple-400/30"
            >
              <Award size={50} />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 mb-12 shadow-2xl border border-white/20 relative overflow-hidden"
        >
          {/* Enhanced Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl" />
          
          <div className="flex flex-col lg:flex-row gap-6 items-center relative z-10">
            {/* Enhanced Search Bar */}
            <div className="flex-1 relative group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" size={20} />
              <input
                type="text"
                placeholder="Search premium sports equipment..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
              />
            </div>

            {/* Enhanced Category Filter */}
            <div className="flex gap-3 flex-wrap">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <motion.button
                    key={category.id}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-2xl text-sm font-medium transition-all duration-300 backdrop-blur-md flex items-center gap-2 ${
                      selectedCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                        : 'bg-white/20 text-gray-300 hover:bg-white/30 hover:text-white border border-white/20'
                    }`}
                  >
                    <IconComponent size={16} />
                    {category.name}
                  </motion.button>
                );
              })}
            </div>

            {/* Enhanced Sort and View */}
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-6 py-3 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white"
              >
                <option value="featured" className="bg-slate-800">Featured</option>
                <option value="price-low" className="bg-slate-800">Price: Low to High</option>
                <option value="price-high" className="bg-slate-800">Price: High to Low</option>
                <option value="rating" className="bg-slate-800">Highest Rated</option>
                <option value="newest" className="bg-slate-800">Newest</option>
              </select>

              <div className="flex bg-white/20 backdrop-blur-md rounded-2xl p-1 border border-white/30">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    viewMode === 'grid'
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <Grid size={20} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    viewMode === 'list'
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <List size={20} />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className={`grid ${
            viewMode === 'list' 
              ? 'grid-cols-1 gap-6' 
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'
          }`}
        >
          <AnimatePresence>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.9 }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -20,
                  rotateX: 8,
                  rotateY: 8,
                  scale: 1.03
                }}
                onHoverStart={() => setHoveredProduct(product.id)}
                onHoverEnd={() => setHoveredProduct(null)}
                className={`product-card group relative glow-border ${
                  viewMode === 'list' ? 'flex gap-6' : ''
                }`}
              >
                {/* Floating particles for each card */}
                <div className="floating-particles">
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                </div>
                
                <div className="glass-effect rounded-3xl overflow-hidden shadow-2xl border border-white/20 relative h-full">
                  {/* Enhanced Product Badges */}
                  <div className="absolute top-4 left-4 z-20 flex gap-2">
                    {product.isNew && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full neon-glow neon-green border border-green-500/30"
                      >
                        NEW
                      </motion.span>
                    )}
                    {product.isTrending && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-bold rounded-full flex items-center gap-1 neon-glow neon-orange border border-orange-500/30"
                      >
                        <TrendingUp size={12} />
                        TRENDING
                      </motion.span>
                    )}
                    {product.discount && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-red-500/20 text-red-400 text-xs font-bold rounded-full neon-glow neon-red border border-red-500/30"
                      >
                        -{product.discount}%
                      </motion.span>
                    )}
                  </div>

                  {/* Enhanced Product Image */}
                  <div className={`product-image-container ${viewMode === 'list' ? 'w-48 h-48' : 'h-80'}`}>
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="product-image w-full h-full object-cover"
                      whileHover={{ 
                        scale: 1.2,
                        filter: "brightness(1.3) contrast(1.2) saturate(1.2)"
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=400&fit=crop';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    
                    {/* Enhanced Hover Overlay */}
                    {hoveredProduct === product.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-center justify-center"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="bg-white/20 backdrop-blur-md rounded-full p-4"
                        >
                          <Eye className="text-white" size={24} />
                        </motion.div>
                      </motion.div>
                    )}
                  </div>

                  {/* Enhanced Product Info */}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <motion.h3 
                          className="font-bold text-xl text-white mb-3 group-hover:text-blue-400 transition-colors duration-300"
                          whileHover={{ scale: 1.02 }}
                        >
                          {product.name}
                        </motion.h3>
                        <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                          {product.description}
                        </p>
                      </div>
                    </div>

                    {/* Enhanced Brand and Rating */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-sm font-semibold text-blue-400">
                        {product.brand}
                      </span>
                      <div className="flex items-center gap-2">
                        <Star className="text-yellow-400" size={18} fill="currentColor" />
                        <span className="text-sm font-medium text-gray-300">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>
                    </div>

                    {/* Enhanced Price */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center">
                        <IndianRupee size={24} className="text-green-400" />
                        <span className="text-3xl font-bold text-green-400">
                          {formatPrice(product.price)}
                        </span>
                      </div>
                      {product.originalPrice && product.originalPrice > product.price && (
                        <span className="text-lg text-gray-400 line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>

                    {/* Enhanced Action Buttons */}
                    <div className="flex items-center gap-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => addToCart(product)}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-3 btn-3d"
                      >
                        <ShoppingCart size={20} />
                        Add to Cart
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => toggleWishlist(product.id)}
                        className={`p-4 rounded-2xl border-2 transition-all duration-300 btn-3d ${
                          wishlist.includes(product.id)
                            ? 'border-red-500 text-red-400 bg-red-500/20'
                            : 'border-white/30 text-gray-300 hover:border-red-500 hover:text-red-400 hover:bg-red-500/20'
                        }`}
                      >
                        <Heart size={20} fill={wishlist.includes(product.id) ? 'currentColor' : 'none'} />
                      </motion.button>
                    </div>

                    {/* Enhanced Stock Status */}
                    <div className="mt-6 flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-400' : 'bg-red-400'}`} />
                      <span className={`text-sm font-medium ${product.inStock ? 'text-green-400' : 'text-red-400'}`}>
                        {product.inStock ? 'In Stock' : 'Out of Stock'}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Enhanced Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 mb-4">
              <Search size={64} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-300 mb-2">
              No products found
            </h3>
            <p className="text-gray-400">
              Try adjusting your search or filter criteria
            </p>
          </motion.div>
        )}

        {/* Enhanced Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Stay Updated!</h3>
            <p className="text-blue-100 mb-6">
              Get exclusive discounts and early access to new products. Join our premium sports community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Shop; 