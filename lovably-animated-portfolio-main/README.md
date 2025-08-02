# 🚀 Lovably Animated Portfolio

A stunning, modern portfolio website built with React, TypeScript, and cutting-edge animations. Features a Gen-Z aesthetic with neon gradients, glassmorphism effects, and interactive sports-themed components.

![Portfolio Preview](https://img.shields.io/badge/Status-Ready%20for%20Deployment-brightgreen)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue)
![Vite](https://img.shields.io/badge/Vite-5.4.1-purple)

## ✨ Features

### 🎨 **Modern Design System**
- **Neon Gradients** - Ultra-modern color palette with glowing effects
- **Glassmorphism** - Translucent glass-like components
- **Responsive Design** - Perfect on all devices
- **Dark Theme** - Eye-friendly dark mode
- **Custom Animations** - Smooth transitions and micro-interactions

### 🏆 **Sports Integration**
- **Live Score Board** - Real-time sports updates
- **Player Cards** - Interactive athlete profiles
- **Team Sections** - Dynamic team displays
- **Sports Statistics** - Engaging data visualization

### 🛠️ **Technical Stack**
- **React 18** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Advanced animations
- **Three.js** - 3D graphics and effects
- **React Router** - Client-side routing
- **Shadcn/ui** - Modern UI components

### 📱 **Pages & Components**
- **Home** - Landing page with hero section
- **About** - Personal information and skills
- **Portfolio** - Project showcase
- **Services** - Offered services
- **Contact** - Contact form and details
- **Blog** - Blog posts and articles
- **Shop** - E-commerce section
- **News** - Latest updates
- **Live Scores** - Sports live updates

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/lovably-animated-portfolio.git

# Navigate to project directory
cd lovably-animated-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🎯 Project Structure

```
lovably-animated-portfolio/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # Shadcn/ui components
│   │   ├── AnimatedNav.tsx # Animated navigation
│   │   ├── LiveScoreBoard.tsx # Sports score board
│   │   └── ThreeScene.tsx  # 3D graphics
│   ├── pages/              # Page components
│   ├── assets/             # Images and static files
│   ├── hooks/              # Custom React hooks
│   ├── styles/             # CSS files
│   └── contexts/           # React contexts
├── public/                 # Static assets
├── dist/                   # Production build
└── netlify.toml           # Netlify configuration
```

## 🌟 Key Components

### 🎮 Interactive Elements
- **Animated Navigation** - Smooth menu transitions
- **Infinite Marquee** - Scrolling content
- **Image Hover Effects** - Interactive image galleries
- **Neon Ripple Effects** - Click animations
- **Scroll Animations** - Parallax and reveal effects

### 🏈 Sports Features
- **Live Score Board** - Real-time sports data
- **Player Cards** - Athlete profiles with stats
- **Team Sections** - Dynamic team displays
- **Trending Players** - Popular athletes showcase

### 🎨 Design Elements
- **Glass Cards** - Translucent component design
- **Neon Glows** - Bright accent colors
- **Gradient Backgrounds** - Modern color schemes
- **Custom Scrollbars** - Styled scroll indicators

## 🚀 Deployment

### Netlify Deployment (Recommended)

This project is pre-configured for Netlify deployment:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Build settings are auto-detected:
     - Build command: `npm run build`
     - Publish directory: `dist`

### Manual Deployment

```bash
# Build the project
npm run build

# The dist folder contains your production files
# Upload dist/ contents to your hosting provider
```

## 🔧 Configuration Files

### `netlify.toml`
```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### `public/_redirects`
```
/*    /index.html   200
```

## 🎨 Customization

### Colors & Themes
The project uses CSS custom properties for easy theming:

```css
:root {
  --neon-purple: 270 100% 70%;
  --neon-cyan: 195 100% 70%;
  --neon-pink: 300 100% 70%;
  --neon-green: 120 100% 70%;
  --neon-orange: 30 100% 70%;
}
```

### Adding New Pages
1. Create component in `src/pages/`
2. Add route in `src/App.tsx`
3. Update navigation if needed

### Styling Components
- Use Tailwind CSS classes for styling
- Custom CSS in `src/styles/` directory
- Component-specific styles in component files

## 📱 Responsive Design

The portfolio is fully responsive with:
- **Mobile-first** approach
- **Breakpoint system** for all screen sizes
- **Touch-friendly** interactions
- **Optimized images** for different devices

## 🔍 SEO & Performance

- **Meta tags** for social sharing
- **Open Graph** images
- **Structured data** for search engines
- **Optimized images** and assets
- **Fast loading** with Vite build optimization

## 🛠️ Development

### Code Style
- **ESLint** configuration included
- **Prettier** formatting
- **TypeScript** strict mode
- **Component-based** architecture

### Adding Dependencies
```bash
npm install package-name
```

### Building for Production
```bash
npm run build
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Contact: [your-email@example.com]
- Portfolio: [your-portfolio-url]

---

**Built with ❤️ using React, TypeScript, and modern web technologies**

⭐ **Star this repository if you find it helpful!**
