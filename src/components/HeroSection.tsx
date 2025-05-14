
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 section-padding"
    >
      <div className="max-container">
        <div className="max-w-3xl animate-fade-in">
          <p className="text-primary font-medium mb-3">Hello, I'm</p>
          <h1 className="mb-6">Alex Morgan</h1>
          <p className="text-2xl font-semibold text-muted-foreground mb-6">
            AI & Automation Developer
          </p>
          <p className="text-lg mb-8">
            I build intelligent solutions that solve real-world problems.
            Specializing in computer vision, voice recognition, and smart home
            automation technologies.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="group">
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
