import { useEffect, useState } from "react";

export function useCountUp(target: string, active: boolean) {
  const [display, setDisplay] = useState("0");
  const numeric = parseFloat(target.replace(",", ""));

  useEffect(() => {
    if (!active) return;

    const duration = 1800;
    const start = Date.now();

    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = numeric * eased;

      if (numeric > 100) {
        setDisplay(Math.round(current).toLocaleString());
      } else {
        setDisplay(current.toFixed(current < 10 ? 1 : 0));
      }

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setDisplay(
          numeric > 100 ? Math.round(numeric).toLocaleString() : target,
        );
      }
    };

    requestAnimationFrame(tick);
  }, [active, numeric, target]);

  return display;
}
