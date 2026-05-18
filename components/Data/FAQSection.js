import React, { useState } from "react";
import * as s from "./styles";

const FAQItem = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={s.faqItem}>
      <button
        style={s.faqBtn}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span
          style={{
            ...s.faqArr,
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        >
          ▼
        </span>
      </button>
      <div
        style={{
          ...s.faqBody,
          display: isOpen ? "block" : "none",
          padding: "12px 18px",
          borderTop: `1px solid ${s.vars.bdr}`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

const FAQSection = () => {
  return (
    <section id="faq-section" className={s.section} aria-label="Uranium FAQ">
      <p style={s.secLabel}>Section P</p>
      <h2 style={s.h2}>Uranium Market FAQ</h2>

      <div style={s.faqWrap}>
        <FAQItem question="What is the current uranium spot price and where is it set?">
          Uranium does not trade on a central exchange like gold. The spot price
          is assessed weekly by <strong>UxC</strong> and{" "}
          <strong>TradeTech</strong>. The current spot is ~
          <strong>$83.90/lb</strong> (April 2026). The long-term contract price
          is currently assessed at ~<strong>$90/lb</strong>. The two prices
          often diverge based on the intensity of utility recontracting cycles.
        </FAQItem>

        <FAQItem question="Why does Kazakhstan control so much of the uranium market?">
          Kazakhstan holds the world’s largest reserves accessible via
          <strong>ISR (in-situ recovery)</strong>—the industry's lowest-cost
          method. Kazatomprom produces at approximately $15–$25/lb AISC.
          Kazakhstan currently accounts for ~43% of global mine production, and
          its logistical position between Western and Chinese markets makes it
          the critical "swing producer" of the decade.
        </FAQItem>

        <FAQItem question="What is SPUT and how does it affect the uranium price?">
          <strong>SPUT</strong> (Sprott Physical Uranium Trust, TSX:U.UN) is a
          trust that holds physical U3O8. As of April 2026, it holds ~
          <strong>81.2 Mlbs</strong>. By buying physical material off the spot
          market during periods of financial premium, it sequesters supply that
          would otherwise be available to utilities, acting as a primary driver
          of price discovery.
        </FAQItem>

        <FAQItem question="What did the US Russian uranium import ban mean for prices?">
          Effective August 2024, the ban forced US utilities to decouple from
          Russian enrichment services (which previously supplied 24% of US
          needs). This has created a "bifurcation" where Western-origin uranium
          and enrichment command a premium. While waivers exist through 2027,
          the market is structurally shifting toward Western security of supply.
        </FAQItem>

        <FAQItem question="What is the difference between spot and long-term contract prices?">
          The <strong>spot price</strong> is for delivery within 12 months in a
          thin market (~25M lbs/yr). The <strong>long-term price</strong> covers
          multi-year supply agreements (3–10 years). LT prices are what
          determine <strong>FID (Final Investment Decisions)</strong> for new
          mines; no major producer will build a new mine based purely on
          volatile spot pricing.
        </FAQItem>

        <FAQItem question="How do I invest in uranium?">
          Investors typically use <strong>URNM</strong> (Sprott Miners ETF) for
          broad exposure, <strong>NLR</strong> for a mix of miners and nuclear
          utilities, or <strong>CCJ</strong> (Cameco) for liquid, blue-chip
          equity exposure. Physical exposure is best achieved via{" "}
          <strong>SPUT</strong> or <strong>Yellow Cake (YCA)</strong>. Note that
          there is no "physical delivery" mechanism for retail investors.
        </FAQItem>
      </div>
    </section>
  );
};

export default FAQSection;
