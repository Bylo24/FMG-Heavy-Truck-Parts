const Footer = () => {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 text-white">
      <div className="section-container py-14 md:py-20">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-accent text-sm text-white font-sans tracking-wide">
                FMG
              </span>
              <span className="font-display text-2xl text-white leading-none">
                FMG Heavy Truck Parts
              </span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
              Commercial truck parts, vehicle salvage, and secure heavy transport storage across Alberta.
            </p>
          </div>
          <div className="md:col-span-3 md:col-start-7">
            <p className="text-xs text-white mb-4 font-sans tracking-[0.2em] uppercase">Navigate</p>
            <div className="space-y-2.5">
              {[
                { label: "Home", href: "#home" },
                { label: "Inventory", href: "#inventory" },
                { label: "Services", href: "#services" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#quote" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="md:col-span-3 md:col-start-10">
            <p className="text-xs text-white mb-4 font-sans tracking-[0.2em] uppercase">Contact</p>
            <div className="space-y-2.5 text-sm text-white/70">
              <a href="mailto:parts@fmgenergyservices.com" className="block hover:text-white transition-colors duration-200">
                parts@fmgenergyservices.com
              </a>
              <a href="tel:+14035550198" className="block hover:text-white transition-colors duration-200">
                403 555 0198
              </a>
              <p className="text-xs leading-relaxed pt-2">
                Alberta<br />Canada
              </p>
            </div>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-white/55">
          <span>Copyright 2026 FMG Heavy Truck Parts. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
