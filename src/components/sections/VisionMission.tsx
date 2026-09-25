const VALUES = [
  {
    name: "Safety first",
    text: "We shall always consider safety as our number one priority, for our staff, our customers and our stakeholders.",
  },
  {
    name: "Honesty",
    text: "We believe in being honest and fair in all our businesses.",
  },
  {
    name: "Trust",
    text: "We are accountable and establish trust with all our clients.",
  },
  {
    name: "Integrity",
    text: "We shall always act with transparency and integrity in all our daily operations.",
  },
  {
    name: "Respect",
    text: "We shall always treat everyone with respect and integrity.",
  },
  {
    name: "Confidentiality",
    text: "We will preserve and protect the confidentiality of our clients.",
  },
];

const COMMITMENTS = [
  "We will adhere to and seek to maintain national and international aviation safety standards, uphold recommended practices and be safety compliant in all spheres of our operations.",
  "We will invest in the continuous training and development of our staff to improve their skills and performance.",
  "We will uphold the highest level of quality standards and professionalism in executing our services.",
  "We will provide a focused approach and dedicated team to execute and fulfil our client's business demands.",
  "We will offer competitive rates for our services.",
];

const GOALS = [
  "To be IOSA certified by 2026.",
  "To be a UN accredited operator by 2025.",
  "To be the airline of choice for cargo and humanitarian services locally and regionally by 2025.",
  "To expand our cargo network regionally in Africa to enhance business relations and open up trade routes within Africa and globally.",
];

export function VisionMission() {
  return (
    <section id="vision" className="bg-[#1a1718]">
      <div className="bg-[#231F20] px-6 py-24 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <article className="border-t border-[#D9AD27] bg-[#2e2a2b] p-8 md:p-12">
            <span className="section-label mb-5 block">Our Vision</span>
            <h2 className="mb-5 font-display text-4xl font-800 uppercase text-[#F5F3EF] md:text-5xl">
              The airline of choice
            </h2>
            <p className="text-lg leading-relaxed text-[#a8a8a8]">
              To establish our position as the airline of choice for private,
              commercial and humanitarian cargo freight services within Africa.
            </p>
          </article>
          <article className="border-t border-[#871B1A] bg-[#2e2a2b] p-8 md:p-12">
            <span className="section-label mb-5 block">Our Mission</span>
            <h2 className="mb-5 font-display text-4xl font-800 uppercase text-[#F5F3EF] md:text-5xl">
              Safe. Consistent. Valuable.
            </h2>
            <p className="text-lg leading-relaxed text-[#a8a8a8]">
              Ensuring our safety standards meet and exceed national aviation
              standards. Consistently maintaining high standards of quality by
              embracing technology, reducing costs and enhancing value-added
              services at all levels.
            </p>
          </article>
        </div>
      </div>

      <div className="bg-[#1a1718] px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <span className="section-label mb-4 block">Our Values</span>
            <h2 className="font-display text-5xl font-800 uppercase leading-tight text-[#F5F3EF]">
              How we carry
              <br />
              <span className="text-[#D9AD27]">ourselves.</span>
            </h2>
          </div>
          <div className="grid gap-px bg-[rgba(217,173,39,0.2)] sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((value, index) => (
              <article key={value.name} className="bg-[#1a1718] p-7 md:p-8">
                <div className="mb-8 font-mono-data text-xs tracking-widest text-[#871B1A]">
                  0{index + 1}
                </div>
                <h3 className="mb-3 font-display text-2xl font-700 uppercase text-[#F5F3EF]">
                  {value.name}
                </h3>
                <p className="text-sm leading-relaxed text-[#7C7C7C]">
                  {value.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#231F20] px-6 py-24 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[1fr_1.5fr]">
          <div>
            <span className="section-label mb-4 block">Our Commitment</span>
            <h2 className="font-display text-5xl font-800 uppercase leading-tight text-[#F5F3EF]">
              Standards we
              <br />
              stand behind.
            </h2>
            <span className="gold-rule mt-7" />
          </div>
          <ol className="flex flex-col">
            {COMMITMENTS.map((commitment, index) => (
              <li
                key={commitment}
                className="grid grid-cols-[2.5rem_1fr] gap-5 border-t border-[rgba(217,173,39,0.2)] py-6"
              >
                <span className="font-mono-data text-xs text-[#D9AD27]">
                  0{index + 1}
                </span>
                <p className="text-[#a8a8a8] leading-relaxed">{commitment}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="bg-[#871B1A] px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:items-end">
            <div>
              <span className="font-mono-data text-xs uppercase tracking-widest text-[rgba(245,243,239,0.7)]">
                Our Goals
              </span>
              <h2 className="mt-4 font-display text-5xl font-800 uppercase leading-tight text-[#F5F3EF]">
                Where we are
                <br />
                headed.
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {GOALS.map((goal, index) => (
                <div
                  key={goal}
                  className="border-t border-[rgba(245,243,239,0.3)] pt-5"
                >
                  <span className="font-mono-data text-xs text-[#D9AD27]">
                    0{index + 1}
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-[#F5F3EF]">
                    {goal}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}