import { useEffect, useRef, useState } from "react";

export interface ReelData {
  id: string;
  kicker: string;
  title: string;
  body: string;
  cta: string;
  href: string;
  image: string;
  accent?: "gold" | "magenta";
}

export function Reel({
  reel,
  index,
  total,
  isHero = false,
}: {
  reel: ReelData;
  index: number;
  total: number;
  isHero?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(isHero);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setActive(entry.intersectionRatio > 0.55),
      { threshold: [0, 0.55, 1] },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const accent = reel.accent ?? "gold";

  return (
    <section
      ref={ref}
      id={reel.id}
      className="relative h-screen w-full overflow-hidden snap-start"
      aria-label={reel.title}
    >
      {/* Backdrop image with Ken Burns */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={reel.image}
          alt=""
          aria-hidden
          loading={isHero ? "eager" : "lazy"}
          className={`h-full w-full object-cover ${active ? "animate-kenburns" : ""}`}
          style={{ transformOrigin: "center" }}
        />
      </div>

      {/* Vignette + film grain */}
      <div className="absolute inset-0 vignette" />
      <div className="absolute inset-0 grain" />

      {/* Episode chrome */}
      <div className="absolute left-6 top-6 md:left-10 md:top-10 flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-cream/70">
        <span className="text-gold">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="h-px w-10 bg-cream/30" />
        <span>of {String(total).padStart(2, "0")}</span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-20 md:px-16 md:pb-28 lg:px-24">
        <div className="max-w-3xl">
          {active && (
            <>
              <p
                className={`animate-rise text-[0.7rem] md:text-xs tracking-[0.45em] uppercase mb-6 ${
                  accent === "magenta" ? "text-magenta" : "text-gold"
                }`}
              >
                {reel.kicker}
              </p>
              <h2 className="animate-rise delay-150 font-display font-light leading-[0.95] text-[3.25rem] md:text-[6rem] lg:text-[7.5rem] tracking-tight text-cream">
                {reel.title}
              </h2>
              <div className="hairline animate-rise delay-300 mt-8 w-40" />
              <p className="animate-rise delay-500 mt-6 max-w-xl text-base md:text-lg leading-relaxed text-cream/80">
                {reel.body}
              </p>
              <a
                href={reel.href}
                className="animate-rise delay-700 group mt-10 inline-flex items-center gap-4 text-cream"
              >
                <span className="relative inline-block px-7 py-3 text-xs tracking-[0.35em] uppercase">
                  <span className="absolute inset-0 border border-cream/40 transition-colors duration-500 group-hover:border-gold" />
                  <span className="absolute inset-0 -z-10 scale-x-0 origin-left bg-gold transition-transform duration-500 group-hover:scale-x-100" />
                  <span className="relative transition-colors duration-500 group-hover:text-ink">
                    {reel.cta}
                  </span>
                </span>
                <svg
                  width="44" height="10" viewBox="0 0 44 10" fill="none"
                  className="transition-transform duration-500 group-hover:translate-x-2"
                >
                  <path d="M0 5h42M38 1l4 4-4 4" stroke="currentColor" strokeWidth="1" />
                </svg>
              </a>
            </>
          )}
        </div>
      </div>
    </section>
  );
}