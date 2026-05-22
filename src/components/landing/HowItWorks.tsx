import { motion } from "motion/react";
import { Reveal, RevealStagger, staggerItem } from "./Reveal";
import howBg from "@/assets/how-it-works-bg.jpg";

const steps = [
  {
    n: "01",
    title: "Clock Out",
    body: "Finish your shift and your earned wages instantly appear in your ImmediatePay wallet.",
  },
  {
    n: "02",
    title: "Set Up Wallet",
    body: "Link your bank or debit card once. We handle the rest — securely and quietly in the background.",
  },
  {
    n: "03",
    title: "Transfer",
    body: "Move any amount to your account in seconds. No waiting, no surprise fees, no friction.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative bg-sage/40 pt-28 pb-40 md:pt-40 md:pb-56">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow text-forest/70">How it works</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-serif text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.04] tracking-tight text-ink">
              How ImmediatePay works.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-5 max-w-xl text-base text-foreground/75 md:text-lg">
              Three calm steps between you and the money you've already earned.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="relative mt-16 overflow-hidden rounded-[2.25rem] shadow-[var(--shadow-card)]">
            <img
              src={howBg}
              alt="Someone finishing their shift and clocking out"
              loading="lazy"
              width={1920}
              height={1088}
              className="block aspect-[16/9] h-auto w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent" />
          </div>
        </Reveal>

        <RevealStagger
          stagger={0.14}
          className="relative z-10 mx-auto -mt-24 grid max-w-[1100px] grid-cols-1 gap-5 px-2 md:-mt-32 md:grid-cols-3 md:gap-6"
        >
          {steps.map((s) => (
            <motion.div
              key={s.n}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-2xl bg-card p-7 shadow-[var(--shadow-float)] ring-1 ring-border/60 transition-all hover:-translate-y-1 hover:shadow-[0_30px_80px_-30px_rgba(20,40,30,0.25)]"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-serif text-3xl text-forest">{s.n}</span>
                <span className="h-2.5 w-2.5 rounded-full bg-lime" />
              </div>
              <h3 className="mt-6 font-serif text-2xl text-ink">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                {s.body}
              </p>
            </motion.div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
