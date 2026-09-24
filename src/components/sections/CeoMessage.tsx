export function CeoMessage() {
  return (
    <section
      id="ceo"
      className="bg-[#1a1718] py-24 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-start">
          <div className="flex flex-col items-center md:items-start gap-6">
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-full h-full border border-[rgba(217,173,39,0.25)]" />
              <img
                src="https://images.unsplash.com/photo-1569938709389-ff8ab00530b3?w=400&h=500&fit=crop&auto=format&facepad=3&faces=1"
                alt="CEO portrait"
                className="relative z-10 w-56 md:w-full max-w-[260px] object-cover grayscale contrast-110"
                style={{
                  filter: "grayscale(100%) contrast(1.1) brightness(0.9)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 z-20 bg-[#871B1A] px-4 py-3">
                <div className="font-display font-700 text-[#F5F3EF] text-lg leading-tight">
                  James O. Adeyemi
                </div>
                <div className="font-mono-data text-[0.6rem] tracking-widest text-[rgba(245,243,239,0.7)] uppercase">
                  Chief Executive Officer
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <div
                className="font-display font-300 italic text-[#D9AD27] text-3xl leading-none mb-1"
                style={{ fontStyle: "italic", letterSpacing: "-0.01em" }}
              >
                J. Adeyemi
              </div>
              <div className="gold-rule mt-3" />
            </div>
          </div>

          <div>
            <span className="section-label mb-4 block">
              A Message from Our CEO
            </span>
            <h2
              className="font-display font-800 uppercase text-[#F5F3EF] leading-tight mb-8"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
            >
              Built on Trust.
              <br />
              Flown with Purpose.
            </h2>

            <div className="border-l-2 border-[#871B1A] pl-6 mb-8">
              <p className="font-display font-600 text-[#F5F3EF] text-xl md:text-2xl leading-snug italic">
                "Every flight we operate carries more than cargo or passengers —
                it carries a promise. A promise of safety, reliability, and
                respect for the people and communities we serve."
              </p>
            </div>

            <div className="flex flex-col gap-4 text-[#a8a8a8] leading-relaxed text-sm md:text-base">
              <p>
                When I founded Advantage Air Travel in 1996 with a single
                turboprop and a crew of eleven, I made a commitment: that we
                would never compromise on safety, never overpromise to a client,
                and never lose sight of the human element that makes aviation
                extraordinary.
              </p>
              <p>
                Nearly three decades later, that commitment is unchanged. Our
                network has grown to over 120 destinations across three
                continents. Our fleet has expanded from one aircraft to a
                modern, mixed fleet capable of carrying passengers,
                time-critical freight, and medical teams to wherever they are
                needed most.
              </p>
              <p>
                What sets Advantage Air Travel apart is not the size of our
                aircraft or the reach of our routes — it is the character of our
                people. Our pilots, engineers, ground crew, and operations staff
                approach every shift with the discipline of professionals and
                the care of people who understand what's at stake.
              </p>
              <p>
                To our clients, partners, and the communities along our routes:
                thank you for your continued trust. To our team: your dedication
                is the engine that keeps us airborne.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-6">
              <div className="md:hidden font-display font-300 italic text-[#D9AD27] text-3xl">
                J. Adeyemi
              </div>
              <div>
                <div className="font-display font-600 text-[#F5F3EF] text-lg">
                  James O. Adeyemi
                </div>
                <div className="font-mono-data text-[0.6rem] tracking-widest text-[#7C7C7C] uppercase">
                  Chief Executive Officer — Advantage Air Travel
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
