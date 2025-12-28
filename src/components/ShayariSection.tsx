import { Quote } from "lucide-react";

const shayaris = [
  {
    text: "Naya saal laye khushiyon ki bahar, har pal ho mehakta har din ho tyohaar, dil mein ho sapne hazaar, yahi hai meri dua har baar.",
    author: "— Akash Baghel",
  },
  {
    text: "Umeedein naye saal ki, khwab hain aankhon mein sajaye, har lamha ho khushiyon se bhara, yahi hai arzoo dil ki.",
    author: "— Akash Baghel",
  },
  {
    text: "Sitaaron si chamke zindagi tumhari, phoolon si mehke raahein tumhari, 2026 mein mile kamyabi saari, yahi hai dua hamari.",
    author: "— Akash Baghel",
  },
];

const ShayariSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Anime-style glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-anime-pink/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-anime-cyan/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-playfair text-center mb-4 text-gradient-anime animate-fade-in-up">
          ✨ New Year Shayari ✨
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Heartfelt poetry for the New Year
        </p>

        <div className="space-y-8">
          {shayaris.map((shayari, index) => (
            <div
              key={index}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2 + 0.3}s` }}
            >
              {/* Anime glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-anime-pink/20 via-anime-purple/20 to-anime-cyan/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-secondary/40 backdrop-blur-md border border-anime-purple/30 rounded-2xl p-8 hover:border-anime-pink/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-anime">
                <Quote className="w-10 h-10 text-anime-pink/60 mb-4" />
                
                <p className="text-lg md:text-xl text-foreground leading-relaxed italic mb-4 font-light">
                  "{shayari.text}"
                </p>
                
                <p className="text-anime-cyan text-right font-medium">
                  {shayari.author}
                </p>
                
                {/* Decorative anime sparkles */}
                <div className="absolute top-4 right-4 text-2xl animate-pulse">✦</div>
                <div className="absolute bottom-4 left-4 text-xl animate-pulse" style={{ animationDelay: "0.5s" }}>✧</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShayariSection;
