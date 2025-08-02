import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Trophy, 
  Target, 
  Users, 
  Globe, 
  Smartphone, 
  Zap,
  Award,
  Activity,
  TrendingUp,
  Heart,
  Clock,
  MapPin,
  Star,
  Shield,
  Play,
  Sparkles,
  Rocket,
  Crown,
  Flame,
  Code
} from 'lucide-react';

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const features = [
    { name: 'Live Score Updates', level: 95, icon: Activity, color: 'from-pink-500 to-purple-500' },
    { name: 'Real-time Statistics', level: 90, icon: TrendingUp, color: 'from-blue-500 to-cyan-500' },
    { name: 'Match Predictions', level: 85, icon: Target, color: 'from-green-500 to-emerald-500' },
    { name: 'User Engagement', level: 88, icon: Users, color: 'from-orange-500 to-red-500' },
    { name: 'Mobile Experience', level: 92, icon: Smartphone, color: 'from-purple-500 to-pink-500' },
    { name: 'Global Coverage', level: 87, icon: Globe, color: 'from-indigo-500 to-blue-500' },
  ];

  const sportsCoverage = [
    {
      sport: 'Football',
      leagues: ['Premier League', 'La Liga', 'Bundesliga', 'Serie A', 'Ligue 1', 'Champions League'],
      matches: '500+ live matches',
      icon: '⚽',
      gradient: 'from-green-400 to-blue-500'
    },
    {
      sport: 'Cricket',
      leagues: ['IPL', 'ICC World Cup', 'Test Series', 'T20 Leagues'],
      matches: '300+ live matches',
      icon: '🏏',
      gradient: 'from-orange-400 to-red-500'
    },
    {
      sport: 'Basketball',
      leagues: ['NBA', 'EuroLeague', 'FIBA World Cup'],
      matches: '200+ live matches',
      icon: '🏀',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      sport: 'Tennis',
      leagues: ['Grand Slams', 'ATP Tour', 'WTA Tour'],
      matches: '150+ live matches',
      icon: '🎾',
      gradient: 'from-yellow-400 to-green-500'
    }
  ];

  const achievements = [
    'Real-time updates for 50+ sports leagues',
    '99.9% uptime guarantee for live scores',
    'Featured in top sports media outlets',
    'Winner of "Best Sports App 2023"',
    'Partnership with major sports organizations',
    'AI-powered match predictions with 85% accuracy'
  ];

  const teamStats = [
    {
      metric: 'Live Matches',
      value: '1000+',
      description: 'Matches covered daily',
      icon: '⚡',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      metric: 'Countries',
      value: '150+',
      description: 'Worldwide coverage',
      icon: '🌍',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      metric: 'Sports',
      value: '50+',
      description: 'Different sports covered',
      icon: '🏆',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      metric: 'Response Time',
      value: '<2s',
      description: 'Average load time',
      icon: '⚡',
      gradient: 'from-green-400 to-emerald-500'
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
              About{' '}
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                SportScore
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              The ultimate destination for live sports scores, real-time statistics, and comprehensive match coverage. 
              We bring the excitement of sports to your fingertips with lightning-fast updates and immersive experiences.
            </motion.p>
          </motion.div>

          {/* Floating Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <motion.h2 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="text-4xl font-bold text-white mb-6"
                  >
                    Our Mission
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                    className="text-lg text-gray-300 mb-8 leading-relaxed"
                  >
                    To revolutionize how sports fans experience live matches by providing instant access to scores, 
                    statistics, and insights from anywhere in the world. We believe every fan deserves real-time 
                    access to the sports they love.
                  </motion.p>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.3 }}
                    className="grid grid-cols-2 gap-4"
                  >
                    {[
                      { icon: Zap, text: 'Lightning Fast', color: 'text-yellow-400' },
                      { icon: Users, text: 'Global Community', color: 'text-blue-400' },
                      { icon: Trophy, text: 'Premium Coverage', color: 'text-purple-400' },
                      { icon: Shield, text: 'Reliable Data', color: 'text-green-400' }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <item.icon className={`${item.color}`} size={20} />
                        <span className="text-gray-300">{item.text}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="flex justify-center"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full blur-2xl opacity-50"></div>
                    <motion.div
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                      }}
                      className="relative w-64 h-64 bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl"
                    >
                      <span className="text-white text-8xl">⚽</span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section with 3D Cards */}
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
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                <Rocket className="inline mr-2" size={16} />
                Platform Features
              </div>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Advanced Technologies
            </h2>
            <p className="text-xl text-gray-300">Powering the ultimate sports experience</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.name}
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
                  <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`p-3 bg-gradient-to-r ${feature.color} rounded-xl`}>
                        <Icon className="text-white" size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-white">{feature.name}</h3>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-3 mb-4">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${feature.level}%` }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className={`bg-gradient-to-r ${feature.color} h-3 rounded-full shadow-lg`}
                      />
                    </div>
                    <p className="text-gray-300">{feature.level}% accuracy</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sports Coverage Section */}
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
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                <Globe className="inline mr-2" size={16} />
                Global Coverage
              </div>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Sports Coverage
            </h2>
            <p className="text-xl text-gray-300">Comprehensive coverage of major sports worldwide</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sportsCoverage.map((sport, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl">
                  <div className="flex items-center space-x-6 mb-6">
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
                      className={`text-6xl ${sport.gradient} bg-gradient-to-r rounded-full p-4`}
                    >
                      {sport.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{sport.sport}</h3>
                      <p className="text-cyan-400 font-medium">{sport.matches}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {sport.leagues.map((league, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                        <span className="text-gray-300">{league}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with 3D Cards */}
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
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                <TrendingUp className="inline mr-2" size={16} />
                Platform Statistics
              </div>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Numbers That Matter
            </h2>
            <p className="text-xl text-gray-300">Defining our global impact</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
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
                    className="text-4xl mb-4"
                  >
                    {stat.icon}
                  </motion.div>
                  <div className={`text-4xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-white font-bold mb-1">{stat.metric}</div>
                  <div className="text-sm text-gray-300">{stat.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
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
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                <Crown className="inline mr-2" size={16} />
                Achievements
              </div>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Recognition & Awards
            </h2>
            <p className="text-xl text-gray-300">Milestones that showcase our excellence</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
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
                <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500">
                  <div className="flex items-start space-x-4">
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
                      <Award className="text-yellow-400 mt-1" size={24} />
                    </motion.div>
                    <p className="text-gray-200 leading-relaxed">{achievement}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
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
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                <Code className="inline mr-2" size={16} />
                Technology Stack
              </div>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Built for Performance
            </h2>
            <p className="text-xl text-gray-300">Cutting-edge technologies for optimal performance</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'React', desc: 'Frontend Framework', color: 'from-blue-500 to-cyan-500', icon: '⚛️' },
              { name: 'Node.js', desc: 'Backend Runtime', color: 'from-green-500 to-emerald-500', icon: '🟢' },
              { name: 'Real-time APIs', desc: 'Live Data Feed', color: 'from-purple-500 to-pink-500', icon: '⚡' },
              { name: 'Cloud Infrastructure', desc: 'Global CDN', color: 'from-orange-500 to-red-500', icon: '☁️' }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
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
                    className="text-4xl mb-4"
                  >
                    {tech.icon}
                  </motion.div>
                  <h3 className={`text-xl font-bold bg-gradient-to-r ${tech.color} bg-clip-text text-transparent mb-2`}>
                    {tech.name}
                  </h3>
                  <p className="text-gray-300">{tech.desc}</p>
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

export default About; 