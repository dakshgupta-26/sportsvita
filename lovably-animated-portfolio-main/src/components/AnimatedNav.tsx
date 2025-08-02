import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  label: string;
  href: string;
}

interface AnimatedNavProps {
  items: NavItem[];
}

const AnimatedNav = ({ items }: AnimatedNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1,
      }
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.07,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: 50,
      rotateX: -90,
    },
    open: {
      opacity: 1,
      y: 0,
      rotateX: 0,
    }
  };

  const hamburgerVariants = {
    closed: {
      rotate: 0,
    },
    open: {
      rotate: 180,
    }
  };

  const line1Variants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 6 }
  };

  const line2Variants = {
    closed: { opacity: 1 },
    open: { opacity: 0 }
  };

  const line3Variants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -6 }
  };

  return (
    <>
      {/* Hamburger Button */}
      <motion.button
        onClick={toggleMenu}
        className="relative z-50 flex h-12 w-12 flex-col items-center justify-center space-y-1 rounded-xl bg-card glass border border-card-border hover-glow"
        variants={hamburgerVariants}
        animate={isOpen ? "open" : "closed"}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          className="block h-0.5 w-6 bg-gradient-to-r from-primary to-secondary"
          variants={line1Variants}
        />
        <motion.span
          className="block h-0.5 w-6 bg-gradient-to-r from-primary to-secondary"
          variants={line2Variants}
        />
        <motion.span
          className="block h-0.5 w-6 bg-gradient-to-r from-primary to-secondary"
          variants={line3Variants}
        />
      </motion.button>

      {/* Fullscreen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-background/95 backdrop-blur-xl"
          >
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                animate={{
                  background: [
                    'radial-gradient(circle at 20% 20%, hsl(var(--neon-purple) / 0.1) 0%, transparent 50%)',
                    'radial-gradient(circle at 80% 80%, hsl(var(--neon-cyan) / 0.1) 0%, transparent 50%)',
                    'radial-gradient(circle at 50% 50%, hsl(var(--neon-pink) / 0.1) 0%, transparent 50%)',
                  ]
                }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute inset-0"
              />
            </div>

            {/* Menu Content */}
            <motion.nav
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="relative z-10 text-center"
            >
              <motion.ul className="space-y-8">
                {items.map((item, index) => (
                  <motion.li key={index} variants={itemVariants}>
                    <motion.a
                      href={item.href}
                      className="group relative inline-block text-4xl font-bold text-foreground transition-colors duration-300 hover:text-transparent md:text-6xl"
                      onClick={() => setIsOpen(false)}
                      whileHover={{ scale: 1.05 }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      {/* Main text */}
                      <span className="relative z-10 group-hover:text-gradient">
                        {item.label}
                      </span>
                      
                      {/* Glowing background */}
                      <motion.div
                        className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Underline animation */}
                      <motion.div
                        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary"
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Floating particles on hover */}
                      <motion.div
                        className="absolute inset-0 pointer-events-none"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute h-1 w-1 rounded-full bg-primary"
                            style={{
                              left: `${20 + i * 30}%`,
                              top: '50%',
                            }}
                            animate={{
                              y: [-5, -15, -5],
                              opacity: [0, 1, 0],
                              scale: [0, 1, 0],
                            }}
                            transition={{
                              duration: 2,
                              delay: i * 0.2,
                              repeat: Infinity,
                            }}
                          />
                        ))}
                      </motion.div>
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Close instruction */}
              <motion.p
                variants={itemVariants}
                className="mt-16 text-sm text-muted-foreground"
              >
                Click anywhere to close
              </motion.p>
            </motion.nav>

            {/* Click outside to close */}
            <motion.div
              className="absolute inset-0 cursor-pointer"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AnimatedNav;