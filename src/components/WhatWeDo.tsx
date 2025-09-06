
import { MediaFeature } from "@/components/MediaFeature";
import { useYaml } from "@/hooks/useYaml";

interface FocusItem {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
}

const useFocusItems = () => useYaml<FocusItem>("/content/focus.yaml");

export function WhatWeDo() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="section-title font-heading font-bold text-3xl lg:text-4xl mb-4 tracking-tight">
            What We Focus On
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            We deliver exceptional solutions through modern development practices and 
            a commitment to quality and innovation.
          </p>
        </div>

        {/* Focus list: image left, text right */}
        <FocusList />
        
        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <p className="text-sm text-muted-foreground">
                Interested in working together?
              </p>
          </div>
          <a href="/about" className="btn btn-secondary text-sm">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FocusList() {
  const { data, loading, error } = useFocusItems();
  if (error) return <p className="text-sm text-muted-foreground">Failed to load focus items.</p>;
  if (loading || !data) {
    return (
      <div className="space-y-6">
        <div className="h-24 bg-muted/40 border border-border rounded" />
        <div className="h-24 bg-muted/40 border border-border rounded" />
        <div className="h-24 bg-muted/40 border border-border rounded" />
      </div>
    );
  }
  return (
    <div className="space-y-10">
      {data.map((item) => (
        <MediaFeature
          key={item.title}
          title={item.title}
          description={item.description}
          imageSrc={item.imageSrc}
          imageAlt={item.imageAlt}
        />
      ))}
    </div>
  );
}
