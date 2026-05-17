const badges = ["Parts In Stock", "Secure Yard Storage"];

const OriginStory = () => {
  return (
    <section id="about" className="section-spacing">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <span className="text-xs tracking-[0.25em] uppercase text-accent mb-4 block font-sans">
              About
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1] mb-6 text-balance">
              Heavy Vehicle Solutions
            </h2>
            <div className="gold-line mb-8" />
            <div className="space-y-5 text-muted-foreground leading-[1.75] text-sm sm:text-base">
              <p>
                FMG Heavy Truck Parts operates a commercial vehicle salvage and storage yard in Alberta. The business focuses on recovering usable components from heavy transport machinery and managing a secure holding facility.
              </p>
              <p>
                Fleet owners and operators can source specific mechanical components directly from the yard inventory. The team manages the collection processing and logging of heavy transport assets with professional equipment.
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-px bg-border">
              {badges.map((badge) => (
                <div key={badge} className="bg-card p-5 sm:p-6 border border-border/70">
                  <p className="font-display text-2xl sm:text-3xl text-foreground leading-none">
                    {badge}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-sm bg-neutral-950 aspect-[4/5] md:aspect-[5/6] shadow-[0_25px_60px_-30px_rgba(0,0,0,0.45)]">
              <img
                src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80"
                alt="Organized heavy vehicle component yard"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OriginStory;
