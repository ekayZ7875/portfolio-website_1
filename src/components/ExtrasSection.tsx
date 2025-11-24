import { Database, Cloud, Code } from "lucide-react";

const ExtrasSection = () => {
  const extras = [
    {
      title: "SQL Expertise",
      icon: Database,
      subtitle: "HackerRank SQL Advanced Certified",
      color: "from-blue-500 to-cyan-500",
      skills: [
        "Complex joins and subqueries",
        "Window functions and aggregations",
        "Query optimization techniques",
        "Advanced data manipulation"
      ]
    },
    {
      title: "Oracle Cloud Infrastructure",
      icon: Cloud,
      subtitle: "OCI AI Foundations Associate",
      color: "from-red-500 to-orange-500",
      skills: [
        "OCI basics and architecture",
        "AI/ML services overview",
        "Cloud fundamentals",
        "Resource management"
      ]
    }
  ];

  const additionalSkills = [
    { name: "Java (OOPs)", icon: Code },
    { name: "Python (Scripting)", icon: Code },
    { name: "TypeScript", icon: Code },
    { name: "Linux", icon: Code }
  ];

  return (
    <section id="extras" className="py-12 px-6 scroll-mt-20">
      <h2 className="section-heading">Extras</h2>
      
      {/* Main Skills */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {extras.map((extra, idx) => (
          <div key={idx} className="aws-card">
            <div className="flex items-start gap-4 mb-4">
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${extra.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                <extra.icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">{extra.title}</h3>
                <p className="text-sm text-primary font-semibold mt-1">{extra.subtitle}</p>
              </div>
            </div>

            <p className="text-sm font-semibold text-foreground mb-2">Skills learned:</p>
            <ul className="space-y-1 text-sm text-foreground">
              {extra.skills.map((skill, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Additional Skills Chips */}
      <div>
        <h3 className="text-xl font-semibold text-foreground mb-4">Additional Technologies</h3>
        <div className="flex flex-wrap gap-3">
          {additionalSkills.map((skill, idx) => (
            <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary border border-border hover:border-primary transition-all duration-300">
              <skill.icon className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtrasSection;
