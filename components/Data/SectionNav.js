import { useState, useEffect } from "react";
import * as style from "./styles.js";

const NAV_ITEMS = [
  { label: "Prices", id: "prices" },
  { label: "Fuel Cycle", id: "fuel-cycle" },
  { label: "Kazakhstan", id: "kazakhstan" },
  { label: "Supply", id: "supply" },
  { label: "Pipeline", id: "pipeline" },
  { label: "Utilities", id: "utilities" },
  { label: "Reactor Demand", id: "reactors" },
  { label: "Secondary Supply", id: "secondary" },
  { label: "Balance", id: "balance" },
  { label: "Producers", id: "producers" },
  { label: "Price History", id: "history" },
  { label: "Geopolitics", id: "geopolitics" },
  { label: "Drivers", id: "drivers" },
  { label: "ETFs & Trusts", id: "instruments" },
  { label: "Calculator", id: "calc" },
];

export default function SectionNav() {
  const [activeId, setActiveId] = useState("prices");

  useEffect(() => {
    const observers = [];

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const goTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    setActiveId(id);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={style.snav} role="navigation" aria-label="Page sections">
      <div style={style.snavInner}>
        {NAV_ITEMS.map(({ label, id }) => (
          <button
            key={id}
            style={activeId === id ? style.snavBtnActive : style.snavBtn}
            onClick={() => goTo(id)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
