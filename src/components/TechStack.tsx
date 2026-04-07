const platforms = [
  "Apollo",
  "MillionVerifier",
  "Clay",
  "Google Workspace",
  "Instantly",
];

// Duplicate for seamless loop
const items = [...platforms, ...platforms];

export const TechStack = () => {
  return (
    <section className="py-10 sm:py-14 overflow-hidden">
      <div className="container mx-auto px-4 mb-6">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Powered by Industry-Leading Platforms
        </p>
      </div>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee whitespace-nowrap">
          {items.map((name, i) => (
            <div
              key={i}
              className="mx-8 sm:mx-12 flex-shrink-0 flex items-center gap-2"
            >
              <span className="text-base sm:text-lg font-semibold text-muted-foreground/70 select-none">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
