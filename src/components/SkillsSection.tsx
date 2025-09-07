import { useState, useEffect, useRef } from "react";

interface Skill {
  id: string;
  name: string;
  category: 'tech' | 'creative';
  description: string;
  x: number;
  y: number;
  connections?: string[];
  level: number;
}

const skills: Skill[] = [
  // Right Hemisphere (Tech) - Enhanced positioning
  { id: "linux", name: "Linux", category: "tech", description: "System administration and automation", x: 68, y: 25, connections: ["bash", "aws"], level: 9 },
  { id: "bash", name: "Bash Scripting", category: "tech", description: "Automation and system scripting", x: 78, y: 40, connections: ["linux", "python"], level: 8 },
  { id: "python", name: "Python", category: "tech", description: "AI/ML development and automation", x: 72, y: 55, connections: ["bash", "nlp", "aws"], level: 9 },
  { id: "nlp", name: "NLP", category: "tech", description: "Natural Language Processing", x: 82, y: 70, connections: ["python", "agentic"], level: 8 },
  { id: "aws", name: "AWS", category: "tech", description: "Cloud infrastructure and services", x: 62, y: 75, connections: ["linux", "python", "networking"], level: 7 },
  { id: "networking", name: "Networking", category: "tech", description: "Network configuration and troubleshooting", x: 75, y: 20, connections: ["linux", "aws"], level: 7 },
  
  // Left Hemisphere (Creative + Ethics) - Enhanced positioning
  { id: "responsible", name: "Responsible AI", category: "creative", description: "Ethical AI usage and governance", x: 28, y: 30, connections: ["data-protection", "agentic"], level: 9 },
  { id: "data-protection", name: "Data Protection", category: "creative", description: "Sensitive data handling and privacy", x: 32, y: 45, connections: ["responsible", "vibe-coding"], level: 8 },
  { id: "agentic", name: "Agentic AI", category: "creative", description: "Autonomous AI agent development", x: 22, y: 60, connections: ["responsible", "nlp", "vibe-coding"], level: 8 },
  { id: "vibe-coding", name: "Vibe Coding", category: "creative", description: "Intuitive and creative programming", x: 38, y: 70, connections: ["data-protection", "agentic", "product"], level: 9 },
  { id: "product", name: "Product Strategy", category: "creative", description: "Strategic product development", x: 25, y: 20, connections: ["vibe-coding", "neuro"], level: 7 },
  { id: "neuro", name: "Neuromarketing", category: "creative", description: "Brain-based marketing insights", x: 42, y: 55, connections: ["product", "data-protection"], level: 6 },
];

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [activeConnections, setActiveConnections] = useState<string[]>([]);
  const brainRef = useRef<HTMLDivElement>(null);

  // Create floating particles effect
  useEffect(() => {
    const createParticle = () => {
      if (!brainRef.current) return;
      
      const particle = document.createElement('div');
      particle.className = 'absolute w-1 h-1 bg-accent/60 rounded-full animate-pulse pointer-events-none';
      particle.style.left = `${20 + Math.random() * 60}%`;
      particle.style.top = `${20 + Math.random() * 60}%`;
      particle.style.animationDuration = `${1 + Math.random() * 2}s`;
      
      brainRef.current.appendChild(particle);
      
      setTimeout(() => {
        if (brainRef.current && brainRef.current.contains(particle)) {
          brainRef.current.removeChild(particle);
        }
      }, 3000);
    };

    const interval = setInterval(createParticle, 500);
    return () => clearInterval(interval);
  }, []);

  const handleSkillHover = (skill: Skill) => {
    setHoveredSkill(skill.id);
    setActiveConnections(skill.connections || []);
  };

  const handleSkillLeave = () => {
    setHoveredSkill(null);
    setActiveConnections([]);
  };

  const getConnectionPath = (fromSkill: Skill, toSkill: Skill) => {
    const fromX = (fromSkill.x / 100) * 400;
    const fromY = (fromSkill.y / 100) * 300;
    const toX = (toSkill.x / 100) * 400;
    const toY = (toSkill.y / 100) * 300;
    
    // Create curved path
    const midX = (fromX + toX) / 2;
    const midY = (fromY + toY) / 2 - 20;
    
    return `M ${fromX} ${fromY} Q ${midX} ${midY} ${toX} ${toY}`;
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-primary/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-space-grotesk font-bold mb-6">
            <span className="hologram-text">Neural Skills Map</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore the interconnected neural pathways of technical expertise and creative thinking.
            <br className="hidden md:block" />
            <span className="text-accent font-medium">Hover over nodes to see connections.</span>
          </p>
        </div>

        {/* Enhanced Interactive Brain Map */}
        <div className="relative max-w-6xl mx-auto">
          <div ref={brainRef} className="relative w-full h-[700px] mx-auto perspective-1000">
            
            {/* Enhanced Brain Structure */}
            <svg
              className="absolute inset-0 w-full h-full z-10"
              viewBox="0 0 400 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Enhanced Gradients */}
                <linearGradient id="brain-gradient-creative" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.4" />
                </linearGradient>
                <linearGradient id="brain-gradient-tech" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Left Hemisphere (Creative) - Enhanced */}
              <path
                d="M50 150 C50 70, 130 40, 200 75 C205 110, 190 170, 200 220 C130 260, 45 230, 50 150 Z"
                fill="url(#brain-gradient-creative)"
                stroke="hsl(var(--accent))"
                strokeWidth="2"
                filter="url(#glow)"
                className="animate-pulse"
                style={{ animationDelay: "0s", animationDuration: "3s" }}
              />
              
              {/* Right Hemisphere (Tech) - Enhanced */}
              <path
                d="M350 150 C350 70, 270 40, 200 75 C195 110, 210 170, 200 220 C270 260, 355 230, 350 150 Z"
                fill="url(#brain-gradient-tech)"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                filter="url(#glow)"
                className="animate-pulse"
                style={{ animationDelay: "1s", animationDuration: "3s" }}
              />
              
              {/* Enhanced Central Connections */}
              <g className="brain-stem">
                <line x1="200" y1="90" x2="200" y2="210" stroke="hsl(var(--secondary))" strokeWidth="4" className="animate-pulse" style={{ animationDelay: "2s" }} />
                <circle cx="200" cy="100" r="6" fill="hsl(var(--secondary))" className="animate-pulse" />
                <circle cx="200" cy="150" r="8" fill="hsl(var(--secondary))" className="animate-pulse" style={{ animationDelay: "0.5s" }} />
                <circle cx="200" cy="200" r="6" fill="hsl(var(--secondary))" className="animate-pulse" style={{ animationDelay: "1s" }} />
              </g>

              {/* Neural Pathways - Dynamic Connections */}
              {skills.map((skill) => {
                const connectedSkills = skills.filter(s => skill.connections?.includes(s.id));
                return connectedSkills.map((connectedSkill) => (
                  <path
                    key={`${skill.id}-${connectedSkill.id}`}
                    d={getConnectionPath(skill, connectedSkill)}
                    stroke={
                      hoveredSkill === skill.id || hoveredSkill === connectedSkill.id
                        ? skill.category === 'tech' 
                          ? "hsl(var(--primary))" 
                          : "hsl(var(--accent))"
                        : "hsl(var(--muted-foreground))"
                    }
                    strokeWidth={
                      hoveredSkill === skill.id || hoveredSkill === connectedSkill.id ? "3" : "1"
                    }
                    strokeOpacity={
                      hoveredSkill === skill.id || hoveredSkill === connectedSkill.id ? "0.8" : "0.2"
                    }
                    fill="none"
                    strokeDasharray="4,4"
                    className={
                      hoveredSkill === skill.id || hoveredSkill === connectedSkill.id
                        ? "animate-pulse"
                        : ""
                    }
                    style={{
                      transition: "all 0.3s ease",
                      filter: hoveredSkill === skill.id || hoveredSkill === connectedSkill.id ? "url(#glow)" : "none"
                    }}
                  />
                ));
              })}
            </svg>

            {/* Enhanced Skill Nodes */}
            {skills.map((skill) => (
              <div
                key={skill.id}
                className={`absolute skill-node cursor-pointer transition-all duration-300 ${
                  hoveredSkill === skill.id
                    ? 'z-50 scale-125'
                    : activeConnections.includes(skill.id)
                    ? 'z-40 scale-110'
                    : 'z-30'
                }`}
                style={{
                  left: `${skill.x}%`,
                  top: `${skill.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                onMouseEnter={() => handleSkillHover(skill)}
                onMouseLeave={handleSkillLeave}
              >
                {/* Skill Level Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-transparent">
                  <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 50 50">
                    <circle
                      cx="25"
                      cy="25"
                      r="20"
                      fill="none"
                      stroke="hsl(var(--muted))"
                      strokeWidth="2"
                      strokeOpacity="0.3"
                    />
                    <circle
                      cx="25"
                      cy="25"
                      r="20"
                      fill="none"
                      stroke={skill.category === 'tech' ? "hsl(var(--primary))" : "hsl(var(--accent))"}
                      strokeWidth="2"
                      strokeDasharray={`${(skill.level / 10) * 125.6} 125.6`}
                      className="animate-pulse"
                    />
                  </svg>
                </div>

                {/* Enhanced Node Design */}
                <div className={`relative w-14 h-14 rounded-full border-3 flex items-center justify-center backdrop-blur-md transition-all duration-300 ${
                  skill.category === 'tech'
                    ? 'bg-primary/80 border-primary shadow-[0_0_20px_hsl(var(--primary)/0.5)]'
                    : 'bg-accent/80 border-accent shadow-[0_0_20px_hsl(var(--accent)/0.5)]'
                } ${
                  hoveredSkill === skill.id
                    ? 'shadow-[0_0_40px_currentColor]'
                    : ''
                }`}>
                  <span className="text-xs font-bold text-center text-white leading-tight">
                    {skill.name.split(' ').map(word => word.slice(0, 2)).join('')}
                  </span>
                  
                  {/* Pulsing Ring Effect */}
                  {(hoveredSkill === skill.id || activeConnections.includes(skill.id)) && (
                    <div className="absolute inset-0 rounded-full border-2 border-current animate-ping opacity-30" />
                  )}
                </div>
                
                {/* Enhanced Tooltip */}
                {hoveredSkill === skill.id && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 p-4 bg-card/95 border border-primary/40 rounded-xl backdrop-blur-md min-w-64 z-50 animate-scale-in">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-lg text-primary">{skill.name}</h4>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 10 }).map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < skill.level 
                                ? skill.category === 'tech' 
                                  ? 'bg-primary' 
                                  : 'bg-accent'
                                : 'bg-muted'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {skill.description}
                    </p>
                    {skill.connections && skill.connections.length > 0 && (
                      <div className="text-xs text-accent">
                        <span className="font-medium">Connected to: </span>
                        {skill.connections.map(connId => {
                          const connSkill = skills.find(s => s.id === connId);
                          return connSkill?.name;
                        }).filter(Boolean).join(', ')}
                      </div>
                    )}
                    
                    {/* Tooltip Arrow */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-3 h-3 bg-card border-r border-b border-primary/40 rotate-45" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Enhanced Hemisphere Labels */}
          <div className="flex justify-between items-center mt-12 px-8">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 border-2 border-accent/40 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                <div className="w-8 h-8 rounded-full bg-accent animate-pulse" />
              </div>
              <h3 className="text-2xl font-space-grotesk font-bold text-accent mb-2">
                Creative & Ethics
              </h3>
              <p className="text-muted-foreground">Left Hemisphere</p>
              <p className="text-sm text-accent/80 mt-2">
                {skills.filter(s => s.category === 'creative').length} Neural Pathways
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-space-grotesk font-bold hologram-text mb-2">⚡</div>
              <p className="text-sm text-muted-foreground">
                Neural Bridge
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <div className="w-8 h-8 rounded-full bg-primary animate-pulse" />
              </div>
              <h3 className="text-2xl font-space-grotesk font-bold text-primary mb-2">
                Technical Skills
              </h3>
              <p className="text-muted-foreground">Right Hemisphere</p>
              <p className="text-sm text-primary/80 mt-2">
                {skills.filter(s => s.category === 'tech').length} Neural Pathways
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;