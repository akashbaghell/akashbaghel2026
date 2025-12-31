import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Share2, Copy, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const PersonalizedWish = () => {
  const [name, setName] = useState("");
  const [generatedName, setGeneratedName] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Read name from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlName = params.get("name");
    if (urlName) {
      setGeneratedName(decodeURIComponent(urlName));
      setIsVisible(true);
    }
  }, []);

  const handleCreateWish = () => {
    if (!name.trim()) {
      toast({
        title: "Please enter your name",
        description: "We need your name to create a personalized wish!",
        variant: "destructive",
      });
      return;
    }
    setGeneratedName(name.trim());
    setIsVisible(true);
    
    // Update URL without reload
    const url = new URL(window.location.href);
    url.searchParams.set("name", encodeURIComponent(name.trim()));
    window.history.pushState({}, "", url.toString());
  };

  const getShareableLink = () => {
    const url = new URL(window.location.origin + window.location.pathname);
    url.searchParams.set("name", encodeURIComponent(generatedName || ""));
    return url.toString();
  };

  const handleCopyLink = async () => {
    const link = getShareableLink();
    await navigator.clipboard.writeText(link);
    setCopied(true);
    toast({
      title: "Link copied!",
      description: "Share it with your friends and family.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppShare = () => {
    const link = getShareableLink();
    const message = `🎉 ${generatedName} wishes you a Happy New Year 2026 🎉\nOpen this greeting 👉 ${link}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleNativeShare = async () => {
    const link = getShareableLink();
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Happy New Year 2026!",
          text: `🎉 ${generatedName} wishes you a Happy New Year 2026 🎉`,
          url: link,
        });
      } catch (err) {
        // User cancelled or error
      }
    } else {
      handleCopyLink();
    }
  };

  const greetingMessage = generatedName
    ? `${generatedName} wishes you a Happy New Year 2026 🎉✨`
    : "Wishing you a Happy New Year 2026 🎆";

  return (
    <section className="py-16 px-4 relative">
      <div className="max-w-xl mx-auto">
        {/* Input Section - Show only if no name from URL */}
        {!generatedName && (
          <div className="bg-secondary/60 backdrop-blur-md border border-anime-purple/30 rounded-2xl p-6 md:p-8 shadow-anime animate-fade-in-up">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-6 text-gradient-anime">
              Create Your Personalized Wish
            </h2>
            <div className="space-y-4">
              <Input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleCreateWish()}
                className="bg-background/50 border-anime-purple/40 text-foreground placeholder:text-muted-foreground focus:border-anime-pink h-12 text-base"
                maxLength={50}
              />
              <Button
                onClick={handleCreateWish}
                className="w-full h-12 bg-gradient-to-r from-anime-purple to-anime-pink hover:from-anime-pink hover:to-anime-purple text-white font-semibold text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-anime"
              >
                ✨ Create My New Year Wish
              </Button>
            </div>
          </div>
        )}

        {/* Generated Greeting Section */}
        {generatedName && isVisible && (
          <div className="space-y-6 animate-fade-in-up">
            {/* Greeting Card */}
            <div className="bg-secondary/60 backdrop-blur-md border border-anime-purple/30 rounded-2xl p-6 md:p-8 shadow-anime text-center">
              <div className="mb-4">
                <span className="text-4xl">🎊</span>
              </div>
              <p className="text-xl md:text-2xl font-display font-bold text-gradient-gold leading-relaxed">
                {greetingMessage}
              </p>
              <p className="text-muted-foreground mt-4 text-sm">
                Share this greeting with your loved ones
              </p>
            </div>

            {/* Share Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {/* WhatsApp Share */}
              <Button
                onClick={handleWhatsAppShare}
                className="flex-1 h-12 bg-[#25D366] hover:bg-[#128C7E] text-white font-medium transition-all duration-300 hover:scale-[1.02]"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </Button>

              {/* Copy Link */}
              <Button
                onClick={handleCopyLink}
                variant="outline"
                className="flex-1 h-12 border-anime-purple/40 text-foreground hover:bg-anime-purple/20 font-medium transition-all duration-300 hover:scale-[1.02]"
              >
                {copied ? (
                  <Check className="w-5 h-5 mr-2 text-green-500" />
                ) : (
                  <Copy className="w-5 h-5 mr-2" />
                )}
                {copied ? "Copied!" : "Copy Link"}
              </Button>

              {/* Native Share */}
              <Button
                onClick={handleNativeShare}
                variant="outline"
                className="flex-1 h-12 border-anime-purple/40 text-foreground hover:bg-anime-purple/20 font-medium transition-all duration-300 hover:scale-[1.02]"
              >
                <Share2 className="w-5 h-5 mr-2" />
                Share
              </Button>
            </div>

            {/* Create Another */}
            <div className="text-center">
              <button
                onClick={() => {
                  setGeneratedName(null);
                  setName("");
                  setIsVisible(false);
                  // Clear URL param
                  const url = new URL(window.location.href);
                  url.searchParams.delete("name");
                  window.history.pushState({}, "", url.toString());
                }}
                className="text-sm text-muted-foreground hover:text-anime-pink transition-colors underline underline-offset-4"
              >
                Create another wish
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PersonalizedWish;
