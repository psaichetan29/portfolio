import type { Metadata } from "next";
import { Nav, Footer } from "../ui";

export const metadata: Metadata = {
  title: "About — Chetan Sai",
};

export default function About() {
  return (
    <div className="wrap">
      <Nav current="about" />
      <section className="about">
        <span className="eyebrow">About</span>
        <h1>Operator first, technologist second</h1>
        <div className="body">
          <p>
            I started on the demand and sales side of a fast-moving rental startup, where the job
            rarely stopped at a job description.
          </p>
          <p>
            I joined in June 2024, when the business ran about 23 properties and 55 rooms. Two
            years later it operates 250+ properties and 550+ rooms at 95%+ occupancy — and roughly nine in ten of the
            company&apos;s move-ins to date happened during that stretch. I&apos;ve spent it close
            to the customer: hundreds of renter conversations, visits, negotiations, move-ins, and
            the operational problems that follow them.
          </p>
          <p>
            Selling properties meant understanding customers, pricing, occupancy, lead sources and
            operations. As the business grew, I increasingly found myself working on the systems
            behind those outcomes — processes, dashboards, automation and internal tools.
          </p>
          <p>That&apos;s what pulled me toward the intersection of business and technology.</p>
          <p>
            <strong>I&apos;m not a software engineer. I&apos;m an operator who uses technology to
            solve business problems.</strong>
          </p>
          <p>
            I&apos;m now deliberately building deeper capability in analytics, automation and AI
            while continuing to develop the commercial and operational judgment I&apos;ve gained
            from working close to customers and revenue.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
