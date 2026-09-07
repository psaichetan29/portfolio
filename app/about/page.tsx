import type { Metadata } from "next";
import { CloseCta, Nav } from "../ui";

export const metadata: Metadata = {
  title: "About — Chetan Sai",
};

export default function About() {
  return (
    <>
      <Nav />

      <header className="hero wrap" style={{ paddingBottom: "40px" }}>
        <div>
          <span className="chip">About</span>
          <h1>
            Operator first, <em>technologist second.</em>
          </h1>
        </div>
        <div className="art" aria-hidden="true" style={{ minHeight: "260px" }}>
          <div className="blob"></div>
        </div>
      </header>

      <section className="about-body wrap">
        <p className="big">
          I&apos;m Chetan — I work in Demand &amp; Operations at Flent, a furnished-rental
          startup in Bengaluru, and I can&apos;t leave a broken process alone.
        </p>
        <p>
          I grew up in Hyderabad and studied operations management at Ahmedabad University. While
          finishing my degree I ran the floor at a Decathlon store — at 21 I was leading business
          days with 40+ teammates and a thousand customers, owning commercial strategy for a slice
          of the store, and learning that margins, shrinkage and stock are won or lost in the
          details. Retail teaches you two things fast: <strong>everything is operations, and the
          customer doesn&apos;t care whose job it was.</strong>
        </p>
        <p>
          I joined Flent in June 2024, months after graduating, on the sales side — when the
          company was a fraction of its current size. The job never stopped at the job description: selling homes meant understanding
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
        <p>
          Off the clock: backpacking and trekking, mostly — I like problems where the map is
          optional. I speak English, Telugu and Hindi, which helps when your customers do too.
        </p>
      </section>

      <CloseCta heading="Say hello." />
    </>
  );
}
