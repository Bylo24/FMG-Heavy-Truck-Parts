const inventoryImages = [
  {
    src: "https://images.unsplash.com/photo-1592838064575-70ed626d3a44?auto=format&fit=crop&w=600&q=80",
    alt: "Heavy truck in an industrial yard",
  },
  {
    src: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&w=600&q=80",
    alt: "Commercial vehicle parts and machinery",
  },
  {
    src: "https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?auto=format&fit=crop&w=600&q=80",
    alt: "Semi tractor on a transport route",
  },
  {
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
    alt: "Organized logistics and transport operation",
  },
  {
    src: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=600&q=80",
    alt: "Heavy vehicle component storage",
  },
  {
    src: "https://images.unsplash.com/photo-1542442828-257219879015?auto=format&fit=crop&w=600&q=80",
    alt: "Commercial truck and clean salvage operation",
  },
];

const Blog = () => {
  return (
    <section id="inventory" className="section-spacing bg-card">
      <div className="section-container">
        <div className="mb-10 md:mb-14">
          <span className="text-xs tracking-[0.25em] uppercase text-accent mb-4 block font-sans">
            Inventory
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1] text-balance">
            Inventory Yard
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {inventoryImages.map((image) => (
            <div key={image.src} className="group relative overflow-hidden rounded-sm bg-neutral-950 aspect-[4/3]">
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-70" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
