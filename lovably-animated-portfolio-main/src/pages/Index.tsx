import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader';
import ScrollAnimation from '@/components/ScrollAnimations';
import TeamSection from '@/components/TeamSection';
import UltraModernRipple from '@/components/UltraModernRipple';
import TrendingPlayersMarquee from '@/components/TrendingPlayersMarquee';

import '@/styles/home.css'; // Import custom CSS for Sportiva
import '@/styles/ultra-modern-ripple.css'; // Import ultra modern ripple effects
import { 
  Play, 
  ShoppingCart, 
  Users, 
  TrendingUp, 
  Star,
  Clock,
  MapPin,
  Heart,
  Share2,
  MessageCircle,
  Search,
  Filter,
  ArrowRight,
  Trophy,
  Zap,
  Sparkles,
  Home,
  User,
  Briefcase,
  Bot,
  Target,
  Flame,
  Shield,
  Crown
} from 'lucide-react';

// Import images
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';
import dakshProfile from '@/assets/daksh.png';
import ayushProfile from '@/assets/ayush.png';

// Import Sportiva background images
import pics1 from '@/assets/pics1.jpg';
import pics2 from '@/assets/pics2.jpg';
import pics3 from '@/assets/pics3.jpg';
import pics4 from '@/assets/pics4.jpg';
import pic1 from '@/assets/pic1.jpg';
import pic2 from '@/assets/pic2.jpg';

// Import player images
import viratKohli from '@/assets/players/viratkohli.png';
import benStokes from '@/assets/players/benstoke.png';
import joeRoot from '@/assets/players/joeroot.png';
import shubmanGill from '@/assets/players/gill.png';
import washingtonSundar from '@/assets/players/sundar.png';
import cristianoRonaldo from '@/assets/players/ronaldo.png';
import lionelMessi from '@/assets/players/messi.png';

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [currentHighlight, setCurrentHighlight] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentBgImage, setCurrentBgImage] = useState(1); // Start with pics2 (index 1)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Sports-themed scroll animations
  const { scrollY } = useScroll();
  const springConfig = { stiffness: 100, damping: 30 };
  
  // Parallax effects for sports elements
  const heroY = useSpring(useTransform(scrollY, [0, 500], [0, -100]), springConfig);
  const titleY = useSpring(useTransform(scrollY, [0, 300], [0, -50]), springConfig);
  const statsY = useSpring(useTransform(scrollY, [0, 400], [0, 100]), springConfig);
  
  // Dynamic scale effects
  const heroScale = useSpring(useTransform(scrollY, [0, 300], [1, 0.95]), springConfig);
  const cardScale = useSpring(useTransform(scrollY, [0, 200], [1, 1.05]), springConfig);

  // Sportiva background images array
  const sportivaBgImages = [pics1, pics2, pics3, pics4, pic1, pic2];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHighlight((prev) => (prev + 1) % highlights.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Background image rotation effect
  useEffect(() => {
    const bgInterval = setInterval(() => {
      setCurrentBgImage((prev) => (prev + 1) % sportivaBgImages.length);
    }, 4000); // Increased speed from 8000ms to 4000ms
    return () => clearInterval(bgInterval);
  }, []);

  // Mouse tracking for custom cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  const highlights = [
    {
      title: "IPL 2024 Final",
      subtitle: "Mumbai Indians vs Chennai Super Kings",
      image: portfolio1,
      time: "Today 7:30 PM",
      isLive: true
    },
    {
      title: "Premier League",
      subtitle: "Manchester United vs Arsenal",
      image: portfolio2,
      time: "Tomorrow 8:00 PM",
      isLive: false
    },
    {
      title: "NBA Playoffs",
      subtitle: "Lakers vs Warriors",
      image: portfolio3,
      time: "Sunday 9:30 PM",
      isLive: false
    }
  ];

  const quickAccessTiles = [
    { icon: User, title: 'About', color: 'from-purple-500 to-pink-500', href: '/about', gradient: 'from-purple-500/20 to-pink-500/20', onClick: undefined },
    { icon: TrendingUp, title: 'Latest News', color: 'from-blue-500 to-cyan-500', href: '/news', gradient: 'from-blue-500/20 to-cyan-500/20', onClick: undefined },
    { icon: ShoppingCart, title: 'Shop', color: 'from-emerald-500 to-teal-500', href: '/shop', gradient: 'from-emerald-500/20 to-teal-500/20', onClick: undefined },
    { icon: Bot, title: 'AI Chat', color: 'from-orange-500 to-red-500', href: '#', gradient: 'from-orange-500/20 to-red-500/20', onClick: () => {
      const chatButton = document.querySelector('[data-chat-button]') as HTMLButtonElement;
      chatButton?.click();
    }},
    { icon: MessageCircle, title: 'Contact', color: 'from-indigo-500 to-purple-500', href: '/contact', gradient: 'from-indigo-500/20 to-purple-500/20', onClick: undefined }
  ];

  const liveMatches = [
    {
      id: 1,
      sport: '🏏 Cricket',
      team1: 'India',
      team2: 'Australia',
      score1: '285/4',
      score2: '180/6',
      time: 'Live',
      venue: 'MCG, Melbourne',
      isLive: true
    },
    {
      id: 2,
      sport: '⚽ Football',
      team1: 'Real Madrid',
      team2: 'Barcelona',
      score1: '2',
      score2: '1',
      time: '75\'',
      venue: 'Santiago Bernabéu',
      isLive: true
    },
    {
      id: 3,
      sport: '🏀 Basketball',
      team1: 'Lakers',
      team2: 'Warriors',
      score1: '98',
      score2: '95',
      time: 'Q4 2:30',
      venue: 'Crypto.com Arena',
      isLive: true
    }
  ];

  const trendingPlayers = [
    // Cricket Players - Real Data & Photos
    {
      id: '1',
      name: 'Virat Kohli',
      team: 'India',
      position: 'Batsman',
      stats: { runs: 12169, matches: 254 },
      image: viratKohli,
      teamColor: '#1E40AF'
    },
    {
      id: '2',
      name: 'Ben Stokes',
      team: 'England',
      position: 'All-rounder',
      stats: { runs: 6251, wickets: 197 },
      image: benStokes,
      teamColor: '#DC2626'
    },
    {
      id: '3',
      name: 'Joe Root',
      team: 'England',
      position: 'Batsman',
      stats: { runs: 11416, matches: 135 },
      image: joeRoot,
      teamColor: '#DC2626'
    },
    {
      id: '4',
      name: 'Shubman Gill',
      team: 'India',
      position: 'Batsman',
      stats: { runs: 2271, matches: 44 },
      image: shubmanGill,
      teamColor: '#1E40AF'
    },
    {
      id: '5',
      name: 'Washington Sundar',
      team: 'India',
      position: 'All-rounder',
      stats: { wickets: 34, runs: 265 },
      image: washingtonSundar,
      teamColor: '#1E40AF'
    },
    // Football Players - Real Data & Photos
    {
      id: '6',
      name: 'Cristiano Ronaldo',
      team: 'Al Nassr',
      position: 'Forward',
      stats: { goals: 850, assists: 234 },
      image: cristianoRonaldo,
      teamColor: '#FFD700'
    },
    {
      id: '7',
      name: 'Lionel Messi',
      team: 'Inter Miami',
      position: 'Forward',
      stats: { goals: 821, assists: 361 },
      image: lionelMessi,
      teamColor: '#FF6B35'
    },
    {
      id: '8',
      name: 'Virat Kohli',
      team: 'India',
      position: 'Batsman',
      stats: { runs: 12169, matches: 254 },
      image: viratKohli,
      teamColor: '#1E40AF'
    },
    {
      id: '9',
      name: 'Ben Stokes',
      team: 'England',
      position: 'All-rounder',
      stats: { runs: 6251, wickets: 197 },
      image: benStokes,
      teamColor: '#DC2626'
    },
    {
      id: '10',
      name: 'Joe Root',
      team: 'England',
      position: 'Batsman',
      stats: { runs: 11416, matches: 135 },
      image: joeRoot,
      teamColor: '#DC2626'
    },
    {
      id: '11',
      name: 'Shubman Gill',
      team: 'India',
      position: 'Batsman',
      stats: { runs: 2271, matches: 44 },
      image: shubmanGill,
      teamColor: '#1E40AF'
    },
    {
      id: '12',
      name: 'Washington Sundar',
      team: 'India',
      position: 'All-rounder',
      stats: { wickets: 34, runs: 265 },
      image: washingtonSundar,
      teamColor: '#1E40AF'
    },
    {
      id: '13',
      name: 'Cristiano Ronaldo',
      team: 'Al Nassr',
      position: 'Forward',
      stats: { goals: 850, assists: 234 },
      image: cristianoRonaldo,
      teamColor: '#FFD700'
    },
    {
      id: '14',
      name: 'Lionel Messi',
      team: 'Inter Miami',
      position: 'Forward',
      stats: { goals: 821, assists: 361 },
      image: lionelMessi,
      teamColor: '#FF6B35'
    },
    {
      id: '15',
      name: 'Virat Kohli',
      team: 'India',
      position: 'Batsman',
      stats: { runs: 12169, matches: 254 },
      image: viratKohli,
      teamColor: '#1E40AF'
    },
    {
      id: '16',
      name: 'Ben Stokes',
      team: 'England',
      position: 'All-rounder',
      stats: { runs: 6251, wickets: 197 },
      image: benStokes,
      teamColor: '#DC2626'
    },
    {
      id: '17',
      name: 'Joe Root',
      team: 'England',
      position: 'Batsman',
      stats: { runs: 11416, matches: 135 },
      image: joeRoot,
      teamColor: '#DC2626'
    },
    {
      id: '18',
      name: 'Shubman Gill',
      team: 'India',
      position: 'Batsman',
      stats: { runs: 2271, matches: 44 },
      image: shubmanGill,
      teamColor: '#1E40AF'
    },
    {
      id: '19',
      name: 'Washington Sundar',
      team: 'India',
      position: 'All-rounder',
      stats: { wickets: 34, runs: 265 },
      image: washingtonSundar,
      teamColor: '#1E40AF'
    },
    {
      id: '20',
      name: 'Cristiano Ronaldo',
      team: 'Al Nassr',
      position: 'Forward',
      stats: { goals: 850, assists: 234 },
      image: cristianoRonaldo,
      teamColor: '#FFD700'
    },
    {
      id: '21',
      name: 'Lionel Messi',
      team: 'Inter Miami',
      position: 'Forward',
      stats: { goals: 821, assists: 361 },
      image: lionelMessi,
      teamColor: '#FF6B35'
    },
    {
      id: '22',
      name: 'Virat Kohli',
      team: 'India',
      position: 'Batsman',
      stats: { runs: 12169, matches: 254 },
      image: viratKohli,
      teamColor: '#1E40AF'
    }
  ];

  const teamMembers = [
    {
      name: 'Daksh Gupta',
      role: 'Full Stack Developer',
      image: dakshProfile,
      bio: 'Crafting seamless web experiences from UI to database, using modern frameworks and scalable architecture.'
    },
    {
      name: 'Ayush Jha',
      role: 'UI/UX Designer & Backend Engineer',
      image: ayushProfile,
      bio: 'Crafts seamless user interfaces and builds robust back-end systems to power the experience.'
    }
  ];

  if (loading) {
    return <Loader onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 custom-cursor-page">
      <UltraModernRipple />
      
      {/* Permanent Light Blue Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 custom-cursor"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.4 : isClicking ? 0.9 : 1,
        }}
        transition={{ type: "spring", stiffness: 600, damping: 30 }}
      >
        <div className="w-full h-full bg-blue-300 rounded-full opacity-95 custom-cursor-inner shadow-lg" />
      </motion.div>
      
      <Navigation />
      
      {/* Hero Banner with Sportiva Background */}
      <motion.section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ y: heroY, scale: heroScale }}
      >
        {/* Animated Background Images */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentBgImage}
              initial={{ opacity: 0.8, scale: 1.01 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0.8, scale: 0.99 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img 
                src={sportivaBgImages[currentBgImage]} 
                alt="Sportiva Background"
                className="w-full h-full object-cover"
              />
              {/* Multiple overlay layers for depth */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/50"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3),transparent_50%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.2),transparent_50%)]"></div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Floating 3D Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, Math.random() * 30 - 15, 0],
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.6, 0.2],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
          
          {/* Additional floating sports icons */}
          <motion.div
            className="absolute top-20 left-20 text-white/20"
            animate={{ 
              rotate: 360,
              y: [0, -20, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <span className="text-4xl">⚽</span>
          </motion.div>
          
          <motion.div
            className="absolute top-40 right-32 text-white/20"
            animate={{ 
              rotate: -360,
              y: [0, 30, 0],
              scale: [1, 0.8, 1]
            }}
            transition={{ 
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <span className="text-3xl">🏏</span>
          </motion.div>
          
          <motion.div
            className="absolute bottom-40 left-32 text-white/20"
            animate={{ 
              rotate: 360,
              y: [0, -25, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{ 
              rotate: { duration: 18, repeat: Infinity, ease: "linear" },
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <span className="text-3xl">🏀</span>
          </motion.div>
          
          <motion.div
            className="absolute bottom-20 right-20 text-white/20"
            animate={{ 
              rotate: -360,
              y: [0, 40, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{ 
              rotate: { duration: 22, repeat: Infinity, ease: "linear" },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <span className="text-4xl">🎾</span>
          </motion.div>
        </div>

        <div className="relative z-20 text-center text-white max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="mb-8"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-xl border border-white/20 text-white px-8 py-4 rounded-full mb-8"
            >
              <Sparkles className="w-6 h-6 text-yellow-400" />
              <span className="text-xl font-bold">PREMIUM SPORTS EXPERIENCE</span>
              <Sparkles className="w-6 h-6 text-yellow-400" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {/* Main Title with 3D Effect */}
            <motion.h1 
              className="text-7xl md:text-9xl font-black mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.8 }}
            >
              <span className="block bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl text-3d glow-text modern-text">
                SPORTIVA
              </span>
              <motion.span 
                className="block text-3xl md:text-5xl mt-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent font-light gradient-text-animated"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                THE FUTURE OF SPORTS
              </motion.span>
            </motion.h1>

            <motion.p 
              className="text-2xl md:text-3xl mb-12 text-blue-100 font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Experience sports like never before with cutting-edge technology and immersive design
            </motion.p>
            



          </motion.div>
        </div>



        {/* Background Image Indicators */}
        <div className="absolute bottom-8 right-8 z-30 flex space-x-2">
          {sportivaBgImages.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentBgImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentBgImage ? 'bg-yellow-400 scale-125' : 'bg-white/30'
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </motion.section>

      {/* Ultra Modern Premium Quick Access Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Advanced animated background with multiple layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-100/40 dark:from-slate-900 dark:via-slate-800/40 dark:to-slate-900/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]" />
        
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, 50, 0],
                y: [0, -30, 0],
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollAnimation>
            <div className="text-center mb-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="inline-flex items-center justify-center mb-8"
              >
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                <div className="w-3 h-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-4 animate-pulse" />
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent leading-tight"
              >
                Quick Access
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light"
              >
                Experience the future of navigation with cutting-edge design and seamless interactions
              </motion.p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {quickAccessTiles.map((tile, index) => {
              const Icon = tile.icon;
              return (
                <motion.div
                  key={tile.title}
                  initial={{ opacity: 0, y: 80, scale: 0.8, rotateX: -15 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                  transition={{ 
                    duration: 1, 
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 80,
                    damping: 20
                  }}
                  whileHover={{ 
                    scale: 1.08, 
                    y: -15,
                    rotateY: 5,
                    transition: { duration: 0.4, type: "spring", stiffness: 300 }
                  }}
                  className="group relative perspective-1000"
                  onClick={tile.onClick}
                >
                  {/* Advanced 3D glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tile.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-125`} />
                  
                  {/* Main card with advanced 3D effects */}
                  <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-2xl border border-white/30 dark:border-gray-700/60 rounded-3xl p-8 h-72 flex flex-col items-center justify-center text-center shadow-2xl hover:shadow-3xl transition-all duration-700 group-hover:border-white/60 dark:group-hover:border-gray-600/80 overflow-hidden transform-gpu glass-morphism">
                    
                    {/* Advanced animated background with multiple layers */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-1000">
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent animate-pulse" />
                      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]" />
                      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]" />
                    </div>
                    
                    {/* Enhanced 3D icon container */}
                    <div className="relative mb-8 group-hover:scale-125 transition-all duration-700 transform-gpu">
                      <div className={`w-20 h-20 bg-gradient-to-br ${tile.color} rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-700 relative overflow-hidden transform-gpu`}>
                        <Icon size={32} className="text-white relative z-10 group-hover:scale-110 transition-transform duration-500" />
                        
                        {/* Advanced icon glow with multiple layers */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${tile.color} opacity-0 group-hover:opacity-40 blur-xl transition-all duration-700`} />
                        <div className={`absolute inset-0 bg-gradient-to-br ${tile.color} opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-1000`} />
                        
                        {/* Enhanced floating particles with physics */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1.5 h-1.5 bg-white rounded-full shadow-lg"
                              style={{
                                left: `${15 + i * 20}%`,
                                top: `${25 + i * 15}%`,
                              }}
                              animate={{
                                y: [0, -20, 0],
                                x: [0, Math.random() * 10 - 5, 0],
                                opacity: [0, 1, 0],
                                scale: [0, 1, 0],
                              }}
                              transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: i * 0.4,
                                ease: "easeInOut"
                              }}
                            />
                          ))}
                        </div>
                        
                        {/* Rotating ring effect */}
                        <motion.div
                          className="absolute inset-0 border-2 border-white/20 rounded-3xl"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        />
                      </div>
                    </div>
                    
                    {/* Enhanced title with advanced gradient */}
                    <h3 className="text-2xl font-black mb-3 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600 dark:group-hover:from-blue-400 dark:group-hover:via-purple-400 dark:group-hover:to-pink-400 transition-all duration-700">
                      {tile.title}
                    </h3>
                    
                    {/* Enhanced description with slide-up animation */}
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-sm text-gray-500 dark:text-gray-400 font-medium"
                    >
                      Discover {tile.title.toLowerCase()} features
                    </motion.p>
                    
                    {/* Advanced hover overlay with multiple effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl" />
                    
                    {/* Enhanced border glow with animation */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${tile.color} opacity-0 group-hover:opacity-30 blur-xl transition-all duration-700`} />
                    
                    {/* Advanced corner accents */}
                    <div className={`absolute top-6 right-6 w-3 h-3 bg-gradient-to-br ${tile.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 scale-0 group-hover:scale-100 shadow-lg`} />
                    <div className={`absolute bottom-6 left-6 w-2 h-2 bg-gradient-to-br ${tile.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 scale-0 group-hover:scale-100 shadow-lg`} />
                    
                    {/* Floating geometric elements */}
                    <div className="absolute -top-3 -right-3 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                      <motion.div
                        className={`w-full h-full bg-gradient-to-br ${tile.color} rounded-full shadow-2xl`}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.3, 0.7, 0.3],
                          rotate: [0, 180, 360],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </div>
                    
                    {/* Bottom floating element */}
                    <div className="absolute -bottom-3 -left-3 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                      <motion.div
                        className={`w-full h-full bg-gradient-to-br ${tile.color} rounded-full shadow-lg`}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.2, 0.5, 0.2],
                          y: [0, -10, 0],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          {/* Enhanced bottom accent with animation */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="mt-20 h-px bg-gradient-to-r from-transparent via-blue-500 via-purple-500 to-transparent"
          />
          
          {/* Additional floating elements */}
          <div className="absolute bottom-10 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-30 animate-pulse" />
          <div className="absolute bottom-20 right-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-30 animate-pulse" />
        </div>
      </section>

      {/* Ultra Modern Live Sports Hub Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Advanced animated background with multiple layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-green-50/40 to-emerald-100/40 dark:from-slate-900 dark:via-green-900/40 dark:to-emerald-900/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.08),transparent_50%)]" />
        
        {/* Floating sports elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-6 h-6 bg-gradient-to-br from-green-400/15 to-emerald-400/15 rounded-full blur-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, Math.random() * 30 - 15, 0],
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.4, 0.1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollAnimation>
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="inline-flex items-center justify-center mb-8"
              >
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent" />
                <div className="w-3 h-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mx-4 animate-pulse" />
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-gray-900 via-green-900 to-emerald-900 dark:from-white dark:via-green-100 dark:to-emerald-100 bg-clip-text text-transparent leading-tight"
              >
                Live Sports Hub
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light"
              >
                Real-time scores, live updates, and immersive sports experience
              </motion.p>
            </div>
          </ScrollAnimation>

          {/* Live Sports Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Featured Live Match */}
              <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ 
                  duration: 1, 
                  type: "spring",
                  stiffness: 80,
                  damping: 20
                }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  transition: { duration: 0.4, type: "spring", stiffness: 300 }
                }}
                className="group relative perspective-1000"
              >
                {/* Advanced glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-teal-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-125" />
                
              {/* Main featured card */}
                <div className="relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-2xl border border-white/30 dark:border-gray-700/60 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-700 group-hover:border-white/60 dark:group-hover:border-gray-600/80 overflow-hidden transform-gpu">
                  
                  {/* Animated background patterns */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-1000">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent animate-pulse" />
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(34,197,94,0.1),transparent_50%)]" />
                  <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.08),transparent_50%)]" />
                  </div>
                  
                <div className="relative z-10">
                  {/* Live indicator */}
                  <div className="flex items-center justify-between mb-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg"
                      >
                      <span className="text-2xl">⚽</span>
                      </motion.div>
                      
                    <motion.span 
                      className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-black shadow-lg"
                      animate={{ 
                        scale: [1, 1.05, 1],
                        boxShadow: [
                          "0 0 0 rgba(34,197,94,0.4)",
                          "0 0 20px rgba(34,197,94,0.6)",
                          "0 0 0 rgba(34,197,94,0.4)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      LIVE NOW
                    </motion.span>
                  </div>
                  
                  {/* Match details */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-black dark:text-white mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
                      Premier League
                          </h3>
                    <div className="flex items-center justify-center space-x-8 mb-4">
                      <div className="text-center group/team">
                        <h4 className="font-bold text-lg dark:text-white mb-2 group-hover/team:text-green-600 dark:group-hover/team:text-green-400 transition-colors duration-300">
                          Manchester City
                        </h4>
                          <motion.p 
                          className="text-4xl font-black text-green-600"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                          3
                          </motion.p>
                      </div>
                      
                      <div className="text-center">
                        <span className="text-xl font-bold text-gray-400 dark:text-gray-500">vs</span>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">75'</p>
                      </div>
                      
                      <div className="text-center group/team">
                        <h4 className="font-bold text-lg dark:text-white mb-2 group-hover/team:text-blue-600 dark:group-hover/team:text-blue-400 transition-colors duration-300">
                          Arsenal
                        </h4>
                          <motion.p 
                          className="text-4xl font-black text-blue-600"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                          >
                          1
                          </motion.p>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Etihad Stadium • 75,000 spectators
                    </p>
                  </div>
                  
                  {/* Live stats */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-3">
                      <p className="text-xs text-gray-500 dark:text-gray-400">Possession</p>
                      <p className="font-bold text-green-600">65%</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-3">
                      <p className="text-xs text-gray-500 dark:text-gray-400">Shots</p>
                      <p className="font-bold text-blue-600">12</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-3">
                      <p className="text-xs text-gray-500 dark:text-gray-400">Corners</p>
                      <p className="font-bold text-purple-600">8</p>
                    </div>
                  </div>
                </div>
                
                {/* Corner accents */}
                <div className="absolute top-6 right-6 w-3 h-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 scale-0 group-hover:scale-100 shadow-lg" />
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 scale-0 group-hover:scale-100 shadow-lg" />
              </div>
            </motion.div>

            {/* Quick Score Updates */}
                        <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ 
                duration: 1, 
                type: "spring",
                stiffness: 80,
                damping: 20
              }}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                transition: { duration: 0.4, type: "spring", stiffness: 300 }
              }}
              className="group relative perspective-1000"
            >
              {/* Advanced glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-125" />
              
              {/* Main updates card */}
              <div className="relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-2xl border border-white/30 dark:border-gray-700/60 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-700 group-hover:border-white/60 dark:group-hover:border-gray-600/80 overflow-hidden transform-gpu">
                
                {/* Animated background patterns */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-1000">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent animate-pulse" />
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.1),transparent_50%)]" />
                  <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.08),transparent_50%)]" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-black dark:text-white bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
                      Quick Updates
                    </h3>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg"
                    >
                      <Clock size={20} className="text-white" />
                        </motion.div>
                      </div>
                      
                  {/* Live updates list */}
                  <div className="space-y-4">
                    {[
                      { sport: '🏏', teams: 'India vs Australia', score: '285/4 - 180/6', time: 'Live', color: 'from-orange-500 to-red-500' },
                      { sport: '🏀', teams: 'Lakers vs Warriors', score: '98 - 95', time: 'Q4 2:30', color: 'from-purple-500 to-pink-500' },
                      { sport: '🎾', teams: 'Nadal vs Djokovic', score: '6-4, 3-6, 5-4', time: 'Live', color: 'from-green-500 to-emerald-500' },
                      { sport: '🏈', teams: 'Patriots vs Bills', score: '24 - 21', time: 'Q4 1:45', color: 'from-blue-500 to-indigo-500' }
                    ].map((update, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700/50 dark:to-gray-800/50 rounded-xl hover:from-gray-100 hover:to-gray-200 dark:hover:from-gray-600/50 dark:hover:to-gray-700/50 transition-all duration-300"
                      >
                      <div className="flex items-center space-x-3">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className={`w-8 h-8 bg-gradient-to-br ${update.color} rounded-lg flex items-center justify-center shadow-md`}
                          >
                            <span className="text-sm">{update.sport}</span>
                          </motion.div>
                          <div>
                            <p className="font-semibold text-sm dark:text-white">{update.teams}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{update.score}</p>
                          </div>
                        </div>
                          <motion.span 
                          className="text-xs font-bold text-gray-600 dark:text-gray-400"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {update.time}
                        </motion.span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Corner accents */}
                <div className="absolute top-6 right-6 w-3 h-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 scale-0 group-hover:scale-100 shadow-lg" />
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 scale-0 group-hover:scale-100 shadow-lg" />
              </div>
            </motion.div>
          </div>

          {/* Animated Sports Cards with Image Hover Effects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                sport: 'Football',
                icon: '⚽',
                image: 'https://images.unsplash.com/photo-1579952363873-27d3bade5f7b?w=400&h=300&fit=crop',
                hoverImage: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400&h=300&fit=crop',
                matches: 12,
                liveMatches: 3,
                color: 'from-blue-500 to-indigo-500'
              },
              {
                sport: 'Basketball',
                icon: '🏀',
                image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop',
                hoverImage: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?w=400&h=300&fit=crop',
                matches: 8,
                liveMatches: 2,
                color: 'from-purple-500 to-pink-500'
              },
              {
                sport: 'Cricket',
                icon: '🏏',
                image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=300&fit=crop',
                hoverImage: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=300&fit=crop',
                matches: 15,
                liveMatches: 5,
                color: 'from-green-500 to-emerald-500'
              },
              {
                sport: 'Tennis',
                icon: '🎾',
                image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400&h=300&fit=crop',
                hoverImage: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=400&h=300&fit=crop',
                matches: 6,
                liveMatches: 1,
                color: 'from-orange-500 to-red-500'
              }
            ].map((sportCard, index) => (
              <motion.div
                key={sportCard.sport}
                initial={{ opacity: 0, y: 60, scale: 0.9, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                transition={{ 
                  duration: 1, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 80,
                  damping: 20
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateY: 5,
                  transition: { duration: 0.4, type: "spring", stiffness: 300 }
                }}
                className="group relative perspective-1000 cursor-default"
              >
                {/* Advanced glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${sportCard.color} opacity-0 group-hover:opacity-20 rounded-3xl blur-2xl transition-all duration-700 scale-110 group-hover:scale-125`} />
                
                {/* Main card with image hover effects */}
                <div className="relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-2xl border border-white/30 dark:border-gray-700/60 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 group-hover:border-white/60 dark:group-hover:border-gray-600/80 transform-gpu">
                  
                  {/* Image container with hover effects */}
                  <div className="relative h-48 overflow-hidden">
                    {/* Default image */}
                    <motion.img
                      src={sportCard.image}
                      alt={sportCard.sport}
                      className="w-full h-full object-cover transition-all duration-700"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                    />
                    
                    {/* Hover image overlay */}
                    <motion.img
                      src={sportCard.hoverImage}
                      alt={sportCard.sport}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-700"
                      initial={{ scale: 1.1 }}
                      whileHover={{ scale: 1 }}
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Sport icon overlay */}
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${sportCard.color} rounded-xl flex items-center justify-center shadow-lg`}
                    >
                      <span className="text-2xl">{sportCard.icon}</span>
                    </motion.div>
                    
                    {/* Live indicator */}
                    <motion.div
                      className="absolute top-4 left-4"
                            animate={{ 
                              scale: [1, 1.05, 1],
                              boxShadow: [
                          "0 0 0 rgba(34,197,94,0.4)",
                          "0 0 20px rgba(34,197,94,0.6)",
                          "0 0 0 rgba(34,197,94,0.4)"
                              ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                      <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-black shadow-lg">
                            LIVE
                        </span>
                    </motion.div>
                      </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-black dark:text-white mb-3 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 dark:group-hover:from-blue-400 dark:group-hover:to-purple-400 transition-all duration-500">
                      {sportCard.sport}
                    </h3>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-500 dark:text-gray-400">Matches:</span>
                        <span className="font-bold text-gray-700 dark:text-gray-300">{sportCard.matches}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-500 dark:text-gray-400">Live:</span>
                        <span className="font-bold text-green-600">{sportCard.liveMatches}</span>
                      </div>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="mt-4">
                      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                        <span>Live Coverage</span>
                        <span>{Math.round((sportCard.liveMatches / sportCard.matches) * 100)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          className={`h-2 bg-gradient-to-r ${sportCard.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(sportCard.liveMatches / sportCard.matches) * 100}%` }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Corner accents */}
                  <div className={`absolute top-6 right-6 w-3 h-3 bg-gradient-to-br ${sportCard.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 scale-0 group-hover:scale-100 shadow-lg`} />
                  <div className={`absolute bottom-6 left-6 w-2 h-2 bg-gradient-to-br ${sportCard.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 scale-0 group-hover:scale-100 shadow-lg`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ultra Modern Trending Players Section */}
      <section id="players" className="py-32 px-6 relative overflow-hidden">
        {/* Advanced animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-purple-50/40 to-pink-100/40 dark:from-slate-900 dark:via-purple-900/40 dark:to-pink-900/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(147,51,234,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(236,72,153,0.1),transparent_50%)]" />
        
        {/* Floating player indicators */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-6 h-6 bg-gradient-to-br from-purple-400/15 to-pink-400/15 rounded-full blur-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, Math.random() * 30 - 15, 0],
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.4, 0.1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollAnimation>
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="inline-flex items-center justify-center mb-8"
              >
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
                <div className="w-3 h-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-4 animate-pulse" />
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 dark:from-white dark:via-purple-100 dark:to-pink-100 bg-clip-text text-transparent leading-tight"
              >
                Trending Players
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light"
              >
                This week's top performers with revolutionary visual design
              </motion.p>
            </div>
          </ScrollAnimation>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative"
          >
            <TrendingPlayersMarquee 
              players={trendingPlayers}
              speed={60}
              className="py-12"
            />
          </motion.div>
        </div>
      </section>

      {/* Ultra Modern Teams Section */}
      <section id="teams" className="py-32 px-6 relative overflow-hidden">
        {/* Advanced animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-emerald-50/40 to-teal-100/40 dark:from-slate-900 dark:via-emerald-900/40 dark:to-teal-900/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(20,184,166,0.08),transparent_50%)]" />
        
        {/* Floating team indicators */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-5 h-5 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -35, 0],
                x: [0, Math.random() * 25 - 12.5, 0],
                scale: [1, 1.4, 1],
                opacity: [0.1, 0.3, 0.1],
                rotate: [0, 90, 180, 270, 360],
              }}
              transition={{
                duration: 10 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 4,
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto relative z-10">
          <ScrollAnimation>
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="inline-flex items-center justify-center mb-8"
              >
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                <div className="w-3 h-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full mx-4 animate-pulse" />
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-gray-900 via-emerald-900 to-teal-900 dark:from-white dark:via-emerald-100 dark:to-teal-100 bg-clip-text text-transparent leading-tight"
              >
                Development Team
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
              >
                Meet the innovative developers behind this revolutionary sports platform
              </motion.p>
            </div>
          </ScrollAnimation>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <TeamSection members={teamMembers} />
          </motion.div>
        </div>
      </section>

      {/* Ultra Modern Call to Action */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Advanced animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-orange-50/40 to-red-100/40 dark:from-slate-900 dark:via-orange-900/40 dark:to-red-900/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(249,115,22,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(239,68,68,0.08),transparent_50%)]" />
        
        {/* Floating CTA indicators */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-gradient-to-br from-orange-400/15 to-red-400/15 rounded-full blur-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, Math.random() * 40 - 20, 0],
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.4, 0.1],
                rotate: [0, 90, 180, 270, 360],
              }}
              transition={{
                duration: 12 + Math.random() * 6,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 1.2, 
              type: "spring",
              stiffness: 80,
              damping: 20
            }}
            whileHover={{ 
              scale: 1.03, 
              transition: { duration: 0.4 }
            }}
            className="relative"
          >
            {/* Advanced glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-red-500/20 to-pink-500/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-125" />
            
            {/* Main CTA card */}
            <div className="relative bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 rounded-3xl p-16 text-white shadow-3xl hover:shadow-4xl transition-all duration-700 overflow-hidden transform-gpu">
              
              {/* Animated background patterns */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-1000">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent animate-pulse" />
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.08),transparent_50%)]" />
              </div>
              
              <div className="relative z-10">
                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white via-orange-100 to-red-100 bg-clip-text text-transparent leading-tight"
                >
                  Ready to Experience Sports Like Never Before?
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="text-2xl md:text-3xl mb-12 text-orange-100 font-light leading-relaxed"
                >
                  Join millions of sports fans worldwide with revolutionary design
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-6 justify-center"
                >
                  <motion.button
                    whileHover={{ 
                      scale: 1.08, 
                      y: -5,
                      transition: { duration: 0.3, type: "spring", stiffness: 400 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-orange-600 px-10 py-5 rounded-2xl font-black text-lg shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu ultra-button hover-glow"
                  >
                    Get Started
                  </motion.button>
                  <motion.button
                    whileHover={{ 
                      scale: 1.08, 
                      y: -5,
                      transition: { duration: 0.3, type: "spring", stiffness: 400 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="border-3 border-white text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white hover:text-orange-600 transition-all duration-500 transform-gpu shadow-2xl hover:shadow-3xl hover-glow"
                  >
                    Learn More
                  </motion.button>
                </motion.div>
              </div>
              
              {/* Corner accents */}
              <div className="absolute top-8 right-8 w-4 h-4 bg-gradient-to-br from-white to-orange-200 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 scale-0 group-hover:scale-100 shadow-lg" />
              <div className="absolute bottom-8 left-8 w-3 h-3 bg-gradient-to-br from-white to-red-200 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 scale-0 group-hover:scale-100 shadow-lg" />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
