import newsImage from "@/assets/news.jpg";

interface NewsItem {
  date: string;
  title: string;
  summary: string;
  category: string;
}

const newsItems: NewsItem[] = [
  {
    date: "2024-03-15",
    title: "New TypeScript 5.0 Features Deep Dive",
    summary: "Exploring the latest features and improvements in TypeScript 5.0, including decorators and performance enhancements.",
    category: "Technology"
  },
  {
    date: "2024-03-10",
    title: "Modern React Patterns for 2024",
    summary: "Best practices and emerging patterns for building robust React applications in the current ecosystem.",
    category: "Development"
  },
  {
    date: "2024-03-05",
    title: "Web Performance Optimization Strategies",
    summary: "Comprehensive guide to improving web application performance using modern tools and techniques.",
    category: "Performance"
  },
  {
    date: "2024-02-28",
    title: "CSS Grid vs Flexbox: When to Use What",
    summary: "Understanding the optimal use cases for CSS Grid and Flexbox in modern web layout design.",
    category: "CSS"
  }
];

export function News() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <img 
              src={newsImage} 
              alt="Latest tech news and articles" 
              className="w-full h-auto rounded-lg shadow-sm"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-ubuntu font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Latest News
            </h2>
            <p className="text-lg text-muted-foreground font-ubuntu mb-8 leading-relaxed">
              Stay updated with the latest insights, trends, and developments in web technology and software engineering.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsItems.map((item, index) => (
            <article
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-ubuntu font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                  {item.category}
                </span>
                <time className="text-sm text-muted-foreground font-ubuntu">
                  {formatDate(item.date)}
                </time>
              </div>
              
              <h3 className="font-ubuntu font-semibold text-xl text-foreground mb-3 leading-tight">
                {item.title}
              </h3>
              
              <p className="text-muted-foreground font-ubuntu leading-relaxed mb-4">
                {item.summary}
              </p>
              
              <a 
                href={`/blog/${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                className="font-ubuntu text-primary hover:text-primary/80 transition-colors text-sm font-medium"
              >
                Read more →
              </a>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/blog" 
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-ubuntu font-medium rounded-md hover:bg-primary/90 transition-colors"
          >
            View All News
          </a>
        </div>
      </div>
    </section>
  );
}