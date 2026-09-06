import Link from "next/link";

// ── Site-wide constants ──────────────────────────────────────────────────────
export const NAME = "Chetan Sai";
export const EMAIL = "psaichetan29@gmail.com";
export const LINKEDIN_URL = ""; // TODO: paste LinkedIn profile URL to show the link
export const RESUME_URL = ""; // TODO: add /resume.pdf to public/ and set this to "/resume.pdf"
// ─────────────────────────────────────────────────────────────────────────────

export function FieldNav() {
  return (
    <nav className="fnav wrap" aria-label="Main">
      <Link href="/" className="brand">
        Chetan Sai
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
    <footer className="close wrap">
      <h2>{heading}</h2>
      <a className="mail" href={`mailto:${EMAIL}`}>
        {EMAIL}
      </a>
      <div className="also">
        {LINKEDIN_URL && <a href={LINKEDIN_URL}>LinkedIn ↗</a>}
        {RESUME_URL && <a href={RESUME_URL}>Resume ↓</a>}
      </div>
    </footer>
  );
}
