import { useState } from "react";

export function Footer({
  onAdminToggle,
  adminMode,
}: {
  onAdminToggle: () => void;
  adminMode: boolean;
}) {
  const [clickCount, setClickCount] = useState(0);

  const handleLogoClick = () => {
    setClickCount((c) => {
      const next = c + 1;
      if (next >= 5) {
        onAdminToggle();
        return 0;
      }
      return next;
    });
  };

  return (
    <footer className="bg-[#231F20] border-t border-[rgba(217,173,39,0.12)] py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-1">
          <button
            onClick={handleLogoClick}
            className="flex flex-col leading-none mb-4 text-left"
          >
            <div className="font-display font-900 text-[1.3rem] tracking-tight text-[#F5F3EF] uppercase leading-none">
              Advantage
            </div>
            <div className="font-display font-300 text-[0.7rem] tracking-[0.35em] text-[#D9AD27] uppercase">
              Air Travel
            </div>
          </button>
          <p className="text-[#7C7C7C] text-xs leading-relaxed">
            Africa's trusted air carrier since 1996. Scheduled, charter, cargo,
            and aeromedical services.
          </p>
          {adminMode && (
            <div className="mt-3 font-mono-data text-[0.55rem] tracking-widest uppercase text-[#871B1A] border border-[#871B1A] px-2 py-1 inline-block">
              Admin Mode Active
            </div>
          )}
        </div>
        {[
          {
            title: "Services",
            links: [
              "Scheduled Passenger",
              "Executive Charter",
              "Air Cargo",
              "Medical Evacuation",
              "Government Ops",
            ],
          },
          {
            title: "Company",
            links: [
              "About Us",
              "Our Fleet",
              "Destinations",
              "Careers",
              "Media",
            ],
          },
          {
            title: "Legal",
            links: [
              "Terms of Carriage",
              "Privacy Policy",
              "Safety Record",
              "IATA Code of Conduct",
            ],
          },
        ].map((col) => (
          <div key={col.title}>
            <div className="font-mono-data text-[0.6rem] tracking-widest uppercase text-[#D9AD27] mb-4">
              {col.title}
            </div>
            <ul className="flex flex-col gap-2">
              {col.links.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-[#7C7C7C] text-xs hover:text-[#F5F3EF] transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-[rgba(217,173,39,0.1)] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono-data text-[0.6rem] tracking-widest text-[#7C7C7C] uppercase">
          © 2026 Advantage Air Travel (Pty) Ltd &nbsp;·&nbsp; All Rights
          Reserved
        </span>
        <div className="flex gap-5">
          {["Facebook", "LinkedIn", "X"].map((s) => (
            <a
              key={s}
              href="#"
              className="font-mono-data text-[0.6rem] tracking-widest text-[#7C7C7C] hover:text-[#D9AD27] uppercase transition-colors"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
