import { useEffect, useState } from "react";
import { motion } from "motion/react";

const links = [
  { label: "Solution", href: "#feature" },
  { label: "For Employees", href: "#how" },
  { label: "Partnerships", href: "#reviews" },
  { label: "Resources", href: "#cta" },
  { label: "Contact Us", href: "#footer" },
];

function Wordmark() {
  return (
    <a href="#top" className="flex items-baseline gap-0.5 font-serif text-[1.55rem] leading-none tracking-tight text-ink">
      <span>Immediate</span>
      <span className="text-forest">.</span>
    </a>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-mint/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-6 md:px-10">
        <Wordmark />

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13.5px] text-ink/80 transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#cta"
          className="inline-flex items-center rounded-full border border-forest/80 px-5 py-2.5 text-[13px] font-medium text-forest transition-all hover:bg-forest hover:text-forest-foreground"
        >
          Schedule Demo
        </a>
      </div>
    </motion.header>
  );
}
