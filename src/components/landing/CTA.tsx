import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Reveal } from "./Reveal";
import ctaPhone from "@/assets/cta-phone.jpg";

function AppStoreBadges() {
  return (
    <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
      <a
        href="#"
        className="inline-flex items-center gap-3 rounded-xl bg-ink px-5 py-3 text-forest-foreground transition-transform hover:-translate-y-0.5"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden>
          <path d="M16.365 12.86c-.022-2.43 1.985-3.595 2.076-3.652-1.13-1.65-2.892-1.877-3.515-1.903-1.494-.151-2.92.881-3.68.881-.76 0-1.93-.86-3.176-.836-1.633.024-3.139.95-3.978 2.41-1.698 2.94-.434 7.29 1.222 9.677.81 1.17 1.776 2.485 3.044 2.438 1.222-.049 1.683-.79 3.16-.79 1.475 0 1.892.79 3.184.764 1.315-.022 2.149-1.193 2.952-2.368.93-1.359 1.314-2.677 1.338-2.745-.03-.013-2.564-.987-2.587-3.876zM13.93 5.3c.673-.815 1.127-1.946.999-3.07-.967.04-2.139.643-2.834 1.456-.623.72-1.169 1.874-1.022 2.978 1.079.083 2.183-.547 2.857-1.364z" />
        </svg>
        <span className="text-left leading-tight">
          <span className="block text-[10px] uppercase tracking-wider opacity-70">
            Download on the
          </span>
          <span className="block font-serif text-base">App Store</span>
        </span>
      </a>
      <a
        href="#"
        className="inline-flex items-center gap-3 rounded-xl bg-ink px-5 py-3 text-forest-foreground transition-transform hover:-translate-y-0.5"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden>
          <path d="M3.6 1.7a2 2 0 00-.6 1.4v17.8c0 .55.22 1.05.58 1.41L13.2 12 3.6 1.7zm10.7 11.2l2.5 2.5-11.3 6.5c-.07.04-.15.07-.23.08l9.03-9.08zm5.1-3.04l-3.04 1.75-2.7 2.7 2.7 2.7 3.05 1.75c1.32-.76 1.32-2.65 0-3.4l.01-5.5z" />
        </svg>
        <span className="text-left leading-tight">
          <span className="block text-[10px] uppercase tracking-wider opacity-70">
            Get it on
          </span>
          <span className="block font-serif text-base">Google Play</span>
        </span>
      </a>
    </div>
  );
}

export function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const phoneY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="cta" ref={ref} className="relative bg-background pt-28 md:pt-36">
      <div className="mx-auto max-w-[1240px] px-6 text-center md:px-10">
        <Reveal>
          <p className="eyebrow text-forest/70">Get started</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mx-auto mt-5 max-w-3xl font-serif text-[clamp(2.4rem,5.4vw,5rem)] leading-[1.02] tracking-tight text-ink">
            Unlock access to your earned pay.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-6 max-w-xl text-base text-foreground/75 md:text-lg">
            Join thousands who've left payday anxiety behind. Download
            ImmediatePay and meet payroll on your own schedule.
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <AppStoreBadges />
        </Reveal>
      </div>

      {/* Lime gradient field with phone */}
      <div className="relative mt-20">
        <div className="absolute inset-x-0 bottom-0 top-32 bg-gradient-to-b from-lime/80 via-lime to-lime/90" />
        <div className="relative mx-auto max-w-[1240px] px-6 md:px-10">
          <motion.div
            style={{ y: phoneY }}
            className="mx-auto max-w-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-[2rem] shadow-[var(--shadow-float)] ring-1 ring-ink/10"
            >
              <img
                src={ctaPhone}
                alt="Successful transfer confirmation on the ImmediatePay app"
                loading="lazy"
                width={1024}
                height={1408}
                className="block h-auto w-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
