import { Link } from "wouter";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const quickLinks = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "Blog", id: "blog" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@forantech.com", label: "Email" },
];

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/">
              <div className="text-2xl font-bold mb-4 cursor-pointer">
                <span className="text-chart-2">Foran</span>
                <span>Tech</span>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/80 leading-relaxed mb-6">
              Empowering businesses with cutting-edge technology solutions for a digital future.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    data-testid={`link-social-${social.label.toLowerCase()}`}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-primary-foreground hover:text-chart-2 hover:bg-primary-foreground/10"
                    >
                      <Icon className="w-5 h-5" />
                    </Button>
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm text-primary-foreground/80 hover:text-chart-2 transition-colors text-left hover-elevate active-elevate-2 px-2 py-1 -ml-2 rounded-md w-fit"
                  data-testid={`link-footer-${link.id}`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <nav className="flex flex-col gap-2">
              <div className="text-sm text-primary-foreground/80">AI Solutions</div>
              <div className="text-sm text-primary-foreground/80">Cloud Infrastructure</div>
              <div className="text-sm text-primary-foreground/80">Cybersecurity</div>
              <div className="text-sm text-primary-foreground/80">Consulting</div>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Subscribe to get the latest updates and insights.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-chart-2"
                data-testid="input-newsletter"
              />
              <Button
                className="bg-chart-2 hover:bg-chart-2/90 text-white flex-shrink-0"
                data-testid="button-subscribe"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <div>
              © {new Date().getFullYear()} ForanTech. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-chart-2 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-chart-2 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-chart-2 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
