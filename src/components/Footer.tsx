import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="border-t bg-secondary/30">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="sm:col-span-2 text-center sm:text-left">
            <a href="#home" className="inline-block mb-3 sm:mb-4">
              <img src={logo} alt="Ascendrix Services Limited" className="h-12 sm:h-14 w-auto mx-auto sm:mx-0" />
            </a>
            <p className="text-muted-foreground text-sm sm:text-base max-w-sm mx-auto sm:mx-0">
              Building AI systems that work around the clock to scale your business. 
              Never miss an opportunity with our intelligent automation solutions.
            </p>
          </div>
          
          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors py-1 inline-block">About</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors py-1 inline-block">Services</a></li>
              <li><a href="#case-studies" className="hover:text-primary transition-colors py-1 inline-block">Case Studies</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors py-1 inline-block">FAQs</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors py-1 inline-block">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t text-center text-xs sm:text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ascendrix Services Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
