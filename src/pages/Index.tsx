import { Hero } from "@/components/Hero";
import { WhatWeDo } from "@/components/WhatWeDo";
import { Achievements } from "@/components/Achievements";
import { News } from "@/components/News";
import { Collaboration } from "@/components/Collaboration";
import { Footer } from "@/components/Footer";

const Index = () => {
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
              <a href="/news" className="font-ubuntu text-muted-foreground hover:text-foreground transition-colors">
                News
              </a>
              <a href="/about" className="font-ubuntu text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <Hero />

      {/* What We Do Section */}
      <WhatWeDo />

      {/* Achievements Section */}
      <Achievements />

      {/* News Section */}
      <div id="news">
        <News />
      </div>

      {/* Featured Articles */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-ubuntu font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Featured Articles
            </h2>
            <p className="text-lg text-muted-foreground font-ubuntu max-w-2xl mx-auto">
              Dive into our latest insights on web development, technology trends, and software engineering best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample Article Cards */}
            <article className="bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <h3 className="font-ubuntu font-semibold text-xl text-foreground mb-3">
                  Getting Started with Modern Web Development
                </h3>
                <p className="text-muted-foreground mb-4 font-ubuntu">
                  Explore the latest trends, tools, and best practices in modern web development...
                </p>
                <div className="flex items-center justify-between">
                  <a 
                    href="/blog/modern-web-development" 
                    className="font-ubuntu text-primary hover:text-primary/80 transition-colors"
                  >
                    Read more →
                  </a>
                  <span className="text-sm text-muted-foreground font-ubuntu">5 min read</span>
                </div>
              </div>
            </article>

            <article className="bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <h3 className="font-ubuntu font-semibold text-xl text-foreground mb-3">
                  TypeScript Best Practices
                </h3>
                <p className="text-muted-foreground mb-4 font-ubuntu">
                  Learn how to write better TypeScript code with these proven patterns and techniques...
                </p>
                <div className="flex items-center justify-between">
                  <a 
                    href="/blog/typescript-practices" 
                    className="font-ubuntu text-primary hover:text-primary/80 transition-colors"
                  >
                    Read more →
                  </a>
                  <span className="text-sm text-muted-foreground font-ubuntu">8 min read</span>
                </div>
              </div>
            </article>

            <article className="bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <h3 className="font-ubuntu font-semibold text-xl text-foreground mb-3">
                  Building Scalable React Applications
                </h3>
                <p className="text-muted-foreground mb-4 font-ubuntu">
                  Discover architectural patterns and tools for building large-scale React applications...
                </p>
                <div className="flex items-center justify-between">
                  <a 
                    href="/blog/scalable-react" 
                    className="font-ubuntu text-primary hover:text-primary/80 transition-colors"
                  >
                    Read more →
                  </a>
                  <span className="text-sm text-muted-foreground font-ubuntu">12 min read</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <Collaboration />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
