import { Briefcase, Calendar } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-12 px-6 scroll-mt-20">
      <h2 className="section-heading">Experience</h2>
      
      <div className="aws-card">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          {/* Company Logo Placeholder */}
          <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-glow-orange">
            <Briefcase className="w-10 h-10 text-primary-foreground" />
          </div>
          
          <div className="flex-1 space-y-4">
            {/* Header */}
            <div>
              <h3 className="text-2xl font-bold text-foreground">Software Development Intern</h3>
              <p className="text-lg text-primary font-semibold mt-1">Infinnights Fintech Pvt. Ltd.</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                <Calendar className="w-4 h-4" />
                <span>Jan 2025 – June 2025 • Onsite</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-foreground leading-relaxed">
              Contributing to a cloud-native trading platform on AWS with focus on real-time data processing and cost optimization.
            </p>

            {/* Key Achievements */}
            <ul className="space-y-3 text-foreground">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Built real-time market data streaming using Context API + WebSockets from an EC2 server</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Optimized DynamoDB by moving variable-load tables to on-demand capacity, cutting costs by ~40%</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Automated workflows with AWS Lambda + EventBridge cron jobs</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Integrated EC2, Lambda, API Gateway, App Runner, and ECR to decouple and containerize services</span>
              </li>
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["AWS EC2", "Lambda", "DynamoDB", "API Gateway", "ECR", "EventBridge", "WebSockets", "React"].map((tech) => (
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

export default ExperienceSection;
