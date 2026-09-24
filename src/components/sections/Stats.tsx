import { useEffect, useRef, useState } from "react";

import { STATS } from "../../data/siteData";
import { useCountUp } from "../../hooks/useCountUp";

function StatCard({
  value,
  label,
  suffix,
  active,
}: {
  value: string;
  label: string;
  suffix: string;
  active: boolean;
}) {
  const count = useCountUp(value, active);

  return (
    <div className="flex flex-col gap-2 p-8 border-t border-[rgba(217,173,39,0.2)]">
      <div className="stat-value">
        {active ? count : "0"}
        {suffix}
      </div>
      <div className="font-mono-data text-[0.65rem] tracking-[0.2em] uppercase text-[#7C7C7C]">
        {label}
      </div>
    </div>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setActive(true);
      },
      { threshold: 0.3 },
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-[#1a1718] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {STATS.map((s) => (
            <StatCard key={s.label} {...s} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
