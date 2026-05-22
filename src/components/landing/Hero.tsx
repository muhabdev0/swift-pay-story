import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import heroPeople from "@/assets/hero-people.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative overflow-hidden bg-mint pt-32 pb-16 md:pt-36 md:pb-24"
    >
      <div className="relative mx-auto max-w-[1280px] px-6 md:px-10">
        {/* Eyebrow pill */}
        <div className="flex justify-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.05 }}
            className="inline-flex items-center gap-1.5 rounded-full bg-lime/70 px-3.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-forest"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-forest" />
            For Employees
          </motion.span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease, delay: 0.15 }}
          className="mx-auto mt-6 max-w-4xl text-center font-serif text-[clamp(2.6rem,6.4vw,5.5rem)] leading-[1.02] tracking-[-0.015em] text-ink"
        >
          Access your pay when
          <br className="hidden md:block" /> you need it most
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.3 }}
          className="mx-auto mt-6 max-w-xl text-center text-[15.5px] leading-relaxed text-ink/70 md:text-base"
        >
          ImmediatePay is the simple and easy-to-use employee benefit that
          unlocks access to your earned pay in between paydays.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.45 }}
          className="mt-8 flex justify-center"
        >
          <a
            href="#cta"
            className="inline-flex items-center rounded-full bg-forest px-6 py-3 text-[13px] font-medium text-forest-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            Schedule demo
          </a>
        </motion.div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, ease, delay: 0.55 }}
          className="relative mx-auto mt-14 overflow-hidden rounded-[1.75rem] md:mt-20"
        >
          <motion.div style={{ y: imgY, scale: imgScale }}>
            <img
              src={heroPeople}
              alt="Three coworkers in aprons smiling in a sunlit cafe"
              width={1600}
              height={896}
              className="block aspect-[16/9] h-auto w-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
