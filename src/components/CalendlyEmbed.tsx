import { useEffect } from "react";

export const CalendlyEmbed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="discovery-call" className="py-24 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Schedule Your Discovery Call
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's see if we're a good fit. We'll walk through your current pipeline 
            and show you exactly how we'd generate qualified meetings for your business.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg border bg-card">
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/ascendrixserviceslimited/discovery-call" 
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>
      </div>
    </section>
  );
};
