import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Home } from './components/pages/Home';
import { User } from './components/pages/User';
import { Upload } from './components/pages/Upload';
import { Settings } from './components/pages/Settings';
import { Menu } from 'lucide-react';
import { Button } from './components/ui/button';

export type Theme = 'light' | 'dark' | 'rainy';

export default function App() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark', 'rainy', 'light');
    root.classList.add(theme);
  }, [theme]);

  const cycleTheme = () => {
    setTheme(prev => {
      if (prev === 'light') return 'dark';
      if (prev === 'dark') return 'rainy';
      return 'light';
    });
  };

  return (
    <Router>
      <div className="relative flex h-screen overflow-hidden">
        {/* Ultra-Realistic 4K Background */}
        <div className="fixed inset-0 -z-10">
          {/* Light Theme - Ultra Realistic Sky */}
          <div className={`absolute inset-0 transition-opacity duration-1000 ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`}>
            {/* Sky gradient with atmospheric perspective */}
            <div className="absolute inset-0 bg-gradient-to-b from-sky-400 via-sky-300 to-blue-50"></div>
            
            {/* Atmospheric haze */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/30"></div>
            
            {/* Multiple cloud layers for depth */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-90">
              <div className="realistic-cloud realistic-cloud-1"></div>
              <div className="realistic-cloud realistic-cloud-2"></div>
              <div className="realistic-cloud realistic-cloud-3"></div>
              <div className="realistic-cloud realistic-cloud-4"></div>
              <div className="realistic-cloud realistic-cloud-5"></div>
              <div className="realistic-cloud realistic-cloud-6"></div>
            </div>
            
            {/* Realistic Sun with atmosphere */}
            <div className="absolute top-20 right-32">
              <div className="sun-corona"></div>
              <div className="sun-glow-outer"></div>
              <div className="w-40 h-40 rounded-full bg-gradient-radial from-yellow-100 via-yellow-200 to-orange-300 shadow-[0_0_120px_60px_rgba(253,224,71,0.6)] relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-transparent"></div>
              </div>
            </div>
            
            {/* Light rays */}
            <div className="light-rays"></div>
          </div>

          {/* Dark Theme - Ultra Realistic Night */}
          <div className={`absolute inset-0 transition-opacity duration-1000 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}>
            {/* Deep space gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#1a0a2e] to-[#16213e]"></div>
            
            {/* Nebula effect */}
            <div className="absolute inset-0 bg-gradient-radial-nebula opacity-30"></div>
            
            {/* Milky Way */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-900/10 to-transparent rotate-45"></div>
            
            {/* Enhanced star field with depth */}
            <div className="realistic-stars-layer-1"></div>
            <div className="realistic-stars-layer-2"></div>
            <div className="realistic-stars-layer-3"></div>
            <div className="realistic-stars-layer-4"></div>
            
            {/* Ultra Realistic Moon */}
            <div className="absolute top-16 right-24">
              <div className="moon-halo"></div>
              <div className="moon-glow-realistic"></div>
              <div className="w-48 h-48 rounded-full relative overflow-hidden moon-container">
                {/* Moon surface */}
                <div className="absolute inset-0 bg-gradient-radial from-slate-200 via-slate-300 to-slate-400"></div>
                
                {/* Craters with realistic shadows */}
                <div className="absolute top-10 left-14 w-12 h-12 rounded-full bg-slate-500/40 blur-sm"></div>
                <div className="absolute top-11 left-15 w-10 h-10 rounded-full bg-slate-600/30 shadow-crater"></div>
                
                <div className="absolute top-24 left-7 w-8 h-8 rounded-full bg-slate-500/35 blur-sm"></div>
                <div className="absolute top-25 left-8 w-7 h-7 rounded-full bg-slate-600/25 shadow-crater"></div>
                
                <div className="absolute top-16 right-10 w-14 h-14 rounded-full bg-slate-500/45 blur-sm"></div>
                <div className="absolute top-17 right-11 w-12 h-12 rounded-full bg-slate-600/35 shadow-crater"></div>
                
                <div className="absolute bottom-12 right-16 w-7 h-7 rounded-full bg-slate-500/30 blur-sm"></div>
                <div className="absolute bottom-14 left-20 w-6 h-6 rounded-full bg-slate-500/25 blur-sm"></div>
                
                {/* Surface texture */}
                <div className="absolute inset-0 bg-texture-moon opacity-20"></div>
                
                {/* Lighting gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-slate-900/30"></div>
                
                {/* Edge shadow for 3D effect */}
                <div className="absolute inset-0 rounded-full shadow-moon-inner"></div>
              </div>
            </div>
            
            {/* Shooting stars */}
            <div className="shooting-star-realistic" style={{ animationDelay: '0s' }}></div>
            <div className="shooting-star-realistic" style={{ animationDelay: '3s', top: '25%' }}></div>
            <div className="shooting-star-realistic" style={{ animationDelay: '6s', top: '60%' }}></div>
            <div className="shooting-star-realistic" style={{ animationDelay: '9s', top: '40%' }}></div>
          </div>

          {/* Rainy Theme - Ultra Realistic Window View */}
          <div className={`absolute inset-0 transition-opacity duration-1000 ${theme === 'rainy' ? 'opacity-100' : 'opacity-0'}`}>
            {/* Outdoor stormy sky view */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-600 via-slate-500 to-slate-400"></div>
            
            {/* Distance fog */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-300/40 to-transparent"></div>
            
            {/* Storm clouds with realistic depth */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="realistic-storm-cloud realistic-storm-cloud-1"></div>
              <div className="realistic-storm-cloud realistic-storm-cloud-2"></div>
              <div className="realistic-storm-cloud realistic-storm-cloud-3"></div>
              <div className="realistic-storm-cloud realistic-storm-cloud-4"></div>
            </div>
            
            {/* Window frame overlay */}
            <div className="window-frame">
              <div className="window-pane"></div>
              <div className="window-divider-vertical"></div>
              <div className="window-divider-horizontal"></div>
            </div>
            
            {/* Rain on window glass */}
            <div className="rain-on-glass">
              {[...Array(25)].map((_, i) => (
                <div
                  key={i}
                  className="water-droplet"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    width: `${3 + Math.random() * 6}px`,
                    height: `${20 + Math.random() * 40}px`,
                  }}
                />
              ))}
            </div>
            
            {/* Heavy rain falling outside */}
            <div className="rain-outside">
              {[...Array(150)].map((_, i) => (
                <div
                  key={i}
                  className="rain-drop-realistic"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${0.4 + Math.random() * 0.3}s`,
                    opacity: 0.3 + Math.random() * 0.5
                  }}
                />
              ))}
            </div>
            
            {/* Lightning with realistic branching */}
            <div className="lightning-realistic"></div>
            
            {/* Rain splashes on window sill */}
            <div className="rain-splashes"></div>
            
            {/* Interior room ambient light reflection */}
            <div className="interior-light-glow"></div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        {isMobile && !sidebarOpen && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(true)}
            className="fixed top-4 right-4 z-40 w-12 h-12 rounded-xl glass-button shadow-xl"
          >
            <Menu className="w-6 h-6" />
          </Button>
        )}

        {/* Overlay for mobile */}
        {isMobile && sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <main className={`flex-1 transition-all duration-500 ease-out ${
          !isMobile && sidebarOpen ? 'mr-72' : isMobile ? 'mr-0' : 'mr-16'
        }`}>
          <div className="h-full overflow-auto smooth-scroll">
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Home />} />
              <Route path="/user" element={<User />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
          </div>
        </main>

        <Sidebar 
          isOpen={sidebarOpen} 
          onToggle={() => setSidebarOpen(!sidebarOpen)}
          theme={theme}
          onThemeToggle={cycleTheme}
          isMobile={isMobile}
        />
      </div>
    </Router>
  );
}
