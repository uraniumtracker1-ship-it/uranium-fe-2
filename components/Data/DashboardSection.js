import React from "react";
import * as s from "./styles";

const DashboardSection = () => {
  return (
    <section
      id="drivers"
      className={s.section}
      aria-label="Uranium price driver dashboard"
    >
      <p style={s.secLabel}>Section M</p>
      <h2 style={s.h2}>Uranium Price Driver Dashboard</h2>
      <p style={s.lede}>
        Uranium moves on a small number of identifiable signals — more than
        nickel and less than copper. The RKAB quota announcement from
        Kazatomprom and the UxC weekly spot price capture the majority of
        short-term movements. Current readings for all six are synchronized with
        April 2026 market data.
      </p>

      <div style={s.tblWrap}>
        <table className="min-w-[800px]" style={s.ctbl}>
          <thead>
            <tr>
              <th style={s.ctblTh}>Signal</th>
              <th style={s.ctblTh}>Direction</th>
              <th style={s.ctblTh}>Live reading (April 2026)</th>
              <th style={s.ctblTh}>Source</th>
            </tr>
          </thead>
          <tbody>
            {/* Kazatomprom RKAB */}
            <tr>
              <td style={s.ctblTd}>
                <strong>Kazatomprom RKAB quota</strong>
              </td>
              <td style={s.ctblTd}>
                <span
                  style={{ ...s.sigDot, backgroundColor: "#22C55E" }}
                ></span>
                <span style={s.liveVal}>Restrictive</span>
              </td>
              <td style={s.ctblTd}>
                2026 production guidance remains conservative despite higher
                prices. Focus remains on value over volume to maintain market
                balance.
              </td>
              <td style={s.ctblTd}>KAP Press Release</td>
            </tr>

            {/* U3O8 Spot Price */}
            <tr>
              <td style={s.ctblTd}>
                <strong>U3O8 spot price trend</strong>
              </td>
              <td style={s.ctblTd}>
                <span
                  style={{ ...s.sigDot, backgroundColor: "#F59E0B" }}
                ></span>
                <span style={s.liveVal}>Neutral →</span>
              </td>
              <td style={s.ctblTd}>
                Currently <strong>$83.90/lb</strong>. Consolidating after the
                Jan 2026 peak of $101.41. Long-term contract price has climbed
                to $90/lb.
              </td>
              <td style={s.ctblTd}>UxC Weekly</td>
            </tr>

            {/* Utility Contracting */}
            <tr>
              <td style={s.ctblTd}>
                <strong>Utility contracting pace</strong>
              </td>
              <td style={s.ctblTd}>
                <span
                  style={{ ...s.sigDot, backgroundColor: "#22C55E" }}
                ></span>
                <span style={s.liveVal}>Active</span>
              </td>
              <td style={s.ctblTd}>
                LT contracting volumes are at 15-year highs. Western utilities
                prioritizing security of supply over price sensitivity.
              </td>
              <td style={s.ctblTd}>UxC Survey</td>
            </tr>

            {/* Physical Buying */}
            <tr>
              <td style={s.ctblTd}>
                <strong>SPUT / YCA physical buying</strong>
              </td>
              <td style={s.ctblTd}>
                <span
                  style={{ ...s.sigDot, backgroundColor: "#22C55E" }}
                ></span>
                <span style={s.liveVal}>Aggressive</span>
              </td>
              <td style={s.ctblTd}>
                SPUT holdings: <strong>81.25 Mlbs</strong>. Trust purchased over
                5M lbs in Q1 2026 following prospectus renewal.
              </td>
              <td style={s.ctblTd}>Fund Reports</td>
            </tr>

            {/* Reactor Fleet */}
            <tr>
              <td style={s.ctblTd}>
                <strong>Reactor fleet status</strong>
              </td>
              <td style={s.ctblTd}>
                <span
                  style={{ ...s.sigDot, backgroundColor: "#22C55E" }}
                ></span>
                <span style={s.liveVal}>Bullish</span>
              </td>
              <td style={s.ctblTd}>
                65 reactors under construction. Life extensions (Japan/Korea)
                and AI data center demand are offsetting retirements.
              </td>
              <td style={s.ctblTd}>IAEA PRIS</td>
            </tr>

            {/* Russian Supply Chain */}
            <tr>
              <td style={s.ctblTd}>
                <strong>Russian supply chain access</strong>
              </td>
              <td style={s.ctblTd}>
                <span
                  style={{ ...s.sigDot, backgroundColor: s.vars.rxr }}
                ></span>
                <span style={s.liveVal}>Restricted</span>
              </td>
              <td style={s.ctblTd}>
                US ban fully in effect. Russian retaliatory export restrictions
                on UF6 have bifurcated the enrichment market.
              </td>
              <td style={s.ctblTd}>US DOE / Rosatom</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DashboardSection;
