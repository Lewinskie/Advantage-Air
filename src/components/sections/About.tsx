export function About() {
  return (
    <section id="about" className="bg-[#231F20] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="section-label mb-4 block">Who We Are</span>
          <h2
            className="font-display font-800 uppercase text-[#F5F3EF] leading-tight mb-6"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
          >
            Africa's Trusted
            <br />
            Air Travel Partner
          </h2>
          <span className="gold-rule mb-6" />
          <p className="text-[#a8a8a8] leading-relaxed mb-5">
            For over two decades, Advantage Air Travel has been the carrier of
            choice for governments, corporations, and individual travellers who
            demand precision, safety, and service excellence across the African
            continent and beyond.
          </p>
          <p className="text-[#a8a8a8] leading-relaxed mb-8">
            Headquartered in Johannesburg with regional hubs in Nairobi, Lagos,
            and Dubai, we operate scheduled services, bespoke charters, critical
            cargo lifts, and aeromedical evacuations — all under one roof.
          </p>
          <ul className="flex flex-col gap-3">
            {[
              "IATA Certified Operator",
              "ISO 9001:2015 Quality Management",
              "ICAO Safety Compliant",
              "SACAA Licensed",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm text-[#a8a8a8]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#D9AD27] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-full h-full border border-[rgba(217,173,39,0.2)]" />
          <img
            src="https://images.unsplash.com/photo-1522798120812-304f8819f4be?w=700&h=500&fit=crop&auto=format"
            alt="Aircraft cockpit instruments"
            className="w-full h-auto object-cover relative z-10"
          />
          <div className="absolute bottom-4 right-4 z-20 bg-[#871B1A] px-5 py-3">
            <span className="font-display font-700 text-[2rem] text-[#F5F3EF] leading-none">
              28+
            </span>
            <div className="font-mono-data text-[0.6rem] tracking-widest text-[rgba(245,243,239,0.7)] uppercase">
              Years Experience
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
