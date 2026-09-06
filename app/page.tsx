import Cases from "./cases";
import { CloseCta, Nav } from "./ui";

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
            Sales, operations, analytics and automation. I find the leak, design the fix, and ship
            practical systems with AI — then run them in production.
          </p>
          <div className="btnrow">
            <a className="btn primary" href="#work">
              View my work →
            </a>
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

      <section className="band">
        <div className="multiples wrap">
          <div>
            <b>
              10<span className="x">x</span>
            </b>
            <span>the business grew tenfold during my tenure</span>
          </div>
          <div>
            <b>
              95<span className="x">%+</span>
            </b>
            <span>occupancy held while supply grew 10x</span>
          </div>
          <div>
            <b>
              9<span className="x">/10</span>
            </b>
            <span>of everyone who ever rented moved in on my watch</span>
          </div>
          <div>
            <b>
              ₹<span className="x">0</span>
            </b>
            <span>monthly cost of the systems behind it all</span>
          </div>
        </div>
      </section>

      <section className="how wrap">
        <span className="kicker">What I do</span>
        <h2>Demand &amp; Operations at Flent.</h2>
        <p className="hint" style={{ maxWidth: "62ch" }}>
          Since June 2024 I&apos;ve been at Flent, a furnished-rental startup in Bengaluru — through
          roughly 10x growth. My job spans three things:
        </p>
        <div className="steps">
          <div className="step">
            <span className="tag">Sell</span>
            <h3>Demand &amp; conversion</h3>
            <p>
              I run rental demand end to end — enquiries from every channel, hundreds of renter
              conversations, visits, commercial negotiation, closing, move-in.
            </p>
          </div>
          <div className="step">
            <span className="tag">Run</span>
            <h3>Operations &amp; experience</h3>
            <p>
              Everything between &ldquo;I&apos;m interested&rdquo; and &ldquo;I&apos;ve moved
              in&rdquo; — handovers, escalations, landlords, and coordination across ops, finance
              and property teams.
            </p>
          </div>
          <div className="step">
            <span className="tag">Build</span>
            <h3>Systems &amp; automation</h3>
            <p>
              The recurring work that drained the team, I turned into software — billing,
              collections, renewals, agreements, analytics. That&apos;s the proof below.
            </p>
          </div>
        </div>
      </section>

      <section className="how wrap">
        <span className="kicker">How I work</span>
        <h2>From problem to progress.</h2>
        <div className="steps">
          <div className="step">
            <span className="n">01</span>
            <h3>Find the leak</h3>
            <p>
              I don&apos;t start with technology — I start with the business problem: manual
              reconciliation, slow follow-ups, stale data, missed renewals, poor visibility.
            </p>
          </div>
          <div className="step">
            <span className="n">02</span>
            <h3>Design the fix</h3>
            <p>
              I map the real workflow, decide what can be automated, and decide where humans
              must stay in control.
            </p>
          </div>
          <div className="step">
            <span className="n">03</span>
            <h3>Ship + measure</h3>
            <p>
              I build the workflow, dashboard or automation with AI tools — and track whether it
              actually improves the outcome.
            </p>
          </div>
        </div>
      </section>

      <section className="work wrap" id="work">
        <span className="kicker">Proof of work</span>
        <h2>Real problems. Real systems.</h2>
        <p className="hint">
          Six production case studies from a fast-moving rental startup. Press one to see how it
          got solved.
        </p>
        <Cases />
      </section>

      <CloseCta heading="Have a messy problem?" />
    </>
  );
}
