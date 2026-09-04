import type { ReactNode } from "react";

// ── Fill these in ────────────────────────────────────────────────────────────
const NAME = "Sai Chetan";
const EMAIL = "psaichetan29@gmail.com";
// ─────────────────────────────────────────────────────────────────────────────

type Stat = { value: ReactNode; label: string };
type CaseStudy = {
  stage: string;
  title: string;
  leak: string;
  shipped: ReactNode[];
  stats: Stat[];
};

const tbd = (text: string) => <span className="tbd">{text}</span>;

const caseStudies: CaseStudy[] = [
  {
    stage: "Stage 1 · Move-in",
    title: "Lease agreements: from blind chasing to a live coverage board",
    leak:
      "Nobody could answer “which tenants actually have a signed agreement — and whose desk is the unsigned one sitting on?” Agreements were raised directly in the e-sign tool, status records were wrong for most tenancies, and generating one meant manual document assembly.",
    shipped: [
      "A live board joining the e-sign provider, onboarding forms, and the ops master sheet — every tenancy bucketed: signed, in-flight, missing, or expired, ranked by who is actually blocking.",
      "Two-click agreement generation: templates auto-filled, signature fields placed by measuring the actual PDF, and the government e-stamp attached with stamp duty computed automatically.",
      "One-button chasing: reminder, WhatsApp, and Slack DM to the exact person holding things up — with deliberate routing rules and a bulk-action cap.",
      "Reverse-engineered undocumented provider behaviour to cut roughly 2,000 wasted API calls per refresh — including reviving expired documents without losing signatures already collected.",
    ],
    stats: [
      { value: "~500", label: "active lease terms audited for coverage — gaps visible for the first time" },
      { value: "2 clicks", label: "to generate, stamp, and send an agreement that used to be assembled by hand" },
      { value: tbd("your number"), label: "unsigned agreements closed after launch" },
    ],
  },
  {
    stage: "Stage 2 · Every month",
    title: "Rent collection: a reminder ladder that never sends the wrong amount",
    leak:
      "Every month: mint a payment link per tenant by hand, chase over email and WhatsApp, apply late fees manually, and reconcile gateway payouts by eye against who owed what.",
    shipped: [
      "Rent cycles open automatically on the 1st; a staged reminder ladder follows on days 1, 5, 6, and 8 — with the late fee applied automatically on day 6.",
      "Every send is human-approved: automation only queues the message, a person clicks Send. Nothing ever reaches a tenant unsupervised.",
      "A payment link can never differ from the amount in the email — links are reused only on an exact amount match and re-minted the moment a late fee changes the total.",
      <>
        Reconciliation matches payments on identity <em>and</em> exact amount, handles split payments, and
        refuses to guess on ambiguity — wrong attribution is worse than manual review.
      </>,
    ],
    stats: [
      { value: "4-stage", label: "reminder ladder that used to be a calendar of manual chores" },
      { value: "0", label: "wrong-amount payment links — impossible by design, not by care" },
      { value: tbd("your number"), label: "hours saved per month on collections" },
    ],
  },
  {
    stage: "Stage 3 · Utilities",
    title: "Utility billing: a dozen spreadsheets into one bill per household",
    leak:
      "WiFi, electricity, water, background checks, and one-off charges lived across a dozen spreadsheet tabs. Each tenant's share was computed by hand; households renting multiple rooms got multiple confusing bills; reminders were ad-hoc.",
    shipped: [
      "A billing engine that consolidates every charge type into one itemized bill per household per cycle — one payment link, one email, one WhatsApp message, even across properties.",
      "A review-and-approve queue: ops sees every bill before it goes out, with bulk send and live progress tracking; a single kill switch can stop all outbound messaging instantly.",
      "An automated reminder cadence — gentler before move-in, firmer after — escalating unresolved cases to the team's Slack.",
      "Gateway payments auto-matched back to the right household's bill; safety systems hardened by real incidents: recipient snapshots, wipe guards, and duplicate-charge audits.",
    ],
    stats: [
      { value: "800+", label: "tenant households billed through one pipeline" },
      { value: "1 bill", label: "per household per cycle, replacing five separate charge streams" },
      { value: tbd("your number"), label: "drop in billing disputes / hours saved weekly" },
    ],
  },
  {
    stage: "Stage 4 · Month 11",
    title: "Renewals: a self-running campaign with a tracked funnel",
    leak:
      "Renewals were hand-curated in a spreadsheet: ops decided who was due, priced the escalation manually, chased over ad-hoc messages, and had no idea who had even seen their offer.",
    shipped: [
      "Tenants enter the renewal campaign automatically at month 11 of their stay — no one has to remember.",
      "Each tenant gets a personalised offer page with a computed rate ladder (lock-in tiers vs. flexible), delivered by email and WhatsApp, with the full funnel tracked: opened → clicked → viewed → confirmed.",
      "Confirmation writes the new rent and lock-in terms straight into the CRM — no re-typing, no drift.",
      "Pricing is versioned per tenant, so editing an offer ladder can never silently reprice people already emailed; missed deadlines auto-roll to the standard rate, guarded so nobody defaults without ever being contacted.",
    ],
    stats: [
      { value: "~140", label: "tenants moved through the live pipeline across monthly cohorts" },
      { value: "Full funnel", label: "visibility where before there was a spreadsheet and hope" },
      { value: tbd("your number"), label: "renewal-rate change since launch" },
    ],
  },
  {
    stage: "Stage 5 · Filling the rooms",
    title: "Sales intelligence: one view of leads, vacancy, and what actually converts",
    leak:
      "Leads lived in the sales tool, occupancy in spreadsheets, listings on the website. No single view of funnel health, no honest win attribution, and no answer to “which vacant rooms should we push today?”",
    shipped: [
      "An automated pipeline joining CRM, website, and operations data into team dashboards, refreshed daily — plus a live vacancy matrix refreshed every two minutes.",
      "Honest win attribution: each closed lead credits the one home they actually signed — not every home they toured — so property and channel performance stopped lying.",
      "A Monte Carlo gross-profit forecaster producing probability bands instead of a single gut-feel number. The simple simulation beat an ML model on accuracy.",
      "Self-healing plumbing: fetch retries, staleness self-checks, and deploy guards — the dashboards repair themselves before anyone notices.",
    ],
    stats: [
      { value: "2 min", label: "vacancy data freshness, from “check three spreadsheets”" },
      { value: "1 insight", label: "that redirected strategy: inventory — not sales effort — was the growth constraint" },
      { value: tbd("daily users"), label: "on the dashboards across sales and ops" },
    ],
  },
  {
    stage: "Stage 6 · Underneath it all",
    title: "The ₹0 platform: production infrastructure with no cloud budget",
    leak:
      "The mandate was blunt: no cloud spend. But everything above still has to run 24/7, unattended, and tell someone when it breaks.",
    shipped: [
      "The entire platform runs on free tiers — an always-free cloud VM, free app hosting, and a free managed Postgres tier — chosen and combined deliberately, not by luck.",
      "Dozens of scheduled jobs (daily syncs, hourly snapshots, a 15-second dispatch worker) with watchdogs that post to Slack the moment any job goes stale.",
      "A self-hosted open-source CRM instead of per-seat SaaS, synced automatically from the billing systems — renewal terms flow in on their own.",
    ],
    stats: [
      { value: "₹0", label: "monthly infrastructure and CRM licensing cost" },
      { value: "24/7", label: "unattended operation, with alerts instead of surprises" },
      { value: "30+", label: "scheduled jobs across the platform" },
    ],
  },
];

const tools = [
  { label: "Claude Code & AI build tools", ai: true },
  { label: "Google Workspace & Sheets" },
  { label: "WhatsApp Business API" },
  { label: "Slack automation" },
  { label: "Payment gateways" },
  { label: "e-Sign & e-Stamping" },
  { label: "Supabase / Postgres" },
  { label: "Metabase" },
  { label: "HubSpot" },
  { label: "Vercel & GCP free tiers" },
  { label: "Program management" },
  { label: "Sales operations" },
];

export default function Home() {
  return (
    <div className="wrap">
      <header>
        <span className="eyebrow">Sales Ops · Program Management · Automation</span>
        <h1>
          I find the leak.
          <br />
          Then I <span className="fix">ship the fix.</span>
        </h1>
        <p className="lede">
          I&apos;m not a software engineer — I&apos;m an operator. I find the process that&apos;s bleeding
          hours or money, design the fix end to end, and <strong>build it with AI tools</strong> into
          working software that a real team runs every day. Below: the operations platform I built solo
          for a Bengaluru rental-housing startup — billing, collections, agreements, renewals, and sales
          analytics — <span className="mark">running in production at ₹0 infrastructure cost</span>.
        </p>

        <div className="how">
          <div>
            <span className="step">Step 1</span>
            <h3>Find the leak</h3>
            <p>
              Live inside the operation. Spot where hours, money, or trust quietly drain away — the
              spreadsheet that eats a morning, the payment nobody chased.
            </p>
          </div>
          <div>
            <span className="step">Step 2</span>
            <h3>Design the fix</h3>
            <p>
              Map the real workflow: every edge case, every approval, every way it can go wrong. The
              spec is the skill — guardrails are designed before features.
            </p>
          </div>
          <div>
            <span className="step">Step 3</span>
            <h3>Ship it with AI</h3>
            <p>
              Build with AI coding tools, test against real operations, put it in production, and keep
              iterating. Judged only by outcomes.
            </p>
          </div>
        </div>
      </header>

      <section className="platform-intro">
        <span className="eyebrow">Case studies</span>
        <h2>One operator, the whole tenant lifecycle</h2>
        <p>
          Each system below replaced a manual process. They&apos;re ordered the way a tenant experiences
          them — from signing a lease to renewing it — with the sales engine that fills the rooms and
          the free infrastructure that keeps it all running.
        </p>
      </section>

      {caseStudies.map((cs) => (
        <section className="case" key={cs.title}>
          <span className="eyebrow">{cs.stage}</span>
          <h3>{cs.title}</h3>
          <p className="block-label">The leak</p>
          <p className="problem">{cs.leak}</p>
          <p className="block-label">What I shipped</p>
          <ul>
            {cs.shipped.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="block-label">Impact</p>
          <div className="stats">
            {cs.stats.map((stat, i) => (
              <div className="stat" key={i}>
                <b>{stat.value}</b>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="toolbelt">
        <span className="eyebrow">Toolbelt</span>
        <h2>The ecosystem I operate in</h2>
        <div className="chips">
          {tools.map((tool) => (
            <span className={tool.ai ? "chip ai" : "chip"} key={tool.label}>
              {tool.label}
            </span>
          ))}
        </div>
      </section>

      <footer>
        <span className="eyebrow">Contact</span>
        <h2>Have a leak worth finding?</h2>
        <p>
          I&apos;m {NAME} — currently running revenue operations at a Bengaluru rental-housing startup.
          If your team is drowning in manual work, I&apos;d love to talk.
        </p>
        <a className="cta" href={`mailto:${EMAIL}`}>
          Email me → <span className="email">{EMAIL}</span>
        </a>
      </footer>
    </div>
  );
}
