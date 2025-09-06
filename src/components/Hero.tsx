export function Hero() {
  const heroImages = [
    { src: "/hero-1.jpg", alt: "Competition showcase 1" },
    { src: "/hero-2.jpg", alt: "Community event 2" },
    { src: "/hero-3.jpg", alt: "Tech collaboration 3" },
    { src: "/hero-4.jpg", alt: "Innovation highlight 4" }
  ];
  const heroFallback = "/placeholder.svg";

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget as HTMLImageElement;
    if (!target.src.endsWith('/placeholder.svg')) {
      target.src = heroFallback;
    }
  };

  return (
    <section className="pt-32 pb-16 bg-background">
      <div className="max-w-6xl mx-auto px-6 animate-fade-in">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Text */}
          <div>
            <div className="space-y-6 mb-12">
              <h1 className="font-heading font-bold text-5xl lg:text-6xl text-foreground leading-tight tracking-tight">
                Professional Tech Blog
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light">
                In-depth articles about modern web development, software engineering,
                and technology insights. Written with clarity and precision.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-6 md:mb-0 mb-16">
              <a 
                href="/hall-of-fame" 
                className="group inline-flex items-center text-foreground hover:text-muted-foreground transition-colors duration-300"
              >
                <span className="font-medium">Explore Achievements</span>
                <svg className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a 
                href="/news" 
                className="group inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <span className="font-medium">Latest Updates</span>
                <svg className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Image Collage */}
          <div className="order-first lg:order-none">
            <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto lg:max-w-none">
              {/* Top Left - Large */}
              <div className="col-span-1 row-span-2">
                <div className="aspect-[3/4] w-full overflow-hidden rounded-lg border border-border bg-muted/30">
                  <img
                    src={heroImages[0].src}
                    onError={handleImageError}
                    alt={heroImages[0].alt}
                    className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </div>
              
              {/* Top Right */}
              <div className="col-span-1">
                <div className="aspect-square w-full overflow-hidden rounded-lg border border-border bg-muted/30">
                  <img
                    src={heroImages[1].src}
                    onError={handleImageError}
                    alt={heroImages[1].alt}
                    className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </div>
              
              {/* Bottom Right - Split into two */}
              <div className="col-span-1 grid grid-cols-2 gap-2">
                <div className="aspect-square w-full overflow-hidden rounded border border-border bg-muted/30">
                  <img
                    src={heroImages[2].src}
                    onError={handleImageError}
                    alt={heroImages[2].alt}
                    className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    loading="eager"
                    decoding="async"
                  />
                </div>
                <div className="aspect-square w-full overflow-hidden rounded border border-border bg-muted/30">
                  <img
                    src={heroImages[3].src}
                    onError={handleImageError}
                    alt={heroImages[3].alt}
                    className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
