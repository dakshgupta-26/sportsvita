import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  onLoadingComplete: () => void;
}

const Loader = ({ onLoadingComplete }: LoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('');
  const fullText = 'Unleashing Awesomeness...';

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    // Typewriter effect
    let textIndex = 0;
    const textInterval = setInterval(() => {
      if (textIndex <= fullText.length) {
        setLoadingText(fullText.slice(0, textIndex));
        textIndex++;
      } else {
        clearInterval(textInterval);
      }
    }, 100);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onLoadingComplete, fullText]);

  const pulseVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      >
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 20% 80%, hsl(var(--neon-purple) / 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 20%, hsl(var(--neon-cyan) / 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 40% 40%, hsl(var(--neon-pink) / 0.3) 0%, transparent 50%)',
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0"
          />
        </div>

        {/* Main loader content */}
        <div className="relative z-10 text-center">
          {/* Pulsing orb */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="mx-auto mb-8 h-32 w-32 rounded-full bg-gradient-to-r from-primary via-secondary to-accent glow-primary"
          >
            <div className="h-full w-full rounded-full bg-gradient-to-r from-primary/50 via-secondary/50 to-accent/50 backdrop-blur-sm" />
          </motion.div>

          {/* Loading text with typewriter effect */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8 text-3xl font-bold text-gradient md:text-5xl"
          >
            {loadingText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="text-primary"
            >
              |
            </motion.span>
          </motion.h1>

          {/* Progress bar */}
          <div className="mx-auto w-80 max-w-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="mb-4 h-2 overflow-hidden rounded-full bg-muted"
            >
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-secondary to-accent glow-primary"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-sm text-muted-foreground"
            >
              {progress}%
            </motion.p>
          </div>

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-2 w-2 rounded-full bg-primary/60"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [-10, 10, -10],
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;