import { Button } from "@/components/ui/button";
import { useYaml } from "@/hooks/useYaml";

type Offering = {
  title: string;
  description: string;
  mediaPartners?: string[]; // list of partner names
};

export const Collaboration = () => {
  const { data, loading, error } = useYaml<Offering>("/content/partners.yaml");
  const offerings = data || [];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
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
                      <div className="w-10 h-10 rounded-full bg-muted border border-border flex items-center justify-center">
                        <span className="font-heading text-sm text-foreground">{initials}</span>
                      </div>
                      <h3 className="font-ubuntu font-semibold text-lg text-foreground">{o?.title ?? "Collaboration"}</h3>
                    </div>
                    <p className="text-muted-foreground font-ubuntu text-sm leading-relaxed">{o?.description ?? ""}</p>
                  </div>
                );
              })}
            </div>
          )}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-start mt-10">
            <Button size="lg" className="font-ubuntu">
              Start a Partnership
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
