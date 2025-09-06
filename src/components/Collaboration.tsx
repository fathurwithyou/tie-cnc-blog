import { Button } from "@/components/ui/button";
import { useYaml } from "@/hooks/useYaml";

type Offering = {
  title: string;
  description: string;
  mediaPartners?: string[]; // list of partner names
};

const getCollaborationIcon = (title: string) => {
  const lowerTitle = title.toLowerCase();
  
  if (lowerTitle.includes('research') || lowerTitle.includes('academic')) {
    return (
      <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    );
  }
  
  if (lowerTitle.includes('enterprise') || lowerTitle.includes('business')) {
    return (
      <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    );
  }
  
  if (lowerTitle.includes('media') || lowerTitle.includes('community')) {
    return (
      <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    );
  }
  
  // Default partnership icon
  return (
    <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
    </svg>
  );
};

export const Collaboration = () => {
  const { data, loading, error } = useYaml<Offering>("/content/partners.yaml");
  const offerings = data || [];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-left font-ubuntu font-bold text-3xl lg:text-4xl mb-6">
            Collaboration & Partnerships
          </h2>
          <p className="text-lg text-muted-foreground font-ubuntu mb-8 leading-relaxed">
            Work with us on research, product development, and community initiatives. We partner with enterprises, academia,
            non-profits, and media to create measurable impact.
          </p>

          {/* Offerings (Media partners as part of offering) */}
          {error && <p className="text-sm text-muted-foreground">Failed to load partnership offerings.</p>}
          {loading && !data ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="h-36 bg-muted/40 border border-border rounded" />
              <div className="h-36 bg-muted/40 border border-border rounded" />
              <div className="h-36 bg-muted/40 border border-border rounded" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {offerings.map((o, idx) => {
                const initials =
                  (o?.title ?? "")
                    .split(/\s+/)
                    .filter(Boolean)
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase() || "CP";
                return (
                  <div key={o?.title || idx} className="bg-card border border-border rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3">
                      {getCollaborationIcon(o?.title ?? "Collaboration")}
                      <h3 className="font-ubuntu font-semibold text-lg text-foreground">{o?.title ?? "Collaboration"}</h3>
                    </div>
                    <p className="text-muted-foreground font-ubuntu text-sm leading-relaxed">{o?.description ?? ""}</p>
                  </div>
                );
              })}
            </div>
          )}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-start mt-4">
            <Button 
              variant="outline" 
              size="lg" 
              className="font-ubuntu border-0 hover:border hover:border-border/50 rounded-sm transition-all duration-300"
            >
              Start a Partnership
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
