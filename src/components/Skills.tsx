import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Code, BarChart3, Settings, Cloud, Brain } from "lucide-react";
import SkillsVisualization from "@/components/3d/SkillsVisualization";

const skillCategories = [
  {
    title: "SAP Technologies",
    icon: Database,
    skills: [
      { name: "SAP HANA", level: 95 },
      { name: "SAP BW/4HANA", level: 90 },
      { name: "SAP BW", level: 92 },
      { name: "SAP ECC", level: 85 },
      { name: "SAP S/4HANA", level: 80 }
    ],
    certifications: ["SAP HANA Certified", "SAP BW Expert"]
  },
  {
    title: "Programming & Development",
    icon: Code,
    skills: [
      { name: "ABAP", level: 88 },
      { name: "SQL", level: 90 },
      { name: "Python", level: 75 },
      { name: "JavaScript", level: 70 },
      { name: "Shell Scripting", level: 65 }
    ],
    certifications: ["ABAP Developer", "SQL Expert"]
  },
  {
    title: "Data & Analytics",
    icon: BarChart3,
    skills: [
      { name: "Data Modeling", level: 92 },
      { name: "ETL/ELT", level: 88 },
      { name: "Data Warehousing", level: 90 },
      { name: "Business Intelligence", level: 85 },
      { name: "Reporting", level: 87 }
    ],
    certifications: ["Data Analytics Professional"]
  },
  {
    title: "System Integration",
    icon: Settings,
    skills: [
      { name: "SAP PI/PO", level: 78 },
      { name: "Web Services", level: 80 },
      { name: "API Integration", level: 75 },
      { name: "System Administration", level: 82 },
      { name: "Performance Tuning", level: 85 }
    ]
  },
  {
    title: "Cloud & Modern Tech",
    icon: Cloud,
    skills: [
      { name: "SAP Cloud Platform", level: 70 },
      { name: "Azure", level: 65 },
      { name: "Docker", level: 60 },
      { name: "Git/Version Control", level: 85 },
      { name: "Agile/Scrum", level: 80 }
    ]
  },
  {
    title: "Business Intelligence",
    icon: Brain,
    skills: [
      { name: "SAP BusinessObjects", level: 85 },
      { name: "SAP Analytics Cloud", level: 75 },
      { name: "Power BI", level: 70 },
      { name: "Tableau", level: 65 },
      { name: "Dashboard Design", level: 88 }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technical skills across SAP technologies, data analytics, and modern development practices
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Interactive Skills Visualization</h3>
          <SkillsVisualization />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-glass group hover:glow-accent transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-between">
                      <Badge 
                        variant="secondary" 
                        className="text-sm font-medium hover:bg-primary/20 transition-colors cursor-default"
                      >
                        {skill.name}
                      </Badge>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                        <span className="text-xs text-muted-foreground font-medium">{skill.level}%</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                {category.certifications && (
                  <div className="mt-6 pt-6 border-t">
                    <h4 className="text-sm font-semibold mb-3 text-muted-foreground">CERTIFICATIONS</h4>
                    <div className="flex flex-wrap gap-1">
                      {category.certifications.map((cert, certIndex) => (
                        <Badge key={certIndex} variant="outline" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="card-glass max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Professional Strengths</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Technical Excellence</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Advanced data modeling and architecture design</li>
                    <li>• Performance optimization and troubleshooting</li>
                    <li>• Integration between SAP and non-SAP systems</li>
                    <li>• Custom development and code optimization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Business Impact</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Process improvement and automation</li>
                    <li>• Data-driven decision support systems</li>
                    <li>• Cross-functional team collaboration</li>
                    <li>• Knowledge transfer and documentation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;