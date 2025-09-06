import React from "react";

interface MediaFeatureProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  reverse?: boolean; // if true, image on right for variety
}

export function MediaFeature({ title, description, imageSrc, imageAlt, reverse = false }: MediaFeatureProps) {
  return (
    <article className={"grid gap-6 md:grid-cols-3 items-start"}>
      {/* Image */}
      <div className={reverse ? "md:col-start-3" : "md:col-span-1"}>
        <div className="w-full overflow-hidden rounded-lg border border-border bg-muted/30 aspect-[4/3]">
          <img
            src={imageSrc}
            alt={imageAlt || title}
            className="h-full w-full object-cover grayscale"
            onError={(e) => {
              const t = e.currentTarget as HTMLImageElement;
              if (!t.src.endsWith('/placeholder.svg')) t.src = '/placeholder.svg';
            }}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      {/* Text */}
      <div className={reverse ? "md:col-span-2 md:col-start-1" : "md:col-span-2"}>
        <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  );
}

