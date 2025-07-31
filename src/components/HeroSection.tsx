import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Heart, Shield, Zap, Stethoscope, Sparkles } from "lucide-react";
import diversePets from "@/assets/diverse-pets.jpg";
import AIDemo from "@/components/AIDemo";

const HeroSection = () => {
  const [isAIDemoOpen, setIsAIDemoOpen] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/50 pt-24 lg:pt-32">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-zoodo-purple/10 via-zoodo-blue/10 to-zoodo-pink/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--zoodo-purple))_0%,transparent_50%)] opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,hsl(var(--zoodo-blue))_0%,transparent_50%)] opacity-20" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-4 sm:pt-6 lg:pt-8">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center min-h-[calc(100vh-4rem)]">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8 fade-up">
            {/* AI Assistant Badge */}
            <div className="inline-flex flex-col sm:flex-row items-center px-4 sm:px-6 py-3 rounded-full bg-gradient-primary/10 border border-primary/20 text-sm font-medium group hover:shadow-glow transition-all duration-300">
              <div className="flex items-center">
                <Stethoscope className="w-5 h-5 mr-3 text-primary animate-pulse" />
                <span className="whitespace-nowrap">Meet <strong>Dr. Doom AI</strong></span>
              </div>
              <div className="flex items-center mt-1 sm:mt-0 sm:ml-2">
                <span className="text-xs sm:text-sm">- Your Pet's Health Guardian</span>
                <Sparkles className="w-4 h-4 ml-2 text-primary group-hover:scale-110 transition-transform" />
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                Your Pet.<br/><span className="gradient-hero-text">Our Priority.</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Powered by Dr. Doom AI, Zoodo delivers intelligent, secure, and personalized veterinary care — anytime, anywhere.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="default" 
                size="xl" 
                className="group bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300"
                onClick={() => setIsAIDemoOpen(true)}
              >
                <Stethoscope className="w-5 h-5 mr-2" />
                TRY DR. DOOM AI
                <Sparkles className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="group relative hover:scale-105 transition-all duration-300">
                <div className="absolute top-2 right-2 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <div className="absolute top-2 right-2 w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                Get Instant Care
              </Button>
            </div>

            {/* Trust Tags */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-6">
              <div className="flex flex-col items-center space-y-2 p-4 glass-card rounded-2xl">
                <Stethoscope className="w-6 h-6 text-primary" />
                <span className="text-xs text-center text-muted-foreground">AI-Powered Diagnostics</span>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 glass-card rounded-2xl">
                <Shield className="w-6 h-6 text-zoodo-blue" />
                <span className="text-xs text-center text-muted-foreground">Vet-Verified Guidance</span>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 glass-card rounded-2xl">
                <Shield className="w-6 h-6 text-zoodo-purple" />
                <span className="text-xs text-center text-muted-foreground">Blockchain Health Records</span>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 glass-card rounded-2xl">
                <Heart className="w-6 h-6 text-zoodo-pink" />
                <span className="text-xs text-center text-muted-foreground">10,000+ Pets Cared For</span>
              </div>
            </div>

          </div>

          {/* Right Content - Hero Image */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={diversePets}
                  alt="AI Veterinary Assistant"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Demo Modal */}
      <AIDemo isOpen={isAIDemoOpen} onClose={() => setIsAIDemoOpen(false)} />

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;