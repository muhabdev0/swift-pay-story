import { Reveal } from "./Reveal";

const columns = [
  {
    title: "For Companies",
    links: ["Why Immediate", "How It Works", "Frequently Asked Questions", "Book A Call", "Schedule Demo"],
  },
  {
    title: "For Employees",
    links: ["Why Immediate", "Check eligibility", "Support team"],
  },
  {
    title: "Partnerships",
    links: ["About Partnerships", "Marketplace", "Partnership Contact"],
  },
  {
    title: "About Immediate",
    links: ["Company", "Insights", "Security", "Contact Us"],
  },
];

function StoreBadge({ label, sub, children }: { label: string; sub: string; children: React.ReactNode }) {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-2.5 rounded-xl bg-ink/40 px-4 py-2.5 ring-1 ring-forest-foreground/15 transition-transform hover:-translate-y-0.5"
    >
      {children}
      <span className="text-left leading-tight text-forest-foreground">
        <span className="block text-[9px] uppercase tracking-wider opacity-70">{sub}</span>
        <span className="block text-[13px] font-medium">{label}</span>
      </span>
    </a>
  );
}

export function Footer() {
  return (
    <footer id="footer" className="relative overflow-hidden bg-forest text-forest-foreground">
      <div className="relative mx-auto max-w-[1280px] px-6 pt-24 pb-10 md:px-10 md:pt-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <Reveal>
              <h3 className="max-w-md font-serif text-[clamp(1.9rem,3.6vw,3.25rem)] leading-[1.06] tracking-[-0.015em]">
                Meet modern payroll needs without compromising
              </h3>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-10">
                <p className="text-[11px] uppercase tracking-[0.18em] text-forest-foreground/55">
                  Download ImmediatePay
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <StoreBadge sub="Download on the" label="App Store">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current text-forest-foreground" aria-hidden>
                      <path d="M16.365 12.86c-.022-2.43 1.985-3.595 2.076-3.652-1.13-1.65-2.892-1.877-3.515-1.903-1.494-.151-2.92.881-3.68.881-.76 0-1.93-.86-3.176-.836-1.633.024-3.139.95-3.978 2.41-1.698 2.94-.434 7.29 1.222 9.677.81 1.17 1.776 2.485 3.044 2.438 1.222-.049 1.683-.79 3.16-.79 1.475 0 1.892.79 3.184.764 1.315-.022 2.149-1.193 2.952-2.368.93-1.359 1.314-2.677 1.338-2.745-.03-.013-2.564-.987-2.587-3.876zM13.93 5.3c.673-.815 1.127-1.946.999-3.07-.967.04-2.139.643-2.834 1.456-.623.72-1.169 1.874-1.022 2.978 1.079.083 2.183-.547 2.857-1.364z" />
                    </svg>
                  </StoreBadge>
                  <StoreBadge sub="Get it on" label="Google Play">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current text-forest-foreground" aria-hidden>
                      <path d="M3.6 1.7a2 2 0 00-.6 1.4v17.8c0 .55.22 1.05.58 1.41L13.2 12 3.6 1.7zm10.7 11.2l2.5 2.5-11.3 6.5c-.07.04-.15.07-.23.08l9.03-9.08zm5.1-3.04l-3.04 1.75-2.7 2.7 2.7 2.7 3.05 1.75c1.32-.76 1.32-2.65 0-3.4l.01-5.5z" />
                    </svg>
                  </StoreBadge>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-7 md:grid-cols-4 md:gap-6">
            {columns.map((c) => (
              <div key={c.title}>
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-forest-foreground/55">
                  {c.title}
                </p>
                <ul className="mt-5 space-y-2.5 text-[13px]">
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
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-forest-foreground/12 pt-6">
          <div className="flex items-center gap-3 text-forest-foreground/70">
            {["F", "Ig", "X", "In", "Yt"].map((s) => (
              <a
                key={s}
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full ring-1 ring-forest-foreground/15 text-[11px] transition-colors hover:bg-forest-foreground/10"
                aria-label={s}
              >
                {s}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-6 text-[11.5px] text-forest-foreground/55">
            <a href="#" className="hover:text-forest-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-forest-foreground">Accessibility</a>
            <span>Immediate Solutions, Inc © {new Date().getFullYear()}</span>
          </div>
        </div>

        {/* oversized watermark */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -bottom-6 select-none text-center font-serif leading-none text-forest-foreground/[0.06]"
          style={{ fontSize: "clamp(7rem, 22vw, 20rem)" }}
        >
          Immediate.
        </div>
      </div>
    </footer>
  );
}
