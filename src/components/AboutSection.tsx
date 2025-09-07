const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Brain Animation */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-96 brain-3d">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/30 to-accent/30 backdrop-blur-sm" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-space-grotesk font-bold mb-8">
            <span className="hologram-text">About Me</span>
          </h2>
          
          <div className="cyber-card p-8 md:p-12 rounded-2xl">
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-8">
              Currently working as{" "}
              <span className="text-primary font-semibold">Technology Assistant at IT for Change</span>, 
              while pursuing my{" "}
              <span className="text-accent font-semibold">Masters in AI at Amrita University</span>. 
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
              Skilled in{" "}
              <span className="text-secondary font-semibold">Linux</span>,{" "}
              <span className="text-primary font-semibold">AI automation</span>,{" "}
              <span className="text-accent font-semibold">NLP</span>, troubleshooting, and{" "}
              <span className="text-secondary font-semibold">responsible AI usage</span>. 
              Exploring the intersection of AI, cloud, and creative problem-solving.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;