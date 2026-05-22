import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import heroPhone from "@/assets/hero-phone.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative overflow-hidden bg-mint pt-32 pb-24 md:pt-40 md:pb-32"
    >
      {/* soft background orb */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-sage/40 blur-3xl" />

      <motion.div
        style={{ y }}
        className="relative mx-auto max-w-[1240px] px-6 md:px-10"
      >
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.05 }}
            className="eyebrow text-forest/70"
          >
            Earned Wage Access
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.15 }}
            className="mt-5 font-serif text-[clamp(2.6rem,6vw,5.25rem)] leading-[1.02] tracking-tight text-ink"
          >
            Access your pay
            <br />
            when you need it most.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.3 }}
            className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-foreground/75 md:text-lg"
          >
            ImmediatePay gives you access to the pay you've already earned —
            without having to wait for payday. Calm, instant, on your terms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.45 }}
            className="mt-9 flex items-center justify-center gap-4"
          >
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-sm font-medium text-forest-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Get started
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#how"
              className="text-sm font-medium text-ink underline-offset-4 hover:underline"
            >
              How it works
            </a>
          </motion.div>
        </div>

        {/* Phone visual */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease, delay: 0.55 }}
          className="relative mx-auto mt-16 max-w-2xl md:mt-24"
        >
          <motion.div
            style={{ scale: imgScale }}
            className="relative overflow-hidden rounded-[2rem] shadow-[var(--shadow-float)] ring-1 ring-border/40"
          >
            <img
              src={heroPhone}
              alt="ImmediatePay app shown on a modern phone"
              className="block h-auto w-full object-cover"
              width={1280}
              height={1280}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
