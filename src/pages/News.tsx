const News = () => {
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
              <a href="/news" className="font-ubuntu text-foreground">
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
            Latest News
          </h1>
          <p className="text-xl text-muted-foreground font-ubuntu max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest developments, industry insights, and company updates from the world of technology and web development.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12">
          <article className="group">
            <a href="#" className="block">
              <div className="flex items-center space-x-2 mb-3">
                <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-ubuntu font-semibold">
                  BREAKING NEWS
                </span>
              </div>
              <h2 className="font-ubuntu font-bold text-2xl lg:text-3xl text-foreground mb-4 group-hover:text-primary transition-colors">
                New JavaScript Framework Revolutionizes Frontend Development
              </h2>
              <p className="text-muted-foreground mb-4 font-ubuntu text-lg leading-relaxed">
                A groundbreaking new JavaScript framework has been announced, promising to simplify component development 
                and improve performance across web applications. Early adopters report significant improvements in development speed.
              </p>
              <div className="flex items-center space-x-4 text-muted-foreground font-ubuntu">
                <time>December 28, 2024</time>
                <span>•</span>
                <span>Industry News</span>
                <span>•</span>
                <span>JavaScript</span>
              </div>
            </a>
          </article>

          <hr className="border-border" />

          <article className="group">
            <a href="#" className="block">
              <div className="flex items-center space-x-2 mb-3">
                <span className="bg-secondary/50 text-secondary-foreground px-2 py-1 rounded-md text-xs font-ubuntu font-semibold">
                  COMPANY UPDATE
                </span>
              </div>
              <h2 className="font-ubuntu font-bold text-2xl lg:text-3xl text-foreground mb-4 group-hover:text-primary transition-colors">
                UbuntuTale Launches New Partnership Program
              </h2>
              <p className="text-muted-foreground mb-4 font-ubuntu text-lg leading-relaxed">
                We're excited to announce our new partnership program designed to help organizations accelerate their 
                digital transformation journey with cutting-edge web solutions and expert guidance.
              </p>
              <div className="flex items-center space-x-4 text-muted-foreground font-ubuntu">
                <time>December 25, 2024</time>
                <span>•</span>
                <span>Company News</span>
                <span>•</span>
                <span>Partnerships</span>
              </div>
            </a>
          </article>

          <hr className="border-border" />

          <article className="group">
            <a href="#" className="block">
              <div className="flex items-center space-x-2 mb-3">
                <span className="bg-accent/50 text-accent-foreground px-2 py-1 rounded-md text-xs font-ubuntu font-semibold">
                  TECH UPDATE
                </span>
              </div>
              <h2 className="font-ubuntu font-bold text-2xl lg:text-3xl text-foreground mb-4 group-hover:text-primary transition-colors">
                React 19 Release Brings Major Performance Improvements
              </h2>
              <p className="text-muted-foreground mb-4 font-ubuntu text-lg leading-relaxed">
                The latest React release introduces significant performance optimizations, new hooks, and improved 
                developer experience features that will reshape how we build modern web applications.
              </p>
              <div className="flex items-center space-x-4 text-muted-foreground font-ubuntu">
                <time>December 20, 2024</time>
                <span>•</span>
                <span>Technology</span>
                <span>•</span>
                <span>React</span>
              </div>
            </a>
          </article>

          <hr className="border-border" />

          <article className="group">
            <a href="#" className="block">
              <div className="flex items-center space-x-2 mb-3">
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-xs font-ubuntu font-semibold">
                  INDUSTRY INSIGHT
                </span>
              </div>
              <h2 className="font-ubuntu font-bold text-2xl lg:text-3xl text-foreground mb-4 group-hover:text-primary transition-colors">
                The Future of Web Development in 2025
              </h2>
              <p className="text-muted-foreground mb-4 font-ubuntu text-lg leading-relaxed">
                Industry experts share their predictions for web development trends in 2025, including AI integration, 
                serverless architecture adoption, and the evolution of progressive web applications.
              </p>
              <div className="flex items-center space-x-4 text-muted-foreground font-ubuntu">
                <time>December 18, 2024</time>
                <span>•</span>
                <span>Industry Analysis</span>
                <span>•</span>
                <span>Trends</span>
              </div>
            </a>
          </article>
        </div>
      </div>
    </div>
  );
};

export default News;