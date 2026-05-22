import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Reveal, RevealStagger, staggerItem } from "./Reveal";
import howPhone from "@/assets/how-phone.jpg";

const steps = [
  {
    n: "01",
    title: "Clock Out",
    body: "Clock out at the end of the workday and see how much money you've earned in the ImmediatePay app.",
  },
  {
    n: "02",
    title: "Set Up Wallet",
    body: "Set up your wallet *more information about setting up wallet process*",
  },
  {
    n: "03",
    title: "Transfer",
    body: "Select the amount you'd like to transfer, where to send funds and confirm.",
  },
];

export function HowItWorks() {
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 0.92]);

  return (
    <section id="how" className="bg-lime/85 py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="text-center">
          <Reveal>
            <h2 className="mx-auto max-w-3xl font-serif text-[clamp(2.2rem,5vw,4.25rem)] leading-[1.04] tracking-[-0.015em] text-ink">
              How ImmediatePay works
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div ref={imgRef} className="relative mt-10 overflow-hidden rounded-[1.75rem]">
            <motion.img
              src={howPhone}
              alt="A hand holding a phone showing the ImmediatePay app inside a warm cafe"
              loading="lazy"
              width={1600}
              height={900}
              style={{ scale: imgScale }}
              className="block aspect-[16/8] h-auto w-full object-cover will-change-transform"
            />
          </div>
        </Reveal>

        <RevealStagger
          stagger={0.14}
          className="mt-6 grid grid-cols-1 gap-4 md:mt-8 md:grid-cols-3 md:gap-5"
        >
          {steps.map((s) => (
            <motion.div
              key={s.n}
              variants={staggerItem}
              className="group rounded-[1.25rem] bg-card p-6 shadow-[var(--shadow-card)] ring-1 ring-ink/[0.04] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-float)] md:p-7"
            >
              <p className="text-center font-serif text-2xl text-ink/85">{s.n}</p>
              <h3 className="mt-1 text-center font-serif text-2xl text-ink">
                {s.title}
              </h3>
              <p className="mt-3 text-center text-[13px] leading-relaxed text-ink/65">
                {s.body}
              </p>
            </motion.div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
