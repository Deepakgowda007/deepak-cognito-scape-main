import { Mail, Linkedin, FileText } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-16 border-t border-primary/20">
      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-space-grotesk font-bold hologram-text mb-2">
              Deepak Gowda
            </div>
            <p className="text-muted-foreground">
              AI & Cloud Enthusiast
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://drive.google.com/file/d/1AsTGL0uNM0APv7j77hIhIofpWEdIbsPk/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Resume
            </a>
            
            <a
              href="https://www.linkedin.com/in/deepak-gowda369/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors group"
            >
              <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
              LinkedIn
            </a>
            
            <a
              href="mailto:deepakgowda974259@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors group"
            >
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Email
            </a>
          </div>
        </div>

        {/* Witty Quote */}
        <div className="mt-12 pt-8 border-t border-primary/10 text-center">
          <p className="text-muted-foreground italic text-lg">
            "You, me, and the AI — all just atoms, if we zoom deep enough :)" 
            <span className="text-accent ml-2">✨</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;