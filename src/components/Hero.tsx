import heroImage from "@/assets/hero-image.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="font-ubuntu font-bold text-5xl lg:text-6xl text-foreground leading-tight">
              Professional Tech Blog
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-ubuntu">
              Explore in-depth articles about modern web development, software engineering, 
              and technology insights. Written with clarity and precision.
            </p>
            <div className="flex space-x-4">
              <a 
                href="/blog" 
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-ubuntu font-medium rounded-md hover:bg-primary/90 transition-colors shadow-md"
              >
                Read Articles
              </a>
              <a 
                href="/about" 
                className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground font-ubuntu font-medium rounded-md hover:bg-secondary/80 transition-colors"
              >
                About Us
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg border border-border">
              <img 
                src={heroImage} 
                alt="Professional workspace with laptop and coffee"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}