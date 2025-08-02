import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

interface ImageGridProps {
  images: { src: string; alt: string; title?: string }[];
}

const ImageGrid = ({ images }: ImageGridProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX - 20,
          y: e.clientY - 20,
          duration: 0.1,
          ease: "power2.out"
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleCardHover = (index: number, isEntering: boolean) => {
    setHoveredIndex(isEntering ? index : null);
    setIsHovering(isEntering);
  };

  return (
    <div className="relative" ref={gridRef}>
      {/* Custom cursor */}
      <motion.div
        ref={cursorRef}
        className={`pointer-events-none fixed top-0 left-0 z-50 mix-blend-difference transition-all duration-300 ${
          isHovering ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          width: isHovering ? '80px' : '40px',
          height: isHovering ? '80px' : '40px',
        }}
      >
        <div className={`h-full w-full rounded-full transition-all duration-300 ${
          isHovering 
            ? 'bg-gradient-to-r from-primary to-secondary glow-primary' 
            : 'bg-white'
        }`} />
        {isHovering && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 flex items-center justify-center text-xs font-bold text-black"
          >
            VIEW
          </motion.div>
        )}
      </motion.div>

      {/* Image grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="group relative cursor-none overflow-hidden rounded-3xl bg-card glass"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ 
              rotateX: 5,
              rotateY: 5,
              scale: 1.05,
              z: 50,
            }}
            onMouseEnter={() => handleCardHover(index, true)}
            onMouseLeave={() => handleCardHover(index, false)}
            style={{
              transformStyle: 'preserve-3d',
              perspective: '1000px',
            }}
          >
            {/* Magnetic effect container */}
            <motion.div
              className="relative h-80 overflow-hidden rounded-3xl"
              animate={hoveredIndex === index ? {
                rotateX: (mousePosition.y - window.innerHeight / 2) * 0.01,
                rotateY: (mousePosition.x - window.innerWidth / 2) * 0.01,
              } : {
                rotateX: 0,
                rotateY: 0,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Background image */}
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

              {/* Glowing border effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                style={{
                  background: `linear-gradient(45deg, 
                    hsl(var(--neon-purple) / 0.5), 
                    hsl(var(--neon-cyan) / 0.5), 
                    hsl(var(--neon-pink) / 0.5))`,
                  padding: '2px',
                }}
              >
                <div className="h-full w-full rounded-3xl bg-background/90" />
              </motion.div>

              {/* Ripple effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ 
                  scale: [0, 1.5],
                  opacity: [0.6, 0],
                }}
                transition={{ duration: 0.6 }}
                style={{
                  background: 'radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)',
                }}
              />

              {/* Content overlay */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6 text-white"
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-2 text-gradient">
                  {image.title || image.alt}
                </h3>
                <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary rounded-full" />
              </motion.div>

              {/* Floating particles */}
              {hoveredIndex === index && [...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute h-2 w-2 rounded-full bg-primary"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${20 + (i % 2) * 60}%`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    y: [-20, -60, -100],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;