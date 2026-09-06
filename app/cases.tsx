"use client";

import { Fragment, useState } from "react";

type Case = {
  num: string;
  title: string;
  now: string;
  before: string;
  did: string;
  today: string;
  flow: (string | { label: string; hot: true })[];
};

const cases: Case[] = [
  {
    num: "01",
    title: "Agreements were chased blind.",
    now: "Now: one live board, two-click generation, automated e-stamping.",
    before:
      "Agreements were raised straight in the e-sign tool, so nobody could answer which tenancies actually had a signed lease — or whose desk the unsigned one was sitting on. Generating one meant assembling documents by hand.",
    did:
      "Built a live coverage board joining every source of truth, with each tenancy bucketed: signed, in-flight, missing, expired. Agreement generation became two clicks — template filled, signature fields placed, government e-stamp attached with the duty computed. One button nudges exactly the person blocking.",
    today:
      "Every agreement's status is visible at a glance, and the chase goes to the actual blocker — not into the void. Wasted API calls per refresh dropped by thousands along the way.",
    flow: [
      "Request",
      { label: "Coverage check", hot: true },
      { label: "2-click generate", hot: true },
      "E-stamp",
      { label: "Done", hot: true },
    ],
  },
  {
    num: "02",
    title: "Rent was chased by hand, every month.",
    now: "Now: a fixed reminder ladder run in clicks — 100% human-approved.",
    before:
      "Every month meant minting payment links one tenant at a time, chasing over email and WhatsApp from memory, applying late fees manually, and reconciling gateway payouts by eye.",
    did:
      "Shipped automatic monthly cycles with a staged ladder — day 1, 5, 6, 8, late fee applied automatically. Automation only queues; a human approves every single message before it goes out. Payment links can never differ from the billed amount, and reconciliation refuses to guess on ambiguity.",
    today:
      "Collections run on rails: zero wrong-amount links by design, every stage tracked, judgment kept with people while the system does the remembering.",
    flow: [
      "Rent due",
      "Day 1",
      "Day 5",
      { label: "Day 6 + late fee", hot: true },
      { label: "Day 8 final", hot: true },
    ],
  },
  {
    num: "03",
    title: "Utility billing was a dozen spreadsheets.",
    now: "Now: five charge streams collapse into one bill per household.",
    before:
      "WiFi, electricity, water, background checks and one-off charges lived across a dozen tabs. Shares were computed by hand, households renting multiple rooms got multiple confusing bills, reminders were improvised.",
    did:
      "Built a billing engine that consolidates everything into one itemized bill per household — one link, one email, one WhatsApp, even across properties. Ops reviews and approves every bill before it sends; payments auto-match back to the right household; one kill switch sits above all outbound messaging.",
    today:
      "Every tenant is billed through a single pipeline with human control on top. Disputes fell because every bill is one reviewed, itemized document.",
    flow: [
      "5 charge streams",
      { label: "1 household bill", hot: true },
      { label: "Human review", hot: true },
      "Payment",
      { label: "Auto-match", hot: true },
    ],
  },
  {
    num: "04",
    title: "Renewals arrived as emergencies.",
    now: "Now: they surface themselves at month 11, with a tracked funnel.",
    before:
      "Renewals were hand-curated in a spreadsheet — ops decided who was due, priced escalations ad hoc, and had no idea who had even seen their offer.",
    did:
      "Every tenant now enters the renewal workflow automatically at month 11. They get a personalised offer page with a computed rate ladder, and the funnel is tracked end to end: sent, opened, viewed, decided. Pricing is versioned so an edit can never silently reprice people already contacted; missed deadlines roll safely, never silently.",
    today:
      "Nobody defaults without being contacted, and the renewal pipeline is visible months ahead instead of surfacing as a fire drill.",
    flow: [
      "Month 11",
      { label: "Auto-enter", hot: true },
      "Offer + ladder",
      "Tracked funnel",
      { label: "Renew / move-out", hot: true },
    ],
  },
  {
    num: "05",
    title: "Sales ran on intuition.",
    now: "Now: signals — fresh data, honest attribution, real forecasts.",
    before:
      "Leads lived in the sales tool, occupancy in spreadsheets, listings on the website. “Where should we focus?” was answered by gut feel.",
    did:
      "Joined all of it into one pipeline. Win attribution credits the one home a lead actually signed — not every home they toured — so channel and property performance stopped lying. Vacancy data refreshes in minutes, not meetings. Forecasting runs on a Monte Carlo simulation I chose over an ML model — and it beat the ML model.",
    today:
      "The team opens one dashboard instead of reconciling three spreadsheets. The data surfaced the real growth constraint: inventory, not sales effort.",
    flow: [
      "Question",
      "Data",
      { label: "Attribution", hot: true },
      { label: "Forecast", hot: true },
      "Decision",
    ],
  },
  {
    num: "06",
    title: "There was no budget for any of this.",
    now: "Now: the whole platform runs 24/7 at ₹0 a month.",
    before:
      "The mandate was blunt: no cloud spend. But billing, collections, renewals and analytics still had to run around the clock, unattended.",
    did:
      "Architected everything onto free tiers — an always-free cloud VM, free hosting, a free managed database — combined deliberately. Dozens of scheduled jobs do the daily work, and watchdogs ping the team the moment anything goes stale. A self-hosted open-source CRM replaced per-seat SaaS entirely.",
    today:
      "24/7 operation with alerts instead of surprises, at a permanent infrastructure cost of zero. Resourcefulness as architecture.",
    flow: [
      "₹0 budget",
      { label: "Free tiers", hot: true },
      "Jobs + watchdogs",
      { label: "24/7 at ₹0", hot: true },
    ],
  },
];

export default function Cases() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="cards">
      {cases.map((c, i) => {
        const isOpen = open === i;
        return (
          <article className="pcard" data-open={isOpen} key={c.num}>
            <button
              className="pcard-face"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="num">{c.num}</span>
              <span className="txt">
                <h3>{c.title}</h3>
                <p className="now">{c.now}</p>
              </span>
              <span className="cta">{isOpen ? "Close" : "How I solved it"}</span>
            </button>
            <div className="pcard-body">
              <div className="pcard-inner">
                <div>
                  <div className="story">
                    <h4>Before</h4>
                    <p>{c.before}</p>
                  </div>
                  <div className="story">
                    <h4>What I did</h4>
                    <p>{c.did}</p>
                  </div>
                  <div className="story">
                    <h4>Today</h4>
                    <p>{c.today}</p>
                  </div>
                  <div className="flow">
                    {c.flow.map((f, j) => {
                      const label = typeof f === "string" ? f : f.label;
                      const cls = typeof f === "string" ? "fchip" : "fchip hot";
                      return (
                        <Fragment key={j}>
                          {j > 0 && (
                            <span className="farrow" aria-hidden="true">
                              →
                            </span>
                          )}
                          <span className={cls}>{label}</span>
                        </Fragment>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
