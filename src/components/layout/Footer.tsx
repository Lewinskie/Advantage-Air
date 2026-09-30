export function Footer() {
  return (
    <footer className="bg-[#231F20] border-t border-[rgba(217,173,39,0.12)] py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-1">
          <div className="mb-4 flex items-center gap-3 text-left">
            <img
              src="/images/cropped-Favicon-01-01-1.png"
              alt=""
              className="h-12 w-12 shrink-0 object-contain"
            />
            <span className="flex flex-col leading-none">
              <span className="font-display text-[1.3rem] font-900 uppercase tracking-tight text-[#F5F3EF]">
                Advantage
              </span>
              <span className="font-display text-[0.7rem] font-300 uppercase tracking-[0.35em] text-[#D9AD27]">
                Air Travel
              </span>
            </span>
          </div>
          <p className="text-[#7C7C7C] text-xs leading-relaxed">
            Africa's trusted air carrier since 1996. Scheduled, charter, cargo,
            and aeromedical services.
          </p>
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
