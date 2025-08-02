import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

interface UsePageTransitionReturn {
  isTransitioning: boolean;
  transitionDirection: 'in' | 'out';
  navigateWithTransition: (to: string) => void;
  startTransition: (direction: 'in' | 'out') => void;
}

export const usePageTransition = (): UsePageTransitionReturn => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState<'in' | 'out'>('in');
  const navigate = useNavigate();

  const startTransition = useCallback((direction: 'in' | 'out') => {
    setTransitionDirection(direction);
    setIsTransitioning(true);
  }, []);

  const navigateWithTransition = useCallback((to: string) => {
    setTransitionDirection('out');
    setIsTransitioning(true);
    
    // Wait for the exit animation to complete before navigating
    setTimeout(() => {
      navigate(to);
      // Start the entrance animation after navigation
      setTimeout(() => {
        setTransitionDirection('in');
        setIsTransitioning(true);
        // End the transition after entrance animation
        setTimeout(() => {
          setIsTransitioning(false);
        }, 1200);
      }, 100);
    }, 600);
  }, [navigate]);

  return {
    isTransitioning,
    transitionDirection,
    navigateWithTransition,
    startTransition
  };
}; 