import { useEffect, useRef, useState } from "react";
import { Target, Users, Award, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Innovation",
    description: "Pioneering cutting-edge solutions that shape the future",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working together to achieve extraordinary results",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Delivering superior quality in everything we do",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "Continuous improvement and adaptation to evolving needs",
  },
];

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              About ForanTech
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-primary-foreground/90">
              <p>
                ForanTech is a forward-thinking technology company specializing
                in innovative solutions that empower businesses to thrive in the
                digital age.
              </p>
              <p>
                With expertise spanning artificial intelligence, cloud
                infrastructure, and cybersecurity, we deliver comprehensive
                technology services tailored to meet the unique challenges of
                modern enterprises.
              </p>
              <p>
                Our mission is to bridge the gap between cutting-edge technology
                and practical business applications, ensuring our clients stay
                ahead in an ever-evolving digital landscape.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <div className="text-4xl font-bold text-chart-2 mb-1">500+</div>
                <div className="text-sm text-primary-foreground/80">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-chart-2 mb-1">98%</div>
                <div className="text-sm text-primary-foreground/80">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-chart-2 mb-1">50+</div>
                <div className="text-sm text-primary-foreground/80">Expert Team Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-chart-2 mb-1">24/7</div>
                <div className="text-sm text-primary-foreground/80">Support Available</div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold mb-8">Our Core Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-lg hover-elevate active-elevate-2"
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                    data-testid={`card-value-${index}`}
                  >
                    <div className="w-12 h-12 rounded-full bg-chart-2/20 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-chart-2" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                    <p className="text-sm text-primary-foreground/80 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
