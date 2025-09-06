import whatWeDoImage from "@/assets/what-we-do.jpg";

interface ServiceItem {
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    title: "Modern Architecture",
    description: "Building scalable applications with clean, maintainable code"
  },
  {
    title: "Performance Focused",
    description: "Optimized for speed and user experience across all devices"
  },
  {
    title: "Developer Experience",
    description: "Creating tools and workflows that enhance productivity"
  },
  {
    title: "Best Practices",
    description: "Following industry standards and proven methodologies"
  },
  {
    title: "Continuous Learning",
    description: "Staying current with the latest technologies and trends"
  },
  {
    title: "Community Driven",
    description: "Sharing knowledge and contributing to open source projects"
  }
];

export function WhatWeDo() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <img 
              src={whatWeDoImage} 
              alt="Modern web development workspace" 
              className="w-full h-auto rounded-lg shadow-sm"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-ubuntu font-bold text-3xl lg:text-4xl text-foreground mb-4">
              What We Do
            </h2>
            <p className="text-lg text-muted-foreground font-ubuntu mb-8 leading-relaxed">
              We focus on delivering exceptional solutions through modern development practices and cutting-edge technologies.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-ubuntu font-semibold text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-ubuntu leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}