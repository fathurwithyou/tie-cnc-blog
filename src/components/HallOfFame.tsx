import { useYaml } from '@/hooks/useYaml';
import React from 'react';
import { Button } from '@/components/ui/button';

interface FameItem {
  year?: string;
  title?: string;      // Achievement Title
  field?: string;      // Competition Field (CTF, Data Science, etc.)
  description: string; // Achievement description
  members?: unknown;   // List of team members (string[] | string | object[])
  image?: string;      // Public image path
  competition?: string; // legacy key for title
}

interface HallOfFameProps {
  limit?: number;           // if provided, limits items shown
  showSeeAllLink?: boolean; // if true and limited, show link to /hall-of-fame
  showFilter?: boolean;     // show field filter controls
}

export function HallOfFame({ limit = 3, showSeeAllLink = true, showFilter = true }: HallOfFameProps = {}) {
  const { data, loading, error } = useYaml<FameItem>("/content/hall-of-fame.yaml");
  const raw = Array.isArray(data) ? data : [];
  const list = raw.filter(isFameEntry);
  const [selectedField, setSelectedField] = React.useState<string>('All');
  const fields = React.useMemo(() => {
    const vals = Array.from(new Set(list.map((i) => (i.field ?? '').toString().trim()).filter(Boolean)));
    return ['All', ...vals];
  }, [list]);
  const filtered = selectedField === 'All' ? list : list.filter((i) => (i.field ?? '').toString().trim() === selectedField);
  const visible = typeof limit === 'number' ? filtered.slice(0, Math.max(0, limit)) : filtered;
  
  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6 animate-fade-in">
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="section-title font-heading font-bold text-3xl lg:text-4xl tracking-tight">Hall of Fame</h2>
            {showSeeAllLink && typeof limit === 'number' && list.length > limit && (
              <a href="/hall-of-fame" className="inline-flex items-center text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">
                See all ({list.length})
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            )}
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Capture The Flag, Data Science, Business Case Competition, and Competitive Programming.
          </p>
        </div>

        {/* Filter by field (hidden when showFilter is false) */}
        {showFilter && (
          <div className="mb-6 flex flex-wrap gap-2">
            {fields.map((f) => (
              <Button key={f} size="sm" variant={selectedField === f ? 'default' : 'outline'} onClick={() => setSelectedField(f)}>
                {f}
              </Button>
            ))}
          </div>
        )}

        <div className="space-y-10">
          {error && <p className="text-sm text-muted-foreground">Failed to load hall of fame.</p>}
          {loading && !data && (
            <div className="space-y-6">
              <div className="h-28 bg-muted/40 border border-border rounded" />
              <div className="h-28 bg-muted/40 border border-border rounded" />
              <div className="h-28 bg-muted/40 border border-border rounded" />
            </div>
          )}
          {visible.length === 0 && !loading && !error && (
            <p className="text-sm text-muted-foreground">No achievements yet.</p>
          )}
          {visible.map((item, idx) => { 
            const heading = (item.title ?? item.competition ?? '').toString().trim() || 'Achievement';
            const field = (item.field ?? '').toString().trim() || undefined;
            const year = (item.year ?? '').toString().trim() || undefined;
            const img = (item.image ?? '').toString().trim() || '/placeholder.svg';
            const members = normalizeMembers(item.members);
            return (
            <article key={idx} className="grid gap-6 md:grid-cols-3 items-start border-b border-border pb-10">
              {/* Image on the left */}
              <div className="md:col-span-1">
                <div className="w-full overflow-hidden rounded-lg border border-border bg-muted/30 aspect-[4/3]">
                  <img
                    src={img}
                    alt={`${heading}${year ? ` (${year})` : ''}`}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      const t = e.currentTarget as HTMLImageElement;
                      if (!t.src.endsWith('/placeholder.svg')) t.src = '/placeholder.svg';
                    }}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              {/* Explanation on the right */}
              <div className="md:col-span-2 space-y-3">
                <div className="flex items-center gap-3">
                  {year && <div className="text-sm text-muted-foreground font-mono">{year}</div>}
                  {field && (
                    <span className="px-2 py-0.5 text-xs border border-border rounded text-foreground bg-background">
                      {field}
                    </span>
                  )}
                </div>
                <h3 className="font-heading text-xl text-foreground font-semibold">{heading}</h3>
                <p className="text-muted-foreground leading-relaxed">{(item.description ?? '').toString()}</p>
                {members.length > 0 && (
                  <div className="pt-2">
                    <div className="text-sm text-muted-foreground mb-2">Team Members</div>
                    <ul className="flex flex-wrap gap-2">
                      {members.map((m) => (
                        <li key={m} className="px-2 py-1 text-xs border border-border rounded text-foreground bg-background">
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </article>
          );
          })}
        </div>
      </div>
    </section>
  );
}

function normalizeMembers(input: unknown): string[] {
  if (Array.isArray(input)) {
    return input
      .map((v) => {
        if (typeof v === 'string') return v.trim();
        if (v && typeof v === 'object') {
          const o = v as Record<string, unknown>;
          return String(o.name ?? o.fullName ?? o.title ?? '').trim();
        }
        return '';
      })
      .filter(Boolean) as string[];
  }
  if (typeof input === 'string') {
    return input
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
  }
  return [];
}

function isFameEntry(v: unknown): v is FameItem {
  if (!v || typeof v !== 'object') return false;
  // minimal presence of any displayable field
  const o = v as Record<string, unknown>;
  return (
    typeof o.description === 'string' ||
    typeof o.title === 'string' ||
    typeof o.competition === 'string'
  );
}
