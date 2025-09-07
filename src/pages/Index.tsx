import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  // Particle trail effect
  useEffect(() => {
    let particles: HTMLElement[] = [];
    
    const createParticle = (x: number, y: number) => {
      const particle = document.createElement('div');
      particle.className = 'particle-trail';
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      
      document.body.appendChild(particle);
      particles.push(particle);
      
      // Clean up after animation
      setTimeout(() => {
        if (document.body.contains(particle)) {
          document.body.removeChild(particle);
        }
        particles = particles.filter(p => p !== particle);
      }, 1000);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() < 0.3) { // Only create particles 30% of the time
        createParticle(e.clientX, e.clientY);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      // Clean up remaining particles
      particles.forEach(particle => {
        if (document.body.contains(particle)) {
          document.body.removeChild(particle);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
