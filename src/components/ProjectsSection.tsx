import { ExternalLink, Server, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Pratibimb – AWS-Hosted Scalable Event & Payment Platform",
      url: "https://www.clubpratibimb.com",
      icon: "/pratibimb.png",
      playstore: "https://play.google.com/store/apps/details?id=com.clubpratibimb.twa&pli=1",
      playstoreIcon: "/play_store.png",
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
      title: "AntiPhishX – AI-Powered Phishing Detection System",
      url: "https://antiphishx.site",
      icon: "/antiphish.png", // put this image in /public (rename if needed)
      tech: ["React", "Express", "AWS EC2", "AWS S3", "CloudFront", "DynamoDB", "AWS Rekognition", "AWS Comprehend", "Kaggle ML Model"],
      points: [
        "AI-powered phishing detection that analyzes both text and images using OCR + NLP",
        "AWS Rekognition extracts text from screenshots, and Comprehend performs NLP for threat analysis",
        "Custom ML model aggregates signals to classify content as Phishing or Not Phishing, deployed on EC2 with S3 + CloudFront"
      ]
    },
    {
      title: "Drift – Sacalable-Cloud Storage System",
      url: "https://github.com/ekayZ7875/cloud-project",
      icon: "https://res.cloudinary.com/dhy548whh/image/upload/v1764878157/Screenshot_2025-12-05_012514_dowljr.png", // put this image in /public (rename if needed)
      tech: ["Express", "AWS EC2", "AWS S3", "CloudFront", "DynamoDB", "AWS Lambda", "AWS App Runner"],
      points: [
        "A scalable cloud storage system inspired by Google Drive, using Node.js, AWS S3, and DynamoDB.",
        "Features folder organization, starred files, and trash recovery.",
        "Deployed with Docker, EC2, and CloudFront."
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
            <div className="flex items-center justify-between mb-4">
              <img
                src={project.icon}
                alt={project.title}
                className="w-16 h-16 object-contain"
              />
              {/* Play Store icon only for Pratibimb */}
              {project.playstore && (
                <a
                  href={project.playstore}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.playstoreIcon}
                    alt="Play Store"
                    className="w-12 h-12 object-contain hover:opacity-80 transition"
                  />
                </a>
              )}

            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-foreground mb-3 leading-tight flex items-center gap-2">
              <span>{project.title}</span>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:underline"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
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
                <li key={i} className="flex gap-2 text-xs text-slate-350">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
