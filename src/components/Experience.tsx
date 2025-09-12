import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "SAP BW Consultant",
      company: "Softbuzz Technologies",
      duration: "February 2023 - Present",
      location: "Current Position",
      type: "Full-time",
      projects: [
        {
          name: "Marathon Oil - SAP HANA Consultant",
          duration: "July 2024 - Present",
          environment: "SAP HANA 2.X",
          responsibilities: [
            "Developing SAP HANA data modeling using Attribute View, Analytic View, and Calculation View",
            "Implementation experience and knowledge of SAP HANA Reporting",
            "Business Objects report creation using WebI and Information Design Tool",
            "Created Calculation Views with SQL Script and Star Join",
            "Created Joins, Calculated Columns, Restricted Columns, Variables, Input Parameters"
          ]
        },
        {
          name: "MetLife - SAP BWonHANA Consultant", 
          duration: "October 2023 - June 2024",
          environment: "SAP HANA 1.0, SAP BW7.4, SAP BO 4.1",
          responsibilities: [
            "Full life cycle implementation in creating data modeling",
            "Creation of ADSOs, Open ODS views and Composite Providers",
            "HANA modeling scenarios – creation of schemas, tables, SQL script Procedures",
            "Developed Attribute Views, Analytic Views and Calculated Views",
            "SAP HANA Data Provisioning using SAP LT Replication Server (SLT)",
            "Performance tuning by creating Aggregates, Partition, Index, Compression"
          ]
        }
      ]
    },
    {
      title: "Associate Consultant", 
      company: "Capgemini Technologies Pvt Ltd",
      duration: "February 2022 - January 2023",
      location: "Hyderabad",
      type: "Full-time",
      projects: [
        {
          name: "United Parcel Service",
          duration: "February 2022 - September 2023",
          environment: "SAP BW7.3/ECC6.0EHP6/BO4.1",
          responsibilities: [
            "Performance tuning by creating Aggregates, Partition, Index, Compression",
            "Transportation of objects and monitoring process chains",
            "Handled tickets based on priority and monitored background jobs",
            "Created Meta chains and local process chains",
            "Worked on activating standard Business Content",
            "Created and maintained DTP and Transformations for DSO objects and Infocubes",
            "Developed Multiproviders, Infosets based on reporting requirements"
          ]
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            4+ years of expertise in SAP technologies across multiple industries
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-tech-blue to-tech-teal opacity-50"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative animate-slide-up">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-tech-blue rounded-full border-4 border-background glow-primary"></div>
                
                <div className="ml-20">
                  <Card className="card-glass">
                    <CardContent className="p-8">
                      <div className="flex flex-wrap items-start justify-between mb-6">
                        <div>
                          <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                          <div className="flex items-center gap-2 text-tech-teal mb-2">
                            <Building2 className="w-4 h-4" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-4 text-muted-foreground text-sm">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        <Badge variant="outline" className="border-tech-blue text-tech-blue">
                          {exp.type}
                        </Badge>
                      </div>

                      <div className="space-y-6">
                        {exp.projects.map((project, projectIndex) => (
                          <div key={projectIndex} className="border-l-2 border-muted pl-6">
                            <div className="mb-4">
                              <h4 className="font-semibold text-lg mb-1">{project.name}</h4>
                              <p className="text-muted-foreground text-sm mb-2">{project.duration}</p>
                              <Badge variant="secondary" className="text-xs">
                                {project.environment}
                              </Badge>
                            </div>
                            
                            <div className="space-y-2">
                              {project.responsibilities.map((responsibility, respIndex) => (
                                <div key={respIndex} className="flex items-start gap-3">
                                  <div className="w-1.5 h-1.5 bg-tech-teal rounded-full mt-2 flex-shrink-0"></div>
                                  <p className="text-muted-foreground text-sm leading-relaxed">
                                    {responsibility}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;