import { Code2, Trophy, ExternalLink } from "lucide-react";

const DSASection = () => {
  const platforms = [
    {
      name: "LeetCode",
      url: "https://leetcode.com/your_handle",
      logo: Code2,
      color: "from-yellow-500 to-orange-500",
      achievements: [
        "Solved 300+ problems",
        "Multiple topic-wise streaks in DP, graphs, and greedy"
      ]
    },
    {
      name: "GeeksforGeeks",
      url: "https://auth.geeksforgeeks.org/user/your_handle",
      logo: Code2,
      color: "from-green-500 to-emerald-600",
      achievements: [
        "Solved 250+ DSA problems",
        "Practiced company-tagged questions for interviews"
      ]
    },
    {
      name: "CodeChef",
      url: "https://www.codechef.com/users/your_handle",
      logo: Trophy,
      color: "from-purple-500 to-pink-500",
      achievements: [
        "40+ contests given",
        "Global rank 676 in Starters 194"
      ]
    },
    {
      name: "Codeforces",
      url: "https://codeforces.com/profile/your_handle",
      logo: Code2,
      color: "from-blue-500 to-cyan-500",
      achievements: [
        "Active competitive programmer",
        "Regular contest participation"
      ]
    }
  ];

  return (
    <section id="dsa" className="py-12 px-6 scroll-mt-20">
      <h2 className="section-heading">Data Structures & Algorithms</h2>
      
      <p className="text-lg text-muted-foreground mb-8">
        Competitive programming & problem solving
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {platforms.map((platform, idx) => (
          <div key={idx} className="aws-card">
            <div className="flex items-start gap-4 mb-4">
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${platform.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                <platform.logo className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground">{platform.name}</h3>
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline flex items-center gap-1 mt-1"
                >
                  View Profile
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-foreground mb-2">Achievements:</p>
              <ul className="space-y-2 text-sm text-foreground">
                {platform.achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="aws-card bg-gradient-to-r from-primary/10 to-accent/10 border-primary">
        <p className="text-xl font-bold text-center text-foreground">
          Total: <span className="text-primary">800+</span> DSA problems solved across all platforms
        </p>
      </div>
    </section>
  );
};

export default DSASection;
