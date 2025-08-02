import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Match {
  id: string;
  team1: string;
  team2: string;
  score1: number;
  score2: number;
  time: string;
  isLive: boolean;
  sport: string;
}

const LiveScoreBoard = () => {
  const [matches, setMatches] = useState<Match[]>([
    {
      id: '1',
      team1: 'Manchester United',
      team2: 'Liverpool',
      score1: 2,
      score2: 1,
      time: '75\'',
      isLive: true,
      sport: 'Football'
    },
    {
      id: '2',
      team1: 'Lakers',
      team2: 'Warriors',
      score1: 108,
      score2: 102,
      time: 'Q4',
      isLive: true,
      sport: 'Basketball'
    },
    {
      id: '3',
      team1: 'Djokovic',
      team2: 'Nadal',
      score1: 6,
      score2: 4,
      time: 'Set 2',
      isLive: true,
      sport: 'Tennis'
    }
  ]);

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getSportIcon = (sport: string) => {
    switch (sport) {
      case 'Football': return '⚽';
      case 'Basketball': return '🏀';
      case 'Tennis': return '🎾';
      default: return '🏆';
    }
  };

  return (
    <div className="space-y-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h3 className="text-2xl font-bold text-gradient mb-2">Live Scores</h3>
        <p className="text-muted-foreground">
          {currentTime.toLocaleTimeString()}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {matches.map((match, index) => (
          <motion.div
            key={match.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass rounded-2xl p-6 border border-primary/20 relative overflow-hidden"
          >
            {/* Live indicator */}
            {match.isLive && (
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1"
              >
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                LIVE
              </motion.div>
            )}

            {/* Sport icon */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">{getSportIcon(match.sport)}</span>
              <span className="text-sm text-muted-foreground">{match.sport}</span>
            </div>

            {/* Teams and scores */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-foreground">{match.team1}</span>
                <motion.span
                  className="text-2xl font-bold text-primary"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                >
                  {match.score1}
                </motion.span>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-semibold text-foreground">{match.team2}</span>
                <motion.span
                  className="text-2xl font-bold text-primary"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                >
                  {match.score2}
                </motion.span>
              </div>
            </div>

            {/* Time */}
            <div className="mt-4 pt-4 border-t border-border/30">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Time</span>
                <span className="text-sm font-semibold text-foreground">{match.time}</span>
              </div>
            </div>

            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LiveScoreBoard; 