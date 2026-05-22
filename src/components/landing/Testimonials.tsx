import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import t1 from "@/assets/testimonial-1.jpg";
import t2 from "@/assets/testimonial-2.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

export function Testimonials() {
  return (
    <section id="reviews" className="bg-background py-28 md:py-36">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <div className="rounded-[2.5rem] bg-lime-soft px-6 py-20 md:px-16 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="eyebrow text-forest/70">Reviews</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-serif text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.04] tracking-tight text-ink">
                Happy customers, great reviews.
              </h2>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 items-center gap-6 md:grid-cols-12 md:gap-8">
            {/* Left image card */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -1.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: -1.5 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease, delay: 0.05 }}
              className="md:col-span-3"
            >
              <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
                <img
                  src={t1}
                  alt="Maya, customer"
                  loading="lazy"
                  width={960}
                  height={1216}
                  className="block aspect-[4/5] h-auto w-full object-cover"
                />
              </div>
              <p className="mt-4 px-1 text-sm">
                <span className="font-medium text-ink">Maya R.</span>{" "}
                <span className="text-foreground/60">— Brooklyn, NY</span>
              </p>
            </motion.div>

            {/* Center quote card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease, delay: 0.15 }}
              className="md:col-span-6"
            >
              <div className="rounded-2xl bg-card p-10 shadow-[var(--shadow-float)] ring-1 ring-border/50 md:p-14">
                <div className="flex items-center gap-1 text-lime">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} aria-hidden>★</span>
                  ))}
                </div>
                <blockquote className="mt-6 font-serif text-2xl leading-snug text-ink md:text-3xl">
                  “Truly a quiet relief. I clocked out, opened the app, and my
                  earnings were just… there. No drama, no waiting, no fees that
                  made me wince.”
                </blockquote>
                <div className="mt-8 flex items-center justify-between text-sm">
                  <span className="font-medium text-ink">Jordan M.</span>
                  <span className="text-foreground/60">Verified user</span>
                </div>
              </div>
            </motion.div>

            {/* Right image card */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 1.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 1.5 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease, delay: 0.25 }}
              className="md:col-span-3"
            >
              <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
                <img
                  src={t2}
                  alt="Diego, customer"
                  loading="lazy"
                  width={960}
                  height={1216}
                  className="block aspect-[4/5] h-auto w-full object-cover"
                />
              </div>
              <p className="mt-4 px-1 text-sm">
                <span className="font-medium text-ink">Diego A.</span>{" "}
                <span className="text-foreground/60">— Austin, TX</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
