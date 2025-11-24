import { Award, Cloud, Container, Cog } from "lucide-react";

const CloudDevOpsSection = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect – Associate",
      date: "Nov 2025",
      score: "801/1000",
      icon: Award,
      skills: [
        "Designing highly available architectures",
        "Cost-optimized solutions with S3, RDS, Lambda",
        "VPC networking & security best practices",
        "CloudFront, ALB, Auto Scaling strategies"
      ]
    },
    {
      title: "AWS Certified Cloud Practitioner",
      date: "Jun 2025",
      score: "837/1000",
      icon: Cloud,
      skills: [
        "AWS core services and global infrastructure",
        "Billing, pricing, and cost management",
        "Security & shared responsibility model",
        "Cloud architecture fundamentals"
      ]
    }
  ];

  const tools = [
    {
      name: "Docker",
      icon: Container,
      description: "Container Platform",
      points: ["Containerized microservices", "Multi-stage builds", "Docker Compose orchestration"]
    },
    {
      name: "Kubernetes",
      icon: Cog,
      description: "Container Orchestration",
      points: ["AWS EKS deployments", "Helm charts", "Service mesh configuration"]
    },
    {
      name: "Jenkins",
      icon: Cog,
      description: "CI/CD Automation",
      points: ["Pipeline configuration", "Master/slave architecture", "Integration with SonarQube & Trivy"]
    },
    {
      name: "Terraform",
      icon: Cog,
      description: "Infrastructure as Code",
      points: ["AWS infrastructure provisioning", "State management", "Module development"]
    }
  ];

  const otherCerts = [
    {
      title: "Oracle Cloud Infrastructure AI Foundations Associate",
      description: "Introduction to OCI, AI services, and cloud concepts"
    },
    {
      title: "SQL (HackerRank Advanced)",
      description: "Complex joins, window functions, query optimization"
    }
  ];

  return (
    <section id="cloud-devops" className="py-12 px-6 scroll-mt-20">
      <h2 className="section-heading">Cloud & DevOps</h2>
      
      {/* AWS Certifications */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
          <Award className="w-6 h-6 text-primary" />
          AWS Certifications
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <div key={idx} className="aws-card">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-glow-orange">
                  <cert.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground">{cert.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{cert.date}</p>
                  <p className="text-sm font-semibold text-primary mt-1">Score: {cert.score}</p>
                </div>
              </div>
              <p className="text-sm font-semibold text-foreground mb-2">Skills learned:</p>
              <ul className="space-y-1 text-sm text-foreground">
                {cert.skills.map((skill, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* DevOps Tools */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
          <Cog className="w-6 h-6 text-primary" />
          DevOps & Cloud Tools
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {tools.map((tool, idx) => (
            <div key={idx} className="aws-card">
              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <tool.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground">{tool.name}</h4>
                  <p className="text-sm text-muted-foreground">{tool.description}</p>
                </div>
              </div>
              <ul className="space-y-1 text-sm text-foreground">
                {tool.points.map((point, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Other Certifications */}
      <div>
        <h3 className="text-2xl font-semibold text-foreground mb-4">Other Certifications</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {otherCerts.map((cert, idx) => (
            <div key={idx} className="aws-card">
              <h4 className="text-lg font-bold text-foreground mb-2">{cert.title}</h4>
              <p className="text-sm text-muted-foreground">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudDevOpsSection;
