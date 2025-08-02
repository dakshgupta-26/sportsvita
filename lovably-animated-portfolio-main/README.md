# 🏆 Premium Live Sports Score Dashboard

## 🚀 Features

### ✅ **Real-Time Live Scores**
- **Auto-refresh**: Updates every 15 seconds automatically
- **Manual refresh**: Floating action button and refresh controls
- **Multiple APIs**: Cricket, Football, Basketball support
- **Current 2025 Data**: All matches show current year data
- **Live Updates**: Scores change in real-time with animations

### 🎨 **Premium Design**
- **Glassmorphism Cards**: Modern glass-like effects
- **Neon Glow Effects**: Glowing buttons and status indicators
- **3D Hover Effects**: Cards lift and scale on hover
- **Premium Typography**: Orbitron (futuristic) and Poppins fonts
- **Gradient Backgrounds**: Beautiful purple-to-slate gradients

### 🎬 **Stunning Animations**
- **Page Transition**: Beautiful loading animation with particles
- **Sticky Header**: Glowing "LIVE SCORES" button with real-time clock
- **Micro-interactions**: Hover effects, scale animations, shimmer effects
- **Live Status Indicators**: Pulsing dots and animated icons
- **Score Update Animations**: Smooth transitions when scores change

### 📱 **Modern UI/UX**
- **Responsive Design**: Works on mobile, tablet, desktop
- **Sport Filter Tabs**: Easy switching between sports
- **Auto-refresh Toggle**: Enable/disable automatic updates
- **Loading Skeletons**: Beautiful shimmer loading states
- **Floating Action Button**: Quick refresh access
- **Live Indicator**: Real-time status display

### 🔄 **Auto-Update System**
- **15-second intervals**: Automatic refresh every 15 seconds
- **Background updates**: Continues updating even when tab is not active
- **Visual feedback**: Loading animations and status indicators
- **Error handling**: Graceful fallback to mock data if API fails

## 🎯 **Latest Live Matches (Last 1-5 Days)**

### Cricket 🏏
- **India vs England** - Test Series 2025 (Today) 🏏 **LIVE**
- **Australia vs England** - Ashes Series 2025 (2 days ago) **FINISHED** ✅
- **Pakistan vs New Zealand** - T20I Series 2025 (3 days ago) **FINISHED** ✅

### Football ⚽
- **Arsenal vs Chelsea** - Premier League 2024/25 (Today) **LIVE**
- **Barcelona vs Atletico Madrid** - La Liga 2024/25 (Yesterday) **FINISHED** ✅
- **Bayern Munich vs Dortmund** - Bundesliga 2024/25 (4 days ago) **FINISHED** ✅

### Basketball 🏀
- **Lakers vs Warriors** - NBA Regular Season 2024/25 (Today) **LIVE**
- **Celtics vs 76ers** - NBA Regular Season 2024/25 (Yesterday) **FINISHED** ✅

## 🚀 **How to Use**

1. **Navigate to Live Scores**: Click "Live Scores" in the navigation
2. **View Matches**: See live matches in beautiful card format
3. **Filter Sports**: Use the sport filter tabs to view specific sports
4. **Auto-refresh**: Toggle automatic updates on/off
5. **Manual Refresh**: Use the floating action button or refresh button
6. **View Details**: Click "View Details" on any match card

## 🔧 **API Integration**

The page is set up to work with real sports APIs. Currently using mock data with 2025 data, but you can easily integrate:

- **Cricket API**: `https://api.cricapi.com/v1/currentMatches`
- **Football API**: `https://www.football-data.org/`
- **Basketball API**: `https://api.balldontlie.io/v1/games`

Just replace the `fetchLiveScores` function with your preferred API endpoint.

## 🎨 **Design Highlights**

- **Futuristic Typography**: Orbitron font for headings
- **Premium Gradients**: Blue to purple color schemes
- **Glass Effects**: Translucent cards with blur
- **Neon Accents**: Glowing elements for live status
- **Smooth Animations**: 60fps animations throughout
- **Mobile Optimized**: Perfect on all screen sizes

## 🛠 **Tech Stack**

- **React 18** with TypeScript
- **Framer Motion** for animations
- **React Query** for data fetching
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Vite** for build tooling

---

**Access the Live Score page at `/live-scores`** 🚀

## Project info

**URL**: https://lovable.dev/projects/3ef62661-64d3-4955-aef5-6f9dc8e84586

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/3ef62661-64d3-4955-aef5-6f9dc8e84586) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/3ef62661-64d3-4955-aef5-6f9dc8e84586) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
