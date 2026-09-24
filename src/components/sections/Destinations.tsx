import { DESTINATIONS } from "../../data/siteData";

export function Destinations() {
  return (
    <section id="destinations" className="bg-[#1a1718] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="section-label mb-4 block">Our Network</span>
          <h2
            className="font-display font-800 uppercase text-[#F5F3EF] leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Destinations
          </h2>
        </div>
        <div className="relative overflow-hidden mb-12">
          <img
            src="https://images.unsplash.com/photo-1708246519742-2906e0dc7900?w=1400&h=500&fit=crop&auto=format"
            alt="Aircraft in flight"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(35,31,32,0.55)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div
                className="font-display font-900 text-[#D9AD27] uppercase"
                style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
              >
                120+ Destinations
              </div>
              <div className="font-mono-data text-[0.7rem] tracking-widest text-[#a8a8a8] uppercase mt-2">
                4 Hubs &nbsp;·&nbsp; 18 Countries &nbsp;·&nbsp; 3 Continents
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {DESTINATIONS.map((d) => (
            <span
              key={d}
              className="font-mono-data text-[0.65rem] tracking-widest uppercase px-3 py-2 border border-[rgba(217,173,39,0.2)] text-[#7C7C7C] hover:border-[#D9AD27] hover:text-[#D9AD27] transition-colors cursor-default"
            >
              {d}
            </span>
          ))}
          <span className="font-mono-data text-[0.65rem] tracking-widest uppercase px-3 py-2 border border-[#871B1A] text-[#871B1A]">
            + 102 more
          </span>
        </div>
      </div>
    </section>
  );
}
