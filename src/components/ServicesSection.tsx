import { Button } from "@/components/ui/button";
import { 
  Stethoscope, 
  Building2, 
  Video, 
  Heart,
  MapPin,
  Clock,
  Star,
  ArrowRight,
  Zap,
  Search,
  UserCheck,
  Users
} from "lucide-react";
import serviceFindVet from "@/assets/service-find-vet.jpg";
import serviceClinicHospital from "@/assets/service-clinic-hospital.jpg";
import serviceTeleconsultation from "@/assets/service-teleconsultation.jpg";
import servicePetTrainer from "@/assets/service-pet-trainer.jpg";

const services = [
  {
    icon: Search,
    title: "Find Vet",
    description: "Discover qualified veterinarians near you based on specialization, reviews, and availability.",
    features: ["Verified professionals", "Real-time availability", "Specialty matching", "Patient reviews"],
    color: "zoodo-purple",
    image: serviceFindVet,
    animatedIcon: Search
  },
  {
    icon: Building2,
    title: "Find Clinic or Hospital", 
    description: "Locate the best animal clinics and hospitals in your area with comprehensive facility information.",
    features: ["24/7 emergency care", "Advanced equipment", "Multi-specialty centers", "Insurance accepted"],
    color: "zoodo-blue",
    image: serviceClinicHospital,
    animatedIcon: MapPin
  },
  {
    icon: Video,
    title: "Teleconsultation",
    description: "Connect with veterinarians remotely for consultations, follow-ups, and emergency guidance.",
    features: ["HD video calls", "Instant messaging", "Digital prescriptions", "Record sharing"],
    color: "zoodo-pink",
    image: serviceTeleconsultation,
    animatedIcon: Video
  },
  {
    icon: UserCheck,
    title: "Find Pet Trainer",
    description: "Connect with certified pet trainers for behavioral training, obedience, and specialized skills.",
    features: ["Certified trainers", "Breed specialists", "Flexible scheduling", "Progress tracking"],
    color: "zoodo-orange",
    image: servicePetTrainer,
    animatedIcon: Users
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium">
            <Zap className="w-4 h-4 mr-2 text-primary" />
            Our Services
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold">
            Comprehensive <span className="gradient-text">pet care</span> services{" "}
            <span className="gradient-text">at your fingertips</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From finding the right veterinarian to emergency care and training, we've got all your pet's needs covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-16 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group glass-card rounded-2xl hover:shadow-elegant transition-all duration-500 hover:scale-105 fade-up overflow-hidden relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Service Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                
                {/* Main Icon */}
                <div className={`absolute top-3 left-3 w-10 h-10 bg-${service.color} rounded-xl flex items-center justify-center shadow-elegant`}>
                  <service.icon className="w-5 h-5 text-white" />
                </div>
                
                {/* Animated Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <service.animatedIcon className="w-4 h-4 text-white group-hover:animate-pulse" />
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  {service.features.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className={`w-1.5 h-1.5 bg-${service.color} rounded-full`} />
                      <span className="text-xs text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button variant="default" className="w-full group/btn text-sm py-2 bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300">
                  Explore Service
                  <ArrowRight className="w-3 h-3 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center space-y-2 p-6 glass-card rounded-2xl fade-up group hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold text-zoodo-purple">500+</div>
            <div className="text-sm text-muted-foreground">Verified Vets</div>
          </div>
          <div className="text-center space-y-2 p-6 glass-card rounded-2xl fade-up group hover:scale-105 transition-all duration-300" style={{ animationDelay: '100ms' }}>
            <div className="text-3xl font-bold text-zoodo-blue">100+</div>
            <div className="text-sm text-muted-foreground">Partner Clinics</div>
          </div>
          <div className="text-center space-y-2 p-6 glass-card rounded-2xl fade-up group hover:scale-105 transition-all duration-300" style={{ animationDelay: '200ms' }}>
            <div className="text-3xl font-bold text-zoodo-pink">24/7</div>
            <div className="text-sm text-muted-foreground">Teleconsultation</div>
          </div>
          <div className="text-center space-y-2 p-6 glass-card rounded-2xl fade-up group hover:scale-105 transition-all duration-300" style={{ animationDelay: '300ms' }}>
            <div className="text-3xl font-bold text-zoodo-orange">200+</div>
            <div className="text-sm text-muted-foreground">Certified Trainers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;