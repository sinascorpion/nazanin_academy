import { createFileRoute } from "@tanstack/react-router";
import { Reel, type ReelData } from "@/components/Reel";
import { ReelsNav } from "@/components/ReelsNav";
import { useEffect, useState } from "react";

import harp from "@/assets/reel-harp.jpg";
import painting from "@/assets/reel-painting.jpg";
import calligraphy from "@/assets/reel-calligraphy.jpg";
import pottery from "@/assets/reel-pottery.jpg";
import daf from "@/assets/reel-daf.jpg";
import resin from "@/assets/reel-resin.jpg";
import dance from "@/assets/reel-dance.jpg";
import piano from "@/assets/reel-piano.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const reels: ReelData[] = [
  {
    id: "harp",
    kicker: "Reel I — Music",
    title: "Strings\nat sunset.",
    body: "It begins by the water. A harp, a horizon, the slow pull of a string that makes the wind hold its breath. This is where Nazanin Academy starts — at the moment music becomes weather.",
    cta: "Explore Music",
    href: "https://nazaninacademy.ca/home/classes-programs/music/",
    image: harp,
    accent: "magenta",
  },
  {
    id: "painting",
    kicker: "Reel II — Painting",
    title: "Oil, gold,\nand patience.",
    body: "A canvas under tungsten light. A brush loaded with crimson. Hours that disappear into a single, perfect stroke. Painting here is a slow film with no script.",
    cta: "Painting Classes",
    href: "https://nazaninacademy.ca/home/classes-programs/creative-arts/",
    image: painting,
  },
  {
    id: "calligraphy",
    kicker: "Reel III — Calligraphy",
    title: "The pen\nremembers.",
    body: "Persian calligraphy, by candlelight. A meditation in ink — every flourish a heartbeat, every page a quiet ceremony.",
    cta: "Calligraphy Workshop",
    href: "https://nazaninacademy.ca/home/events-activities/workshops/calligraphy/",
    image: calligraphy,
    accent: "magenta",
  },
  {
    id: "pottery",
    kicker: "Reel IV — Pottery",
    title: "Earth,\nspinning.",
    body: "Wet clay rises between your hands. The wheel hums. The world narrows to a single, turning thing. Tuesdays, 6–8 PM.",
    cta: "Join Pottery",
    href: "https://nazaninacademy.ca/home/events-activities/workshops/",
    image: pottery,
  },
  {
    id: "daf",
    kicker: "Reel V — Percussion",
    title: "The Daf\nis a heartbeat.",
    body: "A frame drum, an open stage, one warm spotlight. The Daf doesn't accompany the music — it is the music. Come learn its pulse.",
    cta: "Daf Lessons",
    href: "https://nazaninacademy.ca/home/classes-programs/music/",
    image: daf,
    accent: "magenta",
  },
  {
    id: "resin",
    kicker: "Reel VI — Fluid Art",
    title: "Color,\nbreathing.",
    body: "Alcohol ink and resin — magenta blooms into emerald, gold suspends itself in glass. Pure pigment, pure delight, in a single afternoon.",
    cta: "Resin & Ink Workshops",
    href: "https://nazaninacademy.ca/home/events-activities/workshops/resin/",
    image: resin,
  },
  {
    id: "dance",
    kicker: "Reel VII — Dance",
    title: "One spin,\nfor everything.",
    body: "Latin rhythm under a single light. The skirt blurs, the floor answers, the night opens. Spaces are limited — call ahead.",
    cta: "Dance Nights",
    href: "https://nazaninacademy.ca/home/events-activities/events/",
    image: dance,
    accent: "magenta",
  },
  {
    id: "piano",
    kicker: "Reel VIII — Piano",
    title: "Hands\nthat listen.",
    body: "Between teacher and student, a shared breath above the keys. This is where confidence begins, one chord at a time.",
    cta: "Piano Lessons",
    href: "https://nazaninacademy.ca/home/classes-programs/music/",
    image: piano,
  },
];

function TopBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-6 md:px-10 py-5 flex items-center justify-between">
      <a href="#hero" className="font-display italic text-xl md:text-2xl text-cream tracking-wide">
        Nazanin <span className="text-gold">Academy</span>
      </a>
      <nav className="hidden md:flex items-center gap-8 text-[0.7rem] uppercase tracking-[0.3em] text-cream/70">
        <a className="hover:text-gold transition-colors" href="https://nazaninacademy.ca/home/about-us/">About</a>
        <a className="hover:text-gold transition-colors" href="https://nazaninacademy.ca/home/classes-programs/">Classes</a>
        <a className="hover:text-gold transition-colors" href="https://nazaninacademy.ca/home/events-activities/">Events</a>
        <a className="hover:text-gold transition-colors" href="https://nazaninacademy.ca/home/contact-us/">Contact</a>
      </nav>
      <a
        href="https://nazaninacademy.ca/home/classes-programs/"
        className="hidden md:inline-block text-[0.7rem] uppercase tracking-[0.3em] text-ink bg-gold px-5 py-2.5 hover:bg-cream transition-colors"
      >
        Enroll
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden snap-start flex items-center justify-center"
    >
      <img
        src={harp}
        alt="A harpist by the sea at sunset"
        className="absolute inset-0 h-full w-full object-cover animate-kenburns"
      />
      <div className="absolute inset-0 vignette" />
      <div className="absolute inset-0 grain" />
      <div className="absolute inset-0 bg-ink/30" />

      {/* Top filmstrip marker */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.5em] text-cream/70 animate-rise">
        <span className="h-px w-12 bg-gold" />
        A Cinematic Reel
        <span className="h-px w-12 bg-gold" />
      </div>

      <div className="relative z-10 px-6 text-center max-w-5xl">
        <h1 className="animate-rise delay-150 font-display font-light leading-[0.9] text-[3.5rem] md:text-[8rem] lg:text-[10rem] tracking-tight">
          <span className="block text-cream italic">Where dreams</span>
          <span className="block text-shimmer">turn into art.</span>
        </h1>
        <p className="animate-rise delay-500 mt-8 text-base md:text-lg text-cream/80 max-w-xl mx-auto leading-relaxed">
          Eight reels. One academy. A cinematic walk through painting, music,
          calligraphy, pottery and dance — at Nazanin Academy, West Vancouver.
        </p>
        <div className="animate-rise delay-700 mt-12 flex items-center justify-center gap-6 text-xs uppercase tracking-[0.35em] text-cream/60">
          <span className="font-display italic text-gold text-base normal-case tracking-normal">scroll</span>
          <span className="h-px w-16 bg-gold/60 animate-pulse" />
        </div>
      </div>
    </section>
  );
}

function Outro() {
  return (
    <section
      id="contact"
      className="relative min-h-screen w-full snap-start flex items-center justify-center px-6 py-24 bg-ink overflow-hidden"
    >
      <div className="absolute inset-0 grain opacity-50" />
      <div className="relative z-10 max-w-4xl text-center">
        <p className="text-[0.7rem] uppercase tracking-[0.45em] text-gold mb-8">End Credits</p>
        <h2 className="font-display italic font-light text-5xl md:text-8xl leading-none text-cream">
          Your story
          <br />
          <span className="text-shimmer not-italic">begins here.</span>
        </h2>
        <div className="hairline mx-auto mt-12 w-48" />
        <p className="mt-10 text-cream/70 max-w-xl mx-auto leading-relaxed">
          Painting, singing, acting, calligraphy and more — expert guidance in a
          studio that treats every student like the lead.
        </p>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://nazaninacademy.ca/home/classes-programs/"
            className="group relative inline-block px-10 py-4 text-xs tracking-[0.35em] uppercase text-ink"
          >
            <span className="absolute inset-0 bg-gold transition-colors duration-500 group-hover:bg-cream" />
            <span className="relative">Explore Classes</span>
          </a>
          <a
            href="https://nazaninacademy.ca/home/contact-us/"
            className="group relative inline-block px-10 py-4 text-xs tracking-[0.35em] uppercase text-cream"
          >
            <span className="absolute inset-0 border border-cream/40 transition-colors duration-500 group-hover:border-gold" />
            <span className="relative group-hover:text-gold transition-colors">Contact Us</span>
          </a>
        </div>

        <div className="mt-20 flex items-center justify-center gap-8 text-[0.65rem] uppercase tracking-[0.4em] text-cream/50">
          <a className="hover:text-gold transition-colors" href="https://www.instagram.com/nazaninacademy/">Instagram</a>
          <span className="h-px w-6 bg-cream/30" />
          <a className="hover:text-gold transition-colors" href="https://www.facebook.com/nazaninacademy">Facebook</a>
          <span className="h-px w-6 bg-cream/30" />
          <a className="hover:text-gold transition-colors" href="https://www.youtube.com/@nazaninacademy">YouTube</a>
        </div>

        <p className="mt-16 font-display italic text-cream/40 text-sm">
          Nazanin Academy · West Vancouver, BC
        </p>
      </div>
    </section>
  );
}

function Index() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const ids = ["hero", ...reels.map((r) => r.id), "contact"];

  return (
    <div className="relative bg-ink text-cream">
      <TopBar />
      {mounted && <ReelsNav ids={ids} />}
      <main className="reel-snap h-screen overflow-y-scroll overflow-x-hidden">
        <Hero />
        {reels.map((reel, i) => (
          <Reel
            key={reel.id}
            reel={reel}
            index={i}
            total={reels.length}
          />
        ))}
        <Outro />
      </main>
    </div>
  );
}
