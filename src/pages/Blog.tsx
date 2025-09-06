const Blog = () => {
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
              <a href="/blog" className="font-ubuntu text-foreground">
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
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-ubuntu font-bold text-4xl lg:text-6xl text-foreground mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-muted-foreground font-ubuntu max-w-3xl mx-auto leading-relaxed">
            In-depth articles about web development, software engineering, and technology insights from our team of experts.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12">
          <article className="group">
            <a href="/blog/modern-web-development" className="block">
              <h2 className="font-ubuntu font-bold text-2xl lg:text-3xl text-foreground mb-4 group-hover:text-primary transition-colors">
                Getting Started with Modern Web Development
              </h2>
              <p className="text-muted-foreground mb-4 font-ubuntu text-lg leading-relaxed">
                Modern web development has evolved dramatically over the past few years. In this comprehensive guide, 
                we'll explore the latest trends, tools, and best practices that every developer should know.
              </p>
              <div className="flex items-center space-x-4 text-muted-foreground font-ubuntu">
                <time>March 15, 2024</time>
                <span>•</span>
                <span>8 min read</span>
                <span>•</span>
                <span>Web Development</span>
              </div>
            </a>
          </article>

          <hr className="border-border" />

          <article className="group">
            <a href="#" className="block">
              <h2 className="font-ubuntu font-bold text-2xl lg:text-3xl text-foreground mb-4 group-hover:text-primary transition-colors">
                TypeScript Best Practices for Large Projects
              </h2>
              <p className="text-muted-foreground mb-4 font-ubuntu text-lg leading-relaxed">
                Learn how to structure and organize TypeScript code in large projects. We'll cover type definitions, 
                project organization, and advanced patterns that scale.
              </p>
              <div className="flex items-center space-x-4 text-muted-foreground font-ubuntu">
                <time>March 10, 2024</time>
                <span>•</span>
                <span>12 min read</span>
                <span>•</span>
                <span>TypeScript</span>
              </div>
            </a>
          </article>

          <hr className="border-border" />

          <article className="group">
            <a href="#" className="block">
              <h2 className="font-ubuntu font-bold text-2xl lg:text-3xl text-foreground mb-4 group-hover:text-primary transition-colors">
                Building Scalable React Applications
              </h2>
              <p className="text-muted-foreground mb-4 font-ubuntu text-lg leading-relaxed">
                Discover architectural patterns and tools for building large-scale React applications. 
                From state management to component organization, learn what works in production.
              </p>
              <div className="flex items-center space-x-4 text-muted-foreground font-ubuntu">
                <time>March 5, 2024</time>
                <span>•</span>
                <span>15 min read</span>
                <span>•</span>
                <span>React</span>
              </div>
            </a>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Blog;