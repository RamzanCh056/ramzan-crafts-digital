import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-secondary to-background">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                I Build High-Quality Mobile Apps.{" "}
                <span className="text-gradient">Fast, Beautiful & Scalable.</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Flutter · iOS · Android · Web · Desktop · UI/UX · AI Apps
              </p>
            </div>

            <p className="text-lg text-charcoal/80 leading-relaxed max-w-2xl">
              I'm a full-stack Flutter developer with 6+ years of experience building 
              production-ready apps for startups, agencies, and founders. I deliver fast, 
              reliable, end-to-end app development from design to deployment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base group shadow-lg hover:shadow-xl transition-all">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-base">
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
