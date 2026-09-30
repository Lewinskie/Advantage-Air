import { useState } from "react";

import { FLEET } from "../../data/siteData";

export function Fleet() {
  const [active, setActive] = useState(0);
  const [activePhoto, setActivePhoto] = useState(0);

  const aircraft = FLEET[active];
  const photos = aircraft.photos.map((url, index) => ({
    id: `${aircraft.name}-${index}`,
    url,
  }));
  const currentPhoto = photos[activePhoto] ?? photos[0];

  const selectAircraft = (index: number) => {
    setActive(index);
    setActivePhoto(0);
  };

  const changePhoto = (direction: number) => {
    setActivePhoto(
      (index) => (index + direction + photos.length) % photos.length,
    );
  };

  return (
    <section id="fleet" className="bg-[#231F20] px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-6 md:mb-12 md:flex-row md:items-end">
          <div>
            <span className="section-label mb-4 block">Our Fleet</span>
            <h2 className="font-display text-5xl font-800 uppercase leading-[0.95] text-[#F5F3EF] md:text-6xl">
              Purpose-built
              <br />
              aircraft for every mission
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[#7C7C7C] md:text-right">
            Select an aircraft to explore its capabilities and view the fleet.
          </p>
        </div>
        <div
          className="mb-6 grid grid-cols-1 gap-2 sm:grid-cols-2"
          role="tablist"
          aria-label="Select an aircraft"
        >
          {FLEET.map((f, i) => (
            <button
              key={f.name}
              type="button"
              role="tab"
              aria-selected={active === i}
              onClick={() => selectAircraft(i)}
              className={`flex min-h-14 items-center justify-between border px-5 py-3 text-left font-display text-sm font-600 uppercase tracking-wider transition-colors ${
                active === i
                  ? "border-[#D9AD27] bg-[#2e2a2b] text-[#D9AD27]"
                  : "border-[rgba(217,173,39,0.15)] text-[#7C7C7C] hover:border-[rgba(217,173,39,0.5)] hover:text-[#F5F3EF]"
              }`}
            >
              <span>{f.name}</span>
              <span className="font-mono-data text-[0.6rem] tracking-widest">
                0{i + 1}
              </span>
            </button>
          ))}
        </div>
        <div className="grid overflow-hidden border border-[rgba(217,173,39,0.2)] bg-[#2e2a2b] md:grid-cols-[1.15fr_0.85fr]">
          <div className="group relative aspect-[4/3] overflow-hidden bg-[#231F20] md:aspect-auto md:min-h-[460px]">
            <img
              key={currentPhoto?.id}
              src={currentPhoto?.url ?? aircraft.img}
              alt={aircraft.alt}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,23,24,0.65)] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[rgba(35,31,32,0.25)]" />
            <span className="absolute bottom-5 left-5 font-mono-data text-[0.65rem] uppercase tracking-widest text-[#F5F3EF] md:bottom-7 md:left-7">
              Fleet aircraft / 0{active + 1} · {activePhoto + 1} of{" "}
              {photos.length}
            </span>
            {photos.length > 1 && (
              <div className="absolute right-5 top-5 flex gap-2 md:right-7 md:top-7">
                <button
                  type="button"
                  aria-label="Previous fleet photo"
                  onClick={() => changePhoto(-1)}
                  className="flex h-10 w-10 items-center justify-center border border-white/60 bg-[#231F20]/75 text-xl text-white transition-colors hover:border-[#D9AD27] hover:text-[#D9AD27]"
                >
                  ‹
                </button>
                <button
                  type="button"
                  aria-label="Next fleet photo"
                  onClick={() => changePhoto(1)}
                  className="flex h-10 w-10 items-center justify-center border border-white/60 bg-[#231F20]/75 text-xl text-white transition-colors hover:border-[#D9AD27] hover:text-[#D9AD27]"
                >
                  ›
                </button>
              </div>
            )}
          </div>
          <div className="flex flex-col justify-between p-6 sm:p-8 md:p-10 lg:p-12">
            <div>
              <span className="section-label mb-3 block">
                {FLEET[active].category}
              </span>
              <h3 className="mb-6 font-display text-4xl font-800 uppercase leading-[0.95] text-[#F5F3EF] md:text-5xl">
                {FLEET[active].name}
              </h3>
              <span className="gold-rule mb-6" />
              <div className="mt-8 grid gap-5 border-t border-[rgba(217,173,39,0.15)] pt-6 sm:grid-cols-2">
                <div className="min-w-0">
                  <div className="mb-2 font-mono-data text-[0.6rem] uppercase tracking-widest text-[#7C7C7C]">
                    Capacity
                  </div>
                  <div className="font-display text-xl font-600 text-[#F5F3EF]">
                    {FLEET[active].capacity}
                  </div>
                </div>
                <div className="min-w-0">
                  <div className="mb-2 font-mono-data text-[0.6rem] uppercase tracking-widest text-[#7C7C7C]">
                    Max Range
                  </div>
                  <div className="font-display text-xl font-600 text-[#F5F3EF]">
                    {FLEET[active].range}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <a href="#contact" className="btn-primary inline-block text-sm">
                Request This Aircraft
              </a>
            </div>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between gap-4">
          <div className="flex min-w-0 flex-1 gap-2 overflow-x-auto pb-1">
            {photos.map((photo, i) => (
              <button
                key={photo.id}
                type="button"
                aria-label={`View ${aircraft.name} photo ${i + 1}`}
                aria-pressed={activePhoto === i}
                onClick={() => setActivePhoto(i)}
                className={`group relative aspect-[16/5] overflow-hidden border transition-colors ${
                  activePhoto === i
                    ? "border-[#D9AD27]"
                    : "border-transparent opacity-60 hover:border-[rgba(217,173,39,0.5)] hover:opacity-100"
                }`}
                style={{
                  flex: "0 0 132px",
                  minHeight: 64,
                }}
              >
                <img
                  src={photo.url}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {activePhoto === i && (
                  <span className="absolute inset-0 border-2 border-[#D9AD27]" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
