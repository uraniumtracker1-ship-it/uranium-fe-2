import React from "react";
import * as s from "./styles";

const KazakhstanSection = () => {
  return (
    <section
      id="kazakhstan"
      className={s.section}
      aria-label="Kazatomprom and Kazakhstan uranium supply"
    >
      <p style={s.secLabel}>Section C</p>
      <h2 style={s.h2}>
        Kazakhstan: 43% of World Supply — One Country, One Company
      </h2>
      <p style={s.lede}>
        Kazakhstan produces 43% of the world’s uranium. One company —
        Kazatomprom, state-owned — controls most of that. When Kazatomprom’s
        government sets annual RKAB mine quotas, it is effectively setting a
        supply ceiling for nearly half the world’s uranium output. No OPEC
        member has wielded equivalent power over their commodity since the
        1970s. This section covers Kazatomprom’s production trajectory, the RKAB
        mechanism, and the logistics question that keeps utility fuel buyers
        awake at night: how do you get Kazakh uranium to Western reactors
        without it transiting Russia?
      </p>

      <div style={s.cb}>
        <div style={s.cbHdr}>
          <div style={s.cbLabels}>
            <p style={s.cl}>
              Kazatomprom annual reports · 100% basis · Mlbs U3O8
            </p>
            <p style={s.ct}>
              Kazatomprom Annual Production 2015–2025 (Mlbs U3O8, 100% basis)
            </p>
            <p style={s.cm}>
              FY2025: <span style={s.kazC}>67.18 Mlbs</span> (100% basis,
              +10–11% YoY) · FY2025 Cameco share of Inkai JV: 8.4 Mlbs ·
              "Nameplate −20%" policy 2022–2023
            </p>
          </div>
          <div style={s.cbTabs}>
            <button style={s.tabOn}>FY</button>
          </div>
        </div>

        <div style={s.chartSvgWrap}>
          <svg
            viewBox="0 0 700 190"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%" }}
          >
            <defs>
              <pattern
                id="hatch"
                patternUnits="userSpaceOnUse"
                width="6"
                height="6"
              >
                <path
                  d="M0,6 l6,-6"
                  stroke={s.vars.rxr}
                  strokeWidth="1"
                  opacity=".4"
                />
              </pattern>
            </defs>
            {/* 2016-2024 Bars */}
            <rect
              x="30"
              y="80"
              width="40"
              height="100"
              fill={s.vars.kaz}
              rx="3"
            />
            <rect
              x="95"
              y="75"
              width="40"
              height="105"
              fill={s.vars.kaz}
              rx="3"
            />
            <rect
              x="160"
              y="65"
              width="40"
              height="115"
              fill={s.vars.kaz}
              rx="3"
            />
            <rect
              x="225"
              y="60"
              width="40"
              height="120"
              fill={s.vars.kaz}
              rx="3"
            />
            {/* Cut period (Hatched) */}
            <rect
              x="290"
              y="65"
              width="40"
              height="115"
              fill="url(#hatch)"
              rx="3"
              stroke={s.vars.kaz}
              strokeWidth="1.5"
            />
            <rect
              x="355"
              y="68"
              width="40"
              height="112"
              fill="url(#hatch)"
              rx="3"
              stroke={s.vars.kaz}
              strokeWidth="1.5"
            />

            <rect
              x="420"
              y="55"
              width="40"
              height="125"
              fill={s.vars.kaz}
              rx="3"
            />
            <rect
              x="485"
              y="52"
              width="40"
              height="128"
              fill={s.vars.kaz}
              rx="3"
            />
            <rect
              x="550"
              y="50"
              width="40"
              height="130"
              fill={s.vars.kaz}
              rx="3"
            />
            {/* 2025 Peak Bar */}
            <rect
              x="615"
              y="20"
              width="40"
              height="160"
              fill={s.vars.kaz}
              rx="3"
            />

            <text
              x="615"
              y="15"
              fontSize="9"
              fill={s.vars.kazD}
              fontWeight="bold"
            >
              67.18
            </text>
            <text x="617" y="188" fontSize="8" fill={s.vars.muted}>
              2025
            </text>

            <line
              x1="285"
              y1="10"
              x2="285"
              y2="180"
              stroke={s.vars.rxr}
              strokeWidth="1.5"
              strokeDasharray="5,3"
            />
            <line
              x1="400"
              y1="10"
              x2="400"
              y2="180"
              stroke={s.vars.rxr}
              strokeWidth="1.5"
              strokeDasharray="5,3"
            />

            <text x="290" y="20" fontSize="8.5" fill="#C0392B">
              ↓ Nameplate−20% policy
            </text>
            <text x="10" y="188" fontSize="8" fill={s.vars.muted}>
              2016
            </text>
            <text x="10" y="15" fontSize="9" fill={s.vars.muted}>
              Mlbs U3O8 (100% basis) | Red hatching = −20% nameplate policy
            </text>
          </svg>
        </div>
      </div>

      <div style={s.statBand} className="">
        <div style={s.stat}>
          <p style={{ ...s.statVal, color: s.vars.kazD }}>67.18</p>
          <p style={s.statLbl}>FY2025 Mlbs (100%)</p>
          <p style={s.statSub}>+10–11% vs FY2024</p>
        </div>
        <div style={s.stat}>
          <p style={{ ...s.statVal, color: s.vars.kazD }}>~43%</p>
          <p style={s.statLbl}>World share</p>
          <p style={s.statSub}>Mine production 2024</p>
        </div>
        <div style={s.stat}>
          <p style={{ ...s.statVal, color: s.vars.sec }}>Trans-Caspian</p>
          <p style={s.statLbl}>Export route</p>
          <p style={s.statSub}>Bypass route via Caspian</p>
        </div>
        <div style={s.stat}>
          <p style={{ ...s.statVal, color: s.vars.lt }}>13+</p>
          <p style={s.statLbl}>Active JV mines</p>
          <p style={s.statSub}>All ISR method</p>
        </div>
      </div>

      {/* Chart 6: KAP production guidance vs actual */}
      <div style={s.cb}>
        <div style={s.cbHdr}>
          <div style={s.cbLabels}>
            <p style={s.cl}>
              Kazatomprom guidance & actuals · Annual · Mlbs U3O8
            </p>
            <p style={s.ct}>
              Kazatomprom Guidance vs Actual Production 2020–2025
            </p>
            <p style={s.cm}>
              Guidance misses are market-moving events — watch initial guidance
              vs revised guidance vs actual
            </p>
          </div>
        </div>

        <div style={s.chartSvgWrap}>
          <svg
            viewBox="0 0 700 170"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%" }}
          >
            {/* 2021 */}
            <rect
              x="30"
              y="90"
              width="30"
              height="70"
              fill="#D1FAE5"
              stroke={s.vars.kaz}
              strokeWidth="1.5"
              rx="2"
            />
            <rect
              x="63"
              y="88"
              width="30"
              height="72"
              fill={s.vars.kaz}
              rx="2"
            />
            {/* 2022 */}
            <rect
              x="130"
              y="85"
              width="30"
              height="75"
              fill="#D1FAE5"
              stroke={s.vars.kaz}
              strokeWidth="1.5"
              rx="2"
            />
            <rect
              x="163"
              y="92"
              width="30"
              height="68"
              fill={s.vars.kaz}
              rx="2"
            />
            {/* 2023 */}
            <rect
              x="230"
              y="90"
              width="30"
              height="70"
              fill="#D1FAE5"
              stroke={s.vars.kaz}
              strokeWidth="1.5"
              rx="2"
            />
            <rect
              x="263"
              y="93"
              width="30"
              height="67"
              fill={s.vars.kaz}
              rx="2"
            />
            {/* 2024 */}
            <rect
              x="330"
              y="75"
              width="30"
              height="85"
              fill="#D1FAE5"
              stroke={s.vars.kaz}
              strokeWidth="1.5"
              rx="2"
            />
            <rect
              x="363"
              y="78"
              width="30"
              height="82"
              fill={s.vars.kaz}
              rx="2"
            />
            {/* 2025 */}
            <rect
              x="430"
              y="60"
              width="30"
              height="100"
              fill="#D1FAE5"
              stroke={s.vars.kaz}
              strokeWidth="1.5"
              rx="2"
            />
            <rect
              x="463"
              y="55"
              width="30"
              height="105"
              fill={s.vars.kaz}
              rx="2"
            />

            <text x="30" y="168" fontSize="8" fill={s.vars.muted}>
              2021
            </text>
            <text x="130" y="168" fontSize="8" fill={s.vars.muted}>
              2022
            </text>
            <text x="230" y="168" fontSize="8" fill={s.vars.muted}>
              2023
            </text>
            <text x="330" y="168" fontSize="8" fill={s.vars.muted}>
              2024
            </text>
            <text x="430" y="168" fontSize="8" fill={s.vars.muted}>
              2025
            </text>

            <rect
              x="560"
              y="20"
              width="12"
              height="12"
              fill="#D1FAE5"
              stroke={s.vars.kaz}
              strokeWidth="1.5"
            />
            <text x="576" y="30" fontSize="9" fill={s.vars.muted}>
              Guidance
            </text>
            <rect x="560" y="38" width="12" height="12" fill={s.vars.kaz} />
            <text x="576" y="48" fontSize="9" fill={s.vars.muted}>
              Actual
            </text>

            <text x="10" y="15" fontSize="9" fill={s.vars.muted}>
              Guidance (outlined) vs actual (solid) | Mlbs U3O8 100% basis
            </text>
          </svg>
        </div>
      </div>

      <p style={s.lede}>
        <strong>Kazatomprom export logistics: the Russia transit risk.</strong>{" "}
        Until the Trans-Caspian International Transport Route (Middle Corridor)
        was established, essentially all Kazakh uranium exports transited Russia
        via rail. Post-2022, Kazatomprom has been actively re-routing exports
        via the Caspian Sea to Azerbaijan and Georgia, then onward. This route
        is longer and more expensive but eliminates Russian transit dependency.
        The transition is not fully complete — Russian transit of uranium was
        not explicitly banned under Western sanctions as of time of writing, but
        Western utilities have been reducing their reliance on it. Monitor
        Kazatomprom’s quarterly logistics disclosures.
      </p>
    </section>
  );
};

export default KazakhstanSection;
