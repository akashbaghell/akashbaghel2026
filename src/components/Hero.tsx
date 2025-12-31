import Countdown from "./Countdown";

interface HeroProps {
  senderName?: string | null;
}

const Hero = ({ senderName }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-rose/10 rounded-full blur-3xl" />
      
      <div className="text-center z-10 max-w-4xl mx-auto">
        {/* Year badge */}
        <div 
          className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 backdrop-blur-sm border border-primary/30 rounded-full mb-8 animate-fade-in-up"
        >
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-sm text-muted-foreground tracking-wider uppercase">
            Countdown to 2026
          </span>
        </div>

        {/* Main heading */}
        <h1 
          className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="text-gradient-anime">✨ Happy ✨</span>
          <br />
          <span className="text-foreground">New Year</span>
        </h1>

        {/* Name */}
        <p 
          className="text-2xl md:text-3xl text-gradient-gold font-playfair mb-4 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          {senderName ? `From ${senderName}` : "From Akash Baghel"}
        </p>

        {/* Subheading */}
        <p 
          className="text-xl md:text-2xl text-muted-foreground mb-4 font-light animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Wishing you a Happy New Year 2026
        </p>
        
        <p 
          className="text-lg text-muted-foreground/70 mb-12 max-w-2xl mx-auto animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          May your life be filled with joy, prosperity and success
        </p>

        {/* Countdown */}
        <div className="mb-12">
          <Countdown />
        </div>

        {/* CTA */}
        <div 
          className="animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          <a 
            href="#shayari"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-anime-pink via-anime-purple to-anime-cyan text-foreground rounded-full font-medium hover:scale-105 transition-all duration-300 shadow-anime"
          >
            <span>✦ View Shayari ✦</span>
            <svg 
              className="w-5 h-5 animate-bounce" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full p-1">
          <div className="w-1.5 h-3 bg-primary rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
