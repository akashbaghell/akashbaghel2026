import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const newYear = new Date("2025-01-01T00:00:00").getTime();
      const now = new Date().getTime();
      const difference = newYear - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: "दिन", value: timeLeft.days },
    { label: "घंटे", value: timeLeft.hours },
    { label: "मिनट", value: timeLeft.minutes },
    { label: "सेकंड", value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
      {timeBlocks.map((block, index) => (
        <div
          key={block.label}
          className="flex flex-col items-center animate-fade-in-up"
          style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-secondary/50 backdrop-blur-sm border border-primary/30 rounded-2xl p-4 md:p-6 min-w-[80px] md:min-w-[120px] animate-pulse-glow">
              <span className="text-4xl md:text-6xl font-playfair font-bold text-gradient-gold">
                {String(block.value).padStart(2, "0")}
              </span>
            </div>
          </div>
          <span className="mt-3 text-sm md:text-base text-muted-foreground uppercase tracking-widest">
            {block.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
