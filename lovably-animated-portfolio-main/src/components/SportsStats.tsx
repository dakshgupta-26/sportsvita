import { motion } from 'framer-motion';
import { useState } from 'react';

interface Stat {
  label: string;
  value: number;
  maxValue: number;
  color: string;
  icon: string;
}

const SportsStats = () => {
  const [stats] = useState<Stat[]>([
    {
      label: 'Goals Scored',
      value: 85,
      maxValue: 100,
      color: 'from-green-400 to-green-600',
      icon: '⚽'
    },
    {
      label: 'Assists',
      value: 42,
      maxValue: 50,
      color: 'from-blue-400 to-blue-600',
      icon: '🎯'
    },
    {
      label: 'Clean Sheets',
      value: 18,
      maxValue: 20,
      color: 'from-purple-400 to-purple-600',
      icon: '🛡️'
    },
    {
      label: 'Win Rate',
      value: 78,
      maxValue: 100,
      color: 'from-orange-400 to-orange-600',
      icon: '🏆'
    }
  ]);

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h3 className="text-2xl font-bold text-gradient mb-2">Season Statistics</h3>
        <p className="text-muted-foreground">Performance metrics and achievements</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass rounded-2xl p-6 border border-primary/20 relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{stat.icon}</span>
                <div>
                  <h4 className="font-semibold text-foreground">{stat.label}</h4>
                  <p className="text-sm text-muted-foreground">
                    {stat.value}/{stat.maxValue}
                  </p>
                </div>
              </div>
              <motion.div
                className="text-2xl font-bold text-gradient"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                {stat.value}
              </motion.div>
            </div>

            {/* Progress Bar */}
            <div className="relative h-3 bg-background/50 rounded-full overflow-hidden">
              <motion.div
                className={`h-full bg-gradient-to-r ${stat.color} rounded-full`}
                initial={{ width: 0 }}
                animate={{ width: `${(stat.value / stat.maxValue) * 100}%` }}
                transition={{ duration: 1, delay: index * 0.2 }}
              />
            </div>

            {/* Percentage */}
            <div className="mt-2 text-right">
              <span className="text-sm font-semibold text-foreground">
                {Math.round((stat.value / stat.maxValue) * 100)}%
              </span>
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

      {/* Additional Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="glass rounded-2xl p-6 border border-primary/20"
      >
        <h4 className="text-xl font-bold text-gradient mb-4">Quick Stats</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Matches', value: '38', icon: '🏟️' },
            { label: 'Wins', value: '25', icon: '✅' },
            { label: 'Draws', value: '8', icon: '🤝' },
            { label: 'Losses', value: '5', icon: '❌' }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <div className="text-2xl font-bold text-primary">{item.value}</div>
              <div className="text-sm text-muted-foreground">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SportsStats; 