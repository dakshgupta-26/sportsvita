import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio?: string;
}

interface TeamSectionProps {
  members: TeamMember[];
}

const TeamSection = ({ members }: TeamSectionProps) => {
  const [hoveredMember, setHoveredMember] = useState<TeamMember | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (member: TeamMember, event: React.MouseEvent) => {
    setHoveredMember(member);
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseLeave = () => {
    setHoveredMember(null);
  };

  return (
    <div className="relative">
      <div className="space-y-6">
        {members.map((member, index) => (
          <motion.div
            key={index}
            className="group relative cursor-pointer"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            onMouseEnter={(e) => handleMouseEnter(member, e)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Name and role */}
            <motion.div
              className="flex items-center justify-between border-b border-border/30 py-6 transition-colors duration-300 group-hover:border-primary/50"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.2 }}
            >
              <div>
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 transition-colors duration-300 group-hover:text-gradient md:text-3xl">
                  {member.name}
                </h3>
                <p className="text-muted-foreground group-hover:text-secondary transition-colors duration-300">
                  {member.role}
                </p>
              </div>
              
              {/* Arrow indicator */}
              <motion.div
                className="text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                initial={{ x: -10 }}
                whileHover={{ x: 0 }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            </motion.div>

            {/* Glowing line effect */}
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        ))}
      </div>

      {/* Floating card popup */}
      <AnimatePresence>
        {hoveredMember && (
          <motion.div
            className="pointer-events-none fixed z-50"
            style={{
              left: mousePosition.x + 20,
              top: mousePosition.y - 100,
            }}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="bg-white/95 backdrop-blur-md max-w-xs overflow-hidden rounded-2xl border border-gray-200 shadow-2xl p-6 dark:bg-gray-800/95 dark:border-gray-700">
              {/* Profile image */}
              <motion.div
                className="mb-4 h-20 w-20 overflow-hidden rounded-full ring-2 ring-primary/50"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                <img
                  src={hoveredMember.image}
                  alt={hoveredMember.name}
                  className="h-full w-full object-cover"
                />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <h4 className="mb-1 text-lg font-bold text-gradient">
                  {hoveredMember.name}
                </h4>
                <p className="mb-3 text-sm text-blue-600 dark:text-blue-400 font-medium">
                  {hoveredMember.role}
                </p>
                {hoveredMember.bio && (
                  <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                    {hoveredMember.bio}
                  </p>
                )}
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-primary/60 animate-glow-pulse" />
              <div className="absolute -bottom-1 -left-1 h-3 w-3 rounded-full bg-secondary/60" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TeamSection;