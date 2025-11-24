import { useEffect, useState } from "react";
import ProfileSidebar from "@/components/ProfileSidebar";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import CloudDevOpsSection from "@/components/CloudDevOpsSection";
import DSASection from "@/components/DSASection";
import HackathonsSection from "@/components/HackathonsSection";
import ExtrasSection from "@/components/ExtrasSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("experience");

  const sections = [
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "cloud-devops", label: "Cloud & DevOps" },
    { id: "dsa", label: "DSA" },
    { id: "hackathons", label: "Hackathons" },
    { id: "extras", label: "Extras" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      // Update active section based on scroll position
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-sidebar/95 backdrop-blur-sm border-b border-sidebar-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold text-foreground">AL</span>
            <div className="hidden lg:flex items-center gap-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === section.id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row pt-16">
        {/* Sidebar */}
        <ProfileSidebar />

        {/* Main Content */}
        <main className="flex-1 lg:ml-80">
          <div className="max-w-5xl mx-auto">
            <ExperienceSection />
            <ProjectsSection />
            <CloudDevOpsSection />
            <DSASection />
            <HackathonsSection />
            <ExtrasSection />
            <EducationSection />
            <ContactSection />
            
            {/* Footer */}
            <footer className="py-8 px-6 text-center border-t border-border">
              <p className="text-muted-foreground">
                © 2025 Adarsh Landge. Built with React, TypeScript & Tailwind CSS
              </p>
            </footer>
          </div>
        </main>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary hover:bg-accent shadow-glow-orange transition-all duration-300 z-50"
          size="icon"
        >
          <ChevronUp className="w-6 h-6" />
        </Button>
      )}
    </div>
  );
};

export default Index;
