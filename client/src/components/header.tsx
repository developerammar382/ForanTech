import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  const [location, setLocation] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (location !== "/") {
      setLocation("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (path: string, sectionId?: string) => {
    if (sectionId && location === "/") {
      scrollToSection(sectionId);
    } else {
      setLocation(path);
      setIsMobileMenuOpen(false);
    }
  };

  const services = [
    { label: "AI Solutions", path: "/services/ai" },
    { label: "Cloud Infrastructure", path: "/services/cloud" },
    { label: "Cybersecurity", path: "/services/cybersecurity" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/">
            <button
              className="text-2xl font-bold tracking-tight hover-elevate active-elevate-2 px-3 py-2 -ml-3 rounded-md"
              data-testid="link-home"
            >
              <span className="text-primary">Foran</span>
              <span className="text-foreground">Tech</span>
            </button>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <Link href="/about">
              <button
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover-elevate active-elevate-2 rounded-md transition-colors relative group"
                data-testid="link-about"
              >
                About
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </button>
            </Link>

            <div className="relative group">
              <button
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover-elevate active-elevate-2 rounded-md transition-colors flex items-center gap-1"
                data-testid="link-services"
              >
                Services
                <ChevronDown className="w-3 h-3" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-56 bg-background border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {services.map((service) => (
                  <Link key={service.path} href={service.path}>
                    <button className="w-full text-left px-4 py-3 text-sm text-foreground/80 hover:text-foreground hover:bg-muted transition-colors first:rounded-t-md last:rounded-b-md">
                      {service.label}
                    </button>
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/projects">
              <button
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover-elevate active-elevate-2 rounded-md transition-colors relative group"
                data-testid="link-projects"
              >
                Projects
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </button>
            </Link>

            <Link href="/blog">
              <button
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover-elevate active-elevate-2 rounded-md transition-colors relative group"
                data-testid="link-blog"
              >
                Blog
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </button>
            </Link>

            <Link href="/careers">
              <button
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover-elevate active-elevate-2 rounded-md transition-colors relative group"
                data-testid="link-careers"
              >
                Careers
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </button>
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="/contact">
              <Button
                className="hidden md:flex"
                data-testid="button-contact-cta"
              >
                Let's Connect
              </Button>
            </Link>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-2">
            <Link href="/about">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full px-4 py-3 text-left text-sm font-medium text-foreground/80 hover:text-foreground hover-elevate active-elevate-2 rounded-md transition-colors"
                data-testid="link-mobile-about"
              >
                About
              </button>
            </Link>

            <div className="px-4 py-2 text-xs font-semibold text-muted-foreground">Services</div>
            {services.map((service) => (
              <Link key={service.path} href={service.path}>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full px-6 py-2 text-left text-sm font-medium text-foreground/80 hover:text-foreground hover-elevate active-elevate-2 rounded-md transition-colors"
                >
                  {service.label}
                </button>
              </Link>
            ))}

            <Link href="/projects">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full px-4 py-3 text-left text-sm font-medium text-foreground/80 hover:text-foreground hover-elevate active-elevate-2 rounded-md transition-colors"
                data-testid="link-mobile-projects"
              >
                Projects
              </button>
            </Link>

            <Link href="/blog">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full px-4 py-3 text-left text-sm font-medium text-foreground/80 hover:text-foreground hover-elevate active-elevate-2 rounded-md transition-colors"
                data-testid="link-mobile-blog"
              >
                Blog
              </button>
            </Link>

            <Link href="/careers">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full px-4 py-3 text-left text-sm font-medium text-foreground/80 hover:text-foreground hover-elevate active-elevate-2 rounded-md transition-colors"
                data-testid="link-mobile-careers"
              >
                Careers
              </button>
            </Link>

            <Link href="/contact">
              <Button
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 w-full"
                data-testid="button-mobile-contact-cta"
              >
                Let's Connect
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
