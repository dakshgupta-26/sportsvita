import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Search, 
  Calendar, 
  User, 
  Tag, 
  ArrowRight,
  Clock,
  Eye,
  Heart,
  Share2,
  BookOpen
} from 'lucide-react';

// Import images
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'web-development', label: 'Web Development' },
    { id: 'react', label: 'React' },
    { id: 'javascript', label: 'JavaScript' },
    { id: 'tips', label: 'Tips & Tricks' },
    { id: 'tutorial', label: 'Tutorials' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Building Modern Web Applications with React 18',
      excerpt: 'Learn how to leverage the latest features in React 18 to build faster, more efficient web applications with improved performance and user experience.',
      content: 'React 18 introduces several groundbreaking features that revolutionize how we build web applications. From concurrent rendering to automatic batching, these improvements make our apps faster and more responsive...',
      image: portfolio1,
      category: 'react',
      author: 'Daksh Gupta',
      date: '2024-01-15',
      readTime: '8 min read',
      views: 1247,
      likes: 89,
      tags: ['React', 'JavaScript', 'Web Development']
    },
    {
      id: 2,
      title: 'The Complete Guide to TypeScript for Beginners',
      excerpt: 'Master TypeScript from the ground up with this comprehensive guide covering types, interfaces, generics, and advanced patterns.',
      content: 'TypeScript has become an essential tool in modern web development. It provides static typing to JavaScript, making our code more reliable and easier to maintain...',
      image: portfolio2,
      category: 'javascript',
      author: 'Daksh Gupta',
      date: '2024-01-10',
      readTime: '12 min read',
      views: 2156,
      likes: 156,
      tags: ['TypeScript', 'JavaScript', 'Programming']
    },
    {
      id: 3,
      title: '10 Performance Optimization Techniques for Web Apps',
      excerpt: 'Discover proven strategies to improve your web application performance and deliver a better user experience.',
      content: 'Performance is crucial for user experience and SEO. In this comprehensive guide, we\'ll explore various techniques to optimize your web applications...',
      image: portfolio3,
      category: 'tips',
      author: 'Daksh Gupta',
      date: '2024-01-05',
      readTime: '10 min read',
      views: 1893,
      likes: 234,
      tags: ['Performance', 'Optimization', 'Web Development']
    },
    {
      id: 4,
      title: 'Creating Responsive Designs with Tailwind CSS',
      excerpt: 'Master the art of responsive web design using Tailwind CSS utility-first approach and modern design principles.',
      content: 'Tailwind CSS has revolutionized how we approach styling in web development. Its utility-first methodology allows for rapid development and consistent design...',
      image: portfolio1,
      category: 'web-development',
      author: 'Daksh Gupta',
      date: '2023-12-28',
      readTime: '15 min read',
      views: 3421,
      likes: 298,
      tags: ['CSS', 'Tailwind', 'Design']
    },
    {
      id: 5,
      title: 'State Management in React: Redux vs Context API',
      excerpt: 'Compare different state management solutions in React and learn when to use each approach for optimal application architecture.',
      content: 'State management is a critical aspect of React applications. Choosing the right solution can significantly impact your app\'s performance and maintainability...',
      image: portfolio2,
      category: 'react',
      author: 'Daksh Gupta',
      date: '2023-12-20',
      readTime: '14 min read',
      views: 2765,
      likes: 187,
      tags: ['React', 'Redux', 'State Management']
    },
    {
      id: 6,
      title: 'Building REST APIs with Node.js and Express',
      excerpt: 'Step-by-step tutorial on creating robust REST APIs using Node.js, Express, and best practices for production deployment.',
      content: 'REST APIs are the backbone of modern web applications. In this tutorial, we\'ll build a complete API from scratch using Node.js and Express...',
      image: portfolio3,
      category: 'tutorial',
      author: 'Daksh Gupta',
      date: '2023-12-15',
      readTime: '20 min read',
      views: 3987,
      likes: 345,
      tags: ['Node.js', 'Express', 'API']
    }
  ];

  const featuredPost = blogPosts[0];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, tutorials, and thoughts on web development, programming, and technology. 
              Sharing knowledge to help others grow in their development journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative w-full md:w-96"
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </motion.div>

            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap gap-2"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Article</h2>
            <p className="text-lg text-gray-600">Latest insights and tutorials</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-sm text-gray-500">{formatDate(featuredPost.date)}</span>
                  <span className="text-sm text-gray-500">•</span>
                  <span className="text-sm text-gray-500">{featuredPost.readTime}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Eye size={16} />
                      <span>{featuredPost.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart size={16} />
                      <span>{featuredPost.likes}</span>
                    </div>
                  </div>
                  
                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium">
                    <span>Read More</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-lg text-gray-600">Explore my latest thoughts and tutorials</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        +{post.tags.length - 2} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Eye size={12} />
                        <span>{post.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart size={12} />
                        <span>{post.likes}</span>
                      </div>
                    </div>
                    
                    <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm font-medium">
                      <span>Read</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get the latest articles and tutorials delivered to your inbox
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog; 