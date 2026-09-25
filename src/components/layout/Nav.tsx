import { useState } from "react";

import { NAV_ITEMS } from "../../data/siteData";

export function Nav({ scrolled }: { scrolled: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(35,31,32,0.97)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(217,173,39,0.15)" : "none",
        backdropFilter: scrolled ? "blur(8px)" : "none",
      }}
    >
      <nav className="flex items-center justify-between px-6 md:px-12 py-4">
        <a href="#" className="flex flex-col leading-none">
          {/* <span className="font-display font-900 text-[1.6rem] tracking-tight text-[#F5F3EF] uppercase leading-none">
            Advantage
          </span>
          <span className="font-display font-300 text-[0.85rem] tracking-[0.35em] text-[#D9AD27] uppercase">
            Air Travel
          </span> */}
          <img
            src="/images/logo.png"
            alt="Advantage Air Travel Logo"
            className="block w-22 md:w-30 h-auto object-contain"
          />
        </a>
        <a href="#contact" className="md:hidden btn-primary text-sm">
          Book Charter
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="nav-link text-[0.8rem] font-600 uppercase tracking-widest text-[#a8a8a8]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="hidden md:block btn-primary text-sm">
          Book Charter
        </a>
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block w-6 h-0.5 bg-[#F5F3EF] transition-transform ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#F5F3EF] transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#F5F3EF] transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-[#231F20] border-t border-[rgba(217,173,39,0.15)] px-6 py-6 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-display font-600 text-lg uppercase tracking-widest text-[#a8a8a8] hover:text-[#D9AD27] transition-colors"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-sm mt-2 text-center">
            Book Charter
          </a>
        </div>
      )}
    </header>
  );
}
