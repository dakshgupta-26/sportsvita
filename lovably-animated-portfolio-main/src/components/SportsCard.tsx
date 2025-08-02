import { motion } from 'framer-motion';
import { useState } from 'react';

interface SportsCardProps {
  title: string;
  subtitle: string;
  image: string;
  score?: string;
  time?: string;
  isLive?: boolean;
  onClick?: () => void;
}

const SportsCard = ({ title, subtitle, image, score, time, isLive = false, onClick }: SportsCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="glass rounded-2xl overflow-hidden border border-primary/20 relative">
        {/* Background Image */}
        <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20">
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ rotate: isHovered ? 360 : 0 }}
              transition={{ duration: 2, ease: "linear" }}
              className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center"
            >
              <span className="text-white font-bold text-lg">⚽</span>
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground">{subtitle}</p>
            </div>
            {isLive && (
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold"
              >
                LIVE
              </motion.div>
            )}
          </div>

          {score && (
            <div className="flex justify-between items-center mb-2">
              <span className="text-2xl font-bold text-primary">{score}</span>
              {time && (
                <span className="text-sm text-muted-foreground">{time}</span>
              )}
            </div>
          )}

          {/* Hover Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl opacity-0"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SportsCard; 