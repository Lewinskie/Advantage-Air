export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#231F20" }}
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1683971336619-d445cbec0276?w=1800&h=1000&fit=crop&auto=format"
          alt="Airport runway at sunset"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#231F20] to-transparent" />
      </div>
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg,#D9AD27 0px,#D9AD27 1px,transparent 1px,transparent 80px),repeating-linear-gradient(90deg,#D9AD27 0px,#D9AD27 1px,transparent 1px,transparent 80px)`,
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20">
        <div className="max-w-3xl">
          <span className="section-label mb-6 block">
            Est. 1996 &nbsp;—&nbsp; Licensed Air Carrier
          </span>
          <h1
            className="font-display font-900 uppercase leading-[0.9] mb-6"
            style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)", color: "#F5F3EF" }}
          >
            Your Sky,
            <br />
            <span style={{ color: "#871B1A" }}>Our</span>{" "}
            <span style={{ color: "#D9AD27" }}>Command.</span>
          </h1>
          <p className="text-[#a8a8a8] text-lg leading-relaxed max-w-xl mb-10">
            Advantage Air Travel connects passengers, cargo, and charter clients
            across 120+ destinations with unmatched reliability, precision, and
            care.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#services" className="btn-primary text-sm">
              Explore Services
            </a>
            <a href="#fleet" className="btn-outline text-sm">
              View Our Fleet
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="font-mono-data text-[0.6rem] tracking-widest uppercase text-[#D9AD27]">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-[#D9AD27] to-transparent" />
        </div>
      </div>
    </section>
  );
}
