import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const pricingOptions = [
  {
    title: "MVP Build",
    duration: "2–4 Weeks",
    description: "Fast launch for startups.",
  },
  {
    title: "Full App Development",
    duration: "Custom Timeline",
    description: "Complete app + backend + UI/UX.",
  },
  {
    title: "Monthly Retainer",
    duration: "Ongoing",
    description: "Bug fixes, improvements, new features.",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            How We Can Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Flexible engagement models to suit your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingOptions.map((option, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">{option.title}</h3>
                <p className="text-primary font-semibold text-lg">
                  {option.duration}
                </p>
                <p className="text-muted-foreground">{option.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
