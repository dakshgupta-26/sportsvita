# Modern Page Transition Animation System

## Overview

This sports website features a sophisticated page transition animation system that creates smooth, engaging transitions between pages. The system implements a "curtain" or "masking wipe" effect that slides in from the left and out to the right, with enhanced sports-themed aesthetics.

## Features

### 🎯 Core Animation
- **Duration**: 1.2 seconds total transition time
- **Timing Function**: Custom ease-in-out cubic-bezier(0.4, 0.0, 0.2, 1)
- **Direction**: Slides in from left, out to right
- **Responsive**: Works across all modern browsers and devices

### 🎨 Sports-Themed Design
- **Color Palette**: Blue gradient with neon cyan accents
- **Visual Elements**: Animated particles, sports icons, gradient overlays
- **Loading States**: Enhanced loading text with sports context
- **Progress Indicators**: Animated progress bars

### 🔧 Technical Implementation

#### Components Structure
```
src/
├── components/
│   ├── PageTransition.tsx          # Main transition component
│   └── NewsTransition.tsx          # Specialized news transitions
├── contexts/
│   └── PageTransitionContext.tsx   # Global transition state
├── hooks/
│   ├── usePageTransition.ts        # General transition hook
│   └── useNewsTransition.ts        # News-specific transitions
└── styles/
    └── transitions.css             # Animation styles
```

#### Key Components

**PageTransition.tsx**
- Main transition overlay with gradient backgrounds
- Animated particles and decorative elements
- Loading text with dynamic content
- GPU-accelerated animations

**NewsTransition.tsx**
- Enhanced sports-themed transitions for news page
- Sports icons (Newspaper, TrendingUp, Zap, etc.)
- Specialized color scheme and animations
- Progress bar with sports branding

**PageTransitionContext.tsx**
- Global state management for transitions
- Navigation functions with transition effects
- Transition direction and timing control

#### Hooks

**usePageTransition()**
```typescript
const { 
  isTransitioning, 
  transitionDirection, 
  navigateWithTransition, 
  startTransition 
} = usePageTransition();
```

**useNewsTransition()**
```typescript
const { 
  isNewsTransitioning, 
  newsTransitionDirection, 
  navigateToNews, 
  navigateFromNews 
} = useNewsTransition();
```

## Usage

### Basic Navigation with Transitions

```typescript
import { usePageTransition } from '@/hooks/usePageTransition';

const MyComponent = () => {
  const { navigateWithTransition } = usePageTransition();
  
  return (
    <button onClick={() => navigateWithTransition('/news')}>
      Go to News
    </button>
  );
};
```

### News-Specific Transitions

```typescript
import { useNewsTransition } from '@/hooks/useNewsTransition';

const NewsButton = () => {
  const { navigateToNews } = useNewsTransition();
  
  return (
    <button onClick={navigateToNews}>
      Latest News
    </button>
  );
};
```

### Integration with Navigation

The system automatically integrates with the main navigation component, providing smooth transitions for all navigation links.

## Animation Details

### Transition Phases

1. **Exit Phase** (0-600ms)
   - Overlay slides in from left
   - Current page content fades out
   - Loading text appears

2. **Navigation Phase** (600-700ms)
   - Route change occurs
   - New page content loads

3. **Entrance Phase** (700-1200ms)
   - Overlay slides out to right
   - New page content fades in
   - Transition completes

### Visual Elements

- **Gradient Backgrounds**: Animated blue-to-cyan gradients
- **Particles**: Floating animated particles with sports colors
- **Sports Icons**: Rotating sports-themed icons
- **Progress Bars**: Animated loading indicators
- **Loading Text**: Dynamic text with sports context

### Performance Optimizations

- **GPU Acceleration**: Hardware-accelerated transforms
- **Efficient Animations**: Optimized for 60fps
- **Responsive Design**: Adaptive timing for mobile devices
- **Memory Management**: Proper cleanup of animation timers

## Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Colors
```css
.sports-gradient-primary {
  background: linear-gradient(135deg, 
    #1e40af 0%, 
    #3b82f6 25%, 
    #06b6d4 50%, 
    #00d4ff 75%, 
    #1e40af 100%);
}
```

### Timing
```typescript
const transitionConfig = {
  duration: 1.2,
  ease: [0.4, 0.0, 0.2, 1]
};
```

### Animation Elements
- Particle count and colors
- Icon selection and rotation
- Gradient patterns and timing
- Loading text content

## Future Enhancements

- [ ] Sound effects for transitions
- [ ] Haptic feedback on mobile
- [ ] Custom transition paths
- [ ] Page-specific transition themes
- [ ] Performance analytics
- [ ] Accessibility improvements

## Troubleshooting

### Common Issues

1. **Transitions not triggering**
   - Ensure PageTransitionProvider is wrapping routes
   - Check that navigation functions are properly imported

2. **Performance issues**
   - Verify GPU acceleration is enabled
   - Check for memory leaks in animation timers

3. **Mobile responsiveness**
   - Test on various screen sizes
   - Adjust timing for slower devices

### Debug Mode

Enable debug logging by setting:
```typescript
const DEBUG_TRANSITIONS = true;
```

## Contributing

When adding new transitions:

1. Follow the existing component structure
2. Use the established color palette
3. Maintain performance standards
4. Add appropriate TypeScript types
5. Include responsive design considerations

## License

This transition system is part of the Sportiva sports website project. 