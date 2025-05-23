import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-muted/30 section-bordered">
      <div className="max-container">
        <div className="space-y-4 mb-12 text-center">
          <p className="text-primary font-medium">About Me</p>
          <h2 className="text-4xl font-bold">My Background</h2>
        </div>

        <div className="glass-card p-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              I'm a passionate technologist with experience in developing AI-powered
              solutions that make life easier. With a background in computer science
              and a love for innovation, I focus on creating seamless integrations
              between software and hardware.
            </p>
            <p>
              Currently, I'm focused on AI-powered automation, smart home technology,
              and creating solutions that bridge the gap between complex technologies
              and everyday users. My goal is to make technology more accessible and
              useful for everyone.
            </p>
            <p>
              When I'm not coding, you can find me experimenting with new smart home
              configurations, contributing to open-source projects, or hiking in nature
              to disconnect and recharge.
            </p>
            <div>
              <Button asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="glass-card card-hover">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold text-primary mb-1">Class 12 <span className="text-xs text-muted-foreground"> (2021)</span></h3>
                <p className="text-sm text-muted-foreground">
                  Kendriya Vidyalaya Narangi, Guwahati<br />
                  <span className="font-medium">87%</span>
                </p>
              </CardContent>
            </Card>
            <Card className="glass-card card-hover">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold text-primary mb-1">Class 10 <span className="text-xs text-muted-foreground"> (2019)</span></h3>
                <p className="text-sm text-muted-foreground">
                  Kendriya Vidyalaya No. 2 Salt Lake, Kolkata<br />
                  <span className="font-medium">84%</span>
                </p>
              </CardContent>
            </Card>
            <Card className="glass-card card-hover col-span-2">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold text-primary mb-1">B.Tech (CSE) - 3rd Year</h3>
                <p className="text-sm text-muted-foreground">
                  Assam University, Silchar<br />
                  Currently Pursuing
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
