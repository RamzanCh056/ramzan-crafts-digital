import { Smartphone, Palette, Brain, Monitor } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "iOS + Android apps using Flutter. Clean architecture, Firebase backend, API integration, real-time updates.",
  },
  {
    icon: Palette,
    title: "UI/UX Design (Figma)",
    description:
      "Full app design systems, wireframes, prototypes, premium mobile UI.",
  },
  {
    icon: Brain,
    title: "AI-Powered Apps",
    description:
      "Chatbots, AI assistants, GPT-integrations, automation workflows.",
  },
  {
    icon: Monitor,
    title: "Web & Desktop Apps",
    description:
      "High-performance web apps, admin dashboards, SaaS products, desktop apps.",
  },
];

const Services = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            What I Can Build For You
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Full-stack development services tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
