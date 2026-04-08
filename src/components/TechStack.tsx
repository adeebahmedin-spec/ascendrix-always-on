import logoApollo from "@/assets/logo-apollo.png";
import logoMillionVerifier from "@/assets/logo-millionverifier.png";
import logoClay from "@/assets/logo-clay.png";
import logoGoogleWorkspace from "@/assets/logo-google-workspace.png";
import logoInstantly from "@/assets/logo-instantly.png";

const platforms = [
  { name: "Apollo", logo: logoApollo },
  { name: "MillionVerifier", logo: logoMillionVerifier },
  { name: "Clay", logo: logoClay },
  { name: "Google Workspace", logo: logoGoogleWorkspace },
  { name: "Instantly", logo: logoInstantly },
];

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
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee whitespace-nowrap">
          {items.map((platform, i) => (
            <div
              key={i}
              className="mx-8 sm:mx-12 flex-shrink-0 flex flex-col items-center gap-2"
            >
              <img
                src={platform.logo}
                alt={platform.name}
                loading="lazy"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="text-sm sm:text-base font-semibold text-muted-foreground/70 select-none">
                {platform.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
