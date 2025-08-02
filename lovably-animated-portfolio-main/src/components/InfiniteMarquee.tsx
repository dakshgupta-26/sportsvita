import { motion } from 'framer-motion';

interface InfiniteMarqueeProps {
  items: string[];
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
}

const InfiniteMarquee = ({ 
  items, 
  speed = 50, 
  direction = 'left',
  className = ''
}: InfiniteMarqueeProps) => {
  const duplicatedItems = [...items, ...items];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Gradient masks for fade effect */}
      <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />
      
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: direction === 'left' ? [0, -1920] : [-1920, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear',
          },
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="mx-8 flex items-center"
          >
            <span className="text-4xl font-bold text-gradient md:text-6xl lg:text-8xl">
              {item}
            </span>
            <div className="mx-8 h-2 w-2 rounded-full bg-primary animate-glow-pulse" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteMarquee;