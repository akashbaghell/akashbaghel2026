import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element with festive celebration music
    audioRef.current = new Audio(
      "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
    );
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(console.error);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={toggleMusic}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label={isPlaying ? "Mute music" : "Play music"}
    >
      {/* Anime glow ring */}
      <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-anime-pink via-anime-purple to-anime-cyan blur-md transition-opacity duration-300 ${isPlaying ? "opacity-100 animate-pulse" : "opacity-50"}`} />
      
      {/* Button */}
      <div className="relative w-14 h-14 rounded-full bg-secondary/80 backdrop-blur-md border border-anime-purple/50 flex items-center justify-center hover:scale-110 transition-transform duration-300">
        {isPlaying ? (
          <Volume2 className="w-6 h-6 text-anime-cyan" />
        ) : (
          <VolumeX className="w-6 h-6 text-muted-foreground" />
        )}
        
        {/* Sparkle decoration */}
        <span className="absolute -top-1 -right-1 text-sm animate-pulse">✦</span>
      </div>
      
      {/* Tooltip */}
      <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-secondary/90 backdrop-blur-sm text-foreground text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-anime-purple/30">
        {isPlaying ? "Pause Music" : "Play Music ♪"}
      </span>
    </button>
  );
};

export default MusicPlayer;
