import { GraduationCap, Calendar } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "B.Tech – Information Technology",
      institution: "SGSITS Indore",
      duration: "2022 – 2026",
      grade: "CGPA: 8.45",
      icon: GraduationCap,
      color: "from-primary to-accent"
    },
    {
      degree: "Class XII – CBSE",
      institution: "St. Vincent Pallotti School",
      duration: "2021 – 2022",
      grade: "Percentage: 94.2%",
      icon: GraduationCap,
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section id="education" className="py-12 px-6 scroll-mt-20">
      <h2 className="section-heading">Education</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {education.map((edu, idx) => (
          <div key={idx} className="aws-card">
            <div className="flex items-start gap-4">
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${edu.color} flex items-center justify-center flex-shrink-0 shadow-glow-orange`}>
                <edu.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {edu.degree}
                </h3>
                <p className="text-md text-primary font-semibold mb-2">
                  {edu.institution}
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{edu.duration}</span>
                </div>
                <p className="text-md font-bold text-foreground">
                  {edu.grade}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
