import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import t1 from "@/assets/testimonial-1.jpg";
import t2 from "@/assets/testimonial-2.jpg";

type Review = {
  quote: string;
  name: string;
  role: string;
  image: string;
};

const reviews: Review[] = [
  {
    quote:
      "I have ImmediatePay and it's the best security blanket that I have. It's fast and very quick — I hit two buttons and I'm done. My money's in the bank, I can pay my bill and move on.",
    name: "Jeannie S.",
    role: "ImmediatePay user",
    image: t1,
  },
  {
    quote:
      "Sign up was a piece of cake. It only took a moment and I had access to my earned pay. Immediate is fast, simple, and easy.",
    name: "Forrest S.",
    role: "ImmediatePay user",
    image: t2,
  },
  {
    quote:
      "Knowing I can access what I've earned the moment I need it has completely changed how I handle unexpected bills. No more waiting, no more stress.",
    name: "Maria L.",
    role: "ImmediatePay user",
    image: t1,
  },
  {
    quote:
      "The interface is clean, the transfer is instant, and the fees are zero. Honestly the easiest financial tool I've ever used.",
    name: "Derek T.",
    role: "ImmediatePay user",
    image: t2,
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: true,
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setCanPrev(emblaApi.canScrollPrev());
      setCanNext(emblaApi.canScrollNext());
    };
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const id = setInterval(() => {
      if (emblaApi.canScrollNext()) emblaApi.scrollNext();
      else emblaApi.scrollTo(0);
    }, 1500);
    return () => clearInterval(id);
  }, [emblaApi]);

  return (
    <section id="reviews" className="bg-lime/85 py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <h2 className="font-serif text-[clamp(2.2rem,5vw,4.25rem)] leading-[1.04] tracking-[-0.015em] text-ink">
                Happy customers,
                <br /> great reviews
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-[13px] text-ink/65">
                See what ImmediatePay users say about us
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Previous review"
                onClick={() => emblaApi?.scrollPrev()}
                disabled={!canPrev}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 bg-background/60 text-ink transition-all hover:bg-background disabled:opacity-40"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Next review"
                onClick={() => emblaApi?.scrollNext()}
                disabled={!canNext}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-forest text-forest-foreground transition-all hover:-translate-y-0.5 disabled:opacity-40"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-5 md:-ml-6">
              {reviews.map((r, i) => (
                <div
                  key={i}
                  className="min-w-0 shrink-0 grow-0 basis-[85%] pl-5 sm:basis-[60%] md:basis-[42%] md:pl-6 lg:basis-[34%]"
                >
                  <article className="flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-card shadow-[var(--shadow-card)] ring-1 ring-ink/[0.04]">
                    <div className="overflow-hidden">
                      <img
                        src={r.image}
                        alt={`${r.name}, ImmediatePay user`}
                        loading="lazy"
                        width={960}
                        height={720}
                        className="block aspect-[4/3] h-auto w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-6 md:p-7">
                      <p className="text-[14.5px] leading-relaxed text-ink/85">
                        “{r.quote}”
                      </p>
                      <div className="mt-6 flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-ink">{r.name}</p>
                          <p className="text-xs text-ink/55">{r.role}</p>
                        </div>
                        <span
                          aria-hidden
                          className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-mint text-forest"
                        >
                          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                            <path d="M7.17 6A5.17 5.17 0 002 11.17V18h6.83v-6.83H5a3.17 3.17 0 013.17-3.17V6h-1zm10 0A5.17 5.17 0 0012 11.17V18h6.83v-6.83H15a3.17 3.17 0 013.17-3.17V6h-1z" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
