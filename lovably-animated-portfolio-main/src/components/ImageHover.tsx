import { useState } from 'react';
import { motion } from 'framer-motion';

interface ImageHoverProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageHover = ({ src, alt, className = '' }: ImageHoverProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`group relative overflow-hidden rounded-2xl ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Base image */}
      <motion.img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-all duration-500 ease-out"
        style={{
          filter: isHovered 
            ? 'grayscale(0%) brightness(1.1) contrast(1.1)' 
            : 'grayscale(100%) brightness(0.8) contrast(0.9)'
        }}
      />

      {/* Glitch overlay effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20"
        initial={{ opacity: 0, x: '-100%' }}
        animate={isHovered ? { 
          opacity: [0, 1, 0], 
          x: ['100%', '-100%'] 
        } : { opacity: 0, x: '-100%' }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />

      {/* Neon border effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: isHovered 
            ? 'linear-gradient(45deg, transparent, hsl(var(--neon-purple) / 0.3), transparent)'
            : 'transparent',
          padding: '2px',
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="h-full w-full rounded-2xl bg-background/5" />
      </motion.div>

      {/* Hover overlay with text */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-center"
        >
          <div className="text-lg font-semibold text-white mb-2">
            {alt}
          </div>
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ImageHover;