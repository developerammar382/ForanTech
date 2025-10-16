import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search, FileQuestion } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const quickLinks = [
    { label: "Home", path: "/", icon: Home },
    { label: "About Us", path: "/about", icon: FileQuestion },
    { label: "Our Projects", path: "/projects", icon: Search },
    { label: "Contact", path: "/contact", icon: FileQuestion },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Page Not Found
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Oops! The page you're looking for seems to have wandered off into the digital void. 
                Don't worry, we'll help you find your way back.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Button
                size="lg"
                onClick={() => setLocation("/")}
                className="min-w-[200px]"
                data-testid="button-go-home"
              >
                <Home className="mr-2 w-5 h-5" />
                Go to Homepage
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.history.back()}
                className="min-w-[200px]"
                data-testid="button-go-back"
              >
                <ArrowLeft className="mr-2 w-5 h-5" />
                Go Back
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="text-sm font-semibold text-foreground mb-4">Quick Links</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {quickLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    >
                      <Link href={link.path}>
                        <button
                          className="w-full p-4 rounded-lg border border-border bg-card hover:bg-muted transition-all duration-300 hover-elevate active-elevate-2 group"
                          data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                          <Icon className="w-6 h-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                          <p className="text-sm font-medium text-foreground">{link.label}</p>
                        </button>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
