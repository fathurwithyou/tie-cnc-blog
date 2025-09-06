import { Header } from "@/components/Header";
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
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
};

const News = () => {
  const { data, loading, error } = useYaml<NewsItem>("/content/news.yaml");
  
  // Sort by date descending
  const sortedNews = data ? [...data].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) : [];

  return (
    <div className="min-h-screen bg-background">
      <Header currentPath="/news" />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6 tracking-tight">
            Latest News
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest developments, industry insights, and updates from the world of technology and web development.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 pb-24">
        {error && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Failed to load news content.</p>
          </div>
        )}

        {loading && !data && (
          <div className="space-y-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="animate-pulse space-y-4">
                <div className="h-6 bg-muted/40 rounded w-24" />
                <div className="h-8 bg-muted/40 rounded w-3/4" />
                <div className="h-16 bg-muted/40 rounded" />
                <div className="h-4 bg-muted/40 rounded w-1/2" />
              </div>
            ))}
          </div>
        )}

        {sortedNews.length === 0 && !loading && !error && (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted/50 flex items-center justify-center">
                <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <p className="text-muted-foreground text-lg">No news articles available yet.</p>
            </div>
          </div>
        )}

        <div className="space-y-12">
          {sortedNews.map((item, index) => (
            <article key={index} className="group">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center px-3 py-1 rounded text-xs font-medium bg-muted/50 text-muted-foreground uppercase tracking-wide border border-border/50">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <time>{formatDate(item.date)}</time>
                    <span>•</span>
                    <span>{item.readTime}</span>
                  </div>
                </div>

                <h2 className="font-heading font-bold text-2xl lg:text-3xl text-foreground leading-tight group-hover:text-muted-foreground transition-colors duration-200">
                  <a href={`/news/${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="block">
                    {item.title}
                  </a>
                </h2>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  {item.summary}
                </p>

                <div className="pt-2">
                  <a 
                    href={`/news/${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                    className="inline-flex items-center text-foreground hover:text-muted-foreground transition-colors duration-200 font-medium"
                  >
                    Read full article
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {index < sortedNews.length - 1 && (
                <hr className="border-border mt-12" />
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
