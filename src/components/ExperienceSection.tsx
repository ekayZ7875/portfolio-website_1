import { Briefcase, Calendar } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-12 px-6 scroll-mt-20">
      <h2 className="section-heading">Experience</h2>

      <div className="aws-card">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
          {/* Company Logo */}
          <div className="w-20 h-20 rounded-lg bg-white flex items-center justify-center flex-shrink-0 shadow-glow-orange overflow-hidden">
            <img
              src="https://res.cloudinary.com/dhy548whh/image/upload/v1752088674/Group_11_pcgbvr.png"
              alt="Gumohh Logo"
              className="w-full h-full object-contain p-2"
            />
          </div>

          <div className="flex-1 space-y-4">
            {/* Header */}
            <div>
              <h3 className="text-2xl font-bold text-foreground">
                Backend And Cloud Engineer Intern
              </h3>
              <p className="text-lg text-primary font-semibold mt-1">
                Gummohh TravelTech Pvt Ltd.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                <Calendar className="w-4 h-4" />
                <span>{"July 2025 – Nov 2025 • Remote"}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-foreground leading-relaxed">
              Worked on building backend APIs for traveler bookings and payment
              integration using Express.js and AWS, ensuring smooth and reliable
              booking operations.
            </p>

            {/* Key Achievements */}
            <ul className="space-y-3 text-foreground text-xs text-slate-300">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>
                  Developed and deployed microservices-based architectures using
                  Express.js and Knex.js to support scalable business
                  operations.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>
                  Integrated PostgreSQL with AWS RDS and implemented file
                  uploads via AWS S3 for efficient data storage and retrieval.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>
                  Containerized applications using Docker and deployed on AWS
                  EC2 instances for high availability and maintainability
                </span>
              </li>
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "AWS EC2",
                "Lambda",
                "DynamoDB",
                "API Gateway",
                "Express",
                "NodeJS",
              ].map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="aws-card">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          {/* Company Logo */}
          <div className="w-20 h-20 rounded-lg bg-white flex items-center justify-center flex-shrink-0 shadow-glow-orange overflow-hidden">
            <img
              src="https://res.cloudinary.com/dhy548whh/image/upload/v1764876236/Screenshot_2025-12-05_005333_duchp3.png"
              alt="Infinnights Logo"
              className="w-full h-full object-contain p-2"
            />
          </div>

          <div className="flex-1 space-y-4">
            {/* Header */}
            <div>
              <h3 className="text-2xl font-bold text-foreground">
                Software Engineer Intern
              </h3>
              <p className="text-lg text-primary font-semibold mt-1">
                Infinnights Fintech Pvt Ltd.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                <Calendar className="w-4 h-4" />
                <span>Jan 2025 – July 2025 • Indore</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-foreground leading-relaxed">
              Contributing to a cloud-native trading platform on AWS with focus
              on real-time data processing and cost optimization.
            </p>

            {/* Key Achievements */}
            <ul className="space-y-3 text-foreground text-xs text-slate-300">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>
                  Built real-time market data streaming using Context API +
                  WebSockets from an EC2 server
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>
                  Optimized DynamoDB by moving variable-load tables to on-demand
                  capacity, cutting costs by ~40% 2
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>
                  Automated workflows with AWS Lambda + EventBridge cron jobs
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>
                  Integrated EC2, Lambda, API Gateway, App Runner, and ECR to
                  decouple and containerize services
                </span>
              </li>
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "AWS EC2",
                "Lambda",
                "DynamoDB",
                "API Gateway",
                "ECR",
                "EventBridge",
                "WebSockets",
                "React",
              ].map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="aws-card">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          {/* Company Logo */}
          <div className="w-20 h-20 rounded-lg bg-white flex items-center justify-center flex-shrink-0 shadow-glow-orange overflow-hidden">
            <img
              src="https://res.cloudinary.com/dhy548whh/image/upload/v1764875691/indhanpay_im3oa7.png"
              alt="IndhanPayGate Logo"
              className="w-full h-full object-contain p-2"
            />
          </div>

          <div className="flex-1 space-y-4">
            {/* Header */}
            <div>
              <h3 className="text-2xl font-bold text-foreground">
                Backend Developer Intern
              </h3>
              <p className="text-lg text-primary font-semibold mt-1">
                IndhanPayGate Pvt Ltd, CIDI, SGSITS, Indore
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                <Calendar className="w-4 h-4" />
                <span>Feb 2024 – Dec 2024 • Location</span>
              </div>
            </div>

            {/* Description */}
            {/* <p className="text-foreground leading-relaxed">
              Brief description of your role and responsibilities.
            </p> */}

            {/* Key Achievements */}
            <ul className="space-y-3 text-foreground text-xs text-slate-300">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>
                  {" "}
                  Developed RESTful APIs using Express.js and Knex.js to support
                  core business logic and data workflows.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>
                  {" "}
                  Integrated PostgreSQL with AWS RDS and implemented file upload
                  handling via AWS S3 for scalable backend services.
                </span>
              </li>
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["ExpressJS", "AWS RDS", "AWS EC2", "Lambda"].map((tech) => (
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
