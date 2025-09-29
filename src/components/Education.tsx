import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "PhD in Electric Power Engineering",
      field: "Electric Power Engineering",
      institution: "Faculty of Electrical Engineering, University of Prishtina",
      location: "Prishtina, Kosovo",
      year: "2022",
      description: "Advanced doctoral research in electric power engineering with focus on transmission systems, grid optimization, and power system analysis.",
      icon: GraduationCap,
      featured: true
    },
    {
      degree: "Master of Science",
      field: "Electric Power Engineering",
      institution: "Faculty of Electrical Engineering, University of Prishtina",
      location: "Prishtina, Kosovo", 
      year: "2007",
      description: "Advanced studies in electric power engineering, power systems analysis, and transmission network operations.",
      icon: Award,
      featured: false
    },
    {
      degree: "Bachelor of Science",
      field: "Electric Industrial Engineering",
      institution: "Faculty of Electrical Engineering, University of Prishtina",
      location: "Prishtina, Kosovo",
      year: "1995", 
      description: "Comprehensive foundation in electric industrial engineering, power systems fundamentals, and electrical engineering principles.",
      icon: GraduationCap,
      featured: false
    }
  ];

  return (
    <section id="education" className="py-20 px-6 scroll-mt-16">{/* scroll-mt-16 accounts for fixed navigation */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Education</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Academic Background
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strong academic foundation in electrical engineering with specialized expertise 
            in power systems and transmission network management
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => {
            const IconComponent = edu.icon;
            return (
              <Card 
                key={index}
                className={`p-8 hover:shadow-elegant transition-smooth group animate-slide-in-left ${
                  edu.featured ? 'border-primary/20 bg-gradient-subtle' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-smooth ${
                      edu.featured ? 'bg-primary/20' : 'bg-muted/50'
                    }`}>
                      <IconComponent className={`w-8 h-8 ${
                        edu.featured ? 'text-primary' : 'text-muted-foreground'
                      }`} />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gradient mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-lg font-medium text-muted-foreground mb-1">
                          {edu.field}
                        </p>
                        <p className="text-lg font-semibold mb-2">
                          {edu.institution}
                        </p>
                      </div>
                      
                      <div className="flex flex-col lg:items-end gap-2">
                        <Badge variant="outline" className="w-fit">
                          <Calendar className="w-4 h-4 mr-2" />
                          {edu.year}
                        </Badge>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span className="text-sm">{edu.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;