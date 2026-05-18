import React from "react";
import * as s from "./styles";

const BalanceSection = () => {
  return (
    <section
      id="balance"
      className={s.section}
      aria-label="Uranium supply demand balance"
    >
      <p style={s.secLabel}>Section I</p>
      <h2 style={s.h2}>
        Uranium Supply vs Demand Balance — The Structural Gap
      </h2>
      <p style={s.lede}>
        The gap between what miners produce and what reactors consume has been
        the defining arithmetic of the uranium market for the past two decades.
        Mine production has never, in any recent year, fully covered reactor
        demand without secondary supply bridging the difference. As secondary
        supply sources shrink and reactor demand grows, the structural deficit
        gets harder to paper over. The charts and table below show how the
        consensus of institutions models that gap through 2035.
      </p>

      <div style={s.cb}>
        <div style={s.cbHdr}>
          <div style={s.cbLabels}>
            <p style={s.cl}>IEA · World Nuclear Association · UxC · Annual</p>
            <p style={s.ct}>
              Global Uranium Supply vs Demand Balance 2020–2035E
            </p>
            <p style={s.cm}>
              Mine production + secondary supply (amber) vs reactor demand (red)
              · Mlbs U3O8
            </p>
          </div>
          <div style={s.cbTabs}>
            <button style={{ ...s.tab, ...s.tabOn }}>2020–2030</button>
            <button style={s.tab}>2020–2035</button>
          </div>
        </div>

        <div style={s.chartSvgWrap}>
          <svg
            viewBox="0 0 700 210"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%" }}
          >
            <defs>
              <linearGradient id="gapGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={s.vars.rxr} stopOpacity=".15" />
                <stop offset="100%" stopColor={s.vars.rxr} stopOpacity=".04" />
              </linearGradient>
            </defs>
            <text x="10" y="15" fontSize="9" fill={s.vars.muted}>
              Mlbs U3O8 | Supply (mine + secondary) vs reactor demand
            </text>

            {/* Mine production area (Amber) */}
            <polygon
              points="10,130 80,128 150,125 220,122 290,118 360,115 430,112 500,108 570,104 640,100 640,195 10,195"
              fill="rgba(245,158,11,0.15)"
            />
            <polyline
              points="10,130 80,128 150,125 220,122 290,118 360,115 430,112 500,108 570,104 640,100"
              fill="none"
              stroke={s.vars.ur}
              strokeWidth="2"
            />

            {/* Secondary supply (lighter amber) */}
            <polygon
              points="10,105 80,104 150,102 220,100 290,100 360,102 430,105 500,107 570,108 640,110 640,130 570,125 500,122 430,118 360,115 290,112 220,110 150,115 80,118 10,120"
              fill="rgba(180,83,9,0.12)"
            />

            {/* Reactor demand line (Red) */}
            <polyline
              points="10,120 80,118 150,115 220,112 290,108 360,100 430,90 500,78 570,65 640,50"
              fill="none"
              stroke={s.vars.rxr}
              strokeWidth="2.5"
            />

            {/* Gap fill */}
            <polygon
              points="430,90 500,78 570,65 640,50 640,100 570,104 500,108 430,112"
              fill="url(#gapGrad)"
            />
            <text x="520" y="80" fontSize="9" fill="#C0392B" fontWeight="600">
              Supply gap
            </text>

            <text x="10" y="200" fontSize="8" fill={s.vars.muted}>
              2020
            </text>
            <text x="360" y="200" fontSize="8" fill={s.vars.muted}>
              2027
            </text>
            <text x="620" y="200" fontSize="8" fill={s.vars.muted}>
              2035E
            </text>

            <line
              x1="10"
              y1="5"
              x2="20"
              y2="5"
              stroke={s.vars.ur}
              strokeWidth="2"
            />
            <text x="24" y="8" fontSize="8.5" fill={s.vars.muted}>
              Mine production
            </text>
            <line
              x1="10"
              y1="17"
              x2="20"
              y2="17"
              stroke={s.vars.rxr}
              strokeWidth="2.5"
            />
            <text x="24" y="20" fontSize="8.5" fill={s.vars.muted}>
              Reactor demand
            </text>
          </svg>
        </div>
      </div>

      <h3 style={s.h3}>Institutional price forecasts (Updated April 2026)</h3>
      <div style={s.tblWrap}>
        <table className="min-w-[800px]" style={s.ctbl}>
          <thead>
            <tr>
              <th style={s.ctblTh}>Institution</th>
              <th style={{ ...s.ctblTh, color: s.vars.ur }}>
                2026E spot ($/lb)
              </th>
              <th style={s.ctblTh}>2027E</th>
              <th style={s.ctblTh}>2030E</th>
              <th style={s.ctblTh}>Key swing assumption</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={s.ctblTd}>UxC / TradeTech</td>
              <td style={s.ctblTd}>$82–$101</td>
              <td style={s.ctblTd}>$90–$115</td>
              <td style={s.ctblTd}>$110–$140</td>
              <td>Utility recontracting pace; Kazatomprom RKAB quotas</td>
            </tr>
            <tr>
              <td style={s.ctblTd}>Bank of America / Citi</td>
              <td style={s.ctblTd}>$90–$135</td>
              <td style={s.ctblTd}>$115–$150</td>
              <td style={s.ctblTd}>$120–$160</td>
              <td>Financial buyer inflows; Russia-US export bifurcation</td>
            </tr>
            <tr>
              <td style={s.ctblTd}>WNA / IEA</td>
              <td style={s.ctblTd}>$75–$95</td>
              <td style={s.ctblTd}>$85–$110</td>
              <td style={s.ctblTd}>$100–$135</td>
              <td>China new build pace; SMR commercialization timelines</td>
            </tr>
            <tr>
              <td style={s.ctblTd}>Fitch Solutions / BMI</td>
              <td style={s.ctblTd}>$80–$95</td>
              <td style={s.ctblTd}>$85–$105</td>
              <td style={s.ctblTd}>$95–$120</td>
              <td>Kazakh logistics; Iran/Middle East supply disruption risk</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 style={s.h3}>Price scenario analysis</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div style={{ ...s.fcCard, ...s.fcBull }}>
          <p style={{ ...s.fcTag, color: s.vars.kaz }}>
            🟢 Bull — $120+/lb by 2027
          </p>
          <p style={s.fcPrice}>$120–$150/lb</p>
          <p style={s.fcText}>
            Kazatomprom supply shocks continue. Russia bans exports to West
            permanently. AI-driven data center demand leads to early reactor
            life extensions. Sprott (SPUT) maintains massive NAV premium.
          </p>
          <p style={s.fcNote}>
            Requires continued supply constraints + AI demand surge
          </p>
        </div>
        <div style={{ ...s.fcCard, ...s.fcBase }}>
          <p style={{ ...s.fcTag, color: s.vars.ur }}>
            🔵 Base — $85–$110/lb by 2027
          </p>
          <p style={s.fcPrice}>$85–$110/lb</p>
          <p style={s.fcText}>
            Gradual structural tightening. Kazatomprom meets 2026 guidance.
            Utility contracting remains steady at ~120M lbs/yr. New mine
            projects (Dasa, Tiris) reach commissioning on time.
          </p>
          <p style={s.fcNote}>Current institutional consensus</p>
        </div>
        <div style={{ ...s.fcCard, ...s.fcBear }}>
          <p style={{ ...s.fcTag, color: s.vars.rxr }}>
            🔴 Bear — Range-bound $65–$80/lb
          </p>
          <p style={s.fcPrice}>$65–$80/lb</p>
          <p style={s.fcText}>
            Kazakh production surprises to upside. Geopolitical tensions ease,
            allowing Russian flow through workarounds. Reactor build delays in
            China. Financial buyers become net sellers to meet redemptions.
          </p>
          <p style={s.fcNote}>Requires KAP supply normalized + China delays</p>
        </div>
      </div>
    </section>
  );
};

export default BalanceSection;
