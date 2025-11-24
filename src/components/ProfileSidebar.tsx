import { Github, Linkedin, ExternalLink, Download, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProfileSidebar = () => {
  return (
    <aside className="w-full lg:w-80 bg-sidebar border-r border-sidebar-border p-6 lg:fixed lg:h-screen overflow-y-auto">
      <div className="flex flex-col items-center space-y-6">
        {/* Profile Photo */}
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center border-4 border-primary shadow-glow-orange">
          <span className="text-5xl font-bold text-primary-foreground">AL</span>
        </div>

        {/* Name & Title */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-sidebar-foreground">Adarsh Landge</h1>
          <p className="text-sm text-muted-foreground font-medium">
            Full Stack Web & Cloud Developer
          </p>
          <p className="text-xs text-muted-foreground">AWS & DevOps</p>
        </div>

        {/* Bio */}
        <p className="text-sm text-sidebar-foreground text-center leading-relaxed">
          B.Tech IT student building scalable, high-performance web apps using AWS, DevOps automation, and modern JavaScript stacks.
        </p>

        {/* Location */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span>Indore, India</span>
        </div>

        {/* Social Links */}
        <div className="flex gap-3 pt-2">
          <a
            href="https://linkedin.com/in/adarsh-landge"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-secondary hover:bg-primary transition-all duration-300 hover:shadow-glow-orange"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/adarshlandge"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-secondary hover:bg-primary transition-all duration-300 hover:shadow-glow-orange"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://upwork.com/freelancers/adarshlandge"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-secondary hover:bg-primary transition-all duration-300 hover:shadow-glow-orange"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="w-full space-y-3 pt-4">
          <Button
            className="w-full bg-primary hover:bg-accent text-primary-foreground font-semibold shadow-lg hover:shadow-glow-orange transition-all duration-300"
            asChild
          >
            <a href="/Adarsh_Landge_Resume.pdf" download>
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </a>
          </Button>
          
          <div className="space-y-2 pt-2">
            <a
              href="mailto:adarshl10604@gmail.com"
              className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              adarshl10604@gmail.com
            </a>
            <a
              href="tel:+919200203742"
              className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              +91 9200203742
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ProfileSidebar;
