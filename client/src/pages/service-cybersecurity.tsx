import { Link, useLocation } from "wouter";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Check, Shield, Lock, Eye, AlertTriangle } from "lucide-react";

const benefits = [
  "Comprehensive threat detection and prevention",
  "Regulatory compliance (SOC 2, ISO 27001, GDPR)",
  "24/7 security monitoring and incident response",
  "Data encryption and access controls",
  "Regular security audits and assessments",
  "Employee security awareness training",
];

const features = [
  {
    icon: Shield,
    title: "Threat Detection",
    description: "Advanced AI-powered systems to identify and neutralize threats in real-time.",
  },
  {
    icon: Lock,
    title: "Data Protection",
    description: "End-to-end encryption and secure data management practices.",
  },
  {
    icon: Eye,
    title: "Security Monitoring",
    description: "24/7 monitoring with rapid incident response and mitigation.",
  },
  {
    icon: AlertTriangle,
    title: "Vulnerability Management",
    description: "Proactive identification and remediation of security vulnerabilities.",
  },
];

export default function ServiceCybersecurity() {
  const [, setLocation] = useLocation();

  const scrollToContact = () => {
    setLocation("/");
    setTimeout(() => {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary/90 to-background text-primary-foreground">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Link href="/">
              <Button
                variant="ghost"
                className="mb-8 text-primary-foreground hover:bg-primary-foreground/10"
                data-testid="button-back"
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Home
              </Button>
            </Link>

            <div className="max-w-4xl">
              <Badge className="mb-4 bg-chart-2 text-white">Cybersecurity</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">
                Enterprise Cybersecurity Solutions
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Protect your organization with comprehensive cybersecurity solutions that safeguard your digital assets, ensure compliance, and provide peace of mind.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Advanced Security for Modern Threats
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  In today's digital landscape, cybersecurity is not optional—it's essential. Our comprehensive security solutions protect your organization from evolving cyber threats while ensuring regulatory compliance and business continuity.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From vulnerability assessments and penetration testing to managed security services and incident response, we provide multi-layered protection tailored to your organization's unique risk profile.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Key Benefits
                </h3>
                <div className="space-y-3">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-chart-2 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
              What We Offer
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={feature.title} className="hover-elevate active-elevate-2" data-testid={`card-feature-${index}`}>
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-chart-2/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-chart-2" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>

            <div className="bg-card rounded-lg p-8 lg:p-12 text-center">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Ready to Secure Your Organization?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how our cybersecurity solutions can protect your business and ensure compliance.
              </p>
              <Button size="lg" onClick={scrollToContact} data-testid="button-get-started">
                Get Started Today
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
