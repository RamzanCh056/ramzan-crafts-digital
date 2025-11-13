import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import beatJerkyMockup from "@/assets/beat-jerky-mockup.jpg";
import ismaniMockup from "@/assets/ismani-mockup.jpg";
import wheelsIqMockup from "@/assets/wheels-iq-mockup.jpg";
import fitnessAppMockup from "@/assets/fitness-app-mockup.jpg";
import ecommerceMockup from "@/assets/ecommerce-mockup.jpg";
import foodDeliveryMockup from "@/assets/food-delivery-mockup.jpg";

const projects = [
  {
    title: "Beat Jerky – Social AI Music App",
    description: "Flutter app with AI chat, feed, upload, premium plans.",
    tech: ["Flutter", "Firebase", "REST API", "AI"],
    gradient: "from-purple-500/20 to-pink-500/20",
    image: beatJerkyMockup,
  },
  {
    title: "Isma'ni – Marketplace & Super App",
    description: "Multi-vendor service booking app with dashboards.",
    tech: ["Flutter", "Firebase", "Payment Gateway", "Maps API"],
    gradient: "from-blue-500/20 to-cyan-500/20",
    image: ismaniMockup,
  },
  {
    title: "Wheels IQ – AR Vehicle Assistant",
    description: "AR/AI car maintenance with camera + object tracking.",
    tech: ["Flutter", "AR Core", "Machine Learning", "Computer Vision"],
    gradient: "from-orange-500/20 to-red-500/20",
    image: wheelsIqMockup,
  },
  {
    title: "FitTrack Pro – Fitness & Wellness App",
    description: "Comprehensive workout tracking with AI-powered exercise recommendations and health metrics.",
    tech: ["Flutter", "Firebase", "HealthKit", "ML Kit"],
    gradient: "from-green-500/20 to-teal-500/20",
    image: fitnessAppMockup,
  },
  {
    title: "ShopEase – E-Commerce Platform",
    description: "Full-featured shopping app with secure payments, wishlist, and personalized recommendations.",
    tech: ["Flutter", "Stripe", "REST API", "Push Notifications"],
    gradient: "from-amber-500/20 to-yellow-500/20",
    image: ecommerceMockup,
  },
  {
    title: "QuickBite – Food Delivery App",
    description: "Restaurant ordering platform with real-time tracking and multi-payment options.",
    tech: ["Flutter", "Google Maps", "Firebase", "Payment Gateway"],
    gradient: "from-red-500/20 to-orange-500/20",
    image: foodDeliveryMockup,
  },
];

const Portfolio = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Featured Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real projects delivered for real clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-64 overflow-hidden bg-secondary/50">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
