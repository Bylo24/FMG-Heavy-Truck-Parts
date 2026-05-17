import { CircleDot, Cog, Recycle, ShieldCheck, Truck, Wrench } from "lucide-react";

const services = [
  {
    num: "01",
    icon: Cog,
    title: "Engine Assemblies",
    description: "The inventory includes tested diesel engines and core components for major commercial truck brands.",
  },
  {
    num: "02",
    icon: Wrench,
    title: "Drivetrain Components",
    description: "Dismantled gearboxes differentials and axle assemblies are inspected and cataloged for immediate transport fleet replacement.",
  },
  {
    num: "03",
    icon: Truck,
    title: "Cab and Body Parts",
    description: "Heavy transport body panels doors bumpers and interior trim pieces are salvaged from commercial vehicle units.",
  },
  {
    num: "04",
    icon: CircleDot,
    title: "Suspension and Braking",
    description: "Commercial steering columns air springs brake drums and suspension linkages are processed through the dismantling yard.",
  },
  {
    num: "05",
    icon: ShieldCheck,
    title: "Secure Vehicle Storage",
    description: "The monitored compound provides designated parking and storage containment for heavy transport trucks and fleet machinery.",
  },
  {
    num: "06",
    icon: Recycle,
    title: "Fleet Salvage Recovery",
    description: "Insurance write offs and decommissioned commercial trucks are purchased for dismantling and component recycling logistics.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-spacing bg-card">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-8 mb-12 md:mb-16">
          <div className="lg:col-span-6">
            <span className="text-xs tracking-[0.25em] uppercase text-accent mb-4 block font-sans">
              Services
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1] text-balance">
              Commercial Yard Services
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-muted-foreground leading-relaxed text-base">
              The facility provides heavy vehicle dismantling and secure yard management solutions
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service) => (
            <div
              key={service.num}
              className="bg-card p-6 sm:p-7 md:p-9 group transition-colors duration-300 hover:bg-background"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-xs text-muted-foreground font-sans tracking-wider group-hover:text-foreground">{service.num}</span>
                <service.icon size={24} className="text-accent group-hover:text-foreground transition-colors duration-300" strokeWidth={1.7} />
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3 leading-none">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
