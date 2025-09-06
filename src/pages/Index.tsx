import { Hero } from "@/components/Hero";
import { News } from "@/components/News";
import { Collaboration } from "@/components/Collaboration";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HallOfFame } from "@/components/HallOfFame";
import { useYaml } from "@/hooks/useYaml";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
            <Header currentPath="/" />


      {/* Hero Section */}
      <Hero />

      {/* Hall of Fame (limited on landing) */}
      <HallOfFame limit={3} showSeeAllLink />

      {/* News Section */}
      <div id="news">
        <News limit={3} />
      </div>

      {/* Featured Articles */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="section-title font-ubuntu font-bold text-3xl lg:text-4xl mb-4">
              Featured Articles
            </h2>
            <p className="text-lg text-muted-foreground font-ubuntu max-w-2xl">
              Dive into our latest insights on web development, technology trends, and software engineering best practices.
            </p>
          </div>

          <FeaturedList />
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

type FeaturedItem = {
  title: string;
  href: string;
  summary: string;
  readTime: string;
};

function FeaturedList() {
  const { data, loading, error } = useYaml<FeaturedItem>("/content/featured.yaml");
  if (error) return <p className="text-sm text-muted-foreground">Failed to load featured articles.</p>;
  if (loading || !data) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="h-40 bg-muted/40 border border-border rounded" />
        <div className="h-40 bg-muted/40 border border-border rounded" />
        <div className="h-40 bg-muted/40 border border-border rounded" />
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.map((item) => (
        <article key={item.title} className="bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="p-6">
            <h3 className="font-ubuntu font-semibold text-xl text-foreground mb-3">
              {item.title}
            </h3>
            <p className="text-muted-foreground mb-4 font-ubuntu">
              {item.summary}
            </p>
            <div className="flex items-center justify-between">
              <a 
                href={item.href}
                className="font-ubuntu text-foreground underline decoration-muted-foreground underline-offset-4 hover:decoration-foreground transition-colors"
              >
                Read more →
              </a>
              <span className="text-sm text-muted-foreground font-ubuntu">{item.readTime}</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
