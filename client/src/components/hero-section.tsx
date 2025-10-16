import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Futuristic_tech_hero_background_6fa13d09.png";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster={heroImage}
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-abstract-tech-visualization/1080p.mp4"
          type="video/mp4"
        />
        <source
          src="https://cdn.coverr.co/videos/coverr-digital-network-animation/1080p.mp4"
          type="video/mp4"
        />
      </video>

      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-background/90 z-10"
        style={{
          backgroundImage: `linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.8) 50%, hsl(var(--background)) 100%)`,
        }}
      />

      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Innovating the Future
            <br />
            <span className="text-chart-2">with Technology</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed">
            Empowering businesses with cutting-edge AI solutions, cloud
            infrastructure, and cybersecurity services for the digital age.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="min-h-12 px-8 text-base font-semibold bg-chart-2 hover:bg-chart-2/90 text-white border-0"
              data-testid="button-hero-contact"
            >
              Let's Connect
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById("services");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="min-h-12 px-8 text-base font-semibold bg-background/10 backdrop-blur-md border-white/30 text-white hover:bg-background/20"
              data-testid="button-hero-services"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
