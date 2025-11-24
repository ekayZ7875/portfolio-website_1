import { ExternalLink, Server, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Pratibimb – AWS-Hosted Scalable Event & Payment Platform",
      url: "https://www.clubpratibimb.com",
      icon: Server,
      tech: ["React", "Node.js", "Express", "PostgreSQL", "Docker", "AWS EC2", "S3", "CloudFront", "NGINX", "Jenkins", "GitHub Actions"],
      points: [
        "QR-based event ticketing & attendance to prevent ticket fraud",
        "Secure payments with Razorpay webhooks and membership discounts",
        "Backend on Dockerized EC2, frontend on S3 + CloudFront, DB on managed Aiven PostgreSQL with NGINX + SSL",
        "CI/CD with Jenkins (master/slave) + GitHub Actions, significantly reducing deployment time",
        "SEO improvements via Helmet.js + Google Search Console; launched Android app (Capacitor) with 400+ active users"
      ]
    },
    {
      title: "ShopMe – AI-Powered E-Commerce with CI/CD",
      url: "#",
      icon: Smartphone,
      tech: ["MERN", "Redux Toolkit", "Material UI", "Stripe", "Redis", "Docker", "Kubernetes", "AWS EKS", "Jenkins", "ArgoCD", "Terraform", "Prometheus", "Grafana"],
      points: [
        "Full-stack e-commerce with product CRUD, cart, orders and Stripe payments",
        "Recommendation engine using Scikit-learn (TF-IDF + cosine similarity) stored in MongoDB",
        "CI/CD with Jenkins, GitHub, Docker, SonarQube, Trivy, and ArgoCD for Kubernetes deployments on AWS EKS",
        "Infrastructure as Code using Terraform and centralized monitoring with Prometheus + Grafana"
      ]
    }
  ];

  return (
    <section id="projects" className="py-12 px-6 scroll-mt-20">
      <h2 className="section-heading">Web Projects</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <div key={idx} className="aws-card flex flex-col h-full">
            {/* Project Icon */}
            <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-glow-orange">
              <project.icon className="w-8 h-8 text-primary-foreground" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">
              {project.title}
            </h3>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span key={tech} className="tech-badge text-xs">
                  {tech}
                </span>
              ))}
            </div>

            {/* Key Points */}
            <ul className="space-y-2 text-sm text-foreground mb-6 flex-grow">
              {project.points.map((point, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* View Project Button */}
            <Button
              variant="outline"
              className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              asChild
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Project
              </a>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
