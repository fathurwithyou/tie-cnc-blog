import { Header } from "@/components/Header";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header currentPath="/about" />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6 tracking-tight">
            About Competition&Community
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A professional platform for sharing knowledge about modern web development, built with clarity and precision.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 pb-24">
        <div className="space-y-16">
          {/* Mission Section */}
          <section>
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <span className="inline-flex items-center px-3 py-1 rounded text-xs font-medium bg-muted/50 text-muted-foreground uppercase tracking-wide border border-border/50">
                  Our Mission
                </span>
              </div>
              
              <div className="space-y-6">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Competition&Community is dedicated to providing high-quality, in-depth content about modern web development, 
                  software engineering, and technology trends. We believe in the power of clear, well-structured 
                  knowledge sharing to help developers grow their skills and build better applications.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our content focuses on practical insights, real-world examples, and best practices that you can 
                  apply immediately in your projects. We cover everything from fundamental concepts to advanced 
                  architectural patterns.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-border" />

          {/* What We Cover Section */}
          <section>
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <span className="inline-flex items-center px-3 py-1 rounded text-xs font-medium bg-muted/50 text-muted-foreground uppercase tracking-wide border border-border/50">
                  What We Cover
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group p-6 rounded-lg border border-border/50 bg-card/30 hover:bg-card/50 hover:border-border transition-all duration-300">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Frontend Development</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    React, TypeScript, modern CSS, and component architecture patterns.
                  </p>
                </div>
                <div className="group p-6 rounded-lg border border-border/50 bg-card/30 hover:bg-card/50 hover:border-border transition-all duration-300">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Development Tools</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Build tools, testing frameworks, and developer experience optimization.
                  </p>
                </div>
                <div className="group p-6 rounded-lg border border-border/50 bg-card/30 hover:bg-card/50 hover:border-border transition-all duration-300">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Best Practices</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Code quality, architecture patterns, and maintainable software design.
                  </p>
                </div>
                <div className="group p-6 rounded-lg border border-border/50 bg-card/30 hover:bg-card/50 hover:border-border transition-all duration-300">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Performance</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Optimization techniques, measuring performance, and scaling applications.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-border" />

          {/* Design Philosophy Section */}
          <section>
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <span className="inline-flex items-center px-3 py-1 rounded text-xs font-medium bg-muted/50 text-muted-foreground uppercase tracking-wide border border-border/50">
                  Design Philosophy
                </span>
              </div>
              
              <div className="space-y-6">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We believe in minimalist design that prioritizes readability and content. Our platform is built 
                  with clean typography and professional presentation, emphasizing clarity over complexity. 
                  Every design decision is made with the reader's experience in mind.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  The site features a monochromatic color scheme that reduces distractions and allows content 
                  to take center stage. We use subtle shadows, clean spacing, and semantic markup to create 
                  a professional reading environment that enhances focus and comprehension.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
