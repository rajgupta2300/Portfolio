import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 section-padding"
    >
      <div className="max-container flex justify-center">
        <div
          className="w-full max-w-7xl min-h-[500px] animate-fade-in bg-white/30 dark:bg-black/30 backdrop-blur-2xl shadow-2xl rounded-3xl p-20 border border-white/40 border-opacity-40 flex flex-col justify-center"
          style={{
            boxShadow:
              "0 12px 48px 0 rgba(31,38,135,0.37), 0 2px 16px 0 rgba(59,130,246,0.15) inset",
            background:
              "linear-gradient(120deg, rgba(59,130,246,0.35) 0%, rgba(124,58,237,0.18) 60%, rgba(255,255,255,0.25) 100%)",
            backdropFilter: "blur(32px)",
          }}
        >
          <p className="text-primary font-medium mb-3 text-lg">Hello, I'm</p>
          <h1 className="mb-6 text-5xl font-extrabold drop-shadow-lg">
            Raj Gupta
          </h1>
          <p className="text-3xl font-semibold text-muted-foreground mb-6">
            AI & Automation Engineer
          </p>
          <p className="text-xl mb-8">
            I build intelligent solutions that solve real-world problems.
            Specializing in computer vision, voice recognition, and smart home
            automation technologies.
          </p>
          <div className="flex flex-wrap gap-6">
            <Button asChild className="group text-lg px-6 py-3">
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="outline" className="text-lg px-6 py-3">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
