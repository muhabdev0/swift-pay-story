import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import heroHandPhone from "@/assets/hero-hand-phone.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 0.9]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative overflow-hidden bg-mint pt-32 pb-20 md:pt-36 md:pb-28"
    >
      <div className="relative mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-12 md:gap-10 md:px-10">
        <div className="md:col-span-7">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.05 }}
            className="inline-flex items-center gap-1.5 rounded-full bg-lime/70 px-3.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-forest"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-forest" />
            For Employees
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease, delay: 0.15 }}
            className="mt-6 font-serif text-[clamp(2.6rem,6.2vw,5.25rem)] leading-[1.02] tracking-[-0.015em] text-ink"
          >
            Access your pay
            <br /> when you need
            <br /> it most
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.3 }}
            className="mt-6 max-w-md text-[15.5px] leading-relaxed text-ink/70"
          >
            ImmediatePay is the simple and easy-to-use employee benefit that
            unlocks access to your earned pay in between paydays.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#cta"
              className="inline-flex items-center rounded-full bg-forest px-6 py-3 text-[13px] font-medium text-forest-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              Schedule demo
            </a>
            <a
              href="#how"
              className="inline-flex items-center rounded-full border border-ink/15 px-5 py-3 text-[13px] font-medium text-ink transition-colors hover:bg-ink/5"
            >
              How it works
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease, delay: 0.4 }}
          className="md:col-span-5"
        >
          <motion.img
            src={heroHandPhone}
            alt="A hand holding a phone showing the ImmediatePay app"
            width={1024}
            height={1536}
            style={{ y: imgY, scale: imgScale }}
            className="mx-auto block h-auto w-full max-w-[440px] select-none drop-shadow-[0_30px_60px_rgba(20,40,30,0.18)] md:max-w-none"
          />
        </motion.div>
      </div>
    </section>
  );
}
