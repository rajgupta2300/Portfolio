
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/30 py-8">
      <div className="max-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-2xl font-bold">
              Portfolio<span className="text-primary">.</span>
            </p>
            <p className="text-muted-foreground">
              &copy; {currentYear} Alex Morgan. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:alex.morgan@example.com"
              className="hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
