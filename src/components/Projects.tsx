import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "KOSTT ENTSO-E Integration",
      description: "Led the comprehensive integration of Kosovo's transmission system operator with the European Network of TSOs. Developed grid codes, operational procedures, and market mechanisms for European compliance.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop&crop=center",
      technologies: ["ENTSO-E", "Grid Codes", "Market Integration", "Regulatory Compliance"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Albania-Kosovo Control Block",
      description: "Established the first cross-border control block between Albania and Kosovo TSOs, including data communications, monitoring procedures, and reserve sharing mechanisms.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&crop=center",
      technologies: ["Cross-border Cooperation", "SCADA", "Reserve Sharing", "Monitoring Systems"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Albanian Power Exchange (ALPEX)",
      description: "Technical lead for establishing ALPEX, developing market operations, training materials, and coupling mechanisms with regional power exchanges.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
      technologies: ["Power Markets", "Market Coupling", "Trading Platforms", "Regional Integration"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Moldova Energy Security (MESA)",
      description: "Providing strategic technical assistance to Moldelectrica for ENTSO-E compliance, balancing market development, and energy security enhancement.",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&h=400&fit=crop&crop=center",
      technologies: ["ENTSO-E Compliance", "Balancing Markets", "Strategic Planning", "Technical Assistance"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Projects</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Key Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Major initiatives in power systems integration, energy markets, and international cooperation 
            that have shaped the energy landscape in Southeast Europe
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden hover:shadow-elegant transition-smooth group ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className={`${project.featured ? 'lg:flex lg:items-center' : ''}`}>
                <div className={`${project.featured ? 'lg:w-1/2' : ''}`}>
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-smooth"></div>
                  </div>
                </div>
                
                <div className={`p-6 ${project.featured ? 'lg:w-1/2' : ''}`}>
                  {project.featured && (
                    <Badge className="mb-3 featured-badge">Featured Project</Badge>
                  )}
                  
                  <h3 className="text-xl font-semibold mb-3 text-gradient">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="tech-badge">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button size="sm" className="project-cta">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;