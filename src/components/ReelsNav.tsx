import { useEffect, useState } from "react";

export function ReelsNav({ ids }: { ids: string[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.55) {
            const idx = sections.indexOf(entry.target as HTMLElement);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { threshold: [0.55] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [ids]);

  return (
    <nav
      aria-label="Reel navigation"
      className="fixed right-5 top-1/2 z-30 hidden -translate-y-1/2 md:flex flex-col items-center gap-3"
    >
      {ids.map((id, i) => (
        <a
          key={id}
          href={`#${id}`}
          aria-label={`Go to reel ${i + 1}`}
          className="group relative flex h-8 w-8 items-center justify-center"
        >
          <span
            className={`h-px transition-all duration-500 ${
              active === i ? "w-7 bg-gold" : "w-4 bg-cream/40 group-hover:bg-cream/80"
            }`}
          />
          <span
            className={`absolute right-10 whitespace-nowrap font-display italic text-xs tracking-wider transition-opacity duration-300 ${
              active === i ? "opacity-100 text-gold" : "opacity-0"
            }`}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
        </a>
      ))}
    </nav>
  );
}