import { SERVICES } from "../../data/siteData";

export function Services() {
  return (
    <section id="services" className="bg-[#1a1718] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-1">
            <span className="section-label mb-4 block">What We Do</span>
            <h2
              className="font-display font-800 uppercase text-[#F5F3EF] leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Full-Spectrum
              <br />
              Air Services
            </h2>
            <span className="gold-rule mt-6" />
          </div>
          <div className="md:col-span-2 flex items-center">
            <p className="text-[#7C7C7C] leading-relaxed">
              From scheduled cargo hauls to urgent aeromedical evacuations,
              Advantage Air Travel provides the complete range of aviation
              services under a single, trusted operator certificate.
            </p>
          </div>
        </div>
        <div>
          {SERVICES.map((s) => (
            <div
              key={s.num}
              className="service-item grid grid-cols-[3rem_1fr_auto] md:grid-cols-[4rem_1fr_1fr] items-start gap-6 py-6 px-4 cursor-default"
            >
              <span className="font-mono-data text-[0.65rem] text-[#871B1A] tracking-widest pt-1">
                {s.num}
              </span>
              <div>
                <h3 className="font-display font-700 uppercase text-[#F5F3EF] text-2xl mb-1">
                  {s.title}
                </h3>
                <p className="text-[#7C7C7C] text-sm leading-relaxed md:hidden">
                  {s.desc}
                </p>
              </div>
              <p className="text-[#7C7C7C] text-sm leading-relaxed hidden md:block">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
