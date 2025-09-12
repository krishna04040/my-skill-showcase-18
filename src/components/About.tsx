import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate SAP consultant with expertise in HANA, BW, and data analytics
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Card className="card-glass animate-slide-up">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4 text-tech-teal">Career Objective</h3>
              <p className="text-muted-foreground leading-relaxed">
                To obtain a long-term career with an organization, which has a strong background, 
                challenging environment that encourages continuous learning, creativity that provides 
                good opportunity, and utilize my talent, potential to meet the goals of the organization 
                for enhancement of professional and personal status.
              </p>
            </CardContent>
          </Card>

          <Card className="card-glass animate-slide-up">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4 text-tech-blue">Education</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium">Bachelor of Commerce in Computers</p>
                  <p className="text-muted-foreground">Osmania University, Hyderabad, Telangana</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="card-glass mt-8 animate-slide-up">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold mb-6 text-center">Professional Summary</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-tech-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">4+ years of extensive experience in SAP Native HANA, BWonHANA and SAP BW</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-tech-teal rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Expertise in creating Information Models like Attribute, Analytic and Calculated Views</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-tech-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Experience in SAP HANA Modeling with BW, ECC, SAP HANA landscape</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-tech-teal rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Working on Calculation views with variables and Input Parameters</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-tech-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Good understanding of Business Objects, WebI report creation and development</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-tech-teal rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Working Knowledge on SLT and Data Replication scenarios</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-tech-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Development of ADSOs, Open DSOs and Composite Providers</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-tech-teal rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Multidimensional Data Models such as Info cubes, Multi providers</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;