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
  Zap
} from "lucide-react";
import serviceFindVet from "@/assets/service-find-vet.jpg";
import serviceClinicHospital from "@/assets/service-clinic-hospital.jpg";
import serviceTeleconsultation from "@/assets/service-teleconsultation.jpg";
import servicePetTrainer from "@/assets/service-pet-trainer.jpg";

const services = [
  {
    icon: Stethoscope,
    title: "Find Vet",
    description: "Discover qualified veterinarians near you based on specialization, reviews, and availability.",
    features: ["Verified professionals", "Real-time availability", "Specialty matching", "Patient reviews"],
    color: "zoodo-purple",
    image: serviceFindVet
  },
  {
    icon: Building2,
    title: "Find Clinic or Hospital", 
    description: "Locate the best animal clinics and hospitals in your area with comprehensive facility information.",
    features: ["24/7 emergency care", "Advanced equipment", "Multi-specialty centers", "Insurance accepted"],
    color: "zoodo-blue",
    image: serviceClinicHospital
  },
  {
    icon: Video,
    title: "Teleconsultation",
    description: "Connect with veterinarians remotely for consultations, follow-ups, and emergency guidance.",
    features: ["HD video calls", "Instant messaging", "Digital prescriptions", "Record sharing"],
    color: "zoodo-pink",
    image: serviceTeleconsultation
  },
  {
    icon: Heart,
    title: "Find Pet Trainer",
    description: "Connect with certified pet trainers for behavioral training, obedience, and specialized skills.",
    features: ["Certified trainers", "Breed specialists", "Flexible scheduling", "Progress tracking"],
    color: "zoodo-orange",
    image: servicePetTrainer
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
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group glass-card rounded-3xl hover:shadow-elegant transition-all duration-500 hover:scale-105 fade-up overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-${service.color} to-${service.color}/70 rounded-xl flex items-center justify-center shadow-elegant`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 group-hover:gradient-text transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 bg-${service.color} rounded-full`} />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button variant="default" className="w-full group/btn bg-gradient-primary hover:bg-gradient-primary/90">
                  Explore Service
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center space-y-2 p-6 glass-card rounded-2xl fade-up">
            <div className="text-3xl font-bold gradient-text">500+</div>
            <div className="text-sm text-muted-foreground">Verified Vets</div>
          </div>
          <div className="text-center space-y-2 p-6 glass-card rounded-2xl fade-up" style={{ animationDelay: '100ms' }}>
            <div className="text-3xl font-bold gradient-text">100+</div>
            <div className="text-sm text-muted-foreground">Partner Clinics</div>
          </div>
          <div className="text-center space-y-2 p-6 glass-card rounded-2xl fade-up" style={{ animationDelay: '200ms' }}>
            <div className="text-3xl font-bold gradient-text">24/7</div>
            <div className="text-sm text-muted-foreground">Teleconsultation</div>
          </div>
          <div className="text-center space-y-2 p-6 glass-card rounded-2xl fade-up" style={{ animationDelay: '300ms' }}>
            <div className="text-3xl font-bold gradient-text">200+</div>
            <div className="text-sm text-muted-foreground">Certified Trainers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;