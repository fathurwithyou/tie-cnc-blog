import React, { useEffect, useState } from "react";
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
  const observerRef = React.useRef<IntersectionObserver | null>(null);
  const mutationRef = React.useRef<MutationObserver | null>(null);
  const mutateTimer = React.useRef<number | undefined>(undefined);

  // Scan headings utility
  const scanHeadings = React.useCallback(() => {
    const container = document.querySelector<HTMLElement>("article.prose") || document.body;
    const headings = Array.from(container.querySelectorAll<HTMLElement>("h1, h2, h3, h4, h5, h6"));
    const slugify = (str: string) =>
      str.toLowerCase().trim().replace(/[\s_]+/g, "-").replace(/[^a-z0-9-]/g, "").replace(/-+/g, "-");
    const used = new Map<string, number>();
    const makeUnique = (base: string) => {
      if (!base) return "";
      const count = used.get(base) || 0;
      used.set(base, count + 1);
      return count === 0 ? base : `${base}-${count + 1}`;
    };
    const items: TocItem[] = [];
    for (const h of headings) {
      const txt = (h.textContent || "").trim();
      if (!txt) continue;
      let id = h.id || makeUnique(slugify(txt));
      if (!h.id && id) h.id = id;
      if (!id) continue;
      items.push({ id, text: txt, level: parseInt(h.tagName.charAt(1)) });
    }
    setToc(items);
    return headings;
  }, []);

  // Observe headings for active section
  useEffect(() => {
    // Disconnect any previous observer
    observerRef.current?.disconnect();
    const headings = scanHeadings();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-100px 0% -66%" }
    );
    headings.forEach((h) => io.observe(h));
    observerRef.current = io;

    // Initialize from hash if present
    if (location.hash) {
      const hashId = location.hash.slice(1);
      if (hashId) setActiveId(hashId);
    }
    return () => io.disconnect();
  }, [scanHeadings]);

  // Mutation observer to rebuild ToC when MDX content loads/changes
  useEffect(() => {
    const container = document.querySelector<HTMLElement>("article.prose");
    if (!container) return;
    const mo = new MutationObserver(() => {
      // debounce rebuilds
      window.clearTimeout(mutateTimer.current);
      mutateTimer.current = window.setTimeout(() => {
        // rebuild headings and reattach IO
        observerRef.current?.disconnect();
        const headings = scanHeadings();
        const io = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) setActiveId(entry.target.id);
            });
          },
          { rootMargin: "-100px 0% -66%" }
        );
        headings.forEach((h) => io.observe(h));
        observerRef.current = io;
      }, 50);
    });
    mo.observe(container, { childList: true, subtree: true, characterData: true });
    mutationRef.current = mo;
    return () => mo.disconnect();
  }, [scanHeadings]);

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
      <ul className="space-y-1 max-h-96 overflow-y-auto pr-2">
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
                  ? "bg-accent text-accent-foreground"
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
