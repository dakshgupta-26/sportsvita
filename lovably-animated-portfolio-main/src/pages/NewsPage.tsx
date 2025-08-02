import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Search, 
  Filter, 
  TrendingUp, 
  Clock, 
  Share2, 
  Bookmark,
  ExternalLink,
  Sparkles,
  Zap,
  Star,
  Eye,
  Heart,
  MessageCircle,
  ArrowRight,
  RefreshCw,
  Globe,
  Newspaper,
  Radio
} from 'lucide-react';
import '../styles/news-page.css';

interface NewsArticle {
  id: string;
  title: string;
  description: string;
  url: string;
  image: string;
  source: string;
  publishedAt: string;
  category: string;
  apiSource: 'apitube' | 'newsdata' | 'gnews';
}

const NewsPage = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [favorites, setFavorites] = useState<string[]>([]);

  // API Keys
  const APITUBE_KEY = 'api_live_AwKB0eJl3fjVcjzrAuvxmW517xV0KME8W74lppVRHN5';
  const NEWSDATA_KEY = 'pub_bded044336da43ee8f87e328457c0587';
  const GNEWS_KEY = '6cd5ebb0e35dfb68d0e60f165ae36d0d';

  const categories = [
    { id: 'all', name: 'All Sports', icon: Globe },
    { id: 'cricket', name: 'Cricket', icon: TrendingUp },
    { id: 'football', name: 'Football', icon: Zap },
    { id: 'basketball', name: 'Basketball', icon: Star },
    { id: 'tennis', name: 'Tennis', icon: Eye },
    { id: 'olympics', name: 'Olympics', icon: Sparkles }
  ];

  const fetchNewsFromApitube = async (category = 'sports') => {
    try {
      const query = category === 'all' ? 'sports' : category;
      const response = await fetch(`https://api.apitube.io/v1/news?api_key=${APITUBE_KEY}&q=${query}&limit=15`);
      const data = await response.json();
      return data.articles?.map((article: any) => ({
        id: `apitube_${article.url}`,
        title: article.title,
        description: article.description,
        url: article.url,
        image: article.urlToImage || article.image || article.media?.[0]?.url || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDQwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAiIHkxPSIwIiB4Mj0iNDAwIiB5Mj0iMjAwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNmZmZmZmY7c3RvcC1vcGFjaXR5OjEiLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmZmZmZmO3N0b3Atb3BhY2l0eTowIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+',
        source: article.source?.name || 'Sports News',
        publishedAt: article.publishedAt,
        category: category,
        apiSource: 'apitube' as const
      })) || [];
    } catch (error) {
      console.error('Apitube API error:', error);
      return [];
    }
  };

  const fetchNewsFromNewsData = async (category = 'sports') => {
    try {
      const query = category === 'all' ? 'sports' : category;
      const response = await fetch(`https://newsdata.io/api/1/news?apikey=${NEWSDATA_KEY}&q=${query}&language=en&category=sports`);
      const data = await response.json();
      return data.results?.map((article: any) => ({
        id: `newsdata_${article.link}`,
        title: article.title,
        description: article.description,
        url: article.link,
        image: article.image_url || article.image || article.media?.[0]?.url || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDQwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAiIHkxPSIwIiB4Mj0iNDAwIiB5Mj0iMjAwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNmZmZmZmY7c3RvcC1vcGFjaXR5OjEiLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmZmZmZmO3N0b3Atb3BhY2l0eTowIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+',
        source: article.source_id,
        publishedAt: article.pubDate,
        category: category,
        apiSource: 'newsdata' as const
      })) || [];
    } catch (error) {
      console.error('NewsData API error:', error);
      return [];
    }
  };

  const fetchNewsFromGNews = async (category = 'sports') => {
    try {
      const query = category === 'all' ? 'sports' : category;
      const response = await fetch(`https://gnews.io/api/v4/search?q=${query}&token=${GNEWS_KEY}&lang=en&country=us&max=15`);
      const data = await response.json();
      return data.articles?.map((article: any) => ({
        id: `gnews_${article.url}`,
        title: article.title,
        description: article.description,
        url: article.url,
        image: article.image || article.urlToImage || article.media?.[0]?.url || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDQwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAiIHkxPSIwIiB4Mj0iNDAwIiB5Mj0iMjAwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNmZmZmZmY7c3RvcC1vcGFjaXR5OjEiLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmZmZmZmO3N0b3Atb3BhY2l0eTowIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+',
        source: article.source?.name || 'Sports News',
        publishedAt: article.publishedAt,
        category: category,
        apiSource: 'gnews' as const
      })) || [];
    } catch (error) {
      console.error('GNews API error:', error);
      return [];
    }
  };

  const fetchAllNews = async (category = 'all') => {
    setLoading(true);
    try {
      const [apitubeNews, newsDataNews, gnewsNews] = await Promise.all([
        fetchNewsFromApitube(category),
        fetchNewsFromNewsData(category),
        fetchNewsFromGNews(category)
      ]);

      // Combine all news and remove duplicates based on URL
      const allNews = [...apitubeNews, ...newsDataNews, ...gnewsNews];
      const uniqueNews = allNews.filter((article, index, self) => 
        index === self.findIndex(a => a.url === article.url)
      );

      // Validate and fix image URLs
      const validatedNews = uniqueNews.map(article => {
        let imageUrl = article.image;
        
                 // Check if image URL is valid
         if (!imageUrl || imageUrl === 'null' || imageUrl === 'undefined' || imageUrl.includes('placeholder')) {
           // Use a better placeholder for each API
           if (article.apiSource === 'newsdata') {
             imageUrl = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDQwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAiIHkxPSIwIiB4Mj0iNDAwIiB5Mj0iMjAwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNmZmZmZmY7c3RvcC1vcGFjaXR5OjEiLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmZmZmZmO3N0b3Atb3BhY2l0eTowIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+';
           } else if (article.apiSource === 'gnews') {
             imageUrl = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDQwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAiIHkxPSIwIiB4Mj0iNDAwIiB5Mj0iMjAwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNmZmZmZmY7c3RvcC1vcGFjaXR5OjEiLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmZmZmZmO3N0b3Atb3BhY2l0eTowIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+';
           } else {
             imageUrl = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDQwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAiIHkxPSIwIiB4Mj0iNDAwIiB5Mj0iMjAwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNmZmZmZmY7c3RvcC1vcGFjaXR5OjEiLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmZmZmZmO3N0b3Atb3BhY2l0eTowIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+';
           }
         }

         // Ensure image URL is valid
         if (!imageUrl.startsWith('http') && !imageUrl.startsWith('data:')) {
           imageUrl = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDQwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAiIHkxPSIwIiB4Mj0iNDAwIiB5Mj0iMjAwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNmZmZmZmY7c3RvcC1vcGFjaXR5OjEiLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmZmZmZmO3N0b3Atb3BhY2l0eTowIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+';
         }

        return {
          ...article,
          image: imageUrl
        };
      });
      
      setArticles(validatedNews);
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllNews('all');
  }, []);

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const toggleFavorite = (articleId: string) => {
    setFavorites(prev => 
      prev.includes(articleId) 
        ? prev.filter(id => id !== articleId)
        : [...prev, articleId]
    );
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return date.toLocaleDateString();
  };

  const getApiSourceColor = (source: string) => {
    switch (source) {
      case 'apitube': return 'from-blue-500 to-cyan-500';
      case 'newsdata': return 'from-purple-500 to-pink-500';
      case 'gnews': return 'from-green-500 to-emerald-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getApiSourceIcon = (source: string) => {
    switch (source) {
      case 'apitube': return Globe;
      case 'newsdata': return Newspaper;
      case 'gnews': return Radio;
      default: return Globe;
    }
  };

  return (
    <div className="news-page-container">
      <Navigation />
      
      {/* Hero Section */}
      <section className="news-hero-section">
        <div className="news-hero-background">
          <div className="news-hero-particles">
            {Array.from({ length: 20 }, (_, i) => (
              <motion.div
                key={i}
                className="news-particle"
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="news-hero-content">
          <motion.h1
            className="news-hero-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Latest Sports News
            <span className="news-hero-subtitle">Stay Updated with Real-time Sports Coverage</span>
          </motion.h1>

          <motion.div
            className="news-search-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="news-search-box">
              <Search className="news-search-icon" />
              <input
                type="text"
                placeholder="Search sports news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="news-search-input"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="news-search-button"
                onClick={() => fetchAllNews(selectedCategory)}
              >
                <RefreshCw className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="news-categories-section">
        <div className="news-categories-container">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`news-category-tab ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => {
                setSelectedCategory(category.id);
                fetchAllNews(category.id);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: category.id === 'all' ? 0 : 0.1 }}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.name}</span>
            </motion.button>
          ))}
        </div>
      </section>

      {/* News Grid */}
      <section className="news-grid-section">
        <div className="news-grid-container">
          {loading ? (
            <div className="news-loading">
              <motion.div
                className="news-loading-spinner"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <p className="news-loading-text">Fetching latest sports news...</p>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                className="news-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {filteredArticles.map((article, index) => (
                  <motion.article
                    key={article.id}
                    className="news-card"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ 
                      y: -10,
                      scale: 1.02,
                      boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
                    }}
                  >
                    {/* Card Header */}
                    <div className="news-card-header">
                      <div className="news-card-image-container">
                                                 <img
                           src={article.image}
                           alt={article.title}
                           className="news-card-image"
                           onError={(e) => {
                             console.log('Image failed to load:', article.image);
                             e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDQwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAiIHkxPSIwIiB4Mj0iNDAwIiB5Mj0iMjAwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNmZmZmZmY7c3RvcC1vcGFjaXR5OjEiLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmZmZmZmO3N0b3Atb3BhY2l0eTowIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+';
                             e.currentTarget.style.display = 'block';
                           }}
                           onLoad={(e) => {
                             // If image loads successfully, ensure it's visible
                             e.currentTarget.style.display = 'block';
                           }}
                           style={{ display: 'none' }} // Start hidden, show on load
                         />
                        <div className="news-card-overlay">
                          <motion.button
                            className="news-favorite-btn"
                            onClick={() => toggleFavorite(article.id)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Heart className={`w-5 h-5 ${favorites.includes(article.id) ? 'filled' : ''}`} />
                          </motion.button>
                        </div>
                      </div>
                      
                                             {/* API Source Badge */}
                       <div className={`news-api-badge bg-gradient-to-r ${getApiSourceColor(article.apiSource)}`}>
                         {(() => {
                           const IconComponent = getApiSourceIcon(article.apiSource);
                           return <IconComponent className="w-3 h-3" />;
                         })()}
                         <span>{article.apiSource}</span>
                       </div>
                    </div>

                    {/* Card Content */}
                    <div className="news-card-content">
                      <h3 className="news-card-title">{article.title}</h3>
                      <p className="news-card-description">{article.description}</p>
                      
                      <div className="news-card-meta">
                        <div className="news-card-source">
                          <span className="news-source-name">{article.source}</span>
                          <span className="news-publish-time">
                            <Clock className="w-3 h-3" />
                            {formatDate(article.publishedAt)}
                          </span>
                        </div>
                        
                        <div className="news-card-actions">
                          <motion.button
                            className="news-action-btn"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => window.open(article.url, '_blank')}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </motion.button>
                          
                          <motion.button
                            className="news-action-btn"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Share2 className="w-4 h-4" />
                          </motion.button>
                          
                          <motion.button
                            className="news-action-btn"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Bookmark className="w-4 h-4" />
                          </motion.button>
                        </div>
                      </div>
                    </div>

                    {/* Card Glow Effect */}
                    <div className="news-card-glow" />
                  </motion.article>
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsPage; 