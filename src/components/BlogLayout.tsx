import { ReactNode } from "react";
import { TableOfContents } from "./TableOfContents";
import { Header } from "@/components/Header";
import { MDXProvider } from "./MDXProvider";

interface BlogLayoutProps {
  children: ReactNode;
  title?: string;
  date?: string;
  readTime?: string;
  currentPath?: string;
}

export function BlogLayout({ children, title, date, readTime, currentPath = "/blog" }: BlogLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header currentPath={currentPath} />

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
              <MDXProvider>
                {children}
              </MDXProvider>
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
