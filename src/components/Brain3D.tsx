const Brain3D = () => {
  return (
    <div className="brain-3d w-64 h-64 relative">
      {/* Main Brain Structure */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 backdrop-blur-sm">
        {/* Neural Connections */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 256 256"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
              <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.4" />
              <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          
          {/* Neural Network Lines */}
          <path
            d="M64 128 C96 96, 160 96, 192 128"
            stroke="url(#neural-gradient)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "0s" }}
          />
          <path
            d="M80 160 C112 140, 144 140, 176 160"
            stroke="url(#neural-gradient)"
            strokeWidth="1.5"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <path
            d="M96 96 C128 76, 128 180, 160 160"
            stroke="url(#neural-gradient)"
            strokeWidth="1"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <path
            d="M48 144 Q128 64 208 144"
            stroke="url(#neural-gradient)"
            strokeWidth="1"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
          
          {/* Neural Nodes */}
          <circle cx="64" cy="128" r="4" fill="hsl(var(--primary))" className="animate-pulse" />
          <circle cx="192" cy="128" r="4" fill="hsl(var(--accent))" className="animate-pulse" />
          <circle cx="128" cy="80" r="3" fill="hsl(var(--secondary))" className="animate-pulse" />
          <circle cx="128" cy="176" r="3" fill="hsl(var(--primary))" className="animate-pulse" />
          <circle cx="96" cy="160" r="2" fill="hsl(var(--accent))" className="animate-pulse" />
          <circle cx="160" cy="160" r="2" fill="hsl(var(--secondary))" className="animate-pulse" />
        </svg>
        
        {/* Brain Hemispheres */}
        <div className="absolute top-4 left-4 w-24 h-32 rounded-full bg-primary/20 backdrop-blur-sm" />
        <div className="absolute top-4 right-4 w-24 h-32 rounded-full bg-accent/20 backdrop-blur-sm" />
      </div>
      
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 animate-pulse" />
    </div>
  );
};

export default Brain3D;