import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import '../styles/trending-players.css';

interface Player {
  id: string;
  name: string;
  team: string;
  position: string;
  stats: {
    goals?: number;
    assists?: number;
    points?: number;
    rebounds?: number;
  };
  image: string;
  teamColor: string;
}

interface TrendingPlayersMarqueeProps {
  players: Player[];
  speed?: number;
  className?: string;
}

const TrendingPlayersMarquee: React.FC<TrendingPlayersMarqueeProps> = ({
  players,
  speed = 30,
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [anyCardHovered, setAnyCardHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Duplicate players for seamless loop - more copies for smoother infinite scroll
  const duplicatedPlayers = [...players, ...players, ...players, ...players, ...players];

  // Custom cursor effect
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // GSAP animation for smooth scrolling - much faster speed
  useEffect(() => {
    if (!containerRef.current || typeof window === 'undefined') return;

    const tl = gsap.timeline({ repeat: -1 });
    
    tl.to(containerRef.current, {
      x: '-100%',
      duration: speed * 2.0, // Very slow animation for better visibility
      ease: 'power1.out',
      paused: anyCardHovered
    });

    // Resume animation when no card is hovered
    if (!anyCardHovered) {
      tl.play();
    } else {
      tl.pause();
    }

    return () => {
      tl.kill();
    };
  }, [speed, anyCardHovered]);

  // Cursor transform for 3D effect - only on client side
  const cursorX = useTransform(mouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 0], [-10, 10]);
  const cursorY = useTransform(mouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 0], [-10, 10]);

  return (
    <div className={`relative w-full overflow-hidden marquee-container ${className}`} style={{ minHeight: '400px' }}>


      {/* Modern animated wave effects */}
      <div className="absolute left-0 top-0 z-10 h-full w-20 overflow-hidden">
        <motion.div
          className="w-full h-full bg-gradient-to-r from-pink-400/30 via-purple-400/20 to-transparent"
          animate={{
            x: [0, 20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="absolute right-0 top-0 z-10 h-full w-20 overflow-hidden">
        <motion.div
          className="w-full h-full bg-gradient-to-l from-cyan-400/30 via-purple-400/20 to-transparent"
          animate={{
            x: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Main marquee container */}
      <div
        ref={containerRef}
        className="flex gap-6 py-8 w-max"
      >
        {duplicatedPlayers.map((player, index) => (
          <PlayerCard
            key={`${player.id}-${index}`}
            player={player}
            index={index}
            mousePosition={mousePosition}
            isHovered={isHovered}
            onCardHover={setAnyCardHovered}
          />
        ))}
      </div>

      {/* Floating particles for Gen Z aesthetic */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              '--delay': Math.random() * 2,
            } as React.CSSProperties}
          />
        ))}
        
        {/* Modern animated orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Individual Player Card Component
interface PlayerCardProps {
  player: Player;
  index: number;
  mousePosition: { x: number; y: number };
  isHovered: boolean;
  onCardHover: (hovered: boolean) => void;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player, index, mousePosition, isHovered, onCardHover }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardHovered, setCardHovered] = useState(false);
  const [isCardHovered, setIsCardHovered] = useState(false);

  // 3D tilt effect based on mouse position
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${cardHovered ? 1.05 : 1})`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    }
    setCardHovered(false);
    setIsCardHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative min-w-[280px] max-w-[320px] h-[380px] rounded-3xl bg-gradient-to-br from-white/90 via-white/70 to-white/50 backdrop-blur-xl border border-white/30 overflow-hidden group cursor-pointer player-card shadow-2xl"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        setCardHovered(true);
        setIsCardHovered(true);
        onCardHover(true);
      }}
      onMouseLeave={() => {
        handleMouseLeave();
        onCardHover(false);
      }}
      whileHover={{ scale: 1.05, y: -10 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25
      }}
      style={{
        boxShadow: cardHovered 
          ? `0 25px 50px rgba(0, 0, 0, 0.15), 0 0 40px ${player.teamColor}30, 0 0 80px ${player.teamColor}20`
          : '0 10px 40px rgba(0, 0, 0, 0.1), 0 0 20px rgba(139, 92, 246, 0.1)'
      }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-400/10 via-purple-400/10 to-cyan-400/10 animate-pulse" />
      
      {/* Player image container */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent z-10" />
        <img
          src={player.image}
          alt={player.name}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-120 player-image"
        />
        
        {/* Team color accent */}
        <div 
          className="absolute top-4 right-4 w-4 h-4 rounded-full shadow-lg"
          style={{ 
            backgroundColor: player.teamColor,
            boxShadow: `0 0 20px ${player.teamColor}60`
          }}
        />
      </div>

      {/* Player info */}
      <div className="p-6 space-y-3">
        <div>
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
            {player.name}
          </h3>
          <p className="text-sm text-gray-600 font-medium">{player.position}</p>
          <p className="text-sm font-bold" style={{ color: player.teamColor }}>
            {player.team}
          </p>
        </div>

        {/* Stats display */}
        <div className="flex gap-4 pt-2">
          {Object.entries(player.stats).slice(0, 2).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent stat-counter">{value}</div>
              <div className="text-xs text-gray-500 font-medium capitalize">{key}</div>
            </div>
          ))}
        </div>

        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${player.teamColor}30 0%, transparent 60%)`
          }}
        />
      </div>

      {/* Floating elements for Gen Z aesthetic */}
      <motion.div
        className="absolute top-3 right-3 w-3 h-3 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 rounded-full floating-element shadow-lg"
        style={{ '--delay': index * 0.2 } as React.CSSProperties}
      />
    </motion.div>
  );
};

export default TrendingPlayersMarquee; 