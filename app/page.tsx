import { Nav, Footer, FlowRow, LINKEDIN_URL, RESUME_URL } from "./ui";

export default function Home() {
  return (
    <div className="wrap">
      <Nav current="work" />

      <header className="hero">
        <span className="eyebrow">Business Operations × Sales × Automation</span>
        <h1>
          I turn messy business problems into{" "}
          <span className="fix">systems that actually run.</span>
        </h1>
        <p className="lede">
          Sales, operations, analytics and automation. I work at the intersection of business
          execution and technology — <strong>finding bottlenecks, designing the fix, and shipping
          practical systems with AI and automation</strong>. I&apos;m not a software engineer: I
          understand the business problem first, then use technology to solve it.
        </p>
        <div className="btnrow">
          <a className="btn primary" href="#work">
            View my work
          </a>
          {LINKEDIN_URL && (
            <a className="btn ghost" href={LINKEDIN_URL}>
              LinkedIn
            </a>
          )}
          {RESUME_URL && (
            <a className="btn ghost" href={RESUME_URL}>
              Resume
            </a>
          )}
        </div>

        <div className="proofstrip">
          <div>
            <b>800+</b>
            <span>households supported</span>
          </div>
          <div>
            <b>30+</b>
            <span>automated jobs running</span>
          </div>
          <div>
            <b>₹0</b>
            <span>infrastructure platform</span>
          </div>
          <div>
            <b>6</b>
            <span>production systems shipped</span>
          </div>
        </div>
      </header>

      <section className="howwrap">
        <span className="eyebrow">Method</span>
        <h2>How I work</h2>
        <div className="how">
          <div>
            <span className="step">01</span>
            <h3>Find the leak</h3>
            <p>I start with the business problem — not the technology.</p>
            <ul>
              <li>Manual reconciliation</li>
              <li>Slow follow-ups</li>
              <li>Stale data</li>
              <li>Missed renewals</li>
              <li>Poor visibility</li>
              <li>Repetitive operational work</li>
            </ul>
          </div>
          <div>
            <span className="step">02</span>
            <h3>Design the fix</h3>
            <p>
              I map the workflow, identify what can be automated, and decide where humans should
              remain in control.
            </p>
          </div>
          <div>
            <span className="step">03</span>
            <h3>Ship + measure</h3>
            <p>
              I build the workflow, dashboard, automation or operating process — and track whether
              it actually improves the outcome.
            </p>
          </div>
        </div>
      </section>

      <section className="platform-intro" id="work">
        <span className="eyebrow">Proof of work</span>
        <h2>Six production case studies</h2>
        <p>
          Every system below replaced a manual process at a fast-moving rental-housing startup,
          and every one is running in production today. Each follows the same structure:
          problem → my role → what I shipped → impact → proof.
        </p>
      </section>

      {/* ── 01 Agreements ─────────────────────────────────────────────────── */}
      <section className="case">
        <span className="eyebrow">Case study 01 · Agreements</span>
        <h3>From agreement chaos to a controlled workflow</h3>
        <p className="block-label">Problem</p>
        <p className="problem">
          Lease agreements involved a large number of terms and operational steps — coverage
          checks, document assembly, e-stamping, signature chasing — creating constant
          opportunities for missed information and unnecessary manual work. Nobody could answer
          “which tenancies actually have a signed agreement, and whose desk is the unsigned one
          sitting on?”
        </p>
        <p className="block-label">My role</p>
        <p className="role">
          Owned it end to end: surfaced the coverage gap from daily operations, designed the
          workflow, built it with AI tools, and ran it with the ops team.
        </p>
        <p className="block-label">What I shipped</p>
        <ul>
          <li>
            A live coverage board — every tenancy bucketed as signed, in-flight, missing, or
            expired, ranked by who is actually blocking.
          </li>
          <li>
            Two-click agreement generation: templates auto-filled, signature fields placed
            automatically, government e-stamp attached with duty computed.
          </li>
          <li>
            One-button chasing — reminder, WhatsApp, and Slack nudge to the exact person holding
            things up, with deliberate routing rules.
          </li>
          <li>
            Eliminated roughly 2,000 unnecessary API calls per refresh by studying undocumented
            provider behaviour — including reviving expired documents without losing signatures
            already collected.
          </li>
        </ul>
        <p className="block-label">Impact</p>
        <div className="stats">
          <div className="stat">
            <b>~500</b>
            <span>lease terms audited for coverage — gaps visible for the first time</span>
          </div>
          <div className="stat">
            <b>2 clicks</b>
            <span>to generate, stamp, and send an agreement</span>
          </div>
          <div className="stat">
            <b>~2,000</b>
            <span>wasted API calls eliminated per refresh</span>
          </div>
        </div>
        <p className="block-label">Proof — before / after</p>
        <div className="flowbox">
          <FlowRow
            label="Before"
            chips={[
              "Request",
              "Manual lookup",
              "Check info",
              "Generate",
              "Multiple refreshes",
              "E-stamp",
              "Follow-up",
            ]}
          />
          <FlowRow
            label="After"
            chips={[
              "Request",
              { label: "Coverage check", kind: "hot" },
              { label: "2-click generation", kind: "hot" },
              "E-stamp",
              { label: "Completed", kind: "hot" },
            ]}
          />
        </div>
      </section>

      {/* ── 02 Rent collection ────────────────────────────────────────────── */}
      <section className="case">
        <span className="eyebrow">Case study 02 · Rent collection</span>
        <h3>Turning rent collection into an operating system</h3>
        <p className="block-label">Problem</p>
        <p className="problem">
          Rent collection isn&apos;t simply “send a reminder.” Different tenants are at different
          stages, payments need tracking against exact amounts, late fees change the totals, and
          humans need control over anything a customer receives.
        </p>
        <p className="block-label">My role</p>
        <p className="role">
          Designed the collection ladder and its control points, built it with AI tools, and run
          the monthly cycle with it.
        </p>
        <p className="block-label">What I shipped</p>
        <ul>
          <li>A structured collection ladder — day 1 → day 5 → day 6 → day 8 — with the late fee applied automatically at day 6.</li>
          <li>Human-approved communications: automation queues every message, a person clicks Send. Nothing reaches a tenant unsupervised.</li>
          <li>Exact-amount payment links — a link can never differ from the amount in the message; totals change, links re-mint.</li>
          <li>Escalation logic and operational tracking for every stage, so nobody falls through the ladder unnoticed.</li>
        </ul>
        <p className="block-label">Impact</p>
        <div className="stats">
          <div className="stat">
            <b>4-stage</b>
            <span>ladder replacing a calendar of manual chores</span>
          </div>
          <div className="stat">
            <b>0</b>
            <span>wrong-amount payment links — impossible by design</span>
          </div>
          <div className="stat">
            <b>100%</b>
            <span>of customer messages human-approved before sending</span>
          </div>
        </div>
        <p className="block-label">Proof — collection lifecycle</p>
        <div className="flowbox">
          <FlowRow
            chips={[
              "Rent due",
              { label: "Day 1 reminder", kind: "human" },
              { label: "Day 5 follow-up", kind: "human" },
              { label: "Day 6 late fee", kind: "hot" },
              { label: "Day 8 final action", kind: "human" },
            ]}
          />
          <p className="flownote">
            Where automation stops: the system computes stages, amounts, and late fees on its own —
            but every step marked <span className="human-key">dashed</span> is a message a human
            reviews and approves before it goes out. Judgment stays with people; the system does
            the remembering.
          </p>
        </div>
      </section>

      {/* ── 03 Utility billing ────────────────────────────────────────────── */}
      <section className="case">
        <span className="eyebrow">Case study 03 · Utility billing</span>
        <h3>Billing 800+ households without creating an operational mess</h3>
        <p className="block-label">Problem</p>
        <p className="problem">
          Utility billing becomes genuinely difficult at scale: hundreds of households, five
          charge types across a dozen spreadsheet tabs, shares computed by hand, and payments
          reconciled by eye — repeatedly, every cycle.
        </p>
        <p className="block-label">My role</p>
        <p className="role">
          Identified the consolidation opportunity, designed the billing and safety model, built
          it with AI tools, and operate it in production.
        </p>
        <p className="block-label">What I shipped</p>
        <ul>
          <li>One itemized bill per household per cycle — one payment link, one email, one WhatsApp message, even across properties.</li>
          <li>Automatic payment matching from the gateway back to the right household&apos;s bill.</li>
          <li>An operational kill switch — one setting stops all outbound messaging instantly, so the system can never run away from its operators.</li>
          <li>A workflow that scales: review-and-approve queues, bulk send with live progress, and reminder cadences that escalate to the team&apos;s Slack.</li>
        </ul>
        <p className="block-label">Impact</p>
        <div className="stats">
          <div className="stat">
            <b>800+</b>
            <span>tenant households billed through one pipeline</span>
          </div>
          <div className="stat">
            <b>1 bill</b>
            <span>per household, replacing five separate charge streams</span>
          </div>
          <div className="stat">
            <b>1 switch</b>
            <span>to stop every outbound message — control by design</span>
          </div>
        </div>
        <p className="block-label">Proof — billing pipeline</p>
        <div className="flowbox">
          <FlowRow
            chips={[
              "Utility data",
              "Processing",
              { label: "Household bill", kind: "hot" },
              { label: "Human review", kind: "human" },
              "Payment",
              { label: "Auto match", kind: "hot" },
              "Reconciliation",
            ]}
          />
          <p className="flownote">
            The operational thinking is the point: bills are reviewed by a human before sending,
            and a single kill switch sits above the whole pipeline. Automation earns trust by
            being stoppable.
          </p>
        </div>
      </section>

      {/* ── 04 Renewals ───────────────────────────────────────────────────── */}
      <section className="case">
        <span className="eyebrow">Case study 04 · Renewals</span>
        <h3>Making renewals visible before they become emergencies</h3>
        <p className="block-label">Problem</p>
        <p className="problem">
          Renewals shouldn&apos;t appear suddenly at the end of a tenancy — but hand-curated
          spreadsheets meant they did: pricing decided ad hoc, chasing improvised, and no
          visibility into who had even seen their offer.
        </p>
        <p className="block-label">My role</p>
        <p className="role">
          Designed the renewal funnel and pricing model, built the campaign system with AI tools,
          and run the monthly cohorts through it.
        </p>
        <p className="block-label">What I shipped</p>
        <ul>
          <li>Automatic entry into the renewal workflow around month 11 of every stay — no one has to remember.</li>
          <li>A tracked funnel: offer sent → opened → viewed → decided, visible per tenant and per cohort.</li>
          <li>Personalised offer pages with a computed rate ladder — lock-in tiers versus flexible.</li>
          <li>Versioned pricing: editing an offer ladder can never silently reprice tenants already contacted; missed deadlines roll to the standard rate, guarded so nobody defaults uncontacted.</li>
        </ul>
        <p className="block-label">Impact</p>
        <div className="stats">
          <div className="stat">
            <b>~140</b>
            <span>tenants moved through the workflow across monthly cohorts</span>
          </div>
          <div className="stat">
            <b>Month 11</b>
            <span>automatic entry — renewals stopped being surprises</span>
          </div>
          <div className="stat">
            <b>Full funnel</b>
            <span>visibility where before there was a spreadsheet and hope</span>
          </div>
        </div>
        <p className="block-label">Proof — renewal funnel</p>
        <div className="flowbox">
          <FlowRow
            chips={[
              "Month 10",
              { label: "Month 11 trigger", kind: "hot" },
              "Renewal funnel",
              "Pricing",
              { label: "Customer discussion", kind: "human" },
              "Decision",
            ]}
          />
          <FlowRow label="Branch" chips={[{ label: "Renew", kind: "hot" }, "Move-out"]} />
        </div>
      </section>

      {/* ── 05 Sales intelligence ─────────────────────────────────────────── */}
      <section className="case">
        <span className="eyebrow">Case study 05 · Sales intelligence</span>
        <h3>Making sales decisions from signals instead of intuition</h3>
        <p className="block-label">Problem</p>
        <p className="problem">
          Leads lived in the sales tool, occupancy in spreadsheets, listings on the website — so
          “where should we focus?” was answered by intuition, not evidence.
        </p>
        <p className="block-label">My role</p>
        <p className="role">
          This is where my sales-side experience and the systems work meet: I knew which questions
          mattered because I was carrying the number, then built the pipeline that answers them.
        </p>
        <p className="block-label">What I shipped</p>
        <ul>
          <li>Honest win attribution — each closed lead credits the one home they actually signed, not every home they toured, so property and channel performance stopped lying.</li>
          <li>A live vacancy view refreshed every ~2 minutes, replacing “check three spreadsheets.”</li>
          <li>Forecasting with a Monte Carlo simulation — chosen deliberately over an ML model, and it beat the ML model on accuracy.</li>
          <li>Team dashboards refreshed automatically, with self-healing checks so stale data announces itself.</li>
        </ul>
        <p className="block-label">Impact</p>
        <div className="stats">
          <div className="stat">
            <b>2 min</b>
            <span>vacancy data freshness for the sales team</span>
          </div>
          <div className="stat">
            <b>1 insight</b>
            <span>that redirected strategy: inventory — not sales effort — was the growth constraint</span>
          </div>
          <div className="stat">
            <b>Daily</b>
            <span>use by sales and ops as the shared source of truth</span>
          </div>
        </div>
        <p className="block-label">Proof — from question to decision</p>
        <div className="qda">
          <div>
            <span className="qlabel">Question</span>
            <p>Which properties are generating demand, and where should we focus sales effort?</p>
          </div>
          <div>
            <span className="qlabel">Data</span>
            <p>Leads → visits → bookings → occupancy → vacancy, joined into one pipeline.</p>
          </div>
          <div>
            <span className="qlabel">Analysis</span>
            <p>Win attribution, data freshness, and probability-band forecasting.</p>
          </div>
          <div>
            <span className="qlabel">Decision</span>
            <p>Focus demand generation where inventory can absorb it — supply was the constraint.</p>
          </div>
        </div>
      </section>

      {/* ── 06 ₹0 platform ────────────────────────────────────────────────── */}
      <section className="case">
        <span className="eyebrow">Case study 06 · The ₹0 platform</span>
        <h3>How I helped build an operating platform at ₹0 infrastructure cost</h3>
        <p className="block-label">Problem</p>
        <p className="problem">
          The business needed real operational systems — running 24/7, unattended — without the
          budget for expensive infrastructure. The constraint was blunt: no cloud spend.
        </p>
        <p className="block-label">My role</p>
        <p className="role">
          Made the resourcefulness decisions: which free tiers to trust, what to self-host, and
          where reliability needed watchdogs instead of money.
        </p>
        <p className="block-label">What I shipped</p>
        <ul>
          <li>The whole platform on free tiers — an always-free cloud VM, free app hosting, a free managed database tier — combined deliberately, not by luck.</li>
          <li>30+ scheduled jobs: daily syncs, hourly snapshots, dispatch workers.</li>
          <li>Watchdogs that alert the team&apos;s Slack the moment any job goes stale — alerts instead of surprises.</li>
          <li>A self-hosted open-source CRM instead of per-seat SaaS, synced automatically from the billing systems.</li>
        </ul>
        <p className="block-label">Impact</p>
        <div className="stats">
          <div className="stat">
            <b>₹0</b>
            <span>monthly infrastructure and CRM licensing cost</span>
          </div>
          <div className="stat">
            <b>24/7</b>
            <span>unattended operation with monitoring</span>
          </div>
          <div className="stat">
            <b>30+</b>
            <span>scheduled jobs across the platform</span>
          </div>
        </div>
        <p className="block-label">Proof — constraints to result</p>
        <div className="flowbox">
          <FlowRow
            chips={[
              "Constraint: ₹0 budget",
              { label: "Decisions: free tiers + self-host", kind: "hot" },
              "Systems: jobs + watchdogs + CRM",
              { label: "Result: 24/7 at ₹0", kind: "hot" },
            ]}
          />
          <p className="flownote">
            The story here is business judgment, not a technology stack: every rupee not spent on
            infrastructure was a decision about what the business actually needed.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
