import Link from "next/link";
import { Fragment } from "react";

// ── Site-wide constants ──────────────────────────────────────────────────────
export const NAME = "Sai Chetan";
export const EMAIL = "psaichetan29@gmail.com";
export const LINKEDIN_URL = ""; // TODO: paste LinkedIn profile URL to show the button
export const RESUME_URL = ""; // TODO: add /resume.pdf to public/ and set this to "/resume.pdf"
// ─────────────────────────────────────────────────────────────────────────────

export function Nav({ current }: { current?: "work" | "about" }) {
  return (
    <nav className="nav" aria-label="Main">
      <Link href="/" className="brand">
        {NAME}
      </Link>
      <div className="links">
        <Link href="/#work" aria-current={current === "work" ? "page" : undefined}>
          Work
        </Link>
        <Link href="/about" aria-current={current === "about" ? "page" : undefined}>
          About
        </Link>
        {RESUME_URL && <a href={RESUME_URL}>Resume</a>}
        <a href={`mailto:${EMAIL}`}>Contact</a>
      </div>
    </nav>
  );
}

type FlowChip = string | { label: string; kind: "hot" | "human" };

export function FlowRow({ label, chips }: { label?: string; chips: FlowChip[] }) {
  return (
    <div className="flowrow">
      {label && <span className="flowlabel">{label}</span>}
      {chips.map((chip, i) => {
        const text = typeof chip === "string" ? chip : chip.label;
        const cls = typeof chip === "string" ? "fchip" : `fchip ${chip.kind}`;
        return (
          <Fragment key={i}>
            {i > 0 && (
              <span className="farrow" aria-hidden="true">
                →
              </span>
            )}
            <span className={cls}>{text}</span>
          </Fragment>
        );
      })}
    </div>
  );
}

export function Footer() {
  return (
    <footer>
      <span className="eyebrow">Contact</span>
      <h2>Have a messy problem worth fixing?</h2>
      <p>
        I&apos;m {NAME} — currently running revenue operations at a Bengaluru rental-housing startup.
        If your team is drowning in manual work, I&apos;d love to talk.
      </p>
      <a className="cta" href={`mailto:${EMAIL}`}>
        Email me → <span className="email">{EMAIL}</span>
      </a>
    </footer>
  );
}
