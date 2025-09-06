import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-ubuntu font-bold text-lg text-foreground mb-4">
              UbuntuTale
            </h3>
            <p className="text-muted-foreground font-ubuntu text-sm leading-relaxed">
              Crafting exceptional digital experiences through modern web development and innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-ubuntu font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/" 
                  className="text-muted-foreground hover:text-foreground transition-colors font-ubuntu text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="/about" 
                  className="text-muted-foreground hover:text-foreground transition-colors font-ubuntu text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="/blog" 
                  className="text-muted-foreground hover:text-foreground transition-colors font-ubuntu text-sm"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-ubuntu font-semibold text-foreground mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground font-ubuntu text-sm">
                Web Development
              </li>
              <li className="text-muted-foreground font-ubuntu text-sm">
                React Applications
              </li>
              <li className="text-muted-foreground font-ubuntu text-sm">
                TypeScript Solutions
              </li>
              <li className="text-muted-foreground font-ubuntu text-sm">
                UI/UX Design
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-ubuntu font-semibold text-foreground mb-4">
              Get In Touch
            </h4>
            <div className="space-y-2">
              <p className="text-muted-foreground font-ubuntu text-sm">
                hello@ubuntutale.com
              </p>
              <p className="text-muted-foreground font-ubuntu text-sm">
                +1 (555) 123-4567
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground font-ubuntu text-sm">
            © 2024 UbuntuTale. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors font-ubuntu text-sm"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors font-ubuntu text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};