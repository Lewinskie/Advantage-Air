import { useState } from "react";

import { FLEET } from "../../data/siteData";

export function Fleet() {
  const [active, setActive] = useState(0);

  return (
    <section id="fleet" className="bg-[#231F20] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="section-label mb-4 block">Our Fleet</span>
            <h2
              className="font-display font-800 uppercase text-[#F5F3EF] leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Purpose-Built
              <br />
              Aircraft for Every Mission
            </h2>
          </div>
          <p className="text-[#7C7C7C] text-sm max-w-xs md:text-right">
            A versatile fleet ranging from 12-seat executive jets to 189-seat
            airliners.
          </p>
        </div>
        <div className="flex gap-0 mb-8 border-b border-[rgba(217,173,39,0.15)]">
          {FLEET.map((f, i) => (
            <button
              key={f.name}
              onClick={() => setActive(i)}
              className="px-5 py-3 font-display font-600 uppercase tracking-wider text-sm transition-all"
              style={{
                color: active === i ? "#D9AD27" : "#7C7C7C",
                borderBottom:
                  active === i ? "2px solid #D9AD27" : "2px solid transparent",
              }}
            >
              {f.name}
            </button>
          ))}
        </div>
        <div className="fleet-card grid md:grid-cols-2">
          <div className="relative overflow-hidden" style={{ minHeight: 320 }}>
            <img
              src={FLEET[active].img}
              alt={FLEET[active].alt}
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[rgba(35,31,32,0.4)]" />
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-between">
            <div>
              <span className="section-label mb-3 block">
                {FLEET[active].category}
              </span>
              <h3 className="font-display font-800 uppercase text-[#F5F3EF] text-4xl mb-6">
                {FLEET[active].name}
              </h3>
              <span className="gold-rule mb-6" />
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="font-mono-data text-[0.6rem] tracking-widest uppercase text-[#7C7C7C] mb-1">
                    Capacity
                  </div>
                  <div className="font-display font-600 text-[#F5F3EF] text-xl">
                    {FLEET[active].capacity}
                  </div>
                </div>
                <div>
                  <div className="font-mono-data text-[0.6rem] tracking-widest uppercase text-[#7C7C7C] mb-1">
                    Max Range
                  </div>
                  <div className="font-display font-600 text-[#F5F3EF] text-xl">
                    {FLEET[active].range}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <a href="#contact" className="btn-primary text-sm inline-block">
                Request This Aircraft
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-3">
          {FLEET.map((f, i) => (
            <button
              key={f.name}
              onClick={() => setActive(i)}
              className="relative overflow-hidden"
              style={{
                height: 80,
                opacity: active === i ? 1 : 0.5,
                transition: "opacity 0.2s",
              }}
            >
              <img
                src={f.img}
                alt={f.alt}
                className="w-full h-full object-cover"
              />
              {active === i && (
                <div className="absolute inset-0 border-2 border-[#D9AD27]" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
