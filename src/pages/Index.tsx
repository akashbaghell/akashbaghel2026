import StarField from "@/components/StarField";
import Fireworks from "@/components/Fireworks";
import Hero from "@/components/Hero";
import ShayariSection from "@/components/ShayariSection";
import WishesSection from "@/components/WishesSection";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-midnight relative overflow-hidden">
      {/* Background effects */}
      <StarField />
      <Fireworks />
      
      {/* Music toggle */}
      <MusicPlayer />
      
      {/* Main content */}
      <main className="relative z-10">
        <Hero />
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
