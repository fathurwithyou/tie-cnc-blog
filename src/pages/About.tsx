const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="font-ubuntu font-bold text-xl text-foreground hover:text-muted-foreground transition-colors">
              UbuntuTale
            </a>
            <nav className="flex space-x-6">
              <a href="/" className="font-ubuntu text-muted-foreground hover:text-foreground transition-colors">
                Home
              </a>
              <a href="/blog" className="font-ubuntu text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </a>
              <a href="/about" className="font-ubuntu text-foreground">
                About
              </a>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <header className="mb-16">
          <h1 className="font-ubuntu font-bold text-4xl lg:text-5xl text-foreground mb-4">
            About UbuntuTale
          </h1>
          <p className="text-xl text-muted-foreground font-ubuntu">
            A professional platform for sharing knowledge about modern web development.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="font-ubuntu font-bold text-2xl text-foreground mb-6">Our Mission</h2>
            <p className="text-muted-foreground/90 leading-7 font-ubuntu mb-6">
              UbuntuTale is dedicated to providing high-quality, in-depth content about modern web development, 
              software engineering, and technology trends. We believe in the power of clear, well-structured 
              knowledge sharing to help developers grow their skills and build better applications.
            </p>
            <p className="text-muted-foreground/90 leading-7 font-ubuntu">
              Our content focuses on practical insights, real-world examples, and best practices that you can 
              apply immediately in your projects. We cover everything from fundamental concepts to advanced 
              architectural patterns.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-ubuntu font-bold text-2xl text-foreground mb-6">What We Cover</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-muted/30 p-6 rounded-lg border border-border">
                <h3 className="font-ubuntu font-semibold text-foreground mb-3">Frontend Development</h3>
                <p className="text-muted-foreground font-ubuntu">
                  React, TypeScript, modern CSS, and component architecture patterns.
                </p>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg border border-border">
                <h3 className="font-ubuntu font-semibold text-foreground mb-3">Development Tools</h3>
                <p className="text-muted-foreground font-ubuntu">
                  Build tools, testing frameworks, and developer experience optimization.
                </p>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg border border-border">
                <h3 className="font-ubuntu font-semibold text-foreground mb-3">Best Practices</h3>
                <p className="text-muted-foreground font-ubuntu">
                  Code quality, architecture patterns, and maintainable software design.
                </p>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg border border-border">
                <h3 className="font-ubuntu font-semibold text-foreground mb-3">Performance</h3>
                <p className="text-muted-foreground font-ubuntu">
                  Optimization techniques, measuring performance, and scaling applications.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-ubuntu font-bold text-2xl text-foreground mb-6">Design Philosophy</h2>
            <p className="text-muted-foreground/90 leading-7 font-ubuntu mb-6">
              We believe in minimalist design that prioritizes readability and content. Our platform is built 
              with the Ubuntu font family, emphasizing clean typography and professional presentation. 
              Every design decision is made with the reader's experience in mind.
            </p>
            <p className="text-muted-foreground/90 leading-7 font-ubuntu">
              The site features a monochromatic color scheme that reduces distractions and allows content 
              to take center stage. We use subtle shadows, clean spacing, and semantic markup to create 
              a professional reading environment.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;