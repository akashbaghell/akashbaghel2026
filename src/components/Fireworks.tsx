import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  color: string;
  delay: number;
  duration: number;
}

const Fireworks = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const colors = [
      "hsl(45 93% 58%)",
      "hsl(45 100% 75%)",
      "hsl(340 80% 60%)",
      "hsl(45 50% 85%)",
    ];

    const generateParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: Math.random() * 10,
          duration: Math.random() * 4 + 6,
        });
      }
      setParticles(newParticles);
    };
    generateParticles();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute bottom-0 w-1 animate-rise opacity-80"
          style={{
            left: `${particle.x}%`,
            height: "2px",
            backgroundColor: particle.color,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            boxShadow: `0 0 10px ${particle.color}, 0 0 20px ${particle.color}`,
          }}
        />
      ))}
    </div>
  );
};

export default Fireworks;
