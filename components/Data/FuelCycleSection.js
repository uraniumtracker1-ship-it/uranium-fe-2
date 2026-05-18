import React from "react";
import * as s from "./styles";

const FuelCycleSection = () => {
  return (
    <section
      id="fuel-cycle"
      className={s.section}
      aria-label="Nuclear fuel cycle"
    >
      <p style={s.secLabel}>Section B</p>
      <h2 style={s.h2}>The Nuclear Fuel Cycle — Where Uranium Fits</h2>
      <p style={s.lede}>
        Before you can make sense of the uranium market, you need to see it as
        what it actually is: a six-stage industrial chain, not a single
        commodity. Uranium comes out of the ground as yellowcake. Then it gets
        converted to a gas (UF6). Enriched. Fabricated into fuel rods. Loaded
        into a reactor. Each stage has its own price, its own supply chain, and
        its own chokepoints. Investors who focus only on the mine price and
        ignore conversion and enrichment miss half the story — and the post-2022
        SWU price spike was more explosive than the uranium price itself.
      </p>

      <div style={s.fuelCycle}>
        <div style={s.fcStepUr}>
          <p style={s.fcNum}>1</p>
          <p style={s.fcName}>Mining</p>
          <p style={s.fcSub}>U3O8 ore → yellowcake</p>
          <p style={{ marginTop: "4px", fontSize: "10px", color: s.vars.urD }}>
            Price: UxC spot
          </p>
        </div>
        <p style={s.fcArr}>›</p>

        <div style={s.fcStep}>
          <p style={s.fcNum}>2</p>
          <p style={s.fcName}>Conversion</p>
          <p style={s.fcSub}>U3O8 → UF6 gas</p>
          <p
            style={{ marginTop: "4px", fontSize: "10px", color: s.vars.muted }}
          >
            ~$22/kgU
          </p>
        </div>
        <p style={s.fcArr}>›</p>

        <div style={s.fcStep}>
          <p style={s.fcNum}>3</p>
          <p style={s.fcName}>Enrichment</p>
          <p style={s.fcSub}>Natural UF6 → enriched</p>
          <p
            style={{ marginTop: "4px", fontSize: "10px", color: s.vars.muted }}
          >
            ~$155/SWU
          </p>
        </div>
        <p style={s.fcArr}>›</p>

        <div style={s.fcStep}>
          <p style={s.fcNum}>4</p>
          <p style={s.fcName}>Fuel Fabrication</p>
          <p style={s.fcSub}>Enriched UF6 → fuel pellets</p>
          <p
            style={{ marginTop: "4px", fontSize: "10px", color: s.vars.muted }}
          >
            Westinghouse, GNF
          </p>
        </div>
        <p style={s.fcArr}>›</p>

        <div style={s.fcStepUr}>
          <p style={s.fcNum}>5</p>
          <p style={s.fcName}>Reactor</p>
          <p style={s.fcSub}>Fuel → electricity</p>
          <p style={{ marginTop: "4px", fontSize: "10px", color: s.vars.urD }}>
            440 LWR units global
          </p>
        </div>
        <p style={s.fcArr}>›</p>

        <div style={s.fcStep}>
          <p style={s.fcNum}>6</p>
          <p style={s.fcName}>Spent Fuel</p>
          <p style={s.fcSub}>Storage + reprocessing</p>
          <p
            style={{ marginTop: "4px", fontSize: "10px", color: s.vars.muted }}
          >
            Secondary supply
          </p>
        </div>
      </div>

      {/* Callout Section */}
      <div style={s.calloutUr}>
        <span style={s.calloutIcon}>⚡</span>
        <div>
          <p style={s.calloutTitle}>
            Why uranium price recoveries lag mine economics
          </p>
          <p style={s.calloutText}>
            The fuel cycle means utilities sign contracts 18–36 months before
            delivery. A utility buying fuel today for a reactor loading in 2027
            is signing contracts now — at long-term contract prices, not spot.
            When utilities are well-covered, spot demand evaporates. When they
            are under-contracted, they enter the spot market aggressively. The
            swing from “covered” to “uncovered” is the primary driver of uranium
            bull cycles — not mine supply alone.
          </p>
        </div>
      </div>

      {/* Chart 4: Indexed Fuel Cycle Prices */}
      <div style={s.cb}>
        <div style={s.cbHdr}>
          <div style={s.cbLabels}>
            <p style={s.cl}>TradeTech / UxC · Weekly · Indexed (2020 = 100)</p>
            <p style={s.ct}>Uranium vs Fuel Cycle Component Prices — Indexed</p>
            <p style={s.cm}>
              U3O8 spot (amber) · Conversion UF6 (teal) · Enrichment SWU
              (purple) · All indexed to 2020 = 100
            </p>
          </div>
          <div style={s.cbTabs}>
            <button style={s.tabOn}>5Y</button>
          </div>
        </div>

        <div style={s.chartSvgWrap}>
          <svg
            viewBox="0 0 700 190"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%" }}
          >
            <line
              x1="0"
              y1="150"
              x2="700"
              y2="150"
              stroke="#E5E7EB"
              strokeWidth="1"
            />
            <text x="5" y="148" fontSize="9" fill="#9CA3AF">
              100
            </text>

            {/* U3O8 Line (Amber) */}
            <polyline
              points="0,150 80,145 160,135 240,120 320,90 400,70 480,75 560,72 620,68 700,70"
              fill="none"
              stroke={s.vars.ur}
              strokeWidth="2.5"
            />

            {/* Conversion Line (Teal) */}
            <polyline
              points="0,150 80,147 160,142 240,130 320,115 400,95 480,90 560,88 620,87 700,85"
              fill="none"
              stroke={s.vars.kaz}
              strokeWidth="2"
            />

            {/* SWU Line (Purple) */}
            <polyline
              points="0,150 80,148 160,143 240,125 320,100 400,60 480,50 560,48 620,46 700,45"
              fill="none"
              stroke={s.vars.lt}
              strokeWidth="2"
            />

            <text x="10" y="15" fontSize="7" fill="#9CA3AF">
              2020=100 index | Spot U3O8 (amber) · Conversion (teal) · SWU
              enrichment (purple)
            </text>
            <text x="640" y="66" fontSize="8" fill={s.vars.ur}>
              U3O8
            </text>
            <text x="640" y="82" fontSize="8" fill={s.vars.kaz}>
              Conv
            </text>
            <text x="640" y="42" fontSize="8" fill={s.vars.lt}>
              SWU
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default FuelCycleSection;
