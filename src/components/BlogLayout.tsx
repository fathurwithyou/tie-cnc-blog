import { ReactNode } from "react";
import { TableOfContents } from "./TableOfContents";

interface BlogLayoutProps {
  children: ReactNode;
  title?: string;
  date?: string;
  readTime?: string;
}

export function BlogLayout({ children, title, date, readTime }: BlogLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="font-ubuntu font-bold text-xl text-foreground hover:text-muted-foreground transition-colors">
              UbuntuTale
            </a>
            <nav className="flex space-x-6">
              <a href="/" className="font-ubuntu text-muted-foreground hover:text-foreground transition-colors">
                Home
              </a>
              <a href="/blog" className="font-ubuntu text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </a>
              <a href="/about" className="font-ubuntu text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main content */}
          <main className="lg:col-span-8">
            {title && (
              <header className="mb-8 pb-8 border-b border-border">
                <h1 className="font-ubuntu font-bold text-4xl lg:text-5xl text-foreground mb-4 leading-tight">
                  {title}
                </h1>
                {(date || readTime) && (
                  <div className="flex items-center space-x-4 text-muted-foreground font-ubuntu">
                    {date && <time>{date}</time>}
                    {readTime && <span>• {readTime}</span>}
                  </div>
                )}
              </header>
            )}
            <article className="prose prose-lg max-w-none">
              {children}
            </article>
          </main>

          {/* Sidebar with TOC */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24">
              <div className="bg-muted/30 rounded-lg p-6 border border-border">
                <TableOfContents />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}