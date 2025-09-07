import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-background/80 backdrop-blur-md neural-glow" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-space-grotesk font-bold hologram-text">
          DG
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Home
          </button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open("https://drive.google.com/file/d/1AsTGL0uNM0APv7j77hIhIofpWEdIbsPk/view?usp=sharing", "_blank")}
            className="neural-glow"
          >
            Resume
          </Button>
          
          <button
            onClick={() => scrollToSection("projects")}
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Projects
          </button>
          
          <button
            onClick={() => scrollToSection("skills")}
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Skills Map
          </button>
          
          <button
            onClick={() => scrollToSection("contact")}
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;