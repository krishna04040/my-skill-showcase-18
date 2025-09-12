import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Target, Award, Users, TrendingUp, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate SAP consultant with a proven track record of delivering enterprise-level solutions 
            and driving digital transformation across various industries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="card-glass">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-semibold">Career Objective</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To leverage my expertise in SAP Native HANA and Business Warehouse technologies to drive 
                organizational efficiency and data-driven decision making. Committed to continuous learning 
                and innovation in the rapidly evolving landscape of enterprise software solutions.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Innovation</Badge>
                <Badge variant="secondary">Leadership</Badge>
                <Badge variant="secondary">Problem Solving</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="card-glass">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-lg">Bachelor of Technology</h4>
                  <p className="text-muted-foreground">Computer Science Engineering</p>
                  <p className="text-sm text-muted-foreground">Graduated with First Class Honors</p>
                </div>
                <div className="mt-6">
                  <h5 className="font-semibold mb-2">Certifications & Training</h5>
                  <div className="flex flex-wrap gap-2">
                    <Badge>SAP HANA Certified</Badge>
                    <Badge>SAP BW Expert</Badge>
                    <Badge>Data Analytics</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="card-glass">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-semibold">Professional Summary</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Core Expertise
                </h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>4+ years of hands-on experience with SAP Native HANA and BW technologies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Expertise in data modeling, ETL processes, and performance optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Proficient in ABAP programming, SQL optimization, and system integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Strong background in business intelligence and analytics solutions</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Key Achievements
                </h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Led successful implementations for Fortune 500 companies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Improved system performance by 40% through optimization techniques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Mentored junior developers and contributed to best practices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Reduced data processing time by 60% in complex enterprise environments</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t pt-8">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-primary" />
                Philosophy & Approach
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                I believe in delivering solutions that not only meet current business requirements but also 
                scale for future growth. My approach combines technical excellence with strong business acumen, 
                ensuring that every project delivers measurable value. I'm passionate about staying current 
                with emerging technologies and methodologies to provide cutting-edge solutions.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;