import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Reveal } from "./Reveal";
import featurePeople from "@/assets/feature-people.jpg";

export function Feature() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.98, 1.04]);

  return (
    <section id="feature" className="bg-mint py-24 md:py-36">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-12 md:gap-16 md:px-10">
        <div className="md:col-span-5">
          <Reveal>
            <h2 className="font-serif text-[clamp(2.1rem,4.4vw,3.75rem)] leading-[1.05] tracking-[-0.015em] text-ink">
              Access the pay
              <br /> without having to
              <br /> wait for payday
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink/70">
              Unexpected expenses happen, and when they do, you shouldn't have
              to wait until payday to get the money you've earned. Get the
              freedom you need when unexpected expenses arise.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <a
              href="#cta"
              className="mt-8 inline-flex items-center rounded-full bg-forest px-5 py-2.5 text-[13px] font-medium text-forest-foreground transition-all hover:-translate-y-0.5"
            >
              Check eligibility
            </a>
          </Reveal>
        </div>

        <div className="md:col-span-7" ref={ref}>
          <motion.div
            style={{ scale }}
            className="relative overflow-hidden rounded-[1.75rem] shadow-[var(--shadow-card)]"
          >
            <img
              src={featurePeople}
              alt="Three friends gathered around one phone at a cafe table"
              loading="lazy"
              width={1280}
              height={1024}
              className="block aspect-[5/4] h-auto w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
