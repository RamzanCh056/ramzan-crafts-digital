import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-secondary to-background">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                $1M+ Revenue Generated for Clients
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                I Build Revenue-Driving{" "}
                <span className="text-gradient">SaaS & CRM Solutions.</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Flutter · SaaS · CRM Systems · Mobile Apps · AI Automation · Sales Tools
              </p>
            </div>

            <p className="text-lg text-charcoal/80 leading-relaxed max-w-2xl">
              Full-stack developer with 6+ years building production-ready SaaS platforms, 
              CRM systems, and mobile apps that drive sales and scale businesses. 
              From startup MVPs to enterprise solutions—I deliver results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-base group shadow-lg hover:shadow-xl transition-all"
                onClick={() => scrollToSection("contact")}
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base"
                onClick={() => scrollToSection("portfolio")}
              >
                View My Work
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in-scale">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl opacity-50 rounded-full"></div>
            <img
              src={heroMockup}
              alt="Mobile app showcase"
              className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
