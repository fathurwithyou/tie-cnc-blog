export function Hero() {
  // Try to use /hero.jpg from public, fall back to /placeholder.svg
  const heroPrimary = "/hero.jpg"; // place your image in public/hero.jpg
  const heroFallback = "/placeholder.svg";

  return (
    <section className="pt-32 pb-16 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
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
            <div className="flex flex-col sm:flex-row gap-4 md:mb-0 mb-16">
              <a href="/blog" className="btn btn-primary">Read Articles</a>
              <a href="/about" className="btn btn-secondary">About</a>
            </div>
          </div>

          {/* Image from public */}
          <div className="order-first md:order-none">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-lg border border-border bg-muted/30">
              <img
                src={heroPrimary}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src !== window.location.origin + heroFallback) {
                    target.src = heroFallback;
                  }
                }}
                alt="Hero visual"
                className="h-full w-full object-cover grayscale"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>

        {/* Stats removed per request */}
      </div>
    </section>
  );
}
