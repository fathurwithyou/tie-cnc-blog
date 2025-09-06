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
                  <div className="flex items-center gap-3 mb-3">
                    <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>
                    <h3 className="font-heading text-xl font-semibold text-foreground">Capture The Flag</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Cybersecurity competitions focusing on hacking challenges and penetration testing.
                  </p>
                </div>
                <div className="group p-6 rounded-lg border border-border/50 bg-card/30 hover:bg-card/50 hover:border-border transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <h3 className="font-heading text-xl font-semibold text-foreground">Data Science</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Machine learning competitions and data analysis challenges.
                  </p>
                </div>
                <div className="group p-6 rounded-lg border border-border/50 bg-card/30 hover:bg-card/50 hover:border-border transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <h3 className="font-heading text-xl font-semibold text-foreground">Business Case Competition</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Strategic business problem solving and consulting case competitions.
                  </p>
                </div>
                <div className="group p-6 rounded-lg border border-border/50 bg-card/30 hover:bg-card/50 hover:border-border transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <h3 className="font-heading text-xl font-semibold text-foreground">Competitive Programming</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Algorithmic programming contests and problem-solving competitions.
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
