import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "EU TSO Advisor",
      company: "USAID Moldova Energy Security Activity (MESA), Tetra Tech",
      location: "Moldova (Remote)",
      period: "September 2023 - Present",
      description: "Providing strategic technical assistance to Moldovan TSO (Moldelectrica) for ENTSO-E compliance, market integration, and balancing market development. Leading stakeholder consultations and representing the organization in national and international forums.",
      technologies: ["ENTSO-E", "Grid Codes", "Market Operations", "Balancing Markets", "Strategic Planning"]
    },
    {
      title: "Acting CEO",
      company: "KOSTT (Kosovo Transmission System Operator)",
      location: "Prishtina, Kosovo",
      period: "September 2021 - July 2022", 
      description: "Led strategic business planning, ensured transmission network security and reliability, managed power market development, and represented KOSTT in international forums. Successfully managed ENTSO-E integration process.",
      technologies: ["TSO Management", "ENTSO-E Integration", "Power Markets", "Strategic Planning", "Stakeholder Management"]
    },
    {
      title: "Deputy CEO for Operations",
      company: "KOSTT (Kosovo Transmission System Operator)",
      location: "Prishtina, Kosovo",
      period: "2008 - 2021",
      description: "Supervised system operation, market operation, and transmission departments. Led development of operational procedures, maintenance policies, and grid code implementation. Managed international cooperation projects.",
      technologies: ["Power Systems", "Grid Operations", "Market Development", "International Cooperation", "System Analysis"]
    },
    {
      title: "Engineering Advisor & Consultant",
      company: "RTI International, Various International Organizations",
      location: "Regional (SEE)",
      period: "2022 - Present",
      description: "Supporting market coupling initiatives, training development for market operations, and TSO technical assistance across Southeast Europe. Expertise in ENTSO-E compliance and regional energy market integration.",
      technologies: ["Market Coupling", "ENTSO-E", "Training Development", "Regional Integration", "Technical Assistance"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Experience</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A timeline of growth, learning, and meaningful contributions to innovative projects
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8 hover:shadow-medium transition-smooth animate-fade-in">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gradient mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <Building className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">{exp.period}</span>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="tech-badge">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;