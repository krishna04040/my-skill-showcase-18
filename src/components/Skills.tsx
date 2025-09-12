import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, BarChart3, Settings, Code2 } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "SAP Technologies",
      icon: <Database className="w-6 h-6" />,
      skills: [
        "SAP HANA 1.0 & 2.X",
        "SAP BWonHANA",
        "SAP BW 7.3/7.4",
        "SAP ECC 6.0",
        "SLT Replication",
        "HANA Modeling",
        "Calculation Views",
        "Attribute Views",
        "Analytic Views"
      ]
    },
    {
      title: "Business Intelligence",
      icon: <BarChart3 className="w-6 h-6" />,
      skills: [
        "Business Objects 4.1",
        "Web Intelligence (WebI)",
        "Information Design Tool (IDT)",
        "Crystal Reports",
        "Xcelsius Dashboards",
        "Universe Creation",
        "Query Design",
        "BEx Query Designer"
      ]
    },
    {
      title: "Data Management",
      icon: <Settings className="w-6 h-6" />,
      skills: [
        "ADSOs",
        "Open DSOs",
        "Composite Providers",
        "Info Cubes",
        "Multi Providers",
        "DTP & Transformations",
        "Process Chains",
        "Performance Tuning"
      ]
    },
    {
      title: "Technical Skills",
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        "ABAP",
        "SQL Script",
        "Variables & Parameters",
        "Data Replication",
        "System Monitoring",
        "Transport Management",
        "Incident Handling",
        "Technical Documentation"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across SAP ecosystem and business intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className="card-glass animate-slide-up group hover:glow-accent transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-tech-blue group-hover:text-tech-teal transition-colors">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-xs hover:bg-tech-blue hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;