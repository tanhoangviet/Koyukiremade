import { Link, useLocation } from 'react-router-dom';
import { Home, User, Upload, Settings, Github, Lightbulb, Moon, Sun, CloudRain, X } from 'lucide-react';
import { Button } from './ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import type { Theme } from '../App';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  theme: Theme;
  onThemeToggle: () => void;
  isMobile: boolean;
}

const navItems = [
  { path: '/home', label: 'Home', icon: Home },
  { path: '/user', label: 'User', icon: User },
  { path: '/upload', label: 'Upload', icon: Upload },
  { path: '/settings', label: 'Settings', icon: Settings },
];

export function Sidebar({ isOpen, onToggle, theme, onThemeToggle, isMobile }: SidebarProps) {
  const location = useLocation();

  const getThemeIcon = () => {
    switch(theme) {
      case 'dark': return <Moon className="w-5 h-5" strokeWidth={2} />;
      case 'rainy': return <CloudRain className="w-5 h-5" strokeWidth={2} />;
      default: return <Sun className="w-5 h-5" strokeWidth={2} />;
    }
  };

  const getThemeLabel = () => {
    switch(theme) {
      case 'dark': return 'Dark Mode';
      case 'rainy': return 'Rainy Mode';
      default: return 'Light Mode';
    }
  };

  return (
    <TooltipProvider delayDuration={0}>
      <aside 
        className={`fixed right-0 top-0 h-screen transition-all duration-500 ease-out z-50 ${
          isOpen ? 'w-72' : isMobile ? 'w-0' : 'w-16'
        } ${isMobile && !isOpen ? 'translate-x-full' : 'translate-x-0'}`}
      >
        {/* Realistic Glass effect container */}
        <div className={`h-full ${
          isOpen ? 'w-72' : 'w-16'
        } glass-sidebar-realistic shadow-glass`}>
          {/* Glass edge highlight */}
          <div className="glass-edge-left"></div>
          
          <div className="flex flex-col h-full relative z-10">
            {/* Header with Logo */}
            <div className={`p-4 flex items-center ${isOpen ? 'justify-between' : 'justify-center'} glass-border-bottom`}>
              {isOpen ? (
                <div className="flex items-center gap-3">
                  <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 flex items-center justify-center shadow-glow-purple animate-glow-pulse">
                    {/* Inner glow */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/30 to-transparent"></div>
                    <Lightbulb className="w-5 h-5 text-white relative z-10" strokeWidth={2.5} />
                  </div>
                </div>
              ) : (
                !isMobile && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button 
                        className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 flex items-center justify-center cursor-pointer border-0 outline-none shadow-glow-purple animate-glow-pulse hover:scale-110 transition-all duration-300" 
                        onClick={onToggle}
                      >
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/30 to-transparent"></div>
                        <Lightbulb className="w-5 h-5 text-white relative z-10" strokeWidth={2.5} />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="left" className="glass-tooltip">
                      <p>Expand sidebar</p>
                    </TooltipContent>
                  </Tooltip>
                )
              )}
              
              {isOpen && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onToggle}
                  className="h-8 w-8 glass-button-hover rounded-lg transition-all duration-300 hover:rotate-90"
                >
                  <X className="w-5 h-5 text-gray-700 dark:text-gray-300 rainy:text-gray-200" />
                </Button>
              )}
            </div>

            {/* Navigation */}
            <nav className={`flex-1 ${isOpen ? 'px-3 pt-6' : 'px-2 pt-6'} space-y-2 overflow-y-auto scrollbar-hide`}>
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                if (!isOpen && !isMobile) {
                  return (
                    <div key={item.path} style={{ animationDelay: `${index * 100}ms` }} className="animate-slide-in">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link to={item.path} className="block">
                            <button
                              className={`w-12 h-12 rounded-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center relative overflow-hidden ${
                                isActive 
                                  ? 'bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 text-white shadow-glow-purple scale-105' 
                                  : 'glass-button-hover text-gray-700 dark:text-gray-300 rainy:text-gray-200'
                              }`}
                            >
                              {isActive && <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"></div>}
                              <Icon className="w-5 h-5 relative z-10" strokeWidth={2} />
                            </button>
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent side="left" className="glass-tooltip">
                          <p>{item.label}</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  );
                }

                return (
                  <Link key={item.path} to={item.path}>
                    <Button
                      variant="ghost"
                      style={{ animationDelay: `${index * 100}ms` }}
                      className={`w-full justify-start h-12 px-4 gap-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] animate-slide-in relative overflow-hidden ${
                        isActive 
                          ? 'bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 text-white shadow-glow-purple' 
                          : 'glass-button-hover text-gray-700 dark:text-gray-300 rainy:text-gray-200'
                      }`}
                    >
                      {isActive && <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"></div>}
                      <Icon className="w-5 h-5 relative z-10" strokeWidth={2} />
                      <span className="relative z-10">{item.label}</span>
                    </Button>
                  </Link>
                );
              })}
            </nav>

            {/* Footer */}
            <div className={`${isOpen ? 'p-3' : 'p-2'} space-y-2 glass-border-top`}>
              {/* Theme Toggle */}
              {isOpen ? (
                <Button
                  variant="ghost"
                  onClick={onThemeToggle}
                  className="w-full justify-start h-12 px-4 gap-3 rounded-xl glass-button-hover text-gray-700 dark:text-gray-300 rainy:text-gray-200 transition-all duration-300 hover:scale-[1.02]"
                >
                  {getThemeIcon()}
                  <span>{getThemeLabel()}</span>
                </Button>
              ) : (
                !isMobile && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={onThemeToggle}
                        className="w-12 h-12 rounded-xl glass-button-hover text-gray-700 dark:text-gray-300 rainy:text-gray-200 transition-all duration-300 hover:scale-110 hover:rotate-180 flex items-center justify-center"
                      >
                        {getThemeIcon()}
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="left" className="glass-tooltip">
                      <p>{getThemeLabel()}</p>
                    </TooltipContent>
                  </Tooltip>
                )
              )}

              {/* GitHub */}
              {isOpen ? (
                <Button
                  variant="ghost"
                  className="w-full justify-start h-12 px-4 gap-3 rounded-xl glass-button-hover text-gray-700 dark:text-gray-300 rainy:text-gray-200 transition-all duration-300 hover:scale-[1.02]"
                  onClick={() => window.open('https://github.com', '_blank')}
                >
                  <Github className="w-5 h-5" strokeWidth={2} />
                  <span>GitHub</span>
                </Button>
              ) : (
                !isMobile && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={() => window.open('https://github.com', '_blank')}
                        className="w-12 h-12 rounded-xl glass-button-hover text-gray-700 dark:text-gray-300 rainy:text-gray-200 transition-all duration-300 hover:scale-110 flex items-center justify-center"
                      >
                        <Github className="w-5 h-5" strokeWidth={2} />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="left" className="glass-tooltip">
                      <p>GitHub</p>
                    </TooltipContent>
                  </Tooltip>
                )
              )}
            </div>
          </div>
        </div>
      </aside>
    </TooltipProvider>
  );
}
