import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Check, Brain, Zap, Target, TrendingUp } from "lucide-react";

const benefits = [
  "Automated decision-making processes",
  "Predictive analytics for business insights",
  "Natural language processing capabilities",
  "Computer vision and image recognition",
  "Personalized customer experiences",
  "Real-time anomaly detection",
];

const features = [
  {
    icon: Brain,
    title: "Machine Learning Models",
    description: "Custom ML models trained on your specific business data for accurate predictions and insights.",
  },
  {
    icon: Zap,
    title: "Real-Time Processing",
    description: "Process and analyze data in real-time to make instant intelligent decisions.",
  },
  {
    icon: Target,
    title: "Targeted Recommendations",
    description: "Deliver personalized recommendations to users based on behavior and preferences.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Learning",
    description: "Models that improve over time as they process more data and receive feedback.",
  },
];

export default function ServiceAI() {
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
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl"
            >
              <Badge className="mb-4 bg-chart-2 text-white">AI Solutions</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">
                Artificial Intelligence Solutions
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Transform your business with cutting-edge AI and machine learning solutions that drive intelligent automation, enhance decision-making, and unlock new opportunities for growth.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Intelligent Systems for Modern Business
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our AI solutions leverage the latest advancements in machine learning, deep learning, and natural language processing to solve complex business challenges. From predictive analytics to intelligent automation, we build AI systems that deliver measurable results.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're looking to optimize operations, enhance customer experiences, or unlock insights from your data, our team of AI specialists will design and implement solutions tailored to your specific needs.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Key Benefits
                </h3>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <Check className="w-5 h-5 text-chart-2 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-foreground mb-8 text-center"
            >
              What We Offer
            </motion.h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover-elevate active-elevate-2" data-testid={`card-feature-${index}`}>
                      <CardHeader>
                        <div className="w-12 h-12 rounded-full bg-chart-2/10 flex items-center justify-center mb-4">
                          <Icon className="w-6 h-6 text-chart-2" />
                        </div>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                        <CardDescription>{feature.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-lg p-8 lg:p-12 text-center"
            >
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Ready to Harness the Power of AI?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI solutions can transform your business and drive unprecedented growth.
              </p>
              <Button size="lg" onClick={scrollToContact} data-testid="button-get-started">
                Get Started Today
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
