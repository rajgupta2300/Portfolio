import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "C++", level: 70 },
      { name: "HTML/CSS", level: 85 },
    ],
  },
  {
    category: "Frameworks",
    skills: [
      { name: "React", level: 85 },
      { name: "Flask", level: 80 },
      { name: "Express.js", level: 75 },
      { name: "TailwindCSS", level: 90 },
      { name: "Next.js", level: 70 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 75 },
      { name: "Arduino", level: 80 },
      { name: "Home Assistant", level: 90 },
      { name: "VS Code", level: 95 },
    ],
  },
  {
    category: "Technologies",
    skills: [
      { name: "OpenCV", level: 85 },
      { name: "TensorFlow", level: 75 },
      { name: "MongoDB", level: 80 },
      { name: "Node.js", level: 85 },
      { name: "Raspberry Pi", level: 90 },
    ],
  },
];

function SkillBar({ name, level }: Skill) {
  return (
    <div className="space-y-1 mb-4">
      <div className="flex justify-between text-sm">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-500 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="max-container">
        <div className="space-y-4 mb-12 text-center">
          <p className="text-primary font-medium">What I Know</p>
          <h2 className="text-4xl font-bold">My Skills</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            I've acquired a diverse range of skills throughout my journey. Here's
            an overview of my technical expertise.
          </p>
        </div>

        <Card className="glass-card animate-scale-in">
          <CardContent className="pt-6">
            <Tabs defaultValue="Languages">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                {skillsData.map((category) => (
                  <TabsTrigger key={category.category} value={category.category}>
                    {category.category}
                  </TabsTrigger>
                ))}
              </TabsList>
              {skillsData.map((category) => (
                <TabsContent key={category.category} value={category.category}>
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.skills.map((skill) => (
                      <SkillBar key={skill.name} {...skill} />
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
