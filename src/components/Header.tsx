import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X, Sparkles } from "lucide-react";
import zoodooLogo from "@/assets/zoodo-logo.png";

const Header = () => {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('light');
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Community", href: "#community" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'glass-card border-b border-border/30 shadow-elegant backdrop-blur-xl' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 lg:h-24">
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-all duration-300 border border-white/20">
                <img 
                  src={zoodooLogo} 
                  alt="Zoodo Logo" 
                  className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 object-contain"
                />
              </div>
            </div>
            <span className="text-xl md:text-2xl lg:text-3xl font-bold gradient-text group-hover:scale-105 transition-all duration-300">Zoodo</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-sm font-medium text-foreground hover:text-primary transition-all duration-300 group py-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-2 md:space-x-3 lg:space-x-4">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="w-9 h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 hover:bg-primary/10 hover:scale-110 transition-all duration-300 relative group"
            >
              {isDark ? (
                <Sun className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 group-hover:rotate-180 transition-all duration-500" />
              ) : (
                <Moon className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 group-hover:rotate-12 transition-all duration-500" />
              )}
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
            </Button>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
              <Button 
                variant="ghost" 
                size="sm" 
                className="hover:bg-primary/10 hover:text-primary hover:scale-105 transition-all duration-300 text-xs lg:text-sm"
              >
                Sign In
              </Button>
              <Button 
                variant="default" 
                size="sm"
                className="bg-primary hover:bg-primary/90 hover:scale-105 hover:shadow-glow transition-all duration-300 relative overflow-hidden group text-xs lg:text-sm"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden w-9 h-9 md:w-10 md:h-10 hover:bg-primary/10 hover:scale-110 transition-all duration-300 relative group"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative">
                {isMenuOpen ? (
                  <X className="h-5 w-5 group-hover:rotate-90 transition-all duration-300" />
                ) : (
                  <Menu className="h-5 w-5 group-hover:scale-110 transition-all duration-300" />
                )}
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-full backdrop-blur-xl bg-gradient-to-b from-background/95 to-background/90 border-t border-primary/20 shadow-2xl animate-fade-in">
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col space-y-6">
                {navItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-foreground hover:text-primary transition-all duration-300 py-2 border-b border-border/10 hover:border-primary/30 group"
                    onClick={() => setIsMenuOpen(false)}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="flex items-center justify-between">
                      {item.name}
                      <span className="w-0 h-0.5 bg-gradient-primary group-hover:w-6 transition-all duration-300"></span>
                    </span>
                  </a>
                ))}
                
                {/* Mobile CTA Section */}
                <div className="flex flex-col space-y-4 pt-6 border-t border-primary/20">
                  <Button 
                    variant="ghost" 
                    size="lg" 
                    className="justify-center hover:bg-primary/10 hover:text-primary transition-all duration-300 w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </Button>
                  <Button 
                    variant="default" 
                    size="lg"
                    className="bg-gradient-primary hover:shadow-glow transition-all duration-300 w-full relative overflow-hidden group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="relative z-10">Get Started</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-glow opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;