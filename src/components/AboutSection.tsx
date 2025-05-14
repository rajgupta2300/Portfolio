
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="max-container">
        <div className="space-y-4 mb-12 text-center">
          <p className="text-primary font-medium">About Me</p>
          <h2 className="text-4xl font-bold">My Background</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              I'm a passionate Python and Full Stack Developer currently pursuing my 
              B.Tech in Computer Science Engineering (3rd year) at Assam University, Silchar.
            </p>
            <p>
              My educational journey includes scoring 84% in Class 10 CBSE from Kendriya 
              Vidyalaya No. 2 Saltlake, Kolkata, and 87% in Class 12 CBSE from Kendriya 
              Vidyalaya Narangi, Guwahati.
            </p>
            <p>
              I specialize in developing AI-powered solutions and full-stack applications. 
              Currently, I'm focused on AI-powered automation, smart home technology, and 
              creating solutions that bridge the gap between complex technologies and everyday users.
            </p>
            <p>
              When I'm not coding, you can find me experimenting with new technologies,
              contributing to open-source projects, or exploring new programming concepts.
            </p>
            <div>
              <Button asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="card-hover">
              <CardContent className="p-6 text-center">
                <h3 className="text-4xl font-bold text-primary mb-1">5+</h3>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </CardContent>
            </Card>
            <Card className="card-hover">
              <CardContent className="p-6 text-center">
                <h3 className="text-4xl font-bold text-primary mb-1">20+</h3>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </CardContent>
            </Card>
            <Card className="card-hover">
              <CardContent className="p-6 text-center">
                <h3 className="text-4xl font-bold text-primary mb-1">10+</h3>
                <p className="text-sm text-muted-foreground">Technologies</p>
              </CardContent>
            </Card>
            <Card className="card-hover">
              <CardContent className="p-6 text-center">
                <h3 className="text-4xl font-bold text-primary mb-1">3+</h3>
                <p className="text-sm text-muted-foreground">Open Source Contributions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
