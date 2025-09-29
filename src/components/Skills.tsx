import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Power Systems",
      skills: [
        { name: "Transmission Operations", level: 95 },
        { name: "Protection Systems", level: 90 },
        { name: "Grid Analysis (PSS/E)", level: 95 },
        { name: "Power Flow Analysis", level: 90 }
      ]
    },
    {
      title: "Energy Markets", 
      skills: [
        { name: "ENTSO-E Integration", level: 95 },
        { name: "Market Operations", level: 90 },
        { name: "Grid Code Development", level: 85 },
        { name: "Cross-border Trading", level: 85 }
      ]
    },
    {
      title: "Technical Systems",
      skills: [
        { name: "SCADA Systems", level: 85 },
        { name: "IEC 61850 Protocol", level: 80 },
        { name: "Renewable Integration", level: 85 },
        { name: "System Modeling", level: 90 }
      ]
    }
  ];

  const softSkills = [
    "Strategic Planning",
    "International Cooperation", 
    "Regulatory Compliance",
    "Stakeholder Management",
    "Technical Leadership",
    "Research & Publications"
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Skills</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 hover:shadow-medium transition-smooth animate-fade-in">
              <h3 className="text-lg font-semibold mb-6 text-gradient">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <Card className="p-8 bg-gradient-subtle border-0">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-gradient">
              Core Competencies
            </h3>
            <p className="text-muted-foreground">
              The soft skills that drive successful collaboration and project delivery
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill) => (
              <Badge key={skill} variant="outline" className="soft-skill-badge">
                {skill}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;