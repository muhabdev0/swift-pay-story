import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Reveal } from "./Reveal";

function AppStoreBadges({ light = false }: { light?: boolean }) {
  const cls = light
    ? "bg-forest text-forest-foreground"
    : "bg-ink text-forest-foreground";
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <a
        href="#"
        className={`inline-flex items-center gap-2.5 rounded-xl px-4 py-2.5 transition-transform hover:-translate-y-0.5 ${cls}`}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
          <path d="M16.365 12.86c-.022-2.43 1.985-3.595 2.076-3.652-1.13-1.65-2.892-1.877-3.515-1.903-1.494-.151-2.92.881-3.68.881-.76 0-1.93-.86-3.176-.836-1.633.024-3.139.95-3.978 2.41-1.698 2.94-.434 7.29 1.222 9.677.81 1.17 1.776 2.485 3.044 2.438 1.222-.049 1.683-.79 3.16-.79 1.475 0 1.892.79 3.184.764 1.315-.022 2.149-1.193 2.952-2.368.93-1.359 1.314-2.677 1.338-2.745-.03-.013-2.564-.987-2.587-3.876zM13.93 5.3c.673-.815 1.127-1.946.999-3.07-.967.04-2.139.643-2.834 1.456-.623.72-1.169 1.874-1.022 2.978 1.079.083 2.183-.547 2.857-1.364z" />
        </svg>
        <span className="text-left leading-tight">
          <span className="block text-[9px] uppercase tracking-wider opacity-70">
            Download on the
          </span>
          <span className="block text-[13px] font-medium">App Store</span>
        </span>
      </a>
      <a
        href="#"
        className={`inline-flex items-center gap-2.5 rounded-xl px-4 py-2.5 transition-transform hover:-translate-y-0.5 ${cls}`}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
          <path d="M3.6 1.7a2 2 0 00-.6 1.4v17.8c0 .55.22 1.05.58 1.41L13.2 12 3.6 1.7zm10.7 11.2l2.5 2.5-11.3 6.5c-.07.04-.15.07-.23.08l9.03-9.08zm5.1-3.04l-3.04 1.75-2.7 2.7 2.7 2.7 3.05 1.75c1.32-.76 1.32-2.65 0-3.4l.01-5.5z" />
        </svg>
        <span className="text-left leading-tight">
          <span className="block text-[9px] uppercase tracking-wider opacity-70">
            Get it on
          </span>
          <span className="block text-[13px] font-medium">Google Play</span>
        </span>
      </a>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] md:w-[320px]">
      {/* Phone frame */}
      <div className="relative rounded-[2.5rem] bg-ink p-2 shadow-[var(--shadow-float)] ring-1 ring-ink/20">
        <div className="relative overflow-hidden rounded-[2rem] bg-background">
          {/* Notch */}
          <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-ink" />
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pt-3 pb-1 text-[10px] font-medium text-ink/80">
            <span>9:41</span>
            <span className="opacity-0">●</span>
            <span className="flex gap-1">▮▮▮ 􀙇</span>
          </div>
          {/* App header */}
          <div className="flex items-center justify-between px-5 pt-3">
            <div className="flex items-center gap-1.5">
              <span className="h-4 w-4 rounded-full bg-forest" />
              <span className="font-serif text-[15px] text-ink">Immediate</span>
            </div>
            <span className="h-6 w-6 rounded-full border border-ink/15" />
          </div>
          {/* Balance */}
          <div className="px-5 pt-7 text-center">
            <p className="font-serif text-[34px] leading-none tracking-tight text-ink">
              $250 <span className="text-ink/40">/ </span>
              <span className="text-ink/40">$500</span>
            </p>
            <p className="mt-1.5 text-[10.5px] text-ink/55">Available now balance</p>
          </div>
          {/* Quick stats */}
          <div className="mx-5 mt-5 grid grid-cols-3 gap-2">
            {[
              { v: "8", l: "Days" },
              { v: "5/5", l: "Shifts" },
              { v: "$0", l: "Fees" },
            ].map((s) => (
              <div key={s.l} className="rounded-lg border border-ink/8 bg-cream py-2 text-center">
                <p className="text-[13px] font-medium text-ink">{s.v}</p>
                <p className="text-[9px] text-ink/55">{s.l}</p>
              </div>
            ))}
          </div>
          {/* CTA */}
          <div className="mx-5 mt-4">
            <div className="rounded-xl bg-[#3a5bd9] py-2.5 text-center text-[12.5px] font-medium text-white">
              Pay me now
            </div>
          </div>
          {/* Transaction history */}
          <div className="mx-5 mt-5 mb-6 border-t border-ink/8 pt-3">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-[10.5px] font-medium text-ink">Transaction history</p>
              <p className="text-[9px] text-ink/45">See all</p>
            </div>
            {[
              { t: "Last transfer", d: "Mar 14", v: "$64.50" },
              { t: "Last transfer", d: "Mar 02", v: "$120.00" },
            ].map((tx, i) => (
              <div
                key={i}
                className="flex items-center justify-between border-b border-ink/5 py-1.5 last:border-0"
              >
                <div className="flex items-center gap-2">
                  <span className="h-5 w-5 rounded-full bg-mint" />
                  <div>
                    <p className="text-[10.5px] text-ink">{tx.t}</p>
                    <p className="text-[9px] text-ink/45">{tx.d}</p>
                  </div>
                </div>
                <p className="text-[10.5px] font-medium text-ink">{tx.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const phoneY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="cta" ref={ref} className="relative bg-background pt-24 md:pt-32">
      <div className="mx-auto max-w-[1280px] px-6 text-center md:px-10">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-serif text-[clamp(2.4rem,5.4vw,5rem)] leading-[1.02] tracking-[-0.015em] text-ink">
            Unlock access to
            <br /> your earned pay
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-9">
            <AppStoreBadges />
          </div>
        </Reveal>
      </div>

      {/* Lime band with phone */}
      <div className="relative mt-12 md:mt-16">
        <div className="absolute inset-x-0 bottom-0 top-24 bg-gradient-to-b from-lime/80 via-lime to-lime/60" />
        <div className="relative mx-auto max-w-[1280px] px-6 pb-16 md:px-10 md:pb-24">
          <motion.div style={{ y: phoneY }}>
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
