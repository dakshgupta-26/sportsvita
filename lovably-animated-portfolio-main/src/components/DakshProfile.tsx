import { motion } from 'framer-motion';
import { useState } from 'react';

interface DakshProfileProps {
  className?: string;
}

const DakshProfile = ({ className = "" }: DakshProfileProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`glass rounded-2xl p-6 border border-primary/20 relative overflow-hidden ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Profile Image Placeholder */}
      <div className="relative mb-6">
        <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border-4 border-primary/30">
          <motion.div
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 2, ease: "linear" }}
            className="text-4xl"
          >
            👨‍💻
          </motion.div>
        </div>
        
        {/* Live indicator for developer */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1"
        >
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          ONLINE
        </motion.div>
      </div>

      {/* Profile Info */}
      <div className="text-center">
        <motion.h3
          className="text-2xl font-bold text-gradient mb-2"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        >
          Daksh Gupta
        </motion.h3>
        
        <p className="text-lg font-semibold text-primary mb-3">
          Full Stack Developer
        </p>
        
        <p className="text-sm text-muted-foreground mb-4">
          Passionate developer with expertise in modern web technologies and sports applications
        </p>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {['React', 'TypeScript', 'Node.js', 'Python', 'Sports Apps'].map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium"
            >
              {skill}
            </motion.span>
          ))}
        </div>

        {/* Contact Info */}
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center justify-center gap-2">
            <span>📧</span>
            <span>daksh@example.com</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>🌐</span>
            <span>dakshgupta.dev</span>
          </div>
        </div>
      </div>

      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default DakshProfile; 