const badges = ["Parts In Stock", "Secure Yard Storage"];

const OriginStory = () => {
  return (
    <section id="about" className="section-spacing">
      <div className="section-container">
        <div className="max-w-4xl">
          <div>
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
        </div>
      </div>
    </section>
  );
};

export default OriginStory;
