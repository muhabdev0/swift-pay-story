import { Reveal } from "./Reveal";

const columns = [
  {
    title: "Product",
    links: ["Features", "How it works", "Pricing", "Security"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Press", "Contact"],
  },
  {
    title: "Resources",
    links: ["Help center", "Guides", "Partners", "Status"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Disclosures", "Licenses"],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest text-forest-foreground">
      <div className="relative mx-auto max-w-[1240px] px-6 pt-28 pb-12 md:px-10 md:pt-36">
        <Reveal>
          <p className="eyebrow text-forest-foreground/50">A better way to pay</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h3 className="mt-5 max-w-3xl font-serif text-[clamp(2rem,4.4vw,3.75rem)] leading-[1.05] tracking-tight">
            Meet modern payroll needs without compromising.
          </h3>
        </Reveal>

        <div className="mt-20 grid grid-cols-2 gap-10 md:grid-cols-6 md:gap-8">
          <div className="col-span-2 max-w-sm">
            <a href="#top" className="font-serif text-2xl tracking-tight">
              ImmediatePay
            </a>
            <p className="mt-4 text-sm leading-relaxed text-forest-foreground/65">
              Earned wage access designed for calm, modern teams and the people
              who power them.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {["Tw", "In", "Li"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-forest-foreground/15 text-xs text-forest-foreground/80 transition-colors hover:bg-forest-foreground/10"
                  aria-label={s}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-medium uppercase tracking-widest text-forest-foreground/50">
                {c.title}
              </p>
              <ul className="mt-5 space-y-3 text-sm">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-forest-foreground/85 transition-colors hover:text-forest-foreground"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-forest-foreground/12 pt-8 md:flex-row md:items-center">
          <p className="text-xs text-forest-foreground/55">
            © {new Date().getFullYear()} ImmediatePay. All rights reserved.
          </p>
          <p className="text-xs text-forest-foreground/55">
            Built calmly. Engineered securely.
          </p>
        </div>

        {/* oversized watermark */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -bottom-10 select-none text-center font-serif leading-none text-forest-foreground/[0.05]"
          style={{ fontSize: "clamp(7rem, 22vw, 22rem)" }}
        >
          ImmediatePay
        </div>
      </div>
    </footer>
  );
}
