import { Button } from "@/components/ui/button";
import { Mail, Phone, Download, Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="gradient-text">Krishnakanth</span>
            <br />
            <span className="text-foreground">Reddy Erri</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            SAP Native HANA / BW Consultant
          </p>
          <p className="text-lg text-muted-foreground">
            4+ Years Experience in SAP Technologies
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Mail className="w-4 h-4" />
            <span>1995krishnareddy@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Phone className="w-4 h-4" />
            <span>+91 9000489908</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="default" className="glow-primary group">
            <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
            Download Resume
          </Button>
          <Button variant="outline" className="group">
            <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
            Contact Me
          </Button>
        </div>

        <div className="mt-12 flex justify-center gap-6">
          <Button variant="ghost" size="icon" className="rounded-full hover:glow-accent">
            <Github className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:glow-accent">
            <Linkedin className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;