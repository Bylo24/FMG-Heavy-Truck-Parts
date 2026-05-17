const Hero = () => {
  return (
    <section id="home" className="relative isolate min-h-[76svh] lg:min-h-[72svh] flex items-end pt-24 sm:pt-28 md:pt-32 lg:pt-28 pb-14 md:pb-16 overflow-hidden bg-neutral-950">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1920&q=80"
          alt="Commercial truck salvage yard with heavy transport vehicles"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/55 to-black/30" />
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-black/35 sm:hidden" />
      </div>

      <div className="section-container w-full relative z-10">
        <div className="max-w-4xl">
          <h1 className="reveal-up delay-100 mt-3 sm:mt-4 lg:mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-[5.75rem] leading-[0.92] text-background mb-5 text-balance max-w-3xl">
            FMG Heavy Truck Parts supplies reliable commercial vehicle components and heavy transport storage services across Alberta.
          </h1>
          <p className="reveal-up delay-200 text-sm sm:text-base md:text-lg lg:text-xl text-background leading-relaxed max-w-2xl mb-6 sm:mb-8 font-light">
            The yard manages commercial truck dismantling and secure vehicle storage solutions for fleet operators and transport companies.
          </p>
          <div className="reveal-up delay-300 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
            <a
              href="#inventory"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-accent text-accent-foreground px-8 py-4 text-sm tracking-wider uppercase rounded-sm transition-all duration-200 hover:opacity-90"
            >
              View Inventory
            </a>
            <a
              href="#quote"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-3 border border-background text-background px-8 py-4 text-sm tracking-wider uppercase rounded-sm transition-all duration-200 hover:bg-background/10"
            >
              Contact Yard
            </a>
          </div>
        </div>

        <div className="reveal-up delay-500 mt-10 sm:mt-12 md:mt-14 pt-5 border-t border-background/35 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-10 text-[10px] sm:text-xs text-background uppercase tracking-[0.2em]">
          <span>Commercial Truck Parts</span>
          <span>Secure Yard Storage</span>
          <span>Alberta Canada</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
