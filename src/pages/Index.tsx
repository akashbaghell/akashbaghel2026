import { useEffect, useState } from "react";
import StarField from "@/components/StarField";
import Fireworks from "@/components/Fireworks";
import Hero from "@/components/Hero";
import PersonalizedWish from "@/components/PersonalizedWish";
import ShayariSection from "@/components/ShayariSection";
import WishesSection from "@/components/WishesSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [senderName, setSenderName] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlName = params.get("name");
    if (urlName) {
      setSenderName(decodeURIComponent(urlName));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-midnight relative overflow-hidden">
      {/* Sticky Name Badge - Only show when someone opens shared link */}
      {senderName && (
        <div className="fixed top-4 left-4 z-50">
          <div className="bg-secondary/80 backdrop-blur-md border border-anime-purple/40 rounded-full px-4 py-2 shadow-anime">
            <p className="text-sm font-medium text-gradient-anime">{senderName}</p>
            <p className="text-xs text-muted-foreground">wishes you Happy New Year!</p>
          </div>
        </div>
      )}

      {/* Background effects */}
      <StarField />
      <Fireworks />
      
      {/* Main content */}
      <main className="relative z-10">
        <Hero senderName={senderName} />
        <PersonalizedWish />
        <div id="shayari">
          <ShayariSection />
        </div>
        <div id="wishes">
          <WishesSection />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Index;
