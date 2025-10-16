import { Link, useLocation } from "wouter";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Check, Cloud, Server, Shield, Gauge } from "lucide-react";

const benefits = [
  "Scalable infrastructure that grows with your business",
  "Cost optimization through efficient resource management",
  "High availability and disaster recovery",
  "Automated backup and monitoring",
  "Multi-cloud and hybrid cloud strategies",
  "24/7 expert support and maintenance",
];

const features = [
  {
    icon: Cloud,
    title: "Cloud Migration",
    description: "Seamlessly migrate your applications and data to the cloud with minimal downtime.",
  },
  {
    icon: Server,
    title: "Infrastructure Design",
    description: "Design scalable, resilient cloud architectures tailored to your workloads.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Implement robust security controls and maintain compliance with industry standards.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description: "Continuously monitor and optimize cloud resources for peak performance.",
  },
];

export default function ServiceCloud() {
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
              <Badge className="mb-4 bg-chart-2 text-white">Cloud Infrastructure</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">
                Cloud Infrastructure Solutions
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Build scalable, secure, and resilient cloud infrastructure that powers your digital transformation and supports your business growth.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Modern Cloud Architecture
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our cloud infrastructure services help organizations leverage the full potential of cloud computing. We design, deploy, and manage cloud solutions across AWS, Azure, and Google Cloud Platform, ensuring optimal performance, security, and cost-efficiency.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From initial planning and migration to ongoing optimization and support, we provide end-to-end cloud infrastructure solutions that enable your business to innovate faster and scale seamlessly.
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
                Ready to Move to the Cloud?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's build a cloud infrastructure that scales with your ambitions and supports your digital transformation.
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
