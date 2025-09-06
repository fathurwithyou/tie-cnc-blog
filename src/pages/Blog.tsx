import { Header } from "@/components/Header";

const Blog = () => {
  const blogPosts = [
    {
      title: "Getting Started with Modern Web Development",
      summary: "Modern web development has evolved dramatically over the past few years. In this comprehensive guide, we'll explore the latest trends, tools, and best practices that every developer should know.",
      date: "2024-03-15",
      readTime: "8 min",
      category: "Web Development",
      author: "Sarah Chen",
      slug: "modern-web-development"
    },
    {
      title: "TypeScript Best Practices for Large Projects", 
      summary: "Learn how to structure and organize TypeScript code in large projects. We'll cover type definitions, project organization, and advanced patterns that scale.",
      date: "2024-03-10",
      readTime: "12 min",
      category: "TypeScript",
      author: "Alex Rodriguez",
      slug: "typescript-best-practices"
    },
    {
      title: "Building Scalable React Applications",
      summary: "Discover architectural patterns and tools for building large-scale React applications. From state management to component organization, learn what works in production.",
      date: "2024-03-05", 
      readTime: "15 min",
      category: "React",
      author: "Michael Park",
      slug: "scalable-react-applications"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header currentPath="/blog" />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6 tracking-tight">
            Our Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            In-depth articles about web development, software engineering, and technology insights from our team of experts.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 pb-24">
        <div className="space-y-12">
          {blogPosts.map((post, index) => (
            <article key={index} className="group">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center px-3 py-1 rounded text-xs font-medium bg-muted/50 text-muted-foreground uppercase tracking-wide border border-border/50">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <time>{formatDate(post.date)}</time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>By {post.author}</span>
                  </div>
                </div>

                <h2 className="font-heading font-bold text-2xl lg:text-3xl text-foreground leading-tight group-hover:text-muted-foreground transition-colors duration-200">
                  <a href={`/blog/${post.slug}`} className="block">
                    {post.title}
                  </a>
                </h2>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  {post.summary}
                </p>

                <div className="pt-2">
                  <a 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-foreground hover:text-muted-foreground transition-colors duration-200 font-medium"
                  >
                    Read full article
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {index < blogPosts.length - 1 && (
                <hr className="border-border mt-12" />
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
