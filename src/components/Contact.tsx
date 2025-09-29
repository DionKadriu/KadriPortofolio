import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "kkadriu@gmail.com",
      link: "mailto:kkadriu@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+383-44507-483",
      link: "tel:+38344507483"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Prishtina, Kosovo",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Contact</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interested in collaboration on energy projects, research opportunities, or technical consulting? 
            Let's discuss how we can work together on advancing sustainable energy infrastructure.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-8 text-gradient">
              Get In Touch
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{info.title}</p>
                      <a 
                        href={info.link}
                        className="text-muted-foreground hover:text-primary transition-smooth"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-6 rounded-xl bg-gradient-subtle border border-border/50">
              <h4 className="font-semibold mb-2">Available for consulting</h4>
              <p className="text-muted-foreground text-sm">
                Currently accepting consulting projects in power systems, energy markets, 
                and regulatory compliance. International collaboration welcomed.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 shadow-soft">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <Input placeholder="John" className="contact-input" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <Input placeholder="Doe" className="contact-input" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="john@example.com" className="contact-input" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input placeholder="Project collaboration" className="contact-input" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  placeholder="Tell me about your project..."
                  className="contact-textarea min-h-[120px]"
                />
              </div>
              
              <Button className="w-full contact-button">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact; 