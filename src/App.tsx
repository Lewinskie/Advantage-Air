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

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [adminMode, setAdminMode] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Nav scrolled={scrolled} />
      <Hero />
      <CeoMessage />
      <About />
      <Stats />
      <Fleet />
      <Services />
      <Gallery adminMode={adminMode} />
      <Destinations />
      <CTA />
      <Careers adminMode={adminMode} />
      <Contact />
      <Footer
        adminMode={adminMode}
        onAdminToggle={() => setAdminMode((v) => !v)}
      />
    </div>
  );
}
