import { useEffect, useRef, useState } from "react";
import { Brain, Cloud, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Service {
  icon: typeof Brain;
  title: string;
  description: string;
  details: string;
}

const services: Service[] = [
  {
    icon: Brain,
    title: "AI Solutions",
    description: "Intelligent automation and machine learning",
    details: "Transform your business with cutting-edge artificial intelligence and machine learning solutions. From predictive analytics to natural language processing, we deliver intelligent systems that drive innovation.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable and secure cloud architecture",
    details: "Build resilient, scalable cloud infrastructure tailored to your needs. We provide comprehensive cloud migration, optimization, and management services across all major platforms.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Advanced protection for your digital assets",
    details: "Protect your organization with enterprise-grade cybersecurity solutions. Our comprehensive approach includes threat detection, incident response, and continuous security monitoring.",
  },
];

export function ServicesSection() {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      });

      tl.from(titleRef.current, {
        x: -200,
        opacity: 0,
        duration: 1,
      });

      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "top 60%",
              toggleActions: "play none none reverse",
            },
            y: 100,
            opacity: 0,
            rotateY: -90,
            duration: 0.8,
            delay: index * 0.15,
            ease: "power2.out",
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCardClick = (index: number, cardElement: HTMLDivElement | null) => {
    if (!cardElement) return;

    const isFlipped = flippedCards.has(index);
    const newFlippedState = new Set(flippedCards);

    if (isFlipped) {
      newFlippedState.delete(index);
    } else {
      newFlippedState.add(index);
    }

    setFlippedCards(newFlippedState);

    const frontCard = cardElement.querySelector('.card-front') as HTMLElement;
    const backCard = cardElement.querySelector('.card-back') as HTMLElement;

    if (frontCard && backCard) {
      gsap.to(cardElement, {
        rotateY: isFlipped ? 0 : 360,
        duration: 0.8,
        ease: "power2.inOut",
        onUpdate: function() {
          const progress = this.progress();
          if (progress > 0.5) {
            frontCard.style.opacity = '0';
            backCard.style.opacity = '1';
          } else {
            frontCard.style.opacity = '1';
            backCard.style.opacity = '0';
          }
        },
      });
    }
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-background"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions designed to propel your business forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isFlipped = flippedCards.has(index);

            return (
              <div
                key={service.title}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="perspective-1000"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  className="relative h-full cursor-pointer"
                  onClick={(e) => handleCardClick(index, e.currentTarget as HTMLDivElement)}
                  data-testid={`card-service-${index}`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Card className="card-front absolute inset-0 hover-elevate backface-hidden h-full transition-opacity" style={{ backfaceVisibility: "hidden" }}>
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-chart-2/10 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-chart-2" />
                      </div>
                      <CardTitle className="text-2xl text-primary mb-2">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm text-muted-foreground">
                        Tap to learn more
                      </p>
                    </CardContent>
                  </Card>

                  <Card
                    className="card-back absolute inset-0 backface-hidden h-full opacity-0 transition-opacity"
                    style={{
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <CardHeader className="pb-3">
                      <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-chart-2/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-chart-2" />
                      </div>
                      <CardTitle className="text-xl text-primary text-center mb-2">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.details}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}
