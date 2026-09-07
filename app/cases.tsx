"use client";

import { Fragment, useState } from "react";

type Case = {
  num: string;
  title: string;
  now: string;
  before: string;
  did: string;
  decision: string;
  today: string;
  flow: (string | { label: string; hot: true })[];
};

const cases: Case[] = [
  {
    num: "01",
    title: "Agreement operations ran on memory.",
    now: "A fragmented, manual process became a visible, simpler workflow.",
    before:
      "Agreement generation involved fragmented steps and unnecessary manual work — documents assembled by hand, status scattered across tools. Nobody could see which tenancies had a signed agreement or whose desk the unsigned one was sitting on.",
    did:
      "Centralized it: a coverage board that makes every agreement's status visible (signed, in-flight, missing, expired — ranked by who's blocking), two-click generation with the e-stamp attached automatically, and one-button nudges to the right person. Along the way, cut thousands of unnecessary API calls per refresh.",
    decision:
      "Make status visible before making anything faster. You can't fix a queue you can't see — visibility came first, automation second.",
    today:
      "Generation is two clicks, coverage is a glance, and chasing goes to the actual blocker instead of into the void.",
    flow: [
      "Fragmented + manual",
      { label: "Coverage board", hot: true },
      { label: "2-click generate", hot: true },
      "E-stamp",
      { label: "Visible + faster", hot: true },
    ],
  },
  {
    num: "02",
    title: "Rent collection was repetitive coordination.",
    now: "Automated the repetitive parts — kept humans in control of consequential ones.",
    before:
      "Every month meant the same cycle by hand: payment links minted one at a time, reminders sent from memory, late fees applied manually, gateway payouts reconciled by eye.",
    did:
      "Built monthly collection cycles with a day 1 / 5 / 6 / 8 communication ladder and full status visibility. The system computes stages, amounts and late fees on its own — but every outbound message is queued for a human to approve before it sends. Payment links always match the billed amount exactly, and reconciliation refuses to guess on ambiguity.",
    decision:
      "Don't automate rent collection — automate the repetitive parts while deliberately keeping human judgment over anything a customer receives. Speed where it's safe, control where it counts.",
    today:
      "Collections run on rails with zero wrong-amount links, every stage tracked, and exceptions surfaced instead of silently handled.",
    flow: [
      "Rent due",
      "Day 1",
      "Day 5",
      { label: "Day 6 + late fee", hot: true },
      { label: "Human approves every send", hot: true },
    ],
  },
  {
    num: "03",
    title: "Utility billing was a black hole.",
    now: "Scattered charge streams became one understandable bill — ₹2L+ collected since.",
    before:
      "Utility charges lived across multiple sources and workflows with poor visibility. The process behaved like a black hole: charges went in, uncertainty came out, followed by manual follow-up and payment confusion.",
    did:
      "Pulled the scattered data together into one clear billing workflow: one itemized bill per household, an approval queue before anything sends, automatic payment matching, reconciliation safeguards, and a kill switch above all outbound. Active collections are finally visible in one place.",
    decision:
      "One understandable bill beats five accurate-but-confusing charge streams. Consolidation was the real fix — automation just enforces it.",
    today:
      "Charges flow through a single pipeline — bill → approval → payment → reconciliation — with more than ₹2L collected through the improved process.",
    flow: [
      "Scattered charges",
      { label: "One bill", hot: true },
      { label: "Approval", hot: true },
      "Payment",
      { label: "Reconciliation", hot: true },
    ],
  },
  {
    num: "04",
    title: "Renewals were reactive conversations.",
    now: "Renewal became a structured operating process with a visible funnel.",
    before:
      "Renewals needed to happen at the right time, with the right offer — but they were hand-curated in a spreadsheet: pricing decided ad hoc, chasing improvised, and no visibility into who had even seen their offer.",
    did:
      "Turned renewal into a lifecycle: customers enter the flow automatically at month 11, get a personalised offer page with a computed rate ladder, and move through a tracked funnel — sent, opened, viewed, decided. Pricing is versioned so an edit can never silently reprice someone already contacted, and deadline guards make sure nobody defaults without being spoken to.",
    decision:
      "Treat renewal as an operating process with entry rules, deadlines and guards — not a conversation someone hopefully remembers to have.",
    today:
      "The renewal pipeline is visible months ahead. Right timing, right offer, tracked outcome — renew or move out, never by accident.",
    flow: [
      "Month 11",
      { label: "Auto-enter", hot: true },
      "Offer + ladder",
      "Tracked funnel",
      { label: "Deadline guard", hot: true },
      "Outcome",
    ],
  },
  {
    num: "05",
    title: "Sales ran on intuition.",
    now: "Found the constraint that actually mattered — it wasn't the funnel.",
    before:
      "Sales information lived across the CRM, the website, operations and inventory. The question wasn't “build a dashboard” — it was: what is actually driving sales, and where should we focus?",
    did:
      "Joined the data into one pipeline with honest attribution — a win credits the one home a customer actually signed, not every home they toured — and inventory freshness of about two minutes instead of meetings. Forecasting runs on a Monte Carlo simulation, chosen deliberately over a heavier model because it answered the business question better.",
    decision:
      "Stop optimizing the funnel and find the constraint. The data showed inventory — not sales effort — was the real limit on growth, which changed where the company focused.",
    today:
      "One view the team actually uses. Good analytics turned out not to be more charts — it's finding the number that changes a decision.",
    flow: [
      "Question",
      "Joined data",
      { label: "Honest attribution", hot: true },
      { label: "Constraint found", hot: true },
      "Decision",
    ],
  },
  {
    num: "06",
    title: "There was no software budget.",
    now: "Internal tooling that runs 24/7 at ₹0/month — by design, not luck.",
    before:
      "The operation needed internal tooling and automation — billing, collections, renewals, analytics, all running around the clock — without creating recurring software costs.",
    did:
      "Designed around the constraint: free-tier architecture combining an always-free cloud VM, free hosting and a free managed database; dozens of scheduled jobs doing the daily work; Slack watchdogs that flag anything stale; a self-hosted open-source CRM instead of per-seat SaaS.",
    decision:
      "Design around the actual constraint instead of assuming the solution required a software budget. Cost awareness is a design input, not an afterthought.",
    today:
      "The platform runs unattended, 24/7, with alerts instead of surprises — at a permanent cost of zero.",
    flow: [
      "₹0 budget",
      { label: "Free-tier design", hot: true },
      "Jobs + watchdogs",
      { label: "24/7 at ₹0/mo", hot: true },
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
              <span className="cta">{isOpen ? "Close" : "How it happened"}</span>
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
                  <div className="decision">
                    <h4>Key decision</h4>
                    <p>{c.decision}</p>
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
