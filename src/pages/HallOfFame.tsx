import { Header } from "@/components/Header";
import { useYaml } from '@/hooks/useYaml';
import React from 'react';
import { Button } from "@/components/ui/button";

interface FameItem {
  year?: string;
  title?: string;
  field?: string;
  description: string;
  members?: unknown;
  image?: string;
  competition?: string;
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
  const o = v as Record<string, unknown>;
  return (
    typeof o.description === 'string' ||
    typeof o.title === 'string' ||
    typeof o.competition === 'string'
  );
}

const HallOfFamePage = () => {
  const { data, loading, error } = useYaml<FameItem>("/content/hall-of-fame.yaml");
  const raw = Array.isArray(data) ? data : [];
  const list = raw.filter(isFameEntry);
  const [selectedField, setSelectedField] = React.useState<string>('All');
  const fields = React.useMemo(() => {
    const vals = Array.from(new Set(list.map((i) => (i.field ?? '').toString().trim()).filter(Boolean)));
    return ['All', ...vals];
  }, [list]);
  const filtered = selectedField === 'All' ? list : list.filter((i) => (i.field ?? '').toString().trim() === selectedField);

  return (
    <div className="min-h-screen bg-background">
      <Header currentPath="/hall-of-fame" />
      
      <section className="pt-32 pb-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="font-heading font-bold text-4xl lg:text-5xl mb-6 tracking-tight">Hall of Fame</h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              A curated collection of our most impactful achievements, breakthrough innovations, and recognized excellence across diverse fields.
            </p>
          </div>

          {/* Filter controls */}
          <div className="mb-8 flex flex-wrap gap-2 justify-center">
            {fields.map((f) => (
              <Button key={f} size="sm" variant={selectedField === f ? 'default' : 'outline'} onClick={() => setSelectedField(f)}>
                {f}
              </Button>
            ))}
          </div>

          <div className="space-y-16">
            {error && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Failed to load hall of fame content.</p>
              </div>
            )}
            
            {loading && !data && (
              <div className="space-y-12">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="animate-pulse">
                    <div className="grid gap-8 lg:grid-cols-2 items-start">
                      <div className="h-80 bg-muted/40 rounded-xl" />
                      <div className="space-y-4">
                        <div className="h-6 bg-muted/40 rounded w-3/4" />
                        <div className="h-8 bg-muted/40 rounded w-full" />
                        <div className="space-y-2">
                          <div className="h-4 bg-muted/40 rounded" />
                          <div className="h-4 bg-muted/40 rounded w-5/6" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {filtered.length === 0 && !loading && !error && (
              <div className="text-center py-16">
                <div className="max-w-md mx-auto">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted/50 flex items-center justify-center">
                    <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-muted-foreground text-lg">No achievements to display yet.</p>
                </div>
              </div>
            )}
            
            {filtered.map((item, idx) => { 
              const heading = (item.title ?? item.competition ?? '').toString().trim() || 'Achievement';
              const field = (item.field ?? '').toString().trim() || undefined;
              const year = (item.year ?? '').toString().trim() || undefined;
              const img = (item.image ?? '').toString().trim() || '/placeholder.svg';
              const members = normalizeMembers(item.members);
              return (
              <article key={idx} className="group relative">
                <div className="grid gap-8 lg:grid-cols-2 items-start p-8 rounded-lg border border-border/50 bg-card/30 hover:bg-card/50 hover:border-border transition-all duration-300">
                  
                  {/* Image Section */}
                  <div className="relative">
                    <div className="aspect-[5/3] overflow-hidden rounded-lg bg-muted/30 border border-border/50">
                      <img
                        src={img}
                        alt={`${heading}${year ? ` (${year})` : ''}`}
                        className="h-full w-full object-cover transition-all duration-500"
                        onError={(e) => {
                          const t = e.currentTarget as HTMLImageElement;
                          if (!t.src.endsWith('/placeholder.svg')) t.src = '/placeholder.svg';
                        }}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    
                    {/* Year Badge */}
                    {year && (
                      <div className="absolute -top-3 -right-3 bg-background border-2 border-border rounded px-4 py-2 shadow-sm">
                        <span className="text-sm font-mono font-semibold">{year}</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Content Section */}
                  <div className="space-y-6">
                    <div className="space-y-3">
                      {field && (
                        <div className="inline-flex items-center">
                          <span className="px-3 py-1 text-xs font-medium border border-border rounded bg-background/80 text-muted-foreground uppercase tracking-wide">
                            {field}
                          </span>
                        </div>
                      )}
                      
                      <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                        {heading}
                      </h2>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {(item.description ?? '').toString()}
                    </p>
                    
                    {members.length > 0 && (
                      <div className="space-y-3 pt-2">
                        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                          Team Contributors
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {members.map((member) => (
                            <span 
                              key={member} 
                              className="inline-flex items-center px-3 py-1.5 rounded bg-muted/50 border border-border/50 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                            >
                              <div className="w-2 h-2 rounded-full bg-muted-foreground/40 mr-2" />
                              {member}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HallOfFamePage;
