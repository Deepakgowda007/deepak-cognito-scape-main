import { Button } from "@/components/ui/button";
import Brain3D from "./Brain3D";
const deepakProfile = "/lovable-uploads/29dcb7dd-00a1-4f3e-982b-2fa1d9a5c39f.png";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Brain 3D */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <Brain3D />
      </div>
      
      {/* Particle Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 z-10 text-center">
        {/* Profile Image */}
        <div className="relative mx-auto w-48 h-48 mb-8 group">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-secondary p-1 animate-pulse">
            <div className="w-full h-full rounded-full bg-background p-2">
              <img
                src={deepakProfile}
                alt="Deepak Gowda"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          <div className="absolute inset-0 rounded-full bg-primary/20 group-hover:animate-[neural-pulse_1s_infinite]" />
        </div>

        {/* Title */}
        <h1 className="text-6xl md:text-8xl font-space-grotesk font-bold mb-6">
          <span className="hologram-text">Deepak Gowda</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto">
          AI & Cloud Enthusiast | 
          <span className="text-primary font-medium"> Linux</span> •
          <span className="text-accent font-medium"> NLP</span> •
          <span className="text-secondary font-medium"> Responsible AI</span> •
          <span className="text-primary font-medium"> Vibe Coding</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={() => window.open("https://drive.google.com/file/d/1AsTGL0uNM0APv7j77hIhIofpWEdIbsPk/view?usp=sharing", "_blank")}
            className="neural-glow px-8 py-4 text-lg font-medium bg-primary hover:bg-primary/90"
          >
            Download Resume
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("projects")}
            className="px-8 py-4 text-lg font-medium border-accent text-accent hover:bg-accent hover:text-accent-foreground"
          >
            View My Work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;