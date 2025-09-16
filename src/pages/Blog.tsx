import { Header } from "@/components/Header";
import React from 'react';
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      title: "What's Data Science?",
      summary: "Data Science itu luas dan banyak yang bingung mau mulai masuk dari mana. Artikel ini dibuat dengan harapan untuk menjawab kebingungan itu.",
      date: "2025-01-01",
      readTime: "8 min",
      category: "Data Science",
      author: "Ardysatrio Fakhri Haroen (IF'17)",
      slug: "ds-101"
    },
    {
      title: "Data Science Competition 101", 
      summary: "Beginner friendly guide untuk pemula yang ingin mengikuti kompetisi data science.",
      date: "2021-09-12",
      readTime: "12 min",
      category: "Data Science",
      author: "Dionisius Darryl Hermansyah (IF'19)",
      slug: "ds-comp"
    },
    {
      title: "Guide to Capture The Flag", 
      summary: "Beginner guide untuk pemula yang ingin mengikuti kompetisi capture the flag.",
      date: "2021-09-12",
      readTime: "10 min",
      category: "Capture The Flag",
      author: "Steve Bezalel (IF'18)",
      slug: "ctf-guide"
    },
    {
      title: "Introduction to Binary Exploitation", 
      summary: "Beginner guide untuk pemula tertarik kategori Binary Exploitation.",
      date: "2021-09-12",
      readTime: "15 min",
      category: "Capture The Flag",
      author: "Muhammad Garebaldhie (IF'20)",
      slug: "ctf-binaryexploitation"
    },
    {
      title: "Introduction to Classic Cryptograhy", 
      summary: "Beginner guide untuk pemula tertarik kategori Cryptography.",
      date: "2021-09-12",
      readTime: "15 min",
      category: "Capture The Flag",
      author: "Felicia Sutandijo (IF'20)",
      slug: "ctf-classiccryptography"
    },
        {
      title: "Introduction to Stack and Register", 
      summary: "Beginner guide untuk pemahaman pada register dan stack.",
      date: "2021-09-12",
      readTime: "15 min",
      category: "Capture The Flag",
      author: "Frankie Huang (IF'21)",
      slug: "ctf-registerandstack"
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

  const [selected, setSelected] = React.useState<string>('All');
  const topics = Array.from(new Set(blogPosts.map(p => p.category)));
  const sorted = [...blogPosts].sort((a,b)=> new Date(b.date).getTime()-new Date(a.date).getTime());
  const filtered = selected==='All'? sorted : sorted.filter(p=> p.category===selected);

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
        {/* Filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          <Button size="sm" variant={selected==='All' ? 'default':'outline'} onClick={()=>setSelected('All')}>All</Button>
          {topics.map(t => (
            <Button key={t} size="sm" variant={selected===t ? 'default':'outline'} onClick={()=>setSelected(t)}>{t}</Button>
          ))}
        </div>

        <div className="space-y-12">
          {filtered.map((post, index) => (
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
