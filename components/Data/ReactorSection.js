import React from "react";
import * as s from "./styles";

const ReactorsSection = () => {
  return (
    <section
      id="reactors"
      className={s.section}
      aria-label="Reactor demand for uranium"
    >
      <p style={s.secLabel}>Section G</p>
      <h2 style={s.h2}>Reactor Demand — The Structural Growth Case</h2>
      <p style={s.lede}>
        Uranium has no LFP problem. There is no battery chemistry shift that
        replaces uranium in a thermal fission reactor. A running reactor
        consumes roughly 1.5–2.5 Mlbs of U3O8 per year, and it has no
        alternative. That baseline demand is the starting point — and it only
        grows from here. China is building more reactors than the rest of the
        world combined. The UK, France, and the US are all reversing course on
        nuclear after a decade of retreat. The current global reactor fleet
        consumes approximately 175–180 Mlbs U3O8 per year. By 2035, that number
        is expected to reach 250–260 Mlbs.
      </p>

      {/* Charts Grid */}
      <div style={s.twoCol}>
        {/* Chart 12: Global reactor fleet demand */}
        <div style={s.cb}>
          <div style={s.cbHdr}>
            <div style={s.cbLabels}>
              <p style={s.cl}>IAEA PRIS · World Nuclear Association · Annual</p>
              <p style={s.ct}>
                Global Reactor Fleet &amp; Annual Uranium Demand
              </p>
              <p style={s.cm}>
                Operating (440), Under construction (65), Planned (110) · Mlbs
                U3O8/yr demand
              </p>
            </div>
          </div>
          <div style={s.chartSvgWrap}>
            <svg
              viewBox="0 0 340 170"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "100%" }}
            >
              <text x="10" y="15" fontSize="9" fill={s.vars.muted}>
                Global reactor count &amp; demand (Mlbs U3O8/yr)
              </text>
              <rect
                x="10"
                y="50"
                width="55"
                height="100"
                fill={s.vars.ur}
                rx="2"
              />
              <text x="20" y="44" fontSize="9" fill="#B45309">
                165
              </text>

              <rect
                x="85"
                y="40"
                width="55"
                height="110"
                fill={s.vars.ur}
                rx="2"
              />
              <text x="95" y="34" fontSize="9" fill="#B45309">
                175
              </text>

              <rect
                x="160"
                y="25"
                width="55"
                height="125"
                fill={s.vars.ur}
                rx="2"
                opacity=".85"
              />
              <text x="168" y="18" fontSize="9" fill="#B45309">
                210E
              </text>

              <rect
                x="235"
                y="10"
                width="55"
                height="140"
                fill={s.vars.ur}
                rx="2"
                opacity=".65"
              />
              <text x="242" y="6" fontSize="8.5" fill="#B45309">
                260E
              </text>

              <text x="10" y="165" fontSize="8" fill={s.vars.muted}>
                2020
              </text>
              <text x="85" y="165" fontSize="8" fill={s.vars.muted}>
                2025
              </text>
              <text x="160" y="165" fontSize="8" fill={s.vars.muted}>
                2030E
              </text>
              <text x="235" y="165" fontSize="8" fill={s.vars.muted}>
                2035E
              </text>
            </svg>
          </div>
        </div>

        {/* New Build Pipeline */}
        <div style={s.cb}>
          <div style={s.cbHdr}>
            <div style={s.cbLabels}>
              <p style={s.cl}>IAEA PRIS · WNA · Regional breakdown</p>
              <p style={s.ct}>
                New Build Pipeline — Reactors Under Construction
              </p>
              <p style={s.cm}>
                65 reactors under construction globally · China leads new build
              </p>
            </div>
          </div>
          <div style={s.chartSvgWrap}>
            <svg
              viewBox="0 0 340 170"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "100%" }}
            >
              <text x="5" y="15" fontSize="9" fill={s.vars.muted}>
                Reactors under construction (~65 total)
              </text>

              <text x="5" y="38" fontSize="9" fill={s.vars.rxr}>
                China
              </text>
              <rect
                x="65"
                y="27"
                width="156"
                height="14"
                fill={s.vars.rxr}
                rx="2"
              />
              <text x="225" y="38" fontSize="9" fill={s.vars.muted}>
                ~28
              </text>

              <text x="5" y="63" fontSize="9" fill={s.vars.sec}>
                India
              </text>
              <rect
                x="65"
                y="52"
                width="44"
                height="14"
                fill={s.vars.sec}
                rx="2"
              />
              <text x="113" y="63" fontSize="9" fill={s.vars.muted}>
                8
              </text>

              <text x="5" y="88" fontSize="9" fill={s.vars.muted}>
                Russia
              </text>
              <rect
                x="65"
                y="77"
                width="22"
                height="14"
                fill={s.vars.muted}
                rx="2"
              />
              <text x="91" y="88" fontSize="9" fill={s.vars.muted}>
                4
              </text>

              <text x="5" y="113" fontSize="9" fill="#3B82F6">
                S. Korea
              </text>
              <rect
                x="65"
                y="102"
                width="16"
                height="14"
                fill="#3B82F6"
                rx="2"
              />
              <text x="85" y="113" fontSize="9" fill={s.vars.muted}>
                3
              </text>

              <text x="5" y="138" fontSize="9" fill={s.vars.kaz}>
                UK
              </text>
              <rect
                x="65"
                y="127"
                width="12"
                height="14"
                fill={s.vars.kaz}
                rx="2"
              />
              <text x="81" y="138" fontSize="9" fill={s.vars.muted}>
                2
              </text>

              <text x="5" y="163" fontSize="9" fill={s.vars.muted}>
                Others
              </text>
              <rect
                x="65"
                y="152"
                width="110"
                height="14"
                fill="#CBD5E1"
                rx="2"
              />
              <text x="179" y="163" fontSize="9" fill={s.vars.muted}>
                ~20
              </text>
            </svg>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 ">
        <div style={s.stat}>
          <p style={{ ...s.statVal, color: s.vars.ur }} id="sb-reactors">
            440
          </p>
          <p style={s.statLbl}>Operating reactors</p>
          <p style={s.statSub}>IAEA PRIS · Worldwide</p>
        </div>
        <div style={s.stat}>
          <p style={{ ...s.statVal, color: s.vars.kaz }}>65</p>
          <p style={s.statLbl}>Under construction</p>
          <p style={s.statSub}>Add ~8 Mlbs/yr demand each</p>
        </div>
        <div style={s.stat}>
          <p style={{ ...s.statVal, color: s.vars.ur }}>~175</p>
          <p style={s.statLbl}>Mlbs/yr demand</p>
          <p style={s.statSub}>Current global consumption</p>
        </div>
        <div style={s.stat}>
          <p style={{ ...s.statVal, color: "#3b82f6" }}>~260</p>
          <p style={s.statLbl}>Mlbs/yr demand 2035E</p>
          <p style={s.statSub}>IEA / WNA base case</p>
        </div>
      </div>

      <div style={s.calloutGrn}>
        <span style={s.calloutIcon}>⚡</span>
        <div>
          <p style={s.calloutTitle}>SMRs: the next demand wave (post-2030)</p>
          <p style={s.calloutText}>
            Small Modular Reactors (SMRs) are not a near-term uranium demand
            driver — commercial deployment is a 2030–2035 story at earliest. But
            they matter for the long-term uranium thesis because they expand the
            addressable market significantly beyond traditional grid-scale
            reactors. Key developers: NuScale (SMR, NYSE), Oklo (advanced
            fission, NYSE), Rolls-Royce (UK). Each SMR requires uranium enriched
            to 5–20% (HALEU in some designs, vs standard LWR &lt;5%) — a
            different enrichment profile that also affects SWU demand.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReactorsSection;
