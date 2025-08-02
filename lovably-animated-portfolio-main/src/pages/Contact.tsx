import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
  CheckCircle,
  Sparkles,
  Rocket,
  Crown,
  Zap,
  Globe,
  Shield,
  Trophy,
  Target,
  Activity,
  TrendingUp,
  Users,
  Star,
  Heart,
  Play,
  Pause,
  RefreshCw
} from 'lucide-react';

const Contact = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Support',
      value: 'support@sportiva.com',
      description: 'Get help with your account',
      gradient: 'from-pink-500 to-purple-500',
      sport: '⚽'
    },
    {
      icon: Phone,
      title: 'Customer Service',
      value: '+91 7780935163',
      description: '24/7 live support',
      gradient: 'from-blue-500 to-cyan-500',
      sport: '🏀'
    },
    {
      icon: MapPin,
      title: 'Headquarters',
      value: 'Pune, India',
      description: 'Global sports hub',
      gradient: 'from-green-500 to-emerald-500',
      sport: '🏏'
    },
    {
      icon: Clock,
      title: 'Live Support',
      value: '24/7 Available',
      description: 'Real-time assistance',
      gradient: 'from-orange-500 to-red-500',
      sport: '🎾'
    }
  ];

  const sportsFeatures = [
    {
      icon: Activity,
      title: 'Live Scores',
      description: 'Real-time match updates',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Statistics',
      description: 'Advanced analytics',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: 'Predictions',
      description: 'AI-powered insights',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Fan engagement',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const socialLinks = [
    {
      name: 'Sports News',
      url: 'https://twitter.com',
      icon: Twitter,
      gradient: 'from-blue-400 to-blue-600',
      sport: '⚽'
    },
    {
      name: 'Fan Community',
      url: 'https://www.linkedin.com/in/dakshgupta26/',
      icon: Linkedin,
      gradient: 'from-blue-600 to-blue-800',
      sport: '🏀'
    },
    {
      name: 'Developer Hub',
      url: 'https://github.com',
      icon: Github,
      gradient: 'from-gray-600 to-gray-800',
      sport: '🏏'
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      <Navigation />
      
      {/* Hero Section with 3D Parallax */}
      <section className="relative pt-20 pb-16 px-4 min-h-screen flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20"></div>
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-3xl opacity-20"
          />
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-20"
          />
        </div>

        <motion.div
          style={{ y, opacity }}
          className="max-w-7xl mx-auto relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full blur-xl opacity-50"></div>
                <div className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white px-8 py-3 rounded-full text-sm font-bold">
                  <Sparkles className="inline mr-2" size={16} />
                  #1 Sports Platform
                </div>
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-6xl md:text-8xl font-black text-white mb-6"
            >
              Get In{' '}
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Touch
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              Have questions about live scores, statistics, or our sports platform? 
              Our team is here to help you get the most out of your sports experience.
            </motion.p>
          </motion.div>

          {/* Floating Sports Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { icon: '⚽', label: 'Live Matches', value: '1000+' },
                  { icon: '🏆', label: 'Leagues', value: '50+' },
                  { icon: '🌍', label: 'Countries', value: '150+' },
                  { icon: '⚡', label: 'Response Time', value: '<2s' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    className="text-center"
                  >
                    <motion.div
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                      }}
                      className="text-4xl mb-2"
                    >
                      {stat.icon}
                    </motion.div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Information with 3D Cards */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-purple-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                <MessageCircle className="inline mr-2" size={16} />
                Support Channels
              </div>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Get Support
            </h2>
            <p className="text-xl text-gray-300">Multiple ways to reach our sports team</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 50, rotateY: 15 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl text-center hover:shadow-purple-500/25 transition-all duration-500">
                    <motion.div
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                      }}
                      className={`w-16 h-16 bg-gradient-to-r ${info.gradient} rounded-xl flex items-center justify-center mx-auto mb-6`}
                    >
                      <Icon className="text-white" size={28} />
                    </motion.div>
                    <motion.div
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="text-3xl mb-4"
                    >
                      {info.sport}
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-3">{info.title}</h3>
                    <p className="text-cyan-400 font-medium mb-2 text-lg">{info.value}</p>
                    <p className="text-gray-300 text-sm">{info.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sports Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                <Trophy className="inline mr-2" size={16} />
                Platform Features
              </div>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Sports Excellence
            </h2>
            <p className="text-xl text-gray-300">What makes our platform the best</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sportsFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50, rotateY: 15 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl text-center hover:shadow-purple-500/25 transition-all duration-500">
                    <motion.div
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                      }}
                      className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mx-auto mb-6`}
                    >
                      <Icon className="text-white" size={28} />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Details */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-purple-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-8">Send Us a Message</h2>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <motion.div
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                        scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
                      }}
                    >
                      <CheckCircle className="text-green-400 mx-auto mb-4" size={48} />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-300">Thank you for your message. We'll get back to you soon!</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors text-white placeholder-gray-400"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors text-white placeholder-gray-400"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors text-white placeholder-gray-400"
                        placeholder="What's this about?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors text-white placeholder-gray-400 resize-none"
                        placeholder="Tell us about your sports experience..."
                      />
                    </div>
                    
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full flex items-center justify-center space-x-2 px-6 py-4 rounded-lg font-semibold transition-all duration-200 ${
                        isSubmitting
                          ? 'bg-gray-600 cursor-not-allowed'
                          : 'bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-purple-500/25'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Sports Community & Social */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Sports Community */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl">
                  <h3 className="text-2xl font-bold text-white mb-6">Join Our Sports Community</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Connect with millions of sports fans worldwide. Get real-time updates, 
                    share your passion, and be part of the ultimate sports experience.
                  </p>
                  <div className="space-y-4">
                    {[
                      'Real-time match updates',
                      'Live statistics & analytics',
                      'Fan community features',
                      'Exclusive sports content'
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <motion.div
                          animate={{ 
                            scale: [1, 1.2, 1],
                            rotate: [0, 10, -10, 0]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                        />
                        <span className="text-gray-300">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl">
                  <h3 className="text-2xl font-bold text-white mb-6">Connect With Us</h3>
                  <div className="space-y-4">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <motion.a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{ 
                            scale: 1.05,
                            transition: { duration: 0.3 }
                          }}
                          className={`flex items-center space-x-4 p-4 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 bg-gradient-to-r ${social.gradient} bg-opacity-10 hover:bg-opacity-20`}
                        >
                          <motion.div
                            animate={{ 
                              rotate: [0, 360],
                              scale: [1, 1.1, 1]
                            }}
                            transition={{ 
                              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                            }}
                          >
                            <Icon size={24} className="text-white" />
                          </motion.div>
                          <span className="font-medium text-white">{social.name}</span>
                          <motion.div
                            animate={{ 
                              rotate: [0, 10, -10, 0],
                              scale: [1, 1.1, 1]
                            }}
                            transition={{ 
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            className="text-2xl ml-auto"
                          >
                            {social.sport}
                          </motion.div>
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>

              {/* Live Support */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-2xl p-8 border border-white/20 shadow-2xl">
                  <h3 className="text-2xl font-bold text-white mb-4">Need Immediate Help?</h3>
                  <p className="mb-6 text-pink-100">
                    For urgent sports-related questions or technical support, 
                    our live team is available 24/7.
                  </p>
                  <motion.div 
                    className="flex items-center space-x-3"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Phone size={24} className="text-white" />
                    </motion.div>
                                         <span className="font-semibold text-white text-lg">+91 7780935163</span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-purple-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                <Crown className="inline mr-2" size={16} />
                FAQ
              </div>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">Common questions about our sports platform</p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How accurate are your live scores?",
                answer: "Our live scores are updated in real-time with 99.9% accuracy. We use multiple data sources and advanced algorithms to ensure the most reliable information."
              },
              {
                question: "Can I get notifications for specific teams?",
                answer: "Yes! You can set up personalized notifications for your favorite teams, players, or leagues. Never miss an important moment again."
              },
              {
                question: "Do you cover all major sports leagues?",
                answer: "We cover 50+ sports leagues worldwide including football, basketball, cricket, tennis, and many more. Our coverage is constantly expanding."
              },
              {
                question: "Is the platform available on mobile?",
                answer: "Absolutely! Our platform is fully responsive and optimized for all devices. Download our mobile app for the best experience."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateY: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 2,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500">
                  <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
  };

export default Contact; 