import { BlogLayout } from "@/components/BlogLayout";
import React from "react";
import { useParams } from "react-router-dom";
import { useYaml } from "@/hooks/useYaml";

type NewsItem = {
  title: string;
  slug: string;
  date: string;
  readTime: string;
  summary?: string;
  category?: string;
  mdx?: string; // filename under src/content/news/
};

const modules = import.meta.glob("/src/content/news/*.mdx");

const NewsArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data, loading, error } = useYaml<NewsItem>("/content/news.yaml");

  const items = Array.isArray(data) ? data : [];
  const article = items.find((i) => i.slug === slug);

  const mdxFile = article?.mdx || `${slug}.mdx`;
  const path = `/src/content/news/${mdxFile}`;
  const Loader = modules[path] as unknown as () => Promise<{ default: React.ComponentType<any> }>;

  const MDXComponent = React.lazy(Loader);

  if (error) {
    return (
      <BlogLayout title="Error" date="" readTime="" currentPath="/news">
        <p className="text-muted-foreground">Failed to load news article metadata.</p>
      </BlogLayout>
    );
  }

  if (loading && !article) {
    return (
      <BlogLayout title="Loading…" date="" readTime="" currentPath="/news">
        <div className="h-40 bg-muted/40 border border-border rounded" />
      </BlogLayout>
    );
  }

  if (!article) {
    return (
      <BlogLayout title="Not Found" date="" readTime="" currentPath="/news">
        <p className="text-muted-foreground">The requested news article was not found.</p>
      </BlogLayout>
    );
  }

  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <BlogLayout title={article.title} date={formattedDate} readTime={article.readTime} currentPath="/news">
      <React.Suspense fallback={<div className="h-40 bg-muted/40 border border-border rounded" />}>
        <MDXComponent />
      </React.Suspense>
    </BlogLayout>
  );
};

export default NewsArticle;