import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  className?: string;
}

export function TableOfContents({ className }: TableOfContentsProps) {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const headings = Array.from(document.querySelectorAll("h1, h2, h3, h4, h5, h6"));
    
    const tocItems: TocItem[] = headings.map((heading) => {
      const id = heading.id || heading.textContent?.toLowerCase().replace(/\s+/g, "-") || "";
      if (!heading.id) {
        heading.id = id;
      }
      
      return {
        id,
        text: heading.textContent || "",
        level: parseInt(heading.tagName.charAt(1)),
      };
    });

    setToc(tocItems);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0% -66%" }
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, []);

  if (toc.length === 0) return null;

  const handleSelect = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    // Smooth scroll with offset for fixed header
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
    setActiveId(id);
    // Update the URL hash without jumping
    if (history.replaceState) {
      history.replaceState(null, '', `#${id}`);
    }
  };

  return (
    <nav className={cn("space-y-1", className)}>
      <h4 className="font-ubuntu font-medium text-foreground mb-3">Table of Contents</h4>
      <ul className="space-y-1">
        {toc.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={handleSelect(item.id)}
              className={cn(
                "block rounded px-2 py-1 text-sm transition-colors font-ubuntu",
                item.level === 1 && "font-medium",
                item.level === 2 && "pl-4",
                item.level === 3 && "pl-8",
                item.level === 4 && "pl-12",
                item.level > 4 && "pl-16",
                activeId === item.id
                  ? "bg-neutral-800 text-white"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
