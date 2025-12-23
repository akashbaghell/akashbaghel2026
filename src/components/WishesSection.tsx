import { Sparkles, Heart, Star, Gift } from "lucide-react";

const wishes = [
  {
    icon: Sparkles,
    title: "Success & Prosperity",
    message: "May the new year bring you endless success and happiness in everything you do.",
  },
  {
    icon: Heart,
    title: "Love & Happiness",
    message: "Wishing your life is filled with love, joy and wonderful moments.",
  },
  {
    icon: Star,
    title: "New Dreams",
    message: "May 2026 be the year that all your dreams come true.",
  },
  {
    icon: Gift,
    title: "Best Wishes",
    message: "Sending warm wishes to you and your family for a blessed new year.",
  },
];

const WishesSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 
          className="text-3xl md:text-5xl font-playfair text-center mb-4 text-gradient-gold animate-fade-in-up"
        >
          New Year Wishes
        </h2>
        <p 
          className="text-center text-muted-foreground mb-16 text-lg animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Wishing everyone a wonderful 2026
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishes.map((wish, index) => (
            <div
              key={wish.title}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15 + 0.3}s` }}
            >
              <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-secondary/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 h-full hover:border-primary/50 transition-all duration-300 hover:-translate-y-2">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <wish.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-playfair text-foreground mb-3">
                  {wish.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {wish.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WishesSection;
