import achievementsImage from "@/assets/achievements.jpg";

interface AchievementItem {
  metric: string;
  title: string;
  description: string;
}

const achievements: AchievementItem[] = [
  {
    metric: "99.9%",
    title: "Uptime",
    description: "Reliable and stable applications"
  },
  {
    metric: "< 100ms",
    title: "Load Time",
    description: "Lightning-fast performance"
  },
  {
    metric: "10x",
    title: "Faster Development",
    description: "Optimized workflows and tools"
  },
  {
    metric: "100%",
    title: "Test Coverage",
    description: "Thoroughly tested codebase"
  },
  {
    metric: "50+",
    title: "Contributions",
    description: "Active open source involvement"
  },
  {
    metric: "Weekly",
    title: "Deep Dives",
    description: "Continuous learning commitment"
  }
];

export function Achievements() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={achievementsImage} 
              alt="Performance metrics dashboard" 
              className="w-full h-auto rounded-lg shadow-sm"
            />
          </div>
          <div>
            <h2 className="font-ubuntu font-bold text-3xl lg:text-4xl text-foreground mb-4">
              What We Achieve
            </h2>
            <p className="text-lg text-muted-foreground font-ubuntu mb-8 leading-relaxed">
              Our commitment to excellence is reflected in the measurable results we deliver consistently.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="text-center bg-background/60 backdrop-blur-sm border border-border rounded-lg p-6"
            >
              <div className="font-ubuntu font-bold text-2xl lg:text-3xl text-primary mb-2">
                {achievement.metric}
              </div>
              <div className="font-ubuntu font-semibold text-foreground mb-1">
                {achievement.title}
              </div>
              <div className="text-sm text-muted-foreground font-ubuntu">
                {achievement.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}