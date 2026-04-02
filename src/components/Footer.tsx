import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="border-t bg-secondary/30">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="sm:col-span-2 text-center sm:text-left">
            <a href="#home" className="inline-block mb-3 sm:mb-4">
              <img src={logo} alt="Ascendrix Services Limited" className="h-12 sm:h-14 w-auto mx-auto sm:mx-0 brightness-0 invert" />
            </a>
            <p className="text-muted-foreground text-sm sm:text-base max-w-sm mx-auto sm:mx-0">
              ASL is a UK-based Agency helping B2B companies book more qualified meetings through targeted LinkedIn outreach and cold email outreach campaigns.
            </p>
          </div>
          
          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors py-1 inline-block">About</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors py-1 inline-block">Services</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors py-1 inline-block">FAQs</a></li>
              <li><a href="#discovery-call" className="hover:text-primary transition-colors py-1 inline-block">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t text-center text-xs sm:text-sm text-muted-foreground">
          <p>&copy; 2025 Ascendrix Services Limited. All rights reserved.</p>
          <p className="mt-2">Zayaan Bukhari - Founder & CEO of Ascendrix Services Limited</p>
        </div>
      </div>
    </footer>
  );
};
