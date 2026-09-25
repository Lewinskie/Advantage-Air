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
                  Irene Mutisya
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
                I. Mutisya
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
                The global aviation industry is undergoing a fundamental
                structural shift, especially in the sphere of the Covid-19
                pandemic. The aviation industry is faced with uncertainty,
                travelling restrictions, excess capacity, rising costs,
                competition, and a deteriorating economic climate, therefore
                airlines must innovate to ensure their continued survival and
                profitability. For many airlines, survival depends on their
                ability to develop new business models to enable them to adapt
                to the ever-changing environment.
              </p>
              <p>
                The global aviation industry is undergoing a fundamental
                structural shift, especially in the sphere of the Covid-19
                pandemic. The aviation industry is faced with uncertainty,
                travelling restrictions, excess capacity, rising costs,
                competition, and a deteriorating economic climate, therefore
                airlines must innovate to ensure their continued survival and
                profitability. For many airlines, survival depends on their
                ability to develop new business models to enable them to adapt
                to the ever-changing environment. In the last two years,
                Advantage Air Travel Limited has strategically invested in and
                expanded its cargo operations to capitalize on the present gap
                in the regional market. We have made it our strategic priority
                to build our core competencies and long-term competitive
                advantages whilst still maintaining the highest level of safety,
                quality and reliability to meet our client’s operational
                requirements.
              </p>
              <p>
                What sets Advantage Air Travel apart is not the size of our
                aircraft or the reach of our routes — it is the character of our
                people. Our pilots, engineers, ground crew, and operations staff
                approach every shift with the discipline of professionals and
                the care of people who understand what's at stake.
              </p>
              <p>
                Improving customer service is fundamental to our success and we
                are focused on ensuring cargo logistics in the region is as
                affordable, secure and as safe as practicably possible for
                clients. We hope to achieve this through innovative and robust
                management of our operations, combined with the expertise,
                skills and professionalism of our entire team through continuous
                and rigorous training to meet and exceed the industry safety and
                quality standards.
              </p>
              <p>
                In this quickly evolving era of social and environmental change,
                we aspire to run a sustainable business to benefit our
                customers, open up trade routes and contribute to the economy's
                growth.
              </p>
              <p>
                Advantage Air Travel Limited has the ability and capacity to
                personalize and provide adequate aviation support to our clients
                dependent on each of their unique and distinct operational
                requirements to ensure they meet their targets.
              </p>
              <p>
                Our passion is rooted in the dream of what we do, the people we
                do it with, and the people we do it for. We celebrate the
                promise of an experience unrestricted by tradition and norms. It
                is an experience that has helped us grow. It is an experience
                that has helped us build long-term relationships. It is an
                experience that keeps us at the forefront of the global aviation
                community. And It is an experience that redefines the industry.
                For our team, our customers, and our community. Thank you for
                choosing us to be your friend in the skies
              </p>
            </div>

            <div className="mt-8 flex items-center gap-6">
              <div className="md:hidden font-display font-300 italic text-[#D9AD27] text-3xl">
                I. Mutisya
              </div>
              <div>
                <div className="font-display font-600 text-[#F5F3EF] text-lg">
                  Irene Mutisya
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
