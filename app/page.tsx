import Cases from "./cases";
import { CloseCta, FieldNav } from "./ui";

export default function Home() {
  return (
    <>
      <div className="field">
        <FieldNav />
        <div className="wrap">
          <header className="hero">
            <span className="chip">Demand × Operations × Automation</span>
            <h1>
              <span className="ghost">Chetan</span>
              <span className="solid">Sai</span>
            </h1>
            <p className="line">
              I turn messy business problems into <em>systems that actually run</em>. Operator
              first — I ship the fix with AI tools.
            </p>
          </header>
        </div>
      </div>

      <section className="proof wrap">
        <span className="kicker">The short version</span>
        <div className="multiples">
          <div>
            <b>10x</b>
            <span>the business grew tenfold during my tenure</span>
          </div>
          <div>
            <b>95%+</b>
            <span>occupancy held while supply grew 10x</span>
          </div>
          <div>
            <b>9/10</b>
            <span>of everyone who ever rented moved in on my watch</span>
          </div>
          <div>
            <b>₹0</b>
            <span>monthly cost of the systems behind it all</span>
          </div>
        </div>
      </section>

      <section className="work wrap" id="work">
        <span className="kicker">The proof</span>
        <h2>Six problems, killed.</h2>
        <p className="hint">Each one ran on spreadsheets and memory. Press one to see how it got solved.</p>
        <Cases />
      </section>

      <CloseCta heading="Have a messy problem?" />
    </>
  );
}
