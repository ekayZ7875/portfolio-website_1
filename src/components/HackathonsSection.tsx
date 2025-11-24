import { Trophy, Users } from "lucide-react";

const HackathonsSection = () => {
  return (
    <section id="hackathons" className="py-12 px-6 scroll-mt-20">
      <h2 className="section-heading">Hackathons</h2>
      
      <div className="aws-card">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Trophy Icon */}
          <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg">
            <Trophy className="w-10 h-10 text-white" />
          </div>

          <div className="flex-1 space-y-4">
            {/* Header */}
            <div>
              <h3 className="text-2xl font-bold text-foreground">Version Beta 7.0 Hackathon</h3>
              <p className="text-lg text-primary font-semibold mt-1">Top 5 Finalist</p>
              <p className="text-sm text-muted-foreground mt-1">ISTE MANIT, Bhopal</p>
            </div>

            {/* Project Info */}
            <div>
              <h4 className="text-lg font-semibold text-foreground">Project: Meal-Mate</h4>
              <p className="text-foreground mt-2 leading-relaxed">
                Built a solution to help users plan and manage meals efficiently, addressing food planning challenges with an intuitive interface and smart recommendations.
              </p>
            </div>

            {/* Team & Tech */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                <span>Team of 4 Contributors</span>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["React", "Node.js", "MongoDB", "Express", "REST API"].map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HackathonsSection;
