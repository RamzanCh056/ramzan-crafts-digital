import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Beat Jerky – Social AI Music App",
    description: "Flutter app with AI chat, feed, upload, premium plans.",
    tech: ["Flutter", "Firebase", "REST API", "AI"],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Isma'ni – Marketplace & Super App",
    description: "Multi-vendor service booking app with dashboards.",
    tech: ["Flutter", "Firebase", "Payment Gateway", "Maps API"],
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Wheels IQ – AR Vehicle Assistant",
    description: "AR/AI car maintenance with camera + object tracking.",
    tech: ["Flutter", "AR Core", "Machine Learning", "Computer Vision"],
    gradient: "from-orange-500/20 to-red-500/20",
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
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
              >
                <div className="text-6xl font-bold text-white/10">
                  0{index + 1}
                </div>
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
