
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  technologies: string[];
  githubLink: string;
  demoLink?: string;
}

const projects: ProjectCardProps[] = [
  {
    title: "Hand Gesture Volume Control",
    description: "Control your computer's volume with hand gestures, using computer vision to track hand movements.",
    imageSrc: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    technologies: ["Python", "OpenCV", "MediaPipe"],
    githubLink: "#",
    demoLink: "#"
  },
  {
    title: "Voice Assistant",
    description: "A customizable voice assistant that responds to voice commands and performs various tasks.",
    imageSrc: "https://images.unsplash.com/photo-1589254065909-b7086229d08c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    technologies: ["Python", "Speech Recognition", "NLP"],
    githubLink: "#",
    demoLink: "#"
  },
  {
    title: "Smart Home Control System",
    description: "Centralized system to control smart home devices with web and mobile interfaces.",
    imageSrc: "https://images.unsplash.com/photo-1558002038-1055e2fc55a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    technologies: ["Node.js", "MQTT", "Home Assistant", "React"],
    githubLink: "#",
    demoLink: "#"
  },
  {
    title: "Personal Portfolio Website",
    description: "This responsive portfolio website built with modern web technologies.",
    imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    technologies: ["React", "TypeScript", "TailwindCSS"],
    githubLink: "#",
    demoLink: "#"
  },
  {
    title: "Weather Forecast Web App",
    description: "A web application that provides weather forecasts using real-time data from weather APIs.",
    imageSrc: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    technologies: ["JavaScript", "React", "Weather API"],
    githubLink: "#",
    demoLink: "#"
  }
];

function ProjectCard({ title, description, imageSrc, technologies, githubLink, demoLink }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden card-hover flex flex-col">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">{tech}</Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex gap-2 mt-auto">
        <Button asChild size="sm" variant="outline">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <Github className="mr-1 h-4 w-4" />
            Code
          </a>
        </Button>
        {demoLink && (
          <Button asChild size="sm">
            <a href={demoLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-1 h-4 w-4" />
              Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-container">
        <div className="space-y-4 mb-12 text-center">
          <p className="text-primary font-medium">My Work</p>
          <h2 className="text-4xl font-bold">Recent Projects</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Here are some of my recent projects showcasing my skills and experience in
            various technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
