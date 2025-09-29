import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "mailto:kkadriu@gmail.com", icon: Mail, label: "Email" },
    { href: "https://www.linkedin.com/in/kadri-kadriu-phd-39a52037/", icon: Linkedin, label: "LinkedIn" }
  ];

  return (
    <footer className="bg-muted/30 border-t border-border/50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          {/* Logo and tagline */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gradient mb-2">
              Kadri Kadriu
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Advancing sustainable energy infrastructure through innovation and collaboration
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="social-icon"
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Status badge */}
          <div className="mb-8">
            <Badge variant="outline" className="status-badge">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
              Available for new projects
            </Badge>
          </div>

          {/* Copyright */}
          <div className="border-t border-border/50 pt-6">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              © {currentYear} Kadri Kadriu. Made with 
              <Heart className="w-4 h-4 text-red-500 animate-pulse" /> 
              and lots of coffee.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;