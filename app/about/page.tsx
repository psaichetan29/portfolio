import type { Metadata } from "next";
import { CloseCta, Nav } from "../ui";

export const metadata: Metadata = {
  title: "About — Chetan Sai",
};

const facts = [
  "Hyderabad-born",
  "BBA Ops Mgmt · Ahmedabad University '24",
  "Ex-Decathlon",
  "Flent since Jun 2024",
  "Barça fan for life",
  "Backpacker",
  "English · Telugu · Hindi",
];

export default function About() {
  return (
    <>
      <Nav />

      <header className="hero wrap" style={{ paddingBottom: "36px" }}>
        <div>
          <span className="chip">About me</span>
          <h1>
            Operator first, <em>technologist second.</em>
          </h1>
          <div className="facts">
            {facts.map((f) => (
              <span className="fchip" key={f}>
                {f}
              </span>
            ))}
          </div>
        </div>
        <div className="art" aria-hidden="true" style={{ minHeight: "240px" }}>
          <div className="blob"></div>
        </div>
      </header>

      <section className="about-body wrap">
        <span className="kicker">Where I&apos;m from</span>
        <p className="big" style={{ marginTop: "10px" }}>
          I come from Hyderabad — the city of biryani, Irani chai, and endless warmth.
        </p>
        <p>
          I grew up in a business family, which meant conversations around work and customers
          were part of daily life. School for me was more about sports and friendships than
          textbooks — that&apos;s where I discovered my love for football. I played a lot through
          school and college, and now I enjoy watching the game. <strong>A Barça fan for
          life.</strong>
        </p>

        <span className="kicker" style={{ display: "block", marginTop: "36px" }}>
          Where I learned the trade
        </span>
        <p style={{ marginTop: "10px" }}>
          For my undergrad I moved to Ahmedabad — a BBA (Hons) in Operations Management at
          Ahmedabad University — and started working with Decathlon alongside it. That&apos;s
          where I truly fell in love with retail: how products, people and experiences come
          together. At 21 I was running the store floor — 40+ teammates, a thousand customers a
          day, margins and shrinkage won or lost in the details. Retail teaches you two things
          fast: <strong>everything is operations, and the customer doesn&apos;t care whose job it
          was.</strong>
        </p>

        <span className="kicker" style={{ display: "block", marginTop: "36px" }}>
          What I do now
        </span>
        <p style={{ marginTop: "10px" }}>
          I joined Flent, a furnished-rental startup in Bengaluru, in June 2024 — months after
          graduating, on the sales side, when the company was a fraction of its current size. The
          job never stopped at the job description: selling homes meant understanding pricing,
          occupancy, lead sources, landlords, handovers, and everything that can go wrong between
          &ldquo;I&apos;m interested&rdquo; and &ldquo;I&apos;ve moved in.&rdquo; The business
          grew roughly tenfold around me — nine out of ten people who have ever rented with us
          moved in during that stretch.
        </p>
        <p>
          Hundreds of renter conversations taught me things no dashboard could — like the fact
          that people negotiate hard on monthly rent but almost never think about the total cost
          of their eleven-month stay. And every hour the team spent re-typing spreadsheets was an
          hour not spent with a customer — so I started fixing the systems behind the work:
          billing, collections, renewals, agreements, analytics. <strong>I&apos;m not a software
          engineer. I design the fix like an operator and ship it with AI tools</strong> — then
          run it in production with the team. I&apos;m now deliberately going deeper into
          analytics, automation and AI, while keeping the thing that makes it all useful:
          commercial judgment earned close to customers and revenue.
        </p>

        <span className="kicker" style={{ display: "block", marginTop: "36px" }}>
          Off the clock
        </span>
        <p style={{ marginTop: "10px" }}>
          I&apos;m usually travelling or backpacking, chasing mountains, or planning the next
          trip. I like problems where the map is optional.
        </p>
      </section>

      <CloseCta heading="Say hello." />
    </>
  );
}
