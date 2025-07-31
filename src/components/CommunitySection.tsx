import { Button } from "@/components/ui/button";
import { 
  Users, 
  Heart, 
  Calendar, 
  Gift,
  ArrowRight,
  UserPlus,
  MessageCircle,
  Star
} from "lucide-react";
import communityPets from "@/assets/community-pets.jpg";

const CommunitySection = () => {
  const communityFeatures = [
    {
      icon: Heart,
      title: "Pet Adoption",
      description: "Connect with shelter pets looking for their forever homes.",
      stats: "500+ pets adopted",
      color: "red-500"
    },
    {
      icon: Gift,
      title: "Donation Drives",
      description: "Support local pet welfare organizations and rescue groups.",
      stats: "$50K+ raised"
    },
    {
      icon: Calendar,
      title: "Community Events",
      description: "Join vaccination drives, wellness camps, and meetups.",
      stats: "200+ events monthly"
    },
    {
      icon: Users,
      title: "Pet Parent Network",
      description: "Share experiences and get advice from fellow pet owners.",
      stats: "10K+ active members"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Pet Owner",
      content: "Zoodo helped me find the perfect vet for my rescue dog. The AI recommendations were spot-on!",
      rating: 5
    },
    {
      name: "Dr. Michael Chen",
      role: "Veterinarian",
      content: "The platform has streamlined my practice and helped me reach more pet owners in need.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Dog Trainer",
      content: "Being part of the Zoodo community has connected me with amazing pets and families.",
      rating: 5
    }
  ];

  return (
    <section id="community" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-zoodo-green/10 via-transparent to-zoodo-orange/10" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-zoodo-green/10 border border-zoodo-green/20 text-sm font-medium text-zoodo-green">
            <Users className="w-4 h-4 mr-2" />
            Community & Welfare
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold">
            Building a <span className="gradient-text">caring community</span>
            <br />
            for pets and their families.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of pet lovers, veterinarians, and trainers working together to create a better world for our furry friends.
          </p>
        </div>

        {/* Main Community Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant glow-effect">
              <img
                src={communityPets}
                alt="Community of pet owners"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>

            {/* Floating Community Stats */}
            <div className="absolute -top-6 -left-6 glass-card p-4 rounded-2xl shadow-elegant floating">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-zoodo-green rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-sm">500+</div>
                  <div className="text-xs text-muted-foreground">Pets Adopted</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 glass-card p-4 rounded-2xl shadow-elegant floating" style={{ animationDelay: '1s' }}>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-zoodo-orange rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-sm">10K+</div>
                  <div className="text-xs text-muted-foreground">Community Members</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold">
                More than a platform—
                <br />
                <span className="gradient-text">it's a movement</span>
              </h3>
              <p className="text-lg text-muted-foreground">
                Zoodo isn't just about connecting pets with care. It's about building a supportive ecosystem where every pet has access to love, care, and a safe home.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {communityFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className="p-6 glass-card rounded-2xl hover:shadow-elegant transition-all duration-300 scale-on-hover"
                >
                  <feature.icon className={`w-8 h-8 mb-4 ${feature.title === 'Pet Adoption' ? 'text-red-500' : 'text-zoodo-green'}`} />
                  <h4 className="font-bold mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{feature.description}</p>
                  <div className="text-xs font-medium text-zoodo-green">{feature.stats}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg" className="group">
                <UserPlus className="w-5 h-5 mr-2" />
                Join Community
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Discussion
              </Button>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              What our <span className="gradient-text">community</span> says
            </h3>
            <p className="text-muted-foreground">
              Real stories from pet owners, veterinarians, and trainers using Zoodo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="glass-card p-8 rounded-3xl hover:shadow-elegant transition-all duration-300 scale-on-hover fade-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center space-x-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-zoodo-orange fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-8 pt-20">
          <div className="space-y-4">
            <h3 className="text-3xl lg:text-4xl font-bold">
              Ready to join the <span className="gradient-text">Zoodo family</span>?
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Be part of a community that's transforming pet healthcare and welfare, one paw at a time.
            </p>
          </div>
          <Button variant="default" size="xl" className="group">
            <Heart className="w-5 h-5 mr-2" />
            Get Started Today
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;