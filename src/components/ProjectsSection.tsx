import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  year: string;
  status: "completed" | "upcoming";
  link?: string;
}

const projects: Project[] = [
  {
    title: "Blood Management System",
    description: "Configured a rapid '10-minute blood delivery system' inspired by food delivery efficiency. Implemented real-time tracking, inventory management, and emergency response protocols.",
    tags: ["System Design", "Healthcare", "Automation", "Real-time"],
    year: "2023",
    status: "completed",
  },
  {
    title: "NLP Experiment Pipeline",
    description: "Advanced natural language processing framework for sentiment analysis and text classification. Integrating transformer models with custom preprocessing pipelines.",
    tags: ["NLP", "Python", "Transformers", "ML Pipeline"],
    year: "2024",
    status: "upcoming",
  },
  {
    title: "AI + Cloud Tooling Suite",
    description: "Comprehensive cloud-native AI tooling platform for automated model deployment, monitoring, and scaling across multiple cloud providers.",
    tags: ["Cloud", "AI/ML", "DevOps", "Kubernetes", "AWS"],
    year: "2024",
    status: "upcoming",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-space-grotesk font-bold mb-4">
            <span className="hologram-text">Builds & Experiments</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Projects I've built, tinkered with, or plan to explore
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="cyber-card p-6 group cursor-pointer h-full flex flex-col"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>
                <Badge 
                  variant={project.status === "completed" ? "default" : "secondary"}
                  className={
                    project.status === "completed" 
                      ? "bg-primary/20 text-primary border-primary/30" 
                      : "bg-accent/20 text-accent border-accent/30"
                  }
                >
                  {project.status === "completed" ? "Completed" : "Upcoming"}
                </Badge>
              </div>

              {/* Project Title */}
              <h3 className="text-xl font-space-grotesk font-semibold mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                {project.title}
                {project.link && (
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </h3>

              {/* Project Description */}
              <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              {/* Project Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="text-xs bg-muted/50 hover:bg-primary/20 hover:text-primary hover:border-primary/30 transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;