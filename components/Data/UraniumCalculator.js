import { useState } from "react";
import * as style from "./styles.js";

export default function UraniumCalculator() {
  const [urPrice, setUrPrice] = useState(82);
  const [urQty, setUrQty] = useState(1000000);
  const [urHoldPrice, setUrHoldPrice] = useState(82);

  const kgU = ((urPrice * 1000) / 2204.62 / 0.848).toFixed(2);
  const mtu = (parseFloat(kgU) * 1000).toLocaleString("en-US", {
    maximumFractionDigits: 0,
  });
  const mlb = urPrice.toFixed(0);

  const holdingsTotal = (urQty * urHoldPrice).toLocaleString("en-US");
  const holdingsMlbs = (urQty / 1_000_000).toFixed(1);

  return (
    <section
      id="calc"
      aria-label="Uranium calculator"
      className={style.section}
    >
      <p style={style.secLabel}>Section O</p>
      <h2 style={style.h2}>Uranium Unit Conversion &amp; Value Calculator</h2>
      <p style={style.lede}>
        Uranium is quoted in different units across different markets: USD/lb
        U3O8 (UxC spot), USD/kgU (IAEA, IEA, European markets), and occasionally
        USD/MTU (metric tonne uranium). This calculator converts between units
        and estimates the value of uranium holdings.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div style={style.cb}>
          <div style={style.cbHdr}>
            <div style={style.cbLabels}>
              <p style={style.cl}>Unit converter</p>
              <p style={style.ct}>Uranium Price Unit Converter</p>
            </div>
          </div>
          <div style={{ padding: "16px 18px" }}>
            <div style={{ marginBottom: "14px" }}>
              <label
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: style.vars.ink3,
                  display: "block",
                  marginBottom: "5px",
                }}
              >
                Uranium price (USD/lb U3O8)
              </label>
              <input
                type="number"
                value={urPrice}
                min="1"
                max="500"
                step="1"
                onChange={(e) => setUrPrice(parseFloat(e.target.value) || 0)}
                style={{
                  width: "100%",
                  border: `1px solid ${style.vars.bdr}`,
                  borderRadius: "8px",
                  padding: "8px 12px",
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: style.vars.urD,
                  background: style.vars.urT,
                }}
              />
            </div>
            <div
              style={{
                background: style.vars.urT,
                borderRadius: "10px",
                padding: "14px 16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "6px 0",
                  borderBottom: "1px solid rgba(245, 158, 11, 0.12)",
                }}
              >
                <span style={{ fontSize: "12px", color: style.vars.ink3 }}>
                  USD per kilogram uranium (kgU)
                </span>
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: style.vars.urD,
                  }}
                >
                  ${kgU}/kgU
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "6px 0",
                  borderBottom: "1px solid rgba(245, 158, 11, 0.12)",
                }}
              >
                <span style={{ fontSize: "12px", color: style.vars.ink3 }}>
                  USD per metric tonne uranium (MTU)
                </span>
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: style.vars.urD,
                  }}
                >
                  ${mtu}/MTU
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "6px 0",
                }}
              >
                <span style={{ fontSize: "12px", color: style.vars.ink3 }}>
                  Value of 1 Mlbs U3O8 at this price
                </span>
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: style.vars.urD,
                  }}
                >
                  ${mlb}M
                </span>
              </div>
            </div>
          </div>
        </div>

        <div style={style.cb}>
          <div style={style.cbHdr}>
            <div style={style.cbLabels}>
              <p style={style.cl}>Holdings calculator</p>
              <p style={style.ct}>Uranium Holdings Value Calculator</p>
            </div>
          </div>
          <div style={{ padding: "16px 18px" }}>
            <div style={{ marginBottom: "12px" }}>
              <label
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: style.vars.ink3,
                  display: "block",
                  marginBottom: "5px",
                }}
              >
                Quantity (lbs U3O8)
              </label>
              <input
                type="number"
                value={urQty}
                min="1"
                step="100000"
                onChange={(e) => setUrQty(parseFloat(e.target.value) || 0)}
                style={{
                  width: "100%",
                  border: `1px solid ${style.vars.bdr}`,
                  borderRadius: "8px",
                  padding: "8px 12px",
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "15px",
                }}
              />
            </div>
            <div style={{ marginBottom: "12px" }}>
              <label
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: style.vars.ink3,
                  display: "block",
                  marginBottom: "5px",
                }}
              >
                Price (USD/lb)
              </label>
              <input
                type="number"
                value={urHoldPrice}
                min="1"
                max="500"
                onChange={(e) =>
                  setUrHoldPrice(parseFloat(e.target.value) || 0)
                }
                style={{
                  width: "100%",
                  border: `1px solid ${style.vars.bdr}`,
                  borderRadius: "8px",
                  padding: "8px 12px",
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "15px",
                }}
              />
            </div>
            <div
              style={{
                background: style.vars.urT,
                borderRadius: "10px",
                padding: "14px 16px",
              }}
            >
              <p
                style={{
                  fontSize: "11px",
                  color: style.vars.muted,
                  marginBottom: "6px",
                }}
              >
                Total value
              </p>
              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "22px",
                  fontWeight: 700,
                  color: style.vars.urD,
                }}
              >
                ${holdingsTotal}
              </p>
              <p
                style={{
                  fontSize: "11px",
                  color: style.vars.muted,
                  marginTop: "3px",
                }}
              >
                {holdingsMlbs} Mlbs U3O8 at ${urHoldPrice}/lb
              </p>
            </div>
          </div>
        </div>
      </div>

      <h3 style={style.h3}>Quick reference: price per unit at key levels</h3>

      <div style={style.tblWrap}>
        <table style={style.ctbl}>
          <thead>
            <tr>
              <th style={style.ctblTh}>USD/lb U3O8</th>
              <th style={{ ...style.ctblTh, color: style.vars.urD }}>
                USD/kgU
              </th>
              <th style={style.ctblTh}>USD/MTU</th>
              <th style={style.ctblTh}>Value of 1 Mlbs</th>
              <th style={style.ctblTh}>Context</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={style.ctblTd}>$7/lb</td>
              <td style={style.ctblTd}>$8.33/kgU</td>
              <td style={style.ctblTd}>$8,330/MTU</td>
              <td style={style.ctblTd}>$7M</td>
              <td style={style.ctblTd}>Post-Fukushima trough (2016)</td>
            </tr>
            <tr>
              <td style={style.ctblTd}>$48/lb</td>
              <td style={style.ctblTd}>$57.14/kgU</td>
              <td style={style.ctblTd}>$57,140/MTU</td>
              <td style={style.ctblTd}>$48M</td>
              <td style={style.ctblTd}>2020 cycle low (pre-SPUT)</td>
            </tr>
            <tr>
              <td style={style.ctblTd}>$65/lb</td>
              <td style={style.ctblTd}>$77.38/kgU</td>
              <td style={style.ctblTd}>$77,380/MTU</td>
              <td style={style.ctblTd}>$65M</td>
              <td style={style.ctblTd}>Estimated incentive price (new mine)</td>
            </tr>
            <tr>
              <td style={style.ctblTd}>
                <strong>
                  <span style={{ color: style.vars.urD }}>~${urPrice}/lb</span>
                </strong>
              </td>
              <td style={style.ctblTd}>
                <strong>~${kgU}/kgU</strong>
              </td>
              <td style={style.ctblTd}>
                <strong>~${mtu}/MTU</strong>
              </td>
              <td style={style.ctblTd}>
                <strong>${mlb}M</strong>
              </td>
              <td style={style.ctblTd}>
                <strong>Current spot (live)</strong>
              </td>
            </tr>
            <tr>
              <td style={style.ctblTd}>$106/lb</td>
              <td style={style.ctblTd}>$126.19/kgU</td>
              <td style={style.ctblTd}>$126,190/MTU</td>
              <td style={style.ctblTd}>$106M</td>
              <td style={style.ctblTd}>Jan 2024 cycle peak</td>
            </tr>
            <tr>
              <td style={style.ctblTd}>$136/lb</td>
              <td style={style.ctblTd}>$161.90/kgU</td>
              <td style={style.ctblTd}>$161,900/MTU</td>
              <td style={style.ctblTd}>$136M</td>
              <td style={style.ctblTd}>Jun 2007 ATH</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p
        style={{ fontSize: "11px", color: style.vars.muted, marginTop: "8px" }}
      >
        Conversion: USD/kgU = (USD/lb U3O8) × 1,000 ÷ 2,204.62 ÷ 0.8480 (U3O8 is
        84.80% uranium by weight). 1 MTU = 1,000 kgU.
      </p>
    </section>
  );
}
