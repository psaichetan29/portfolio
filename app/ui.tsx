import Link from "next/link";

// ── Site-wide constants ──────────────────────────────────────────────────────
export const NAME = "Chetan Sai";
export const EMAIL = "psaichetan29@gmail.com";
export const LINKEDIN_URL = ""; // TODO: paste LinkedIn profile URL to show the link
export const RESUME_URL = ""; // TODO: add /resume.pdf to public/ and set this to "/resume.pdf"
// ─────────────────────────────────────────────────────────────────────────────

export function Nav() {
  return (
    <nav className="nav wrap" aria-label="Main">
      <Link href="/" className="brand">
        {NAME}
      </Link>
      <div className="links">
        <Link href="/#work">Work</Link>
        <Link href="/about">About</Link>
        {RESUME_URL && <a href={RESUME_URL}>Resume</a>}
        <a href={`mailto:${EMAIL}`}>Contact</a>
      </div>
    </nav>
  );
}

export function CloseCta({ heading }: { heading: string }) {
  return (
    <footer className="close">
      <div className="inner wrap">
        <span className="kicker">Let&apos;s build</span>
        <h2>{heading}</h2>
        <p>
          I&apos;m looking for my next full-time role — Business Operations, Sales/Revenue
          Operations, Strategy &amp; Ops, or anywhere messy processes need someone who&apos;ll
          own them. Always open to a good conversation about business, technology and
          what&apos;s next.
        </p>
        <a className="mail" href={`mailto:${EMAIL}`}>
          {EMAIL} →
        </a>
        <div className="also">
          {LINKEDIN_URL && <a href={LINKEDIN_URL}>LinkedIn ↗</a>}
          {RESUME_URL && <a href={RESUME_URL}>Resume ↓</a>}
        </div>
      </div>
    </footer>
  );
}
