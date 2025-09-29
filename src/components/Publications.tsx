import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Calendar, Users } from "lucide-react";

const Publications = () => {
  const featuredPublications = [
    {
      title: "Challenges of renewable integration in Kosovo: A technical study of balancing reserve needs",
      authors: ["Kadri Kadriu", "Gazmend Kabashi", "Arben Gjukaj", "Qamil Kabashi"],
      journal: "Ecological Engineering & Environmental Technology",
      year: 2025,
      volume: "Vol. 26, Issue 6",
      category: "Renewable Energy",
      featured: true
    },
    {
      title: "Online Monitoring of Voltage Stability Margin in Kosovo Power System Using Local Measurements",
      authors: ["Kadri Kadriu", "Gazmend Pula", "Gazmend Kabashi"],
      journal: "International Review of Electrical Engineering (IREE)",
      year: 2021,
      volume: "Volume 16, Pages 446-454",
      category: "Power Systems",
      featured: true
    },
    {
      title: "Potential Benefits of Cross-Border Reserve sharing between Kosovo and Albania",
      authors: ["Goran Majstrović", "Faruk Serdarevic", "Kadri Kadriu", "Skender Gjonbalaj", "Elio Voshtina"],
      journal: "CIGRE Kosovo",
      year: 2019,
      category: "Market Integration",
      featured: true
    }
  ];

  const recentPublications = [
    {
      title: "Analyzing of active energy losses based on the age of power transformers 110/MV kV in Kosovo's Transmission Network",
      authors: ["Rexhep Selimi", "Kjani Guri", "Kadri Kadriu", "Gazmend Kabashi"],
      conference: "CIGRE South East European Regional Council Conference 2020",
      year: 2020,
      location: "Vienna, Austria"
    },
    {
      title: "Analysis of the Generators Connection to the Transmission Network Based on the Requirements of Connection Code",
      authors: ["Kadri Kadriu", "Ilir Shala", "Gazmend Kabashi", "Sabri Limari"],
      conference: "CIGRE Kosovo",
      year: 2019
    },
    {
      title: "Mitigation methods for over-voltage occurrence in Kosovo power transmission network",
      authors: ["N. Ibrahimi", "V. Komoni", "G. Kabashi", "K. Kadriu", "F. Serdarevic"],
      conference: "53rd International Universities Power Engineering Conference (UPEC)",
      year: 2018
    },
    {
      title: "Enhancement of the Operational Security of the Kosovo Power System by applying N-1 Criterion",
      authors: ["G Pula", "K Kadriu", "G Kabashi", "V Sadiku"],
      journal: "International Journal of Contemporary Energy",
      year: 2016
    }
  ];

  const publicationStats = [
    { label: "Total Publications", value: "29", icon: FileText },
    { label: "Years Active", value: "20+", icon: Calendar },
    { label: "Co-authors", value: "25+", icon: Users },
    { label: "Research Areas", value: "5", icon: ExternalLink }
  ];

  return (
    <section id="publications" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Publications</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Research Contributions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Over 20 years of research in power systems, energy markets, and renewable integration 
            with contributions to leading engineering journals and conferences
          </p>
        </div>

        {/* Publication Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {publicationStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="p-6 text-center hover:shadow-medium transition-smooth">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            );
          })}
        </div>

        {/* Featured Publications */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-gradient text-center">
            Featured Publications
          </h3>
          <div className="space-y-8">
            {featuredPublications.map((pub, index) => (
              <Card key={index} className="p-8 hover:shadow-elegant transition-smooth">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <Badge className="mb-3 featured-badge">{pub.category}</Badge>
                    <h4 className="text-xl font-semibold mb-3 text-gradient">
                      {pub.title}
                    </h4>
                    <div className="flex flex-wrap items-center gap-2 text-muted-foreground mb-3">
                      <span className="font-medium">{pub.journal}</span>
                      {pub.volume && (
                        <>
                          <span>•</span>
                          <span>{pub.volume}</span>
                        </>
                      )}
                      <span>•</span>
                      <span>{pub.year}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <strong>Authors:</strong> {pub.authors.join(", ")}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="mt-4 lg:mt-0 project-cta-outline">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Publication
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Publications */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-gradient text-center">
            Recent Publications
          </h3>
          <div className="grid lg:grid-cols-2 gap-6">
            {recentPublications.map((pub, index) => (
              <Card key={index} className="p-6 hover:shadow-medium transition-smooth">
                <h4 className="font-semibold mb-3 leading-relaxed">
                  {pub.title}
                </h4>
                <div className="text-sm text-muted-foreground mb-3">
                  <div className="mb-1">
                    <strong>Authors:</strong> {pub.authors.join(", ")}
                  </div>
                  <div className="mb-1">
                    <strong>Published:</strong> {pub.conference || pub.journal} ({pub.year})
                  </div>
                  {pub.location && (
                    <div>
                      <strong>Location:</strong> {pub.location}
                    </div>
                  )}
                </div>
                <Button variant="outline" size="sm" className="tech-badge">
                  <FileText className="w-4 h-4 mr-2" />
                  Read More
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Research Areas */}
        <Card className="mt-16 p-8 bg-gradient-subtle border-0">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold mb-4 text-gradient">
              Research Areas
            </h3>
            <p className="text-muted-foreground">
              Key areas of focus in academic and professional research
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Power Systems Analysis",
              "Transmission Networks",
              "Energy Market Integration", 
              "Renewable Energy Integration",
              "Grid Protection Systems",
              "Cross-border Cooperation",
              "System Security & Reliability",
              "ENTSO-E Compliance"
            ].map((area) => (
              <Badge key={area} variant="outline" className="soft-skill-badge">
                {area}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Publications;