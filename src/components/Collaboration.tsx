import { Button } from "@/components/ui/button";

export const Collaboration = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-ubuntu font-bold text-3xl lg:text-4xl text-foreground mb-6">
            Partner With Us
          </h2>
          <p className="text-lg text-muted-foreground font-ubuntu mb-8 leading-relaxed">
            We collaborate with organizations and institutions to deliver innovative solutions. 
            Whether you're a startup, enterprise, educational institution, or non-profit organization, 
            let's work together to bring your digital vision to life.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-ubuntu font-bold text-xl">🏢</span>
              </div>
              <h3 className="font-ubuntu font-semibold text-lg text-foreground mb-2">
                Enterprises
              </h3>
              <p className="text-muted-foreground font-ubuntu text-sm">
                Scale your business with custom web solutions and digital transformation strategies.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-ubuntu font-bold text-xl">🎓</span>
              </div>
              <h3 className="font-ubuntu font-semibold text-lg text-foreground mb-2">
                Educational Institutions
              </h3>
              <p className="text-muted-foreground font-ubuntu text-sm">
                Empower learning with modern educational platforms and management systems.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-ubuntu font-bold text-xl">🤝</span>
              </div>
              <h3 className="font-ubuntu font-semibold text-lg text-foreground mb-2">
                Non-Profits
              </h3>
              <p className="text-muted-foreground font-ubuntu text-sm">
                Amplify your impact with purpose-driven web solutions and donation platforms.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="font-ubuntu">
              Start a Partnership
            </Button>
            <Button variant="outline" size="lg" className="font-ubuntu">
              View Our Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};