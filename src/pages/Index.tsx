import StarField from "@/components/StarField";
import Fireworks from "@/components/Fireworks";
import Hero from "@/components/Hero";
import WishesSection from "@/components/WishesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-midnight relative overflow-hidden">
      {/* Background effects */}
      <StarField />
      <Fireworks />
      
      {/* Main content */}
      <main className="relative z-10">
        <Hero />
        <div id="wishes">
          <WishesSection />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Index;
