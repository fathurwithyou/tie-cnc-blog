import { BlogLayout } from "@/components/BlogLayout";
import React from "react";
import { useParams } from "react-router-dom";
import { useYaml } from "@/hooks/useYaml";

type BlogItem = {
  title: string;
  slug: string;
  date: string;
  readTime: string;
  summary?: string;
  topic?: string;
  mdx?: string; // filename under src/content/
};

const modules = import.meta.glob("/src/content/blog/*.mdx");

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data, loading, error } = useYaml<BlogItem>("/content/blog.yaml");

  const items = Array.isArray(data) ? data : [];
  const post = items.find((i) => i.slug === slug);

  const mdxFile = post?.mdx || "sample-post.mdx";
  const path = `/src/content/blog/${mdxFile}`;
  const Loader = modules[path] as unknown as () => Promise<{ default: React.ComponentType<any> }>;

  const MDXComponent = React.lazy(Loader ?? modules["/src/content/sample-post.mdx"] as any);

  if (error) {
    return (
      <BlogLayout title="Error" date="" readTime="">
        <p className="text-muted-foreground">Failed to load post metadata.</p>
      </BlogLayout>
    );
  }

  if (loading && !post) {
    return (
      <BlogLayout title="Loading…" date="" readTime="">
        <div className="h-40 bg-muted/40 border border-border rounded" />
      </BlogLayout>
    );
  }

  if (!post) {
    return (
      <BlogLayout title="Not Found" date="" readTime="">
        <p className="text-muted-foreground">The requested article was not found.</p>
      </BlogLayout>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <BlogLayout title={post.title} date={formattedDate} readTime={post.readTime}>
      <React.Suspense fallback={<div className="h-40 bg-muted/40 border border-border rounded" />}>
        <MDXComponent />
      </React.Suspense>
    </BlogLayout>
  );
};

export default BlogPost;
