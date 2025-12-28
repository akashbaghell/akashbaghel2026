import StarField from "@/components/StarField";
import Fireworks from "@/components/Fireworks";
import Hero from "@/components/Hero";
import ShayariSection from "@/components/ShayariSection";
import WishesSection from "@/components/WishesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-midnight relative overflow-hidden">
      {/* Sticky Name Badge */}
      <div className="fixed top-4 left-4 z-50">
        <div className="bg-secondary/80 backdrop-blur-md border border-anime-purple/40 rounded-full px-4 py-2 shadow-anime">
          <p className="text-sm font-medium text-gradient-anime">Akash Baghel</p>
          <p className="text-xs text-muted-foreground">Software Developer</p>
        </div>
      </div>

      {/* Background effects */}
      <StarField />
      <Fireworks />
      
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
