import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/neon-ripple.css';

interface RipplePoint {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  timestamp: number;
}

const NeonRipple = () => {
  const [ripples, setRipples] = useState<RipplePoint[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [energyLevel, setEnergyLevel] = useState(0);
  const rippleId = useRef(0);

  // Futuristic neon color palette
  const neonColors = [
    'from-cyan-400 via-blue-500 to-purple-600',
    'from-pink-400 via-purple-500 to-indigo-600',
    'from-emerald-400 via-teal-500 to-cyan-600',
    'from-violet-400 via-purple-500 to-pink-600',
    'from-orange-400 via-red-500 to-pink-600',
    'from-indigo-400 via-purple-500 to-pink-600',
  ];

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const rect = document.body.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setClickCount(prev => prev + 1);
      setEnergyLevel(prev => Math.min(prev + 10, 100));
      
      const newRipple: RipplePoint = {
        id: rippleId.current++,
        x,
        y,
        color: neonColors[Math.floor(Math.random() * neonColors.length)],
        size: 0,
        timestamp: Date.now(),
      };

      setRipples(prev => [...prev, newRipple]);

      // Clean up after animation - faster now
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 800);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener('click', handleClick);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Gradually decrease energy level
  useEffect(() => {
    const interval = setInterval(() => {
      setEnergyLevel(prev => Math.max(prev - 1, 0));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="neon-ripple-container">
      {/* Main Ripple Effects */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            className="fixed pointer-events-none z-50 neon-optimized"
            style={{
              left: ripple.x,
              top: ripple.y,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{
              scale: [0, 1, 1.8, 2.5],
              opacity: [1, 0.8, 0.4, 0],
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
                         {/* Core Ripple */}
             <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${ripple.color} shadow-2xl neon-ripple-core neon-glow neon-chromatic`} />
             
             {/* Glow Layer */}
             <motion.div
               className={`absolute inset-0 w-6 h-6 rounded-full bg-gradient-to-r ${ripple.color} neon-glass`}
               style={{
                 filter: 'blur(12px)',
                 opacity: 0.8,
               }}
             />
             
             {/* Pulse Ring */}
             <motion.div
               className={`absolute inset-0 w-6 h-6 rounded-full bg-gradient-to-r ${ripple.color} neon-pulse`}
               style={{
                 opacity: 0.6,
               }}
             />
             
             {/* Sparkle Effect */}
             <div className="absolute inset-0 w-6 h-6 neon-sparkle">
               <div className="absolute top-0 left-1/2 w-1 h-1 bg-white rounded-full transform -translate-x-1/2" />
               <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-white rounded-full transform -translate-x-1/2" />
               <div className="absolute left-0 top-1/2 w-1 h-1 bg-white rounded-full transform -translate-y-1/2" />
               <div className="absolute right-0 top-1/2 w-1 h-1 bg-white rounded-full transform -translate-y-1/2" />
             </div>
          </motion.div>
        ))}
      </AnimatePresence>



             {/* Ambient Background Particles */}
       <div className="fixed inset-0 pointer-events-none z-10">
         {Array.from({ length: 8 }, (_, i) => (
           <motion.div
             key={i}
             className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full neon-particle"
             style={{
               left: `${Math.random() * 100}%`,
               top: `${Math.random() * 100}%`,
               opacity: 0.4,
             }}
             animate={{
               y: [0, -20, 0],
               opacity: [0.4, 0.8, 0.4],
             }}
             transition={{
               duration: 2 + Math.random() * 1,
               repeat: Infinity,
               ease: "easeInOut",
               delay: Math.random() * 2,
             }}
           />
         ))}
       </div>

      {/* Energy Level Indicator */}
      {energyLevel > 0 && (
        <motion.div
          className="fixed top-4 left-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold z-50 neon-glass"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          Energy: {energyLevel}%
        </motion.div>
      )}

      {/* Click Counter */}
      {clickCount > 0 && (
        <motion.div
          className="fixed top-4 right-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold z-50 neon-glass"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          Clicks: {clickCount}
        </motion.div>
      )}

      {/* Dynamic Background Glow based on Energy */}
      {energyLevel > 20 && (
        <motion.div
          className="fixed inset-0 pointer-events-none z-5"
          style={{
            background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(6, 182, 212, ${energyLevel * 0.003}) 0%, transparent 50%)`,
          }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
    </div>
  );
};

export default NeonRipple; 