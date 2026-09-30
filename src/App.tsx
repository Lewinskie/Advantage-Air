import { useEffect, useState } from "react";

import { Footer } from "./components/layout/Footer";
import { Nav } from "./components/layout/Nav";
import { About } from "./components/sections/About";
import { Careers } from "./components/sections/Careers";
import { CTA } from "./components/sections/CTA";
import { CeoMessage } from "./components/sections/CeoMessage";
import { Contact } from "./components/sections/Contact";
import { Destinations } from "./components/sections/Destinations";
import { Fleet } from "./components/sections/Fleet";
import { Gallery } from "./components/sections/Gallery";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { Stats } from "./components/sections/Stats";
import { VisionMission } from "./components/sections/VisionMission";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Nav scrolled={scrolled} />
      <Hero />
      <CeoMessage />
      <About />
      <VisionMission />
      {/* <Stats /> */}
      <Fleet />
      <Services />
      <Gallery />
      {/* <Destinations /> */}
      <CTA />
      <Careers />
      <Contact />
      <Footer />
      {showScrollTop && (
        <button
          type="button"
          aria-label="Scroll to top"
          title="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center border border-[#D9AD27] bg-[#231F20] text-2xl leading-none text-[#D9AD27] shadow-lg transition-colors hover:bg-[#D9AD27] hover:text-[#231F20] focus:outline-none focus:ring-2 focus:ring-[#D9AD27] focus:ring-offset-2 focus:ring-offset-[#231F20]"
        >
          ↑
        </button>
      )}
    </div>
  );
}
