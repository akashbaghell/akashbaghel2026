import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-4xl">🎆</span>
          <h3 className="text-2xl font-playfair text-gradient-gold">2025</h3>
          <span className="text-4xl">🎇</span>
        </div>
        <p className="text-muted-foreground mb-6">
          नया साल मंगलमय हो! आप सभी को ढेर सारी शुभकामनाएं
        </p>
        <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground/70">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-rose fill-rose" />
          <span>for you</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
