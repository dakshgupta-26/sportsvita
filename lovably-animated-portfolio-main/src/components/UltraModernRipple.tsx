import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
}

const UltraModernRipple: React.FC = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [clickCount, setClickCount] = useState(0);
  const [rippleId, setRippleId] = useState(0);
  const [particleId, setParticleId] = useState(0);

  // Color palette for ripples
  const rippleColors = [
    'from-blue-400 to-cyan-400',
    'from-purple-400 to-pink-400',
    'from-green-400 to-emerald-400',
    'from-orange-400 to-red-400',
    'from-indigo-400 to-blue-400',
    'from-pink-400 to-rose-400',
    'from-cyan-400 to-blue-400',
    'from-emerald-400 to-teal-400'
  ];

  const particleColors = [
    'bg-blue-400',
    'bg-purple-400',
    'bg-green-400',
    'bg-orange-400',
    'bg-pink-400',
    'bg-cyan-400',
    'bg-emerald-400',
    'bg-indigo-400'
  ];

  const createRipple = useCallback((x: number, y: number) => {
    const color = rippleColors[Math.floor(Math.random() * rippleColors.length)];
    const delay = Math.random() * 0.2;

    const newRipple: Ripple = {
      id: rippleId,
      x,
      y,
      size: 0,
      color,
      delay
    };

    setRipples(prev => [...prev, newRipple]);
    setClickCount(prev => prev + 1);
    setRippleId(prev => prev + 1);

    // Create particles around the click
    const newParticles: Particle[] = Array.from({ length: 8 }, (_, i) => ({
      id: particleId + i,
      x: x + (Math.random() - 0.5) * 100,
      y: y + (Math.random() - 0.5) * 100,
      color: particleColors[Math.floor(Math.random() * particleColors.length)],
      size: Math.random() * 3 + 1
    }));

    setParticles(prev => [...prev, ...newParticles]);
    setParticleId(prev => prev + 8);

    // Remove ripple after animation completes
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 1200);

    // Remove particles after animation
    setTimeout(() => {
      setParticles(prev => prev.filter(particle => !newParticles.some(np => np.id === particle.id)));
    }, 2000);
  }, [rippleId, particleId]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      createRipple(e.clientX, e.clientY);
    };

    document.addEventListener('click', handleClick, true);
    
    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [createRipple]);

  return (
    <>


      {/* Primary Ripple Effects - Small Circles */}
      <div className="fixed inset-0 pointer-events-none z-[9998]">
        <AnimatePresence>
          {ripples.map((ripple) => (
            <motion.div
              key={ripple.id}
              className={`absolute rounded-full bg-gradient-to-r ${ripple.color} border-2 border-white/30 shadow-2xl`}
              style={{
                left: ripple.x,
                top: ripple.y,
                transform: 'translate(-50%, -50%)',
                width: 0,
                height: 0,
              }}
              initial={{
                width: 0,
                height: 0,
                opacity: 1,
                scale: 0.8,
              }}
              animate={{
                width: 80, // Smaller circle
                height: 80, // Smaller circle
                opacity: 0,
                scale: 1.2,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: ripple.delay,
              }}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Secondary Ripple Layer - Medium Circles */}
      <div className="fixed inset-0 pointer-events-none z-[9997]">
        <AnimatePresence>
          {ripples.map((ripple) => (
            <motion.div
              key={`secondary-${ripple.id}`}
              className={`absolute rounded-full bg-gradient-to-r ${ripple.color} opacity-40`}
              style={{
                left: ripple.x,
                top: ripple.y,
                transform: 'translate(-50%, -50%)',
                width: 0,
                height: 0,
              }}
              initial={{
                width: 0,
                height: 0,
                opacity: 0.6,
                scale: 0.6,
              }}
              animate={{
                width: 120,
                height: 120,
                opacity: 0,
                scale: 1.5,
              }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
                delay: ripple.delay + 0.1,
              }}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Tertiary Ripple Layer - Large Circles */}
      <div className="fixed inset-0 pointer-events-none z-[9996]">
        <AnimatePresence>
          {ripples.map((ripple) => (
            <motion.div
              key={`tertiary-${ripple.id}`}
              className={`absolute rounded-full bg-gradient-to-r ${ripple.color} opacity-20`}
              style={{
                left: ripple.x,
                top: ripple.y,
                transform: 'translate(-50%, -50%)',
                width: 0,
                height: 0,
              }}
              initial={{
                width: 0,
                height: 0,
                opacity: 0.4,
                scale: 0.4,
              }}
              animate={{
                width: 200,
                height: 200,
                opacity: 0,
                scale: 2,
              }}
              transition={{
                duration: 1.6,
                ease: "easeOut",
                delay: ripple.delay + 0.2,
              }}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Particle Effects */}
      <div className="fixed inset-0 pointer-events-none z-[9995]">
        <AnimatePresence>
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className={`absolute rounded-full ${particle.color} shadow-lg`}
              style={{
                left: particle.x,
                top: particle.y,
                width: particle.size,
                height: particle.size,
                transform: 'translate(-50%, -50%)',
              }}
              initial={{
                opacity: 1,
                scale: 0,
                x: 0,
                y: 0,
              }}
              animate={{
                opacity: 0,
                scale: 1,
                x: (Math.random() - 0.5) * 200,
                y: (Math.random() - 0.5) * 200,
              }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
                delay: Math.random() * 0.3,
              }}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Floating Background Particles */}
      <div className="fixed inset-0 pointer-events-none z-[9994]">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={`bg-particle-${i}`}
            className={`absolute rounded-full ${particleColors[i % particleColors.length]} opacity-20`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Glow Effects */}
      <div className="fixed inset-0 pointer-events-none z-[9993]">
        <AnimatePresence>
          {ripples.map((ripple) => (
            <motion.div
              key={`glow-${ripple.id}`}
              className={`absolute rounded-full bg-gradient-to-r ${ripple.color} blur-xl`}
              style={{
                left: ripple.x,
                top: ripple.y,
                transform: 'translate(-50%, -50%)',
                width: 0,
                height: 0,
              }}
              initial={{
                width: 0,
                height: 0,
                opacity: 0.8,
              }}
              animate={{
                width: 150,
                height: 150,
                opacity: 0,
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: ripple.delay + 0.05,
              }}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Pulse Rings */}
      <div className="fixed inset-0 pointer-events-none z-[9992]">
        <AnimatePresence>
          {ripples.map((ripple) => (
            <motion.div
              key={`pulse-${ripple.id}`}
              className="absolute rounded-full border-2 border-white/40"
              style={{
                left: ripple.x,
                top: ripple.y,
                transform: 'translate(-50%, -50%)',
                width: 0,
                height: 0,
              }}
              initial={{
                width: 0,
                height: 0,
                opacity: 1,
              }}
              animate={{
                width: 100,
                height: 100,
                opacity: 0,
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: ripple.delay + 0.15,
              }}
            />
          ))}
        </AnimatePresence>
      </div>
    </>
  );
};

export default UltraModernRipple; 