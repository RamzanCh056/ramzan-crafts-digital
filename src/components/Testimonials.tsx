import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Ramzan delivered my app faster than any developer I've worked with. Clean UI, smooth logic, perfect communication.",
    author: "Sarah Johnson",
    role: "Founder, TechStart",
  },
  {
    quote:
      "We scaled from MVP to full system thanks to his expertise in Flutter + AI.",
    author: "Michael Chen",
    role: "CTO, InnovateLabs",
  },
  {
    quote:
      "His UI/UX work is top tier. Highly recommended for serious founders.",
    author: "Emma Williams",
    role: "Product Lead, DesignCo",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">What Clients Say</h2>
          <p className="text-xl text-muted-foreground">
            Trusted by founders and teams worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 border-border/50"
            >
              <div className="space-y-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-lg leading-relaxed text-foreground/90">
                  "{testimonial.quote}"
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
