import { Button } from "@/components/ui/button";
import { Mail, Phone, Download, Github, Linkedin } from "lucide-react";
import Scene3D from "@/components/3d/Scene3D";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <Scene3D />
      </div>
      <div className="max-w-6xl mx-auto text-center animate-fade-in relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left lg:text-center lg:col-span-1">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Krishnakanth</span>
              <br />
              <span className="text-foreground">Reddy Erri</span>
            </h1>
            <div className="space-y-4 mb-8">
              <p className="text-2xl md:text-3xl font-semibold text-primary">
                SAP Native HANA / BW Consultant
              </p>
              <p className="text-lg text-muted-foreground">
                🚀 4+ Years of Excellence in SAP Technologies
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                  Data Analytics Expert
                </span>
                <span className="px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium">
                  Enterprise Solutions
                </span>
                <span className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium">
                  Performance Optimization
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 justify-center lg:justify-start mb-8">
              <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                <span className="text-sm font-medium">1995krishnareddy@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                <span className="text-sm font-medium">+91 9000489908</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <Button variant="default" className="glow-primary group text-lg px-8 py-6">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
              <Button variant="outline" className="group text-lg px-8 py-6">
                <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Contact Me
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start gap-6">
              <Button variant="ghost" size="icon" className="rounded-full hover:glow-accent w-12 h-12">
                <Github className="w-6 h-6" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:glow-accent w-12 h-12">
                <Linkedin className="w-6 h-6" />
              </Button>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-border/50 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm">
                <Scene3D />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full opacity-30 animate-pulse delay-300"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;