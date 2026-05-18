import React from "react";
import * as s from "./styles";

const HistorySection = () => {
  return (
    <section
      id="history"
      className={s.section}
      aria-label="Uranium price history"
    >
      <p style={s.secLabel}>Section K</p>
      <h2 style={s.h2}>
        Uranium Price History — Four Cycles, One Extraordinary Decade
      </h2>
      <p style={s.lede}>
        Uranium has had some of the most violent price cycles in commodity
        history. From $7/lb in 1998 to $136/lb in 2007. From $70/lb to $7/lb
        again after Fukushima. From $48/lb in 2020 to $106/lb in January 2024.
        Each cycle was driven by a specific mechanism — not random volatility.
        The 2003–2007 spike happened because the Megatons to Megawatts HEU
        downblend programme was set to end and no one had built new mines. The
        2011–2016 crash happened because Germany shut 17 reactors in 10 days.
        The 2021–2024 rally happened because SPUT entered the spot market as a
        buyer at the same time utilities started recontracting. Understanding
        the mechanism behind each cycle is what separates a thesis from a guess.
      </p>

      <div style={s.cb}>
        <div style={s.cbHdr}>
          <div style={s.cbLabels}>
            <p style={s.cl}>
              UxC spot price weekly · USD/lb U3O8 · 2000–present
            </p>
            <p style={s.ct}>
              U3O8 Spot Price History — Monthly Average 2000–2026
            </p>
            <p style={s.cm}>
              Four complete cycles · ATH $136/lb Jun 2007 · Fukushima crash
              2011–2016 · 2023–2024 recovery
            </p>
          </div>
          <div style={s.cbTabs}>
            <button style={{ ...s.tab, ...s.tabOn }}>All</button>
            <button style={s.tab}>2015+</button>
            <button style={s.tab}>2020+</button>
          </div>
        </div>

        <div style={s.chartSvgWrap}>
          <svg
            viewBox="0 0 700 230"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%" }}
          >
            <defs>
              <linearGradient id="historyGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={s.vars.ur} stopOpacity=".25" />
                <stop offset="100%" stopColor={s.vars.ur} stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Price Line Background Area */}
            <polygon
              points="10,200 40,198 70,190 100,165 130,130 160,75 190,145 220,160 250,175 280,195 300,200 330,205 360,205 390,200 420,190 450,170 480,145 510,125 540,110 560,100 580,90 610,85 650,85 690,87 690,220 10,220"
              fill="url(#historyGrad)"
            />

            {/* Price Polyline */}
            <polyline
              points="10,200 40,198 70,190 100,165 130,130 160,75 190,145 220,160 250,175 280,195 300,200 330,205 360,205 390,200 420,190 450,170 480,145 510,125 540,110 560,100 580,90 610,85 650,85 690,87"
              fill="none"
              stroke={s.vars.ur}
              strokeWidth="2.5"
            />

            {/* Event Markers & Annotations */}
            <circle cx="160" cy="75" r="5" fill="#FCD34D" stroke={s.vars.ur} />
            <text x="163" y="69" fontSize="8.5" fill="#92400E" fontWeight="600">
              $136 ATH Jun '07
            </text>

            <line
              x1="250"
              y1="10"
              x2="250"
              y2="175"
              stroke={s.vars.rxr}
              strokeWidth="1"
              strokeDasharray="4,3"
            />
            <text x="254" y="25" fontSize="8" fill={s.vars.rxr}>
              Fukushima ↓
            </text>
            <text x="254" y="35" fontSize="7" fill={s.vars.rxr}>
              Mar 2011
            </text>

            <circle cx="360" cy="205" r="4" fill={s.vars.rxr} />
            <text x="335" y="218" fontSize="8" fill={s.vars.rxr}>
              $7 '16
            </text>

            <line
              x1="500"
              y1="10"
              x2="500"
              y2="145"
              stroke="#3B82F6"
              strokeWidth="1"
              strokeDasharray="4,3"
            />
            <text x="503" y="25" fontSize="8" fill="#3B82F6">
              SPUT IPO
            </text>
            <text x="503" y="35" fontSize="7" fill="#3B82F6">
              Sep 2021
            </text>

            <circle
              cx="555"
              cy="108"
              r="5"
              fill={s.vars.ur}
              stroke="#fff"
              strokeWidth="1.5"
            />
            <text
              x="560"
              y="103"
              fontSize="8.5"
              fill="#B45309"
              fontWeight="600"
            >
              $106 Jan '24
            </text>

            <circle
              cx="690"
              cy="87"
              r="5"
              fill={s.vars.ur}
              stroke="#fff"
              strokeWidth="1.5"
            />
            <text x="10" y="15" fontSize="9" fill={s.vars.muted}>
              2000 → 2026 | USD/lb U3O8 spot (UxC weekly)
            </text>
          </svg>
        </div>
      </div>

      <h3 style={s.h3}>Annual price history by cycle</h3>
      <div className="overflow-x-auto">
        <table className="min-w-[800px]" style={s.ctbl}>
          <thead>
            <tr>
              <th style={s.ctblTh}>Period</th>
              <th style={{ ...s.ctblTh, color: s.vars.ur }}>
                Approx. range ($/lb)
              </th>
              <th style={s.ctblTh}>Key driver</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                p: "1998–2004",
                r: "$7–$20",
                d: "Post-Cold War uranium glut; Soviet stockpiles flood market. Industry at distressed prices.",
              },
              {
                p: "2004–2007",
                r: "$20–$136",
                d: "Cigar Lake flooding (2006), anticipation of end of HEU programme. Largest speculative move.",
              },
              {
                p: "2007–2011",
                r: "$40–$75",
                d: "Correction from high. Demand thesis intact until Fukushima eve ($75/lb).",
              },
              {
                p: "2011–2016",
                r: "$7–$52",
                d: "Fukushima disaster. German exit and Japanese shutdowns create demand destruction.",
              },
              {
                p: "2016–2021",
                r: "$18–$50",
                d: "Slow recovery. Kazatomprom production cuts. SPUT IPO (Sep 2021) starts sustained rise.",
              },
              {
                p: "2021–2024",
                r: "$32–$106",
                d: "Physical buying by SPUT/Yellow Cake. Utility recontracting. Ukraine war supply fears.",
              },
              {
                p: "2024–present",
                r: "$79–$86",
                d: "Correction from $106. US/Russian trade bans effective. Market digests supply recovery.",
              },
            ].map((row, i) => (
              <tr key={i}>
                <td style={s.ctblTd}>{row.p}</td>
                <td style={{ ...s.ctblTd, fontWeight: "600" }}>{row.r}</td>
                <td style={s.ctblTd}>{row.d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default HistorySection;
