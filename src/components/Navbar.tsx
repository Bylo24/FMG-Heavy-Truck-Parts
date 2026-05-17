import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#quote" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/70 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
      <div className="section-container flex items-center justify-between h-16 sm:h-16 md:h-20">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-foreground text-sm text-background font-sans tracking-wide">
            FMG
          </span>
          <span className="font-display text-xl md:text-2xl text-foreground leading-none">
            FMG Heavy Truck Parts
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#quote"
            className="text-sm text-accent-foreground bg-accent px-5 py-2.5 rounded-sm transition-all duration-200 hover:opacity-90 tracking-wide uppercase shadow-[0_10px_30px_-16px_rgba(230,126,34,0.8)]"
          >
            Request Parts
          </a>
        </div>

        <button
          className="md:hidden text-foreground p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-5 pt-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3.5 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#quote"
            onClick={() => setOpen(false)}
            className="mt-4 block text-center text-sm text-accent-foreground bg-accent px-5 py-3.5 rounded-sm uppercase tracking-wide"
          >
            Request Parts
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
