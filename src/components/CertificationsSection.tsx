import { Card } from "@/components/ui/card";
import { ExternalLink, Award } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  description: string;
  link?: string;
  year: string;
}

const certifications: Certification[] = [
  {
    title: "Becoming an Entrepreneur",
    issuer: "MITx",
    description: "Comprehensive entrepreneurship fundamentals and startup methodologies",
    year: "2023",
  },
  {
    title: "Custom Models & Loss Functions",
    issuer: "TensorFlow",
    description: "Advanced deep learning with custom architectures and optimization",
    year: "2023",
  },
  {
    title: "Google Cloud Fundamentals",
    issuer: "Google Cloud",
    description: "Core GCP services, architecture, and best practices",
    year: "2023",
  },
  {
    title: "Networking in Google Cloud",
    issuer: "Google Cloud",
    description: "Advanced cloud networking, VPC, and security configurations",
    year: "2023",
  },
  {
    title: "AI & ML on Google Cloud",
    issuer: "Google Cloud",
    description: "Machine learning pipeline deployment and optimization on GCP",
    year: "2024",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-space-grotesk font-bold mb-4">
            <span className="hologram-text">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development achievements
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={cert.title}
              className="cyber-card p-6 group cursor-pointer hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => cert.link && window.open(cert.link, "_blank")}
            >
              {/* Certificate Icon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 border border-primary/30 mb-4 group-hover:bg-primary/30 transition-colors">
                <Award className="w-6 h-6 text-primary" />
              </div>

              {/* Certificate Content */}
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-space-grotesk font-semibold group-hover:text-primary transition-colors leading-tight">
                    {cert.title}
                  </h3>
                  {cert.link && (
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                  )}
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-accent">{cert.issuer}</span>
                  <span className="text-muted-foreground">{cert.year}</span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-lg bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;