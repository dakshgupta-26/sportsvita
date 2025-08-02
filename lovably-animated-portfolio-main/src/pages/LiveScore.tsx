import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { 
  Trophy, 
  Clock, 
  MapPin, 
  Wifi, 
  RefreshCw, 
  TrendingUp,
  ArrowRight,
  Play,
  Pause,
  Zap,
  Star,
  Target,
  BarChart3,
  Activity,
  Calendar,
  Users,
  Flag,
  Timer,
  Award,
  Sparkles
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import LiveScoreTransition from '@/components/LiveScoreTransition';
import '@/styles/live-score.css';

// Types for the sports data
interface Match {
  id: string;
  title: string;
  competition: string;
  matchType: string;
  status: 'live' | 'ended' | 'upcoming';
  venue: string;
  date: string;
  time: string;
  teams: {
    home: {
      name: string;
      score: string;
      flag?: string;
    };
    away: {
      name: string;
      score: string;
      flag?: string;
    };
  };
  details?: {
    overs?: string;
    timeRemaining?: string;
    currentInnings?: string;
    runRate?: string;
  };
  highlights?: string[];
}

// Get current date and recent dates for latest matches
const getCurrentDate = () => {
  const today = new Date();
  return today.toISOString().split('T')[0];
};

const getRecentDate = (daysAgo: number) => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date.toISOString().split('T')[0];
};

// Mock data for demonstration (will be replaced with real API) - LATEST MATCHES ONLY
const mockMatches: Match[] = [
  {
    id: '1',
    title: 'India vs England',
    competition: 'Test Series 2025',
    matchType: 'Test',
    status: 'live',
    venue: 'Lord\'s Cricket Ground, London',
    date: getCurrentDate(), // TODAY
    time: '11:00',
    teams: {
      home: {
        name: 'England',
        score: '285/6',
        flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿'
      },
      away: {
        name: 'India',
        score: '156/4',
        flag: '🇮🇳'
      }
    },
    details: {
      overs: 'Day 2 - Session 2',
      timeRemaining: '45 mins',
      currentInnings: '1st Innings',
      runRate: '3.2'
    },
    highlights: ['Joe Root 67(89)', 'Jasprit Bumrah 2/45', 'Thrilling contest']
  },

  {
    id: '2',
    title: 'Arsenal vs Chelsea',
    competition: 'Premier League 2024/25',
    matchType: 'Football',
    status: 'live',
    venue: 'Emirates Stadium, London',
    date: getCurrentDate(), // TODAY
    time: '20:00',
    teams: {
      home: {
        name: 'Arsenal',
        score: '2',
        flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿'
      },
      away: {
        name: 'Chelsea',
        score: '1',
        flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿'
      }
    },
    details: {
      timeRemaining: '15 mins',
      currentInnings: '2nd Half'
    },
    highlights: ['Bukayo Saka Goal', 'Cole Palmer Assist', 'VAR Check']
  },
  {
    id: '3',
    title: 'Lakers vs Warriors',
    competition: 'NBA Regular Season 2024/25',
    matchType: 'Basketball',
    status: 'live',
    venue: 'Crypto.com Arena, LA',
    date: getCurrentDate(), // TODAY
    time: '21:30',
    teams: {
      home: {
        name: 'Los Angeles Lakers',
        score: '108',
        flag: '🇺🇸'
      },
      away: {
        name: 'Golden State Warriors',
        score: '102',
        flag: '🇺🇸'
      }
    },
    details: {
      timeRemaining: 'Q4 - 5:23',
      currentInnings: '4th Quarter'
    },
    highlights: ['LeBron James 28 pts', 'Stephen Curry 25 pts', 'Close game']
  },
  {
    id: '4',
    title: 'Barcelona vs Atletico Madrid',
    competition: 'La Liga 2024/25',
    matchType: 'Football',
    status: 'ended',
    venue: 'Camp Nou, Barcelona',
    date: getRecentDate(1), // YESTERDAY
    time: '22:00',
    teams: {
      home: {
        name: 'Barcelona',
        score: '3',
        flag: '🇪🇸'
      },
      away: {
        name: 'Atletico Madrid',
        score: '1',
        flag: '🇪🇸'
      }
    },
    details: {
      timeRemaining: 'FINISHED',
      currentInnings: 'Full Time'
    },
    highlights: ['Robert Lewandowski Goal', 'Joao Felix Assist', 'VAR Review']
  },
  {
    id: '5',
    title: 'Australia vs England',
    competition: 'Ashes Series 2025',
    matchType: 'Test',
    status: 'ended',
    venue: 'MCG, Melbourne',
    date: getRecentDate(2), // 2 DAYS AGO
    time: '11:00',
    teams: {
      home: {
        name: 'Australia',
        score: '298/6',
        flag: '🇦🇺'
      },
      away: {
        name: 'England',
        score: '156/4',
        flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿'
      }
    },
    details: {
      overs: 'Day 5 - FINISHED',
      timeRemaining: 'MATCH COMPLETED',
      currentInnings: 'Final Result',
      runRate: '3.2'
    },
    highlights: ['Steve Smith 67(89)', 'Stuart Broad 2/45', 'Australia won by 142 runs']
  },
  {
    id: '6',
    title: 'Celtics vs 76ers',
    competition: 'NBA Regular Season 2024/25',
    matchType: 'Basketball',
    status: 'ended',
    venue: 'TD Garden, Boston',
    date: getRecentDate(1), // YESTERDAY
    time: '23:00',
    teams: {
      home: {
        name: 'Boston Celtics',
        score: '115',
        flag: '🇺🇸'
      },
      away: {
        name: 'Philadelphia 76ers',
        score: '108',
        flag: '🇺🇸'
      }
    },
    details: {
      timeRemaining: 'FINISHED',
      currentInnings: 'Final Score'
    },
    highlights: ['Jayson Tatum 35 pts', 'Joel Embiid 28 pts', 'Celtics won by 7 points']
  },
  {
    id: '7',
    title: 'Pakistan vs New Zealand',
    competition: 'T20I Series 2025',
    matchType: 'T20',
    status: 'ended',
    venue: 'Gaddafi Stadium, Lahore',
    date: getRecentDate(3), // 3 DAYS AGO
    time: '19:00',
    teams: {
      home: {
        name: 'Pakistan',
        score: '165/5',
        flag: '🇵🇰'
      },
      away: {
        name: 'New Zealand',
        score: '142/8',
        flag: '🇳🇿'
      }
    },
    details: {
      overs: '20.0 - FINISHED',
      timeRemaining: 'MATCH COMPLETED',
      currentInnings: 'Final Result',
      runRate: '7.4'
    },
    highlights: ['Babar Azam 45(32)', 'Trent Boult 3/28', 'Pakistan won by 23 runs']
  },
  {
    id: '8',
    title: 'Bayern Munich vs Dortmund',
    competition: 'Bundesliga 2024/25',
    matchType: 'Football',
    status: 'ended',
    venue: 'Allianz Arena, Munich',
    date: getRecentDate(4), // 4 DAYS AGO
    time: '20:30',
    teams: {
      home: {
        name: 'Bayern Munich',
        score: '2',
        flag: '🇩🇪'
      },
      away: {
        name: 'Borussia Dortmund',
        score: '1',
        flag: '🇩🇪'
      }
    },
    details: {
      timeRemaining: 'FINISHED',
      currentInnings: 'Full Time'
    },
    highlights: ['Harry Kane Goal', 'Jude Bellingham Assist', 'Bayern won by 1-0']
  }
];

// API function to fetch live scores
const fetchLiveScores = async (): Promise<Match[]> => {
  try {
    // Try multiple free APIs for better coverage
    const apis = [
      // Cricket API
      'https://api.cricapi.com/v1/currentMatches?apikey=YOUR_API_KEY&offset=0',
      // Football API (free tier)
      'https://api.football-data.org/v4/matches?status=LIVE',
      // Basketball API (free tier)
      'https://api.balldontlie.io/v1/games?per_page=10&status=live'
    ];

    // Try each API until one works
    for (const apiUrl of apis) {
      try {
        const response = await fetch(apiUrl, {
          headers: {
            'Content-Type': 'application/json',
            // Add API key if needed
            // 'X-Auth-Token': 'YOUR_API_KEY'
          }
        });
        
        if (response.ok) {
          const data = await response.json();
          
          // Transform different API responses to our format
          if (data.data && Array.isArray(data.data)) {
            // Cricket API response
            return data.data.map((match: any) => ({
              id: match.id || Math.random().toString(),
              title: match.name || `${match.teams?.[0] || 'Team 1'} vs ${match.teams?.[1] || 'Team 2'}`,
              competition: match.matchType || 'Cricket',
              matchType: 'T20',
              status: match.status === 'Match not started' ? 'upcoming' : 
                      match.status === 'Match finished' ? 'ended' : 'live',
              venue: match.venue || 'TBD',
              date: match.date || new Date().toISOString().split('T')[0],
              time: match.dateTimeGMT || new Date().toLocaleTimeString(),
              teams: {
                home: {
                  name: match.teams?.[0] || 'Team 1',
                  score: match.score?.[0] || '0/0',
                  flag: '🏏'
                },
                away: {
                  name: match.teams?.[1] || 'Team 2',
                  score: match.score?.[1] || '0/0',
                  flag: '🏏'
                }
              },
              details: {
                overs: match.overs || '0',
                timeRemaining: 'Live',
                currentInnings: match.status || 'Live'
              },
              highlights: []
            }));
          } else if (data.matches && Array.isArray(data.matches)) {
            // Football API response
            return data.matches.map((match: any) => ({
              id: match.id.toString(),
              title: `${match.homeTeam.name} vs ${match.awayTeam.name}`,
              competition: match.competition.name,
              matchType: 'Football',
              status: 'live',
              venue: match.venue || 'TBD',
              date: match.utcDate.split('T')[0],
              time: new Date(match.utcDate).toLocaleTimeString(),
              teams: {
                home: {
                  name: match.homeTeam.name,
                  score: match.score.fullTime.home?.toString() || '0',
                  flag: '⚽'
                },
                away: {
                  name: match.awayTeam.name,
                  score: match.score.fullTime.away?.toString() || '0',
                  flag: '⚽'
                }
              },
              details: {
                timeRemaining: 'Live',
                currentInnings: 'Live'
              },
              highlights: []
            }));
          } else if (data.data && Array.isArray(data.data)) {
            // Basketball API response
            return data.data.map((match: any) => ({
              id: match.id.toString(),
              title: `${match.home_team.name} vs ${match.visitor_team.name}`,
              competition: 'NBA Regular Season',
              matchType: 'Basketball',
              status: 'live',
              venue: match.arena || 'TBD',
              date: new Date().toISOString().split('T')[0],
              time: new Date().toLocaleTimeString(),
              teams: {
                home: {
                  name: match.home_team.name,
                  score: match.home_team_score?.toString() || '0',
                  flag: '🏀'
                },
                away: {
                  name: match.visitor_team.name,
                  score: match.visitor_team_score?.toString() || '0',
                  flag: '🏀'
                }
              },
              details: {
                timeRemaining: 'Live',
                currentInnings: 'Live'
              },
              highlights: []
            }));
          }
        }
      } catch (apiError) {
        console.log(`API ${apiUrl} failed, trying next...`);
        continue;
      }
    }
    
         // If all APIs fail, return updated mock data with current dates
     console.log('All APIs failed, using mock data with current date');
     return mockMatches.map(match => ({
       ...match,
       date: getCurrentDate(), // Always use current date
       time: new Date().toLocaleTimeString()
     }));
   } catch (error) {
     console.error('Error fetching live scores:', error);
     // Return mock data with current timestamp
     return mockMatches.map(match => ({
       ...match,
       date: getCurrentDate(), // Always use current date
       time: new Date().toLocaleTimeString()
     }));
   }
};

const LiveScore = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [selectedSport, setSelectedSport] = useState('all');
  const [isAutoRefresh, setIsAutoRefresh] = useState(true);
  const [showTransition, setShowTransition] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [lastUpdateTime, setLastUpdateTime] = useState(new Date());

  // Fetch live scores with React Query
  const { data: matches = mockMatches, isLoading, refetch } = useQuery({
    queryKey: ['liveScores'],
    queryFn: fetchLiveScores,
    refetchInterval: isAutoRefresh ? 15000 : false, // Auto-refresh every 15 seconds
    refetchIntervalInBackground: true,
  });

  // Update current time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulate real-time score updates for demo purposes
  useEffect(() => {
    const scoreUpdateTimer = setInterval(() => {
      // This simulates real-time updates - in production, this would come from the API
      if (matches.length > 0) {
        // Update random match scores to simulate live updates
        const randomMatchIndex = Math.floor(Math.random() * matches.length);
        const updatedMatches = [...matches];
        
        if (updatedMatches[randomMatchIndex]) {
          const match = updatedMatches[randomMatchIndex];
          if (match.status === 'live') {
            // Simulate score changes for live matches
            if (match.matchType === 'Cricket' || match.matchType === 'ODI' || match.matchType === 'Test') {
              // Update cricket scores
              const currentScore = match.teams.home.score;
              const [runs, wickets] = currentScore.split('/').map(Number);
              if (runs < 300 && Math.random() > 0.7) {
                const newRuns = runs + Math.floor(Math.random() * 5) + 1;
                updatedMatches[randomMatchIndex] = {
                  ...match,
                  teams: {
                    ...match.teams,
                    home: { ...match.teams.home, score: `${newRuns}/${wickets}` }
                  }
                };
              }
            } else if (match.matchType === 'Football') {
              // Update football scores
              if (Math.random() > 0.8) {
                const homeScore = parseInt(match.teams.home.score);
                const awayScore = parseInt(match.teams.away.score);
                const newHomeScore = homeScore + (Math.random() > 0.5 ? 1 : 0);
                const newAwayScore = awayScore + (Math.random() > 0.5 ? 1 : 0);
                
                updatedMatches[randomMatchIndex] = {
                  ...match,
                  teams: {
                    home: { ...match.teams.home, score: newHomeScore.toString() },
                    away: { ...match.teams.away, score: newAwayScore.toString() }
                  }
                };
              }
            } else if (match.matchType === 'Basketball') {
              // Update basketball scores
              if (Math.random() > 0.7) {
                const homeScore = parseInt(match.teams.home.score);
                const awayScore = parseInt(match.teams.away.score);
                const newHomeScore = homeScore + Math.floor(Math.random() * 3) + 1;
                const newAwayScore = awayScore + Math.floor(Math.random() * 3) + 1;
                
                updatedMatches[randomMatchIndex] = {
                  ...match,
                  teams: {
                    home: { ...match.teams.home, score: newHomeScore.toString() },
                    away: { ...match.teams.away, score: newAwayScore.toString() }
                  }
                };
              }
            }
          }
        }
      }
    }, 10000); // Update every 10 seconds for demo

    return () => clearInterval(scoreUpdateTimer);
  }, [matches]);

  // Manual refresh function
  const handleRefresh = async () => {
    setIsUpdating(true);
    await refetch();
    setLastUpdateTime(new Date());
    setTimeout(() => setIsUpdating(false), 1000);
  };

  // Filter matches by sport
  const filteredMatches = selectedSport === 'all' 
    ? matches 
    : matches.filter(match => match.matchType.toLowerCase().includes(selectedSport.toLowerCase()));

  const sports = [
    { id: 'all', name: 'All Sports', icon: Trophy },
    { id: 'cricket', name: 'Cricket', icon: Target },
    { id: 'football', name: 'Football', icon: Users },
    { id: 'basketball', name: 'Basketball', icon: Activity }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live': return 'text-red-500 bg-red-500/10';
      case 'ended': return 'text-gray-500 bg-gray-500/10';
      case 'upcoming': return 'text-blue-500 bg-blue-500/10';
      default: return 'text-gray-500 bg-gray-500/10';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'live': return <Wifi className="w-4 h-4 animate-pulse" />;
      case 'ended': return <Award className="w-4 h-4" />;
      case 'upcoming': return <Clock className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <>
      <LiveScoreTransition 
        isVisible={showTransition} 
        onComplete={() => setShowTransition(false)} 
      />
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Sticky Live Score Header */}
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="sticky top-16 z-40 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md border-b border-white/10"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <motion.div
                  animate={{ 
                    boxShadow: [
                      "0 0 20px rgba(59, 130, 246, 0.5)",
                      "0 0 40px rgba(59, 130, 246, 0.8)",
                      "0 0 20px rgba(59, 130, 246, 0.5)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full neon-glow"
                >
                  <Zap className="w-4 h-4" />
                  <span className="font-bold text-sm">LIVE SCORES</span>
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                </motion.div>
                                 <span className="text-white/70 text-sm">Real-time updates every 15 seconds</span>
                 <motion.div
                   animate={{ 
                     opacity: [1, 0.5, 1],
                     scale: [1, 1.05, 1]
                   }}
                   transition={{ duration: 2, repeat: Infinity }}
                   className="flex items-center space-x-1 text-green-400 text-xs"
                 >
                   <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                   <span>LIVE UPDATES</span>
                 </motion.div>
                 <motion.div
                   animate={{ 
                     opacity: [1, 0.7, 1],
                     scale: [1, 1.02, 1]
                   }}
                   transition={{ duration: 1.5, repeat: Infinity }}
                   className="flex items-center space-x-1 text-yellow-400 text-xs"
                 >
                   <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                   <span>LATEST MATCHES</span>
                 </motion.div>
              </div>
                             <div className="flex items-center space-x-2">
                 <motion.div 
                   key={currentTime.getTime()}
                   initial={{ opacity: 0, scale: 0.8 }}
                   animate={{ opacity: 1, scale: 1 }}
                   className="text-xs text-green-400 font-mono"
                 >
                   {currentTime.toLocaleTimeString()}
                 </motion.div>
                 <div className="text-xs text-gray-400">
                   Last: {lastUpdateTime.toLocaleTimeString()}
                 </div>
               </div>
            </div>
          </div>
        </motion.div>
        
        {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="pt-24 pb-8 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <motion.div
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(59, 130, 246, 0.5)",
                  "0 0 40px rgba(59, 130, 246, 0.8)",
                  "0 0 20px rgba(59, 130, 246, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full mb-6"
            >
              <Zap className="w-5 h-5" />
              <span className="font-bold text-lg">LIVE SCORES</span>
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-orbitron">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Real-Time
              </span>{' '}
              Sports Updates
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-poppins">
              Stay connected with live scores, match details, and real-time updates from your favorite sports
            </p>
          </motion.div>

          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8"
          >
            {/* Sport Filter */}
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full p-1">
              {sports.map((sport) => {
                const Icon = sport.icon;
                return (
                  <motion.button
                    key={sport.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedSport(sport.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedSport === sport.id
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{sport.name}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* Refresh Controls */}
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsAutoRefresh(!isAutoRefresh)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isAutoRefresh
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                }`}
              >
                {isAutoRefresh ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                <span>Auto Refresh</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleRefresh}
                disabled={isUpdating}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium hover:shadow-lg transition-all duration-200 disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${isUpdating ? 'animate-spin' : ''}`} />
                <span>Refresh</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Live Matches Grid */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 animate-pulse"
                >
                  <div className="h-48 bg-gradient-to-br from-white/10 to-white/5 rounded-xl"></div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {filteredMatches.map((match, index) => (
                  <motion.div
                    key={match.id}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                    }}
                                         className="group relative match-card glass-card rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden hover-lift"
                  >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Status Badge */}
                    <div className="relative z-10 flex items-center justify-between mb-4">
                                             <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(match.status)} status-indicator`}>
                         {getStatusIcon(match.status)}
                         <span className="capitalize">{match.status}</span>
                       </div>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="w-6 h-6"
                      >
                        <Sparkles className="w-6 h-6 text-yellow-400" />
                      </motion.div>
                    </div>

                    {/* Match Info */}
                    <div className="relative z-10 space-y-4">
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                          {match.title}
                        </h3>
                                                 <p className="text-sm text-gray-400 mb-1 competition-badge inline-block">{match.competition}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-3 h-3" />
                                                         <span className="line-clamp-1 venue-text">{match.venue}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{match.time}</span>
                          </div>
                        </div>
                      </div>

                      {/* Teams */}
                      <div className="space-y-3">
                        {[match.teams.home, match.teams.away].map((team, idx) => (
                                                     <motion.div
                             key={idx}
                             whileHover={{ x: 5 }}
                             className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10 score-card"
                           >
                            <div className="flex items-center space-x-3">
                              <span className="text-2xl">{team.flag}</span>
                              <span className="font-medium text-white">{team.name}</span>
                            </div>
                            <div className="text-right">
                                                             <motion.div 
                                 key={team.score}
                                 initial={{ scale: 1, color: '#ffffff' }}
                                 animate={{ scale: [1, 1.1, 1], color: ['#ffffff', '#10b981', '#ffffff'] }}
                                 transition={{ duration: 0.5 }}
                                 className="text-xl font-bold team-score"
                               >
                                 {team.score}
                               </motion.div>
                              {idx === 0 && match.details?.currentInnings && (
                                <div className="text-xs text-gray-400">{match.details.currentInnings}</div>
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Match Details */}
                      {match.details && (
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          {match.details.overs && (
                            <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                              <span className="text-gray-400">Overs</span>
                              <span className="text-white font-medium">{match.details.overs}</span>
                            </div>
                          )}
                          {match.details.timeRemaining && (
                            <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                              <span className="text-gray-400">Time</span>
                                                             <span className="text-white font-medium time-remaining">{match.details.timeRemaining}</span>
                            </div>
                          )}
                          {match.details.runRate && (
                            <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                              <span className="text-gray-400">RR</span>
                              <span className="text-white font-medium">{match.details.runRate}</span>
                            </div>
                          )}
                          {match.details.currentInnings && (
                            <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                              <span className="text-gray-400">Innings</span>
                              <span className="text-white font-medium">{match.details.currentInnings}</span>
                            </div>
                          )}
                        </div>
                      )}

                                             {/* Highlights */}
                       {match.highlights && match.highlights.length > 0 && (
                         <div className="space-y-2 highlights-section">
                           <h4 className="text-sm font-medium text-gray-300">Highlights</h4>
                           <div className="space-y-1">
                             {match.highlights.slice(0, 2).map((highlight, idx) => (
                               <div key={idx} className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded">
                                 {highlight}
                               </div>
                             ))}
                           </div>
                         </div>
                       )}

                      {/* View Details Button */}
                                             <motion.button
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.95 }}
                         className="w-full mt-4 view-details-btn flex items-center justify-center space-x-2"
                       >
                         <span>View Details</span>
                         <ArrowRight className="w-4 h-4" />
                       </motion.button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}

          {/* No Matches Found */}
          {!isLoading && filteredMatches.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🏏</div>
              <h3 className="text-2xl font-bold text-white mb-2">No Live Matches</h3>
              <p className="text-gray-400">Check back later for live sports action!</p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Floating Action Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleRefresh}
          disabled={isUpdating}
          className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center neon-glow"
        >
          <RefreshCw className={`w-6 h-6 ${isUpdating ? 'animate-spin' : ''}`} />
        </motion.button>
      </motion.div>

      {/* Live Indicator */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="fixed top-24 right-8 z-50"
      >
        <div className="flex items-center space-x-2 bg-red-500/20 backdrop-blur-md border border-red-500/30 rounded-full px-3 py-1">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-red-400 text-xs font-medium">LIVE</span>
        </div>
      </motion.div>

      <Footer />
    </div>
    </>
  );
};

export default LiveScore; 