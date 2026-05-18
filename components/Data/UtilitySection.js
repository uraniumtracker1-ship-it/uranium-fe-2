import React from "react";
import * as s from "./styles";

const UtilitiesSection = () => {
  return (
    <section
      id="utilities"
      className={s.section}
      aria-label="Utilities contracting cycle"
    >
      <p style={s.secLabel}>Section F</p>
      <h2 style={s.h2}>
        Utilities &amp; the Contracting Cycle — How Nuclear Fuel Is Actually
        Bought
      </h2>
      <p style={s.lede}>
        The most important number in uranium is not the spot price. It is how
        many pounds of uranium utilities still need to buy for the next five
        years — their “uncovered requirements.” When that number is small,
        utilities are covered and can ignore the spot market entirely. When it
        is large, every utility is simultaneously calling every miner and asking
        the same question: what’s your long-term contract price? That
        competition is what drives uranium from $48/lb to $106/lb in less than
        three years. The spot market moves first; the long-term contract price
        follows as utilities exhaust willing sellers at lower levels.
      </p>

      {/* Chart 10: Utility coverage vs uncovered requirements */}
      <div style={s.cb}>
        <div style={s.cbHdr}>
          <div style={s.cbLabels}>
            <p style={s.cl}>
              UxC Uranium Market Outlook · Annual survey · Mlbs U3O8
            </p>
            <p style={s.ct}>
              Global Utility Coverage Ratio — Contracted vs Uncovered
              Requirements 2024–2035E
            </p>
            <p style={s.cm}>
              When uncovered requirements are large (red bars) → utilities must
              buy → structural demand surge
            </p>
          </div>
        </div>

        <div style={s.chartSvgWrap}>
          <svg
            viewBox="0 0 700 210"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%" }}
          >
            <text x="10" y="15" fontSize="9" fill={s.vars.muted}>
              Utility coverage (green) vs uncovered requirements (red) | Mlbs
              U3O8/yr | Illustrative
            </text>
            <text x="10" y="28" fontSize="8.5" fill={s.vars.ur}>
              ⚠ Schematic — replace with UxC data on implementation
            </text>

            {/* 2024 - 2031 Bars */}
            {[
              { yr: "2024", c: 120, u: 5, x: 25 },
              { yr: "2025", c: 110, u: 15, x: 80 },
              { yr: "2026", c: 100, u: 25, x: 135 },
              { yr: "2027", c: 85, u: 45, x: 190 },
              { yr: "2028", c: 70, u: 70, x: 245 },
              { yr: "2029", c: 60, u: 90, x: 300 },
              { yr: "2030", c: 50, u: 110, x: 355 },
              { yr: "2031", c: 40, u: 125, x: 410 },
            ].map((d, i) => (
              <g key={i}>
                <rect
                  x={d.x}
                  y={180 - d.c}
                  width="35"
                  height={d.c}
                  fill="#4CAF50"
                  rx="2"
                />
                <rect
                  x={d.x}
                  y={180 - d.c - d.u}
                  width="35"
                  height={d.u}
                  fill={s.vars.rxr}
                  rx="1"
                />
                <text x={d.x + 4} y="197" fontSize="7.5" fill={s.vars.muted}>
                  {d.yr}
                </text>
              </g>
            ))}

            {/* Legend */}
            <rect x="550" y="50" width="12" height="12" fill="#4CAF50" />
            <text x="566" y="60" fontSize="9" fill={s.vars.muted}>
              Contracted
            </text>
            <rect x="550" y="68" width="12" height="12" fill={s.vars.rxr} />
            <text x="566" y="78" fontSize="9" fill={s.vars.muted}>
              Uncovered requirements
            </text>
          </svg>
        </div>
      </div>

      <div style={s.calloutUr}>
        <span style={s.calloutIcon}>⚡</span>
        <div>
          <p style={s.calloutTitle}>
            The contracting cycle mechanism: why uranium bull markets are
            powerful
          </p>
          <p style={s.calloutText}>
            When coverage ratios drop below ~60% for Years 3–5, utilities
            typically begin new long-term contracting campaigns. Multiple
            utilities re-entering the market simultaneously — each needing to
            cover millions of pounds per year for a decade — creates demand
            surges that the spot market (which trades only ~25–30 Mlbs/yr in
            total) cannot absorb without significant price increases. This
            mechanism, not supply shortages alone, drove uranium from $7/lb to
            $136/lb in 2003–2007. The 2020–2024 cycle saw similar dynamics
            emerge as coverage ratios dropped and physical buyers (SPUT, Yellow
            Cake) competed with utilities for spot material.
          </p>
        </div>
        <div style={s.kf}>
          <p style={s.kfV} id="kf-spot">
            —
          </p>
          <p style={s.kfL}>U3O8 spot (current)</p>
        </div>
      </div>

      {/* Chart 11: Long-term contracting volume */}
      <div style={s.cb}>
        <div style={s.cbHdr}>
          <div style={s.cbLabels}>
            <p style={s.cl}>
              UxC Uranium Market Outlook · Annual · Mlbs committed under new LT
              contracts
            </p>
            <p style={s.ct}>Annual Long-Term Contracting Volume 2015–2025</p>
            <p style={s.cm}>
              Mlbs U3O8 committed under new long-term supply agreements per year
            </p>
          </div>
        </div>

        <div style={s.chartSvgWrap}>
          <svg
            viewBox="0 0 700 170"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%" }}
          >
            <line
              x1="10"
              y1="80"
              x2="690"
              y2="80"
              stroke="#E5E7EB"
              strokeDasharray="4,3"
            />
            <text x="5" y="78" fontSize="8" fill={s.vars.muted}>
              175
            </text>
            <text x="640" y="76" fontSize="8" fill={s.vars.rxr}>
              ← Annual reactor requirement
            </text>

            {/* Bars 2015-2025 */}
            <rect
              x="20"
              y="90"
              width="40"
              height="70"
              fill={s.vars.ur}
              rx="2"
            />
            <rect
              x="75"
              y="100"
              width="40"
              height="60"
              fill={s.vars.ur}
              rx="2"
            />
            <rect
              x="130"
              y="115"
              width="40"
              height="45"
              fill={s.vars.ur}
              rx="2"
              opacity=".7"
            />
            <rect
              x="185"
              y="120"
              width="40"
              height="40"
              fill={s.vars.ur}
              rx="2"
              opacity=".7"
            />
            <rect
              x="240"
              y="118"
              width="40"
              height="42"
              fill={s.vars.ur}
              rx="2"
              opacity=".7"
            />
            <rect
              x="295"
              y="108"
              width="40"
              height="52"
              fill={s.vars.ur}
              rx="2"
            />
            <rect
              x="350"
              y="90"
              width="40"
              height="70"
              fill={s.vars.ur}
              rx="2"
            />
            <rect
              x="405"
              y="75"
              width="40"
              height="85"
              fill={s.vars.ur}
              rx="2"
            />
            <rect
              x="460"
              y="80"
              width="40"
              height="80"
              fill={s.vars.ur}
              rx="2"
            />
            <rect
              x="515"
              y="85"
              width="40"
              height="75"
              fill={s.vars.ur}
              rx="2"
            />

            <text x="20" y="167" fontSize="8" fill={s.vars.muted}>
              2015
            </text>
            <text x="295" y="167" fontSize="8" fill={s.vars.muted}>
              2020
            </text>
            <text x="515" y="167" fontSize="8" fill={s.vars.muted}>
              2025E
            </text>

            <text x="10" y="15" fontSize="9" fill={s.vars.muted}>
              Mlbs U3O8 under new LT contracts | Dashed line = ~175 Mlbs annual
              reactor requirement
            </text>
            <text x="10" y="30" fontSize="8.5" fill={s.vars.ur}>
              ⚠ Schematic — replace with UxC data
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default UtilitiesSection;
