import heroPain from "@/assets/hero-pain.jpg";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Load VSL script
    const s = document.createElement("script");
    s.src = "https://scripts.converteai.net/549f59f7-0f40-4f05-bfc9-dc4b5597d1eb/players/69d4d23d49922114cb896c2a/v4/player.js";
    s.async = true;
    document.head.appendChild(s);
    return () => {
      document.head.removeChild(s);
    };
  }, []);
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="absolute inset-0 opacity-20">
          <img src={heroPain} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>

        <div className="container relative z-10 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium mb-6">
                🌿 Solução 100% Natural
              </span>
            </div>

            <h1
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Há dias que não consegue evacuar?{" "}
              <span className="text-gradient">Sente o corpo pesado, inchado e sem alívio?</span>
            </h1>

            <p
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              Assista ao vídeo e descubra o drink natural que está ajudando centenas de pessoas a{" "}
              <span className="text-foreground font-medium">libertar o intestino</span> — sem laxantes, sem cólicas, sem sofrimento.
            </p>

            {/* Container da VSL */}
            <div className="w-full max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.35s" }}>
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border/30">
                <div
                  id="vid-69d4d23d49922114cb896c2a"
                  style={{ display: "block", margin: "0 auto", width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 Despertar Digestivo. Todos os direitos reservados.</p>
            <p className="mt-2">Este produto não é um medicamento e não substitui acompanhamento médico.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
