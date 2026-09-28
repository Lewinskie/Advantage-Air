export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
      style={{ background: "#231F20" }}
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1683971336619-d445cbec0276?w=1800&h=1000&fit=crop&auto=format"
          alt="Airport runway at sunset"
          className="h-full w-full scale-105 object-cover"
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
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-28 pt-40 md:px-12 md:pb-32 md:pt-48">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-8 flex justify-center">
            <img
              src="/images/Favicon-01-01.png"
              alt="Advantage Air Travel Logo"
              className="block h-auto max-h-32 w-72 object-contain md:max-h-40 md:w-96"
            />
          </span>
          <h1
            className="mb-7 font-display text-[clamp(3.5rem,9vw,8rem)] font-900 uppercase leading-[0.88] tracking-tight"
            style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)", color: "#F5F3EF" }}
          >
            Your Sky,
            <br />
            <span style={{ color: "#871B1A" }}>Our</span>{" "}
            <span style={{ color: "#D9AD27" }}>Command.</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-[#a8a8a8]">
            We provide air cargo services across Kenya, Somalia, South Sudan,
            Ethiopia, and the wider East and Central African region.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#services" className="btn-primary text-sm">
              Explore Services
            </a>
            <a href="#fleet" className="btn-outline text-sm">
              View Our Fleet
            </a>
          </div>
        </div>
        {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="font-mono-data text-[0.6rem] tracking-widest uppercase text-[#D9AD27]">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-[#D9AD27] to-transparent" />
        </div> */}
      </div>
    </section>
  );
}
