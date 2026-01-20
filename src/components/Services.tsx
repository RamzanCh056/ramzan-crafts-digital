import { Smartphone, Palette, Brain, Monitor, TrendingUp, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: TrendingUp,
    title: "SaaS Development",
    description:
      "Revenue-generating SaaS platforms. Subscription systems, analytics dashboards, scalable architecture.",
  },
  {
    icon: Users,
    title: "CRM Solutions",
    description:
      "Custom CRM systems to boost sales. Lead tracking, pipeline management, automated follow-ups.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "iOS + Android apps using Flutter. Clean architecture, Firebase backend, real-time updates.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Premium design systems, wireframes, prototypes that convert users into customers.",
  },
  {
    icon: Brain,
    title: "AI Automation",
    description:
      "AI chatbots, GPT integrations, sales automation that works 24/7 for your business.",
  },
  {
    icon: Monitor,
    title: "Web & Admin Dashboards",
    description:
      "High-performance web apps, admin panels, analytics dashboards for data-driven decisions.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Solutions That Drive Revenue
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            SaaS platforms, CRM systems & apps that generate real business results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
