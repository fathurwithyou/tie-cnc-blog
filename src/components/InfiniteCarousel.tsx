interface CarouselItem {
  title: string;
  description: string;
  metric?: string;
}

const showcaseItems: CarouselItem[] = [
  {
    title: "Modern Architecture",
    description: "Building scalable applications with clean, maintainable code",
    metric: "99.9% Uptime"
  },
  {
    title: "Performance Focused",
    description: "Optimized for speed and user experience across all devices",
    metric: "< 100ms Load Time"
  },
  {
    title: "Developer Experience",
    description: "Creating tools and workflows that enhance productivity",
    metric: "10x Faster Development"
  },
  {
    title: "Best Practices",
    description: "Following industry standards and proven methodologies",
    metric: "100% Test Coverage"
  },
  {
    title: "Continuous Learning",
    description: "Staying current with the latest technologies and trends",
    metric: "Weekly Deep Dives"
  },
  {
    title: "Community Driven",
    description: "Sharing knowledge and contributing to open source projects",
    metric: "50+ Contributions"
  }
];

export function InfiniteCarousel() {
  // Duplicate items for seamless infinite scroll
  const items = [...showcaseItems, ...showcaseItems];

  return (
    <section className="py-16 overflow-hidden bg-muted/10 border-y border-border">
      <div className="mb-8 text-center">
        <h2 className="font-ubuntu font-semibold text-lg text-muted-foreground">
          What We Do & Achieve
        </h2>
      </div>
      
      <div className="relative">
        <div className="flex animate-scroll-left hover:[animation-play-state:paused]">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 w-80 bg-background/60 backdrop-blur-sm border border-border/50 rounded-lg p-6 shadow-sm"
            >
              <div className="space-y-3">
                <h3 className="font-ubuntu font-semibold text-foreground text-lg">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-ubuntu text-sm leading-relaxed">
                  {item.description}
                </p>
                {item.metric && (
                  <div className="pt-2 border-t border-border/30">
                    <span className="text-xs font-ubuntu font-medium text-muted-foreground">
                      {item.metric}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Gradient overlays for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
