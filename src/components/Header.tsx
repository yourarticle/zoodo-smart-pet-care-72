import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X, Sparkles } from "lucide-react";

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
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <div className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="w-8 h-8 lg:w-9 lg:h-9 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow group-hover:scale-110 transition-all duration-300">
                <span className="text-white font-bold text-lg lg:text-xl">Z</span>
              </div>
            </div>
            <span className="text-xl lg:text-2xl font-bold gradient-text group-hover:scale-105 transition-all duration-300">Zoodo</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
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
          <div className="flex items-center space-x-3 lg:space-x-4">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="w-9 h-9 lg:w-10 lg:h-10 hover:bg-primary/10 hover:scale-105 transition-all duration-200 relative group"
            >
              {isDark ? (
                <Sun className="h-4 w-4 lg:h-5 lg:w-5 group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Moon className="h-4 w-4 lg:h-5 lg:w-5 group-hover:-rotate-12 transition-transform duration-300" />
              )}
            </Button>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Button 
                variant="ghost" 
                size="sm" 
                className="hover:bg-primary/10 hover:text-primary hover:scale-105 transition-all duration-300"
              >
                Sign In
              </Button>
              <Button 
                variant="default" 
                size="sm"
                className="bg-primary hover:bg-primary/90 hover:scale-105 hover:shadow-glow transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden w-9 h-9 hover:bg-primary/10 hover:scale-105 transition-all duration-200 relative group"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative">
                {isMenuOpen ? (
                  <X className="h-4 w-4 group-hover:rotate-45 transition-transform duration-200" />
                ) : (
                  <Menu className="h-4 w-4 group-hover:scale-105 transition-transform duration-200" />
                )}
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <>
            <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40" onClick={() => setIsMenuOpen(false)} />
            <div className="md:hidden border-t border-border/20 py-4 relative z-50 bg-background/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-muted-foreground">Navigation</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-8 h-8 hover:bg-primary/10"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-border/20">
                <Button variant="ghost" size="sm" className="justify-start">
                  Sign In
                </Button>
                <Button variant="default" size="sm">
                  Get Started
                </Button>
              </div>
            </nav>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;