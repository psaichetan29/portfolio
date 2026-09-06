import type { Metadata } from "next";
import { CloseCta, FieldNav } from "../ui";

export const metadata: Metadata = {
  title: "About — Chetan Sai",
};

export default function About() {
  return (
    <>
      <div className="field">
        <FieldNav />
        <div className="wrap">
          <header className="hero" style={{ padding: "70px 0 76px" }}>
            <span className="chip">About</span>
            <h1 style={{ fontSize: "clamp(48px, 9vw, 110px)" }}>
              <span className="ghost">Operator</span>
              <span className="solid">first.</span>
            </h1>
          </header>
        </div>
      </div>

      <section className="about-body wrap" style={{ paddingTop: "56px" }}>
        <p className="big">
          I&apos;m Chetan — I work in demand and operations at a rental-housing startup in
          Bengaluru, and I can&apos;t leave a broken process alone.
        </p>
        <p>
          I joined in June 2024, on the sales side, when the company was a fraction of its current
          size. The job never stopped at the job description: selling homes meant understanding
          pricing, occupancy, lead sources, landlords, handovers, and everything that can go wrong
          between &ldquo;I&apos;m interested&rdquo; and &ldquo;I&apos;ve moved in.&rdquo; The
          business grew roughly tenfold around me — and nine out of ten people who have ever
          rented with us moved in during that stretch.
        </p>
        <p>
          Hundreds of renter conversations taught me things no dashboard could — like the fact
          that people negotiate hard on monthly rent but almost never think about the total cost
          of their eleven-month stay. Insights like that changed how I sell, and eventually,
          what I build.
        </p>
        <p>
          Because here&apos;s the thing: every hour the team spent re-typing spreadsheets was an
          hour not spent with a customer. So I started fixing the systems behind the work —
          billing, collections, renewals, agreements, analytics. <strong>I&apos;m not a software
          engineer. I design the fix like an operator and ship it with AI tools</strong> — then
          run it in production with the team.
        </p>
        <p>
          Right now I&apos;m deliberately going deeper into analytics, automation and AI, while
          keeping the thing that makes it all useful: commercial judgment earned close to
          customers and revenue.
        </p>
      </section>

      <CloseCta heading="Say hello." />
    </>
  );
}
