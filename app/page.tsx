import Link from "next/link";
import Cases from "./cases";
import { CloseCta, Nav } from "./ui";

const arc = [
  { no: "01", tag: "Learn", body: "College + Decathlon. Customers, frontline sales, commercial basics, operational discipline." },
  { no: "02", tag: "Operate", body: "Flent — demand and operations. Visits, negotiation, move-ins, closing, problems under pressure." },
  { no: "03", tag: "Improve", body: "Recurring problems became the interesting ones. Processes, workflows, bringing scattered information together." },
  { no: "04", tag: "Analyze", body: "Funnels, honest attribution, forecasting — finding the number that changes a decision." },
  { no: "05", tag: "Build", body: "Automation, internal tools and systems — built after the business problem, never before it." },
  { no: "06", tag: "Next", body: "Own bigger outcomes. I've proven I can execute — I want the chance to show I can own." },
];

const principles = [
  { no: "01", t: "Start with the business problem", d: "Before choosing a tool, understand what is actually broken." },
  { no: "02", t: "Stay close to the ground", d: "Talk to customers and the people doing the work." },
  { no: "03", t: "Find the recurring problem", d: "Don't keep solving the same issue manually." },
  { no: "04", t: "Make the process visible", d: "If nobody can see what's happening, nobody can improve it." },
  { no: "05", t: "Automate carefully", d: "Repetitive work gets automated; judgment calls keep a human." },
  { no: "06", t: "Measure what matters", d: "A dashboard is useless if it doesn't help make a decision." },
  { no: "07", t: "Document what works", d: "A process shouldn't live entirely inside one person's head." },
  { no: "08", t: "Own outcomes, not just tasks", d: "Understand the metric, not merely complete the activity." },
];

const capabilities: { title: string; items: string[] }[] = [
  {
    title: "Business",
    items: ["Sales operations", "Business operations", "Customer operations", "Process improvement", "Cross-functional execution", "Commercial thinking", "Channel development"],
  },
  {
    title: "Data",
    items: ["Funnel analysis", "Operational reporting", "Dashboards", "Attribution", "Forecasting", "Business metrics", "Customer analysis"],
  },
  {
    title: "Technology",
    items: ["CRM systems", "Workflow automation", "APIs & integrations", "AI-assisted workflows", "Internal tools", "Scheduled jobs", "Lightweight systems"],
  },
];

export default function Home() {
  return (
    <>
      <Nav />

      <header className="hero wrap">
        <div>
          <span className="chip">Business Operations × Sales × Automation</span>
          <h1>
            I turn messy business problems into systems that <em>actually run.</em>
          </h1>
          <p className="sub">
            I started in frontline sales and operations, grew into process improvement and
            analytics, and eventually began building the systems behind the work.
          </p>
          <div className="btnrow">
            <a className="btn primary" href="#work">
              See the work →
            </a>
            <Link className="btn ghost" href="/about">
              About me
            </Link>
          </div>
        </div>
        <div className="art" aria-hidden="true">
          <div className="blob"></div>
          <span className="scribble">better systems.<br />bigger impact. ↘</span>
          <span className="orbit o1">find the leak</span>
          <span className="orbit o2">design the fix</span>
          <span className="orbit o3">ship + measure</span>
        </div>
      </header>

      <section className="whoiam wrap">
        <span className="kicker">Who I am</span>
        <h2>Operator first. Technologist second.</h2>
        <p className="hint" style={{ maxWidth: "64ch" }}>
          I work where business problems meet execution. I understand the customer side, the
          operational side, and increasingly the systems and data side. Technology helps me
          improve the process — it isn&apos;t the starting point.
        </p>
      </section>

      <section className="arcwrap wrap">
        <span className="kicker">The career arc</span>
        <h2>Learn. Operate. Improve. Build. Own.</h2>
        <div className="arc">
          {arc.map((a) => (
            <div className={a.tag === "Next" ? "arc-item next" : "arc-item"} key={a.no}>
              <span className="no">{a.no}</span>
              <b>{a.tag}</b>
              <p>{a.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="band">
        <div className="multiples wrap">
          <div>
            <b>
              10<span className="x">x</span>
            </b>
            <span>operating scale during my tenure</span>
          </div>
          <div>
            <b>
              95<span className="x">%+</span>
            </b>
            <span>occupancy sustained through 2026</span>
          </div>
          <div>
            <b>
              9<span className="x">/10</span>
            </b>
            <span>historical tenancies moved in after I joined</span>
          </div>
          <div>
            <b>
              ₹<span className="x">0/mo</span>
            </b>
            <span>internal platform cost</span>
          </div>
        </div>
        <p className="band-note wrap">
          Company-level outcomes shown for context — not claims of sole individual ownership.
        </p>
      </section>

      <section className="how wrap">
        <span className="kicker">Where this happened</span>
        <h2>Flent, Bengaluru.</h2>
        <p className="hint" style={{ maxWidth: "66ch" }}>
          Flent started with a simple idea: renting could feel a lot better. It leases and
          furnishes homes, sells an experience rather than a listing, and grew through word of
          mouth into an experience-first rental choice in Bengaluru — with ambitions well beyond
          providing homes. I joined in June 2024, as a fresher, in Demand &amp; Operations.
          This is where my role changed:
        </p>
        <div className="steps">
          <div className="step">
            <span className="tag">Sell</span>
            <h3>Demand &amp; conversion</h3>
            <p>
              Rental demand end to end — enquiries from every channel, hundreds of renter
              conversations, visits, commercial negotiation, closing, move-in.
            </p>
          </div>
          <div className="step">
            <span className="tag">Run</span>
            <h3>Operations &amp; experience</h3>
            <p>
              Everything between &ldquo;I&apos;m interested&rdquo; and &ldquo;I&apos;ve moved
              in&rdquo; — handovers, escalations, landlords, coordination across ops, finance and
              property teams.
            </p>
          </div>
          <div className="step">
            <span className="tag">Build</span>
            <h3>Systems &amp; automation</h3>
            <p>
              The recurring work that drained the team, I turned into systems — billing,
              collections, renewals, agreements, analytics. That&apos;s the proof below.
            </p>
          </div>
        </div>
      </section>

      <section className="work wrap" id="work">
        <span className="kicker">Proof of work</span>
        <h2>Real problems. Real systems.</h2>
        <p className="hint">
          Six real pieces of work from inside a fast-scaling rental startup. Each one: what was
          broken → what I did → how it works today, and the decision that mattered. Press one.
        </p>
        <Cases />
      </section>

      <section className="how wrap">
        <span className="kicker">Close to the customer</span>
        <h2>I try to understand why people buy.</h2>
        <div className="steps two">
          <div className="step">
            <span className="tag">Understand</span>
            <h3>Leads aren&apos;t rows in a CRM</h3>
            <p>
              Hundreds of conversations taught me what actually moves renters: engineers leaving
              managed rentals over opaque rent increases, founders paying for a real home-office,
              families who only arrive through brokers, buyers who need trust before an
              under-construction commitment. People decide on experience — not just price. That
              understanding feeds sales, analytics and operations alike.
            </p>
          </div>
          <div className="step">
            <span className="tag">Create</span>
            <h3>Built the broker channel from scratch</h3>
            <p>
              There was no broker channel — so I built one: earning broker trust, learning their
              incentives, qualifying lead quality, following up, and converting broker-sourced
              demand. Creating a channel is different from operating inside one — and I&apos;ve
              now done both.
            </p>
          </div>
        </div>
      </section>

      <section className="how wrap">
        <span className="kicker">How I work</span>
        <h2>Operating principles.</h2>
        <div className="plist">
          {principles.map((p) => (
            <div className="p-item" key={p.no}>
              <span className="no">{p.no}</span>
              <b>{p.t}</b>
              <p>{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="how wrap">
        <span className="kicker">Capabilities in action</span>
        <h2>What I actually work with.</h2>
        <div className="capcols">
          {capabilities.map((c) => (
            <div key={c.title}>
              <h3>{c.title}</h3>
              <ul>
                {c.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="hint" style={{ marginTop: "18px" }}>
          <strong>Technology is the tool. The business problem comes first.</strong>
        </p>
      </section>

      <CloseCta heading="Have a messy problem?" />
    </>
  );
}
