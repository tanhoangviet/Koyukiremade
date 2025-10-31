import { Zap, Shield, Palette, Code, Sparkles, ArrowRight, Check } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

export function Home() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Experience blazing-fast performance with optimized code and smooth animations.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Palette,
      title: 'Beautiful Themes',
      description: 'Immerse yourself in stunning 4K-quality themes that feel like real life.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Built with modern security practices and rock-solid reliability.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Code,
      title: 'Developer Friendly',
      description: 'Clean, maintainable code with comprehensive documentation and examples.',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const benefits = [
    'Ultra-realistic 4K quality themes',
    'Smooth glass morphism effects',
    'Fully responsive design',
    'Dark, Light & Rainy modes',
    'Easy customization',
    'Modern React & TypeScript'
  ];

  return (
    <div className="min-h-full overflow-y-auto">
      {/* Hero Section */}
      <section className="relative px-4 py-20 md:px-8 md:py-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass-badge rounded-full">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-gray-700 dark:text-gray-300 rainy:text-gray-200">
              Welcome to the Future
            </span>
          </div>
          
          <h1 className="mb-6 text-5xl md:text-7xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 dark:from-violet-400 dark:via-purple-400 dark:to-fuchsia-400 bg-clip-text text-transparent animate-gradient">
            Lucidev
          </h1>
          
          <p className="mb-4 text-xl md:text-2xl text-gray-700 dark:text-gray-300 rainy:text-gray-200">
            Experience Web Design Like Never Before
          </p>
          
          <p className="mb-10 text-lg text-gray-600 dark:text-gray-400 rainy:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A next-generation platform featuring stunning 4K-quality themes, 
            realistic glass morphism, and silky-smooth animations. Built for creators who demand excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="glass-button-cta group relative overflow-hidden px-8 h-14 text-base"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="glass-button-secondary h-14 px-8 text-base"
            >
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 py-16 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-gray-900 dark:text-white rainy:text-gray-100">
              Powerful Features
            </h2>
            <p className="text-gray-600 dark:text-gray-400 rainy:text-gray-300">
              Everything you need to create stunning web experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index}
                  className="glass-card-feature p-6 hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  
                  <h3 className="mb-2 text-gray-900 dark:text-white rainy:text-gray-100">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 rainy:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 py-16 md:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="glass-card-benefits p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="mb-4 text-gray-900 dark:text-white rainy:text-gray-100">
                Why Choose Lucidev?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 rainy:text-gray-300">
                Built with cutting-edge technology and attention to detail
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl glass-benefit-item hover:bg-white/5 transition-colors duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 rainy:text-gray-200">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 md:px-8 pb-32">
        <div className="max-w-3xl mx-auto text-center">
          <Card className="glass-card-cta p-10 md:p-16">
            <h2 className="mb-4 text-gray-900 dark:text-white rainy:text-gray-100">
              Ready to Get Started?
            </h2>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-400 rainy:text-gray-300 max-w-xl mx-auto">
              Join thousands of developers creating beautiful, modern web applications with Lucidev.
            </p>
            <Button 
              size="lg"
              className="glass-button-cta group relative overflow-hidden px-10 h-16 text-lg"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Building Now
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
}
