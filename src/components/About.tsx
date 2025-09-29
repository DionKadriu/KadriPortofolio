import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Zap, Heart } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Zap,
      title: "Power Systems",
      description: "Expert in transmission networks, protection relays, and system operations"
    },
    {
      icon: Code,
      title: "ENTSO-E Integration", 
      description: "Leading European grid code compliance and market integration projects"
    },
    {
      icon: Palette,
      title: "Energy Markets",
      description: "Developing and implementing power market operations and regulations"
    },
    {
      icon: Heart,
      title: "Academic Research",
      description: "29 publications in power systems and renewable energy integration"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">About Me</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Crafting Digital Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a PhD electrical engineer with extensive expertise in power systems, transmission operations, 
            and energy market development, dedicated to advancing sustainable energy infrastructure.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-6 text-gradient">
              My Journey
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With over 25 years of experience in electrical engineering, I specialize in power systems 
                operations, transmission networks, and energy market integration. My expertise spans from 
                technical system analysis to high-level strategic planning and international collaboration.
              </p>
              <p>
                As the former Acting CEO of KOSTT (Kosovo's Transmission System Operator), I led the 
                integration with ENTSO-E and development of energy markets in Kosovo and the region. 
                My work focuses on grid modernization, renewable energy integration, and cross-border cooperation.
              </p>
              <p>
                Currently serving as EU TSO Advisor for USAID projects, I continue to advance energy 
                infrastructure development and market integration across Southeast Europe and Moldova, 
                contributing to sustainable energy transition in the region.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-medium transition-smooth group">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;