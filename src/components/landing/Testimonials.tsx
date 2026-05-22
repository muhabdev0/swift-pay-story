import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import t1 from "@/assets/testimonial-1.jpg";
import t2 from "@/assets/testimonial-2.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

const reviews = [
  {
    quote:
      "I have ImmediatePay and it's the best security blanket that I have. It's fast and it's very quick. I hit two buttons and I'm done. My money's in the bank. I don't have to constantly worry. I can pay my bill and I can move on to the next thing!",
    name: "Jeannie S.",
    role: "ImmediatePay user",
  },
  {
    quote:
      "Sign up was a piece of cake. It only took a moment and I had access to my earned pay. Immediate is fast, simple, and easy.",
    name: "Forrest S.",
    role: "ImmediatePay user",
  },
];

function QuoteCard({ quote, name, role, delay }: { quote: string; name: string; role: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.85, ease, delay }}
      className="flex h-full flex-col justify-between rounded-[1.25rem] bg-card p-6 shadow-[var(--shadow-card)] ring-1 ring-ink/[0.04] md:p-7"
    >
      <p className="text-[14.5px] leading-relaxed text-ink/85">{quote}</p>
      <div className="mt-6 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-ink">{name}</p>
          <p className="text-xs text-ink/55">{role}</p>
        </div>
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-mint text-forest" aria-hidden>
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
            <path d="M7.17 6A5.17 5.17 0 002 11.17V18h6.83v-6.83H5a3.17 3.17 0 013.17-3.17V6h-1zm10 0A5.17 5.17 0 0012 11.17V18h6.83v-6.83H15a3.17 3.17 0 013.17-3.17V6h-1z" />
          </svg>
        </span>
      </div>
    </motion.div>
  );
}

function ImageCard({ src, alt, delay, rotate }: { src: string; alt: string; delay: number; rotate: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.85, ease, delay }}
      className="overflow-hidden rounded-[1.25rem] shadow-[var(--shadow-card)]"
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        width={960}
        height={1216}
        className="block aspect-[4/5] h-auto w-full object-cover"
      />
    </motion.div>
  );
}

export function Testimonials() {
  return (
    <section id="reviews" className="bg-lime/85 pb-28 md:pb-36">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(2.2rem,5vw,4.25rem)] leading-[1.04] tracking-[-0.015em] text-ink">
              Happy customers, great reviews
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-[13px] text-ink/65">
              See what ImmediatePay users say about us
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 items-stretch gap-5 md:grid-cols-4 md:gap-6">
          <ImageCard src={t1} alt="Jeannie, ImmediatePay user" delay={0.05} rotate={-1} />
          <QuoteCard {...reviews[0]} delay={0.15} />
          <ImageCard src={t2} alt="Forrest, ImmediatePay user" delay={0.25} rotate={1} />
          <QuoteCard {...reviews[1]} delay={0.35} />
        </div>
      </div>
    </section>
  );
}
