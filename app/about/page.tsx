import type { Metadata } from "next";
import { CloseCta, Nav } from "../ui";

export const metadata: Metadata = {
  title: "About — Chetan Sai",
  description:
    "Operator first, technologist second. From frontline retail to demand & operations at a scaling startup — and the systems built along the way.",
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

function Kicker({ children }: { children: string }) {
  return (
    <span className="kicker" style={{ display: "block", marginTop: "40px" }}>
      {children}
    </span>
  );
}

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
        <p className="big">
          I come from Hyderabad — the city of biryani, Irani chai, and endless warmth. I grew up
          in a business family, where conversations about work and customers were part of daily
          life. School was more about sports and friendships than textbooks — football,
          especially. A Barça fan for life.
        </p>

        <Kicker>The foundation</Kicker>
        <p style={{ marginTop: "10px" }}>
          For my undergrad I moved to Ahmedabad — a BBA (Hons) in Operations Management at
          Ahmedabad University — and worked at Decathlon alongside it, across frontline,
          commercial and team operations. That&apos;s where business stopped being theoretical:
          customer behaviour, frontline sales, inventory discipline, SOPs, fast-moving execution.
          I was learning how businesses actually operate. After graduating, I moved into a much
          broader operating role at a startup.
        </p>

        <Kicker>The main chapter</Kicker>
        <p style={{ marginTop: "10px" }}>
          I joined Flent — a furnished-rental startup in Bengaluru — in June 2024, as a fresher
          in Demand &amp; Operations. Honestly, I didn&apos;t know yet whether I could sell,
          negotiate, or operate independently. I learned by doing: customer conversations,
          visits, move-ins and move-outs, negotiations, coordination across teams, problems under
          pressure. Within a short time I was trusted with real operational ownership — and that
          gave me confidence.
        </p>
        <p>
          Then the way I looked at the work changed. I stopped seeing customers as leads to
          close and got interested in why they move, what they hesitate over, what they&apos;ll
          pay more for, why they leave. And I stopped asking only &ldquo;how do I fix this right
          now?&rdquo; and started asking <strong>&ldquo;why does this keep happening?&rdquo;</strong>{" "}
          Moving fast is useful; solving the same problem manually every week is not.
        </p>
        <p>
          So I started improving things — documenting processes, finding bottlenecks, pulling
          scattered information together. And eventually, building: automation, dashboards,
          integrations, AI-assisted workflows, lightweight internal tools. The technology always
          came <strong>after</strong> the business problem. I&apos;m not a software engineer — I
          design the fix like an operator and ship it with AI tools, then run it in production
          with the team.
        </p>

        <Kicker>What I learned the hard way</Kicker>
        <p style={{ marginTop: "10px" }}>
          <strong>Customer-first matured.</strong> I used to think it meant personally solving
          every customer&apos;s problem. Now I think it means the customer gets the right outcome
          — through the right process, with clear expectations, even when that means saying no or
          redirecting. Preventing the recurring problem beats heroically fixing it each time.
        </p>
        <p>
          <strong>Speed needed judgment.</strong> I naturally move fast. Feedback taught me to
          pair that with a step back: is there a better way than the fast way? That&apos;s the
          difference between execution and operating judgment, and I&apos;m deliberate about it
          now.
        </p>
        <p>
          <strong>Undocumented knowledge doesn&apos;t scale.</strong> Some things stayed in my
          head longer than they should have. A process isn&apos;t real if only one person knows
          how it works — which is exactly why SOPs, documentation and visible systems matter so
          much to me today.
        </p>

        <Kicker>What I&apos;m looking for</Kicker>
        <p style={{ marginTop: "10px" }}>
          Roles where I can sit close to the business, understand how things actually work, and
          help make them better — Business Operations, Sales/Revenue Operations, Strategy &amp;
          Operations, Product or Growth Operations, and hybrid roles where technology and
          automation improve how a team operates.
        </p>
        <p>
          I&apos;m drawn to startups and growing companies: ambiguous environments, real
          ownership, systems still being built, close to founders. And I&apos;m especially drawn
          to ambiguous problems — messy processes, data that doesn&apos;t line up, workflows that
          grew faster than the systems supporting them.
        </p>
        <p className="big">
          I don&apos;t want to move away from execution. I&apos;ve proven I can execute — I want
          the chance to show I can own.
        </p>

        <Kicker>Off the clock</Kicker>
        <p style={{ marginTop: "10px" }}>
          Usually travelling or backpacking, chasing mountains, or planning the next trip. I like
          problems where the map is optional.
        </p>
      </section>

      <CloseCta heading="Say hello." />
    </>
  );
}
