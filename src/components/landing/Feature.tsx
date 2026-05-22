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
    <section id="feature" className="bg-background py-28 md:py-40">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-14 px-6 md:grid-cols-12 md:gap-20 md:px-10">
        <div className="md:col-span-5">
          <Reveal>
            <p className="eyebrow text-forest/70">Flexible transfers</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-serif text-[clamp(2rem,4.2vw,3.75rem)] leading-[1.05] tracking-tight text-ink">
              Access the pay without having to wait for payday.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/75 md:text-lg">
              Life doesn't wait two weeks. With ImmediatePay, the money you've
              already earned is yours the moment you clock out — no fees that
              sting, no paperwork, no stress.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-border bg-cream px-4 py-1.5 text-xs text-ink/80">
                No credit check
              </span>
              <span className="rounded-full border border-border bg-cream px-4 py-1.5 text-xs text-ink/80">
                Bank-grade security
              </span>
              <span className="rounded-full border border-border bg-cream px-4 py-1.5 text-xs text-ink/80">
                Stress less
              </span>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-7" ref={ref}>
          <motion.div
            style={{ scale }}
            className="relative overflow-hidden rounded-[2rem] shadow-[var(--shadow-card)]"
          >
            <img
              src={featurePeople}
              alt="A person at home checking the ImmediatePay app over morning coffee"
              loading="lazy"
              width={1280}
              height={1440}
              className="block aspect-[5/6] h-auto w-full object-cover md:aspect-[6/5]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
