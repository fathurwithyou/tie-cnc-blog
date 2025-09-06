
import { useYaml } from "@/hooks/useYaml";

interface NewsItem {
  date: string;
  title: string;
  summary: string;
  category: string;
  readTime: string;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

export function News({ limit }: { limit?: number } = {}) {

  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6 animate-fade-in">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="section-title font-heading font-bold text-3xl lg:text-4xl tracking-tight">
              Latest News
            </h2>
            {limit && (
              <a href="/news" className="inline-flex items-center text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">
                View all
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            )}
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Recent insights on web development, technology trends, and software engineering practices.
          </p>
        </div>

        {/* Articles */}
        <NewsList limit={limit} />
      </div>
    </section>
  );
}

function NewsList({ limit }: { limit?: number }) {
  const { data, loading, error } = useYaml<NewsItem>("/content/news.yaml");
  if (error) return <p className="text-sm text-muted-foreground">Failed to load news.</p>;
  if (loading || !data) {
    return (
      <div className="space-y-6">
        <div className="h-16 bg-muted/40 border border-border rounded" />
        <div className="h-16 bg-muted/40 border border-border rounded" />
        <div className="h-16 bg-muted/40 border border-border rounded" />
      </div>
    );
  }
  // Sort by date desc and take top N if limit provided
  const sorted = [...data].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const list = typeof limit === 'number' ? sorted.slice(0, limit) : sorted;

  return (
    <div className="space-y-12">
      {list.map((item, index) => (
          <article
            key={index}
            className="group"
          >
            {/* Meta */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
              <time>{formatDate(item.date)}</time>
              <span>•</span>
              <span>{item.category}</span>
              <span>•</span>
              <span>{item.readTime}</span>
            </div>
            
            {/* Content */}
            <div className="space-y-3">
              <h3 className="font-heading font-semibold text-xl lg:text-2xl text-foreground leading-tight group-hover:text-muted-foreground transition-colors duration-200">
                <a href={`/blog/${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                  {item.title}
                </a>
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {item.summary}
              </p>
              
              <div className="pt-2">
                <a 
                  href={`/blog/${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  className="inline-flex items-center text-sm text-foreground hover:text-muted-foreground transition-colors duration-200"
                >
                  <span>Read more</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        ))}
    </div>
  );
}
