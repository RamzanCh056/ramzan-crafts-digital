import { CheckCircle } from "lucide-react";

const stats = [
  "6+ Years Experience",
  "120+ Completed Projects",
  "Top Rated on Upwork & Fiverr",
  "30,000+ Followers on LinkedIn",
];

const About = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl opacity-40 rounded-full"></div>
            <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-charcoal to-charcoal/80 flex items-center justify-center shadow-2xl overflow-hidden">
              <div className="text-9xl font-bold text-white/10">RC</div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Meet Ramzan Chaudhary
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a full-stack Flutter developer who loves building modern
                mobile apps with beautiful UI, strong performance, and scalable
                architecture. I've delivered 120+ projects for clients in the
                US, UK, Dubai, and worldwide. I specialize in Flutter, Firebase,
                UI/UX, and AI app development. Whether it's a startup MVP or a
                full product, I deliver quality, speed, and long-term support.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg font-medium">{stat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
