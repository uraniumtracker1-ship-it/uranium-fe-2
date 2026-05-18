import React from "react";
import * as s from "./styles";

const PriceSection = () => {
  return (
    <section id="prices" className={s.section} aria-label="Uranium price today">
      <p style={s.secLabel}>Section A</p>
      <h2 style={s.h2}>
        Uranium Price Today — Spot, Long-Term & Related Products
      </h2>
      <p style={s.lede}>
        Uranium is not exchange-traded. There is no uranium equivalent of the
        LME or COMEX. Instead, prices are assessed weekly by two private
        consultancies — UxC and TradeTech — based on reported transactions and
        market intelligence. The spot price represents purchases for delivery
        within 12 months. The long-term contract price is the reference for
        utility supply contracts, typically covering 3–10 years of delivery.
        Both matter: the spot price moves first; the long-term price follows
        with a lag and is the one that actually determines mine project
        economics.
      </p>

      {/* ALL-GRADES PANEL */}
      <div style={s.gradesPanel}>
        <div style={s.gpHdr}>
          <p style={{ ...s.cl, margin: 0 }}>
            All prices — U3O8 & related products
          </p>
        </div>

        <div style={s.gpRow}>
          <div style={s.gpLabel}>
            U3O8 Spot Price
            <small
              style={{
                display: "block",
                fontSize: "10px",
                color: s.vars.muted,
              }}
            >
              UxC weekly assessment · USD/lb U3O8
            </small>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={s.gpPrice} id="spot-price">
              $82/lb
            </span>
            <span style={{ ...s.gpChg, ...s.nt }} id="spot-chg">
              —
            </span>
          </div>
        </div>

        <div style={s.gpRow}>
          <div style={s.gpLabel}>
            U3O8 Long-Term Price
            <small
              style={{
                display: "block",
                fontSize: "10px",
                color: s.vars.muted,
              }}
            >
              UxC monthly assessment · USD/lb U3O8
            </small>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={s.gpPrice} id="lt-price">
              $80/lb
            </span>
            <span style={{ ...s.gpChg, ...s.nt }} id="lt-chg">
              —
            </span>
          </div>
        </div>

        <div style={s.gpRow}>
          <div style={s.gpLabel}>
            Uranium in kgU equivalent
            <small
              style={{
                display: "block",
                fontSize: "10px",
                color: s.vars.muted,
              }}
            >
              Converted at 0.8401 kg U / lb U3O8
            </small>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={s.gpPrice} id="kgu-price">
              ~$98/kgU
            </span>
            <span style={{ ...s.gpChg, ...s.nt }}>Calculated</span>
          </div>
        </div>

        <div style={s.gpRow}>
          <div style={s.gpLabel}>
            UF6 Conversion (ConverDyn/Orano)
            <small
              style={{
                display: "block",
                fontSize: "10px",
                color: s.vars.muted,
              }}
            >
              USD per kgU as UF6 · TradeTech weekly
            </small>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={s.gpPrice} id="conv-price">
              ~$22/kgU
            </span>
            <span style={{ ...s.gpChg, ...s.nt }}>Weekly</span>
          </div>
        </div>

        <div style={s.gpRow}>
          <div style={s.gpLabel}>
            Enrichment SWU Price
            <small
              style={{
                display: "block",
                fontSize: "10px",
                color: s.vars.muted,
              }}
            >
              USD per SWU · TradeTech/UxC weekly
            </small>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={s.gpPrice} id="swu-price">
              ~$155/SWU
            </span>
            <span style={{ ...s.gpChg, ...s.nt }}>Weekly</span>
          </div>
        </div>
      </div>

      <div style={s.keyFacts}>
        <p style={s.kfLabel}>Key reference prices</p>
        <div style={s.kfGrid}>
          <div style={s.kf}>
            <p style={s.kfV}>$106/lb</p>
            <p style={s.kfL}>Cycle peak (Jan 2024)</p>
          </div>
          <div style={s.kf}>
            <p style={s.kfV}>$48/lb</p>
            <p style={s.kfL}>Cycle trough (2020)</p>
          </div>
          <div style={s.kf}>
            <p style={s.kfV}>$136/lb</p>
            <p style={s.kfL}>Historical ATH (Jun 2007)</p>
          </div>
          <div style={s.kf}>
            <p style={s.kfV}>$7/lb</p>
            <p style={s.kfL}>Post-Fukushima low (2016)</p>
          </div>
          <div style={s.kf}>
            <p style={s.kfV}>~$65/lb</p>
            <p style={s.kfL}>Estimated incentive price (new mine)</p>
          </div>
          <div style={s.kf}>
            <p style={s.kfV} id="kf-lt">
              —
            </p>
            <p style={s.kfL}>Long-term contract (current)</p>
          </div>
        </div>
        <div style={{ ...s.kf, marginTop: "12px" }}>
          <p style={s.kfV} id="kf-spot">
            —
          </p>
          <p style={s.kfL}>U3O8 spot (current)</p>
        </div>
      </div>

      <div style={s.cb}>
        <div style={s.cbHdr}>
          <div style={s.cbLabels}>
            <p style={s.cl}>
              UxC Weekly Spot Assessment · USD/lb U3O8 · 2000–present
            </p>
            <p style={s.ct}>U3O8 Spot Price — Full Cycle History</p>
            <p style={s.cm}>
              ATH <span style={s.urC}>$136/lb</span> (Jun 2007) · Recent peak{" "}
              <span style={s.urC}>$106/lb</span> (Jan 2024) · Post-Fukushima low
              <span style={s.redC}>$7/lb</span> (2016) · Current
              <span style={s.urC} id="chart1-current">
                {" "}
                ~$82/lb
              </span>
            </p>
          </div>
          <div style={s.cbTabs}>
            <button style={s.tabOn}>5Y</button>
            <button style={s.tab}>10Y</button>
            <button style={s.tab}>All</button>
          </div>
        </div>
        <div style={s.chartSvgWrap}>
          <svg
            viewBox="0 0 700 220"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", maxWidth: "700px" }}
          >
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity=".3" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
              </linearGradient>
            </defs>
            <polyline
              points="0,200 30,195 60,190 90,175 120,140 150,80 180,180 210,190 240,195 270,200 300,205 330,185 360,130 390,90 420,70 450,100 480,115 500,110 530,100 560,95 580,90 620,88 660,87 700,86"
              fill="none"
              stroke="#F59E0B"
              strokeWidth="2.5"
            />
            <polygon
              points="0,200 30,195 60,190 90,175 120,140 150,80 180,180 210,190 240,195 270,200 300,205 330,185 360,130 390,90 420,70 450,100 480,115 500,110 530,100 560,95 580,90 620,88 660,87 700,86 700,220 0,220"
              fill="url(#g1)"
            />
            <circle cx="150" cy="80" r="5" fill="#FCD34D" />
            <text
              x="145"
              y="72"
              fontSize="9"
              fill="#B45309"
              fontFamily="DM Mono"
            >
              $136 ATH '07
            </text>
            <circle cx="420" cy="70" r="5" fill="#F59E0B" />
            <text
              x="415"
              y="63"
              fontSize="9"
              fill="#B45309"
              fontFamily="DM Mono"
            >
              $106 Jan'24
            </text>
            <circle cx="305" cy="205" r="5" fill="#EF5350" />
            <text
              x="295"
              y="218"
              fontSize="9"
              fill="#C0392B"
              fontFamily="DM Mono"
            >
              $7 '16
            </text>
            <circle
              cx="700"
              cy="86"
              r="5"
              fill="#F59E0B"
              stroke="#fff"
              strokeWidth="1.5"
            />
            <text
              x="665"
              y="80"
              fontSize="9"
              fill="#B45309"
              fontFamily="DM Mono"
            >
              ~$82
            </text>
            <text
              x="10"
              y="15"
              fontSize="10"
              fill="#9CA3AF"
              fontFamily="DM Sans"
            >
              2000 → 2026 | USD/lb U3O8
            </text>
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div style={s.cb}>
          <div style={s.cbHdr}>
            <div style={s.cbLabels}>
              <p style={s.cl}>UxC · Weekly (spot) / Monthly (LT) · USD/lb</p>
              <p style={s.ct}>Spot vs Long-Term Contract Price</p>
              <p style={s.cm}>
                Current spread:{" "}
                <span className="text-yellow-700" id="spread-val">
                  +$2/lb
                </span>{" "}
                Spot premium/discount to LT signals buying urgency
              </p>
            </div>
            <div style={s.cbTabs}>
              <button style={s.tabOn}>2Y</button>
              <button style={s.tab}>5Y</button>
            </div>
          </div>
          <div style={s.chartSvgWrap}>
            <svg
              viewBox="0 0 340 170"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "100%" }}
            >
              <polyline
                points="10,100 50,95 90,70 130,60 170,55 210,65 250,70 290,75 330,78"
                fill="none"
                stroke="#F59E0B"
                strokeWidth="2"
              />
              <polyline
                points="10,105 50,100 90,80 130,72 170,68 210,75 250,78 290,80 330,80"
                fill="none"
                stroke="#8B5CF6"
                strokeWidth="2"
                strokeDasharray="4,3"
              />
              <text x="10" y="15" fontSize="7" fill="#9CA3AF">
                Spot (amber) vs Long-Term (purple dashed) USD/lb
              </text>
            </svg>
          </div>
        </div>

        <div style={s.cb}>
          <div style={s.cbHdr}>
            <div style={s.cbLabels}>
              <p style={s.cl}>Spot vs incentive price · USD/lb · Monthly</p>
              <p style={s.ct}>Spot Price vs Mine Incentive Price Threshold</p>
              <p style={s.cm}>
                $65/lb = estimated incentive price for new Athabasca Basin / ISR
                development (static reference)
              </p>
            </div>
          </div>
          <div style={s.chartSvgWrap}>
            <svg
              viewBox="0 0 340 170"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "100%" }}
            >
              <rect
                x="10"
                y="52"
                width="320"
                height="100"
                fill="rgba(239,83,80,0.06)"
              />
              <rect
                x="10"
                y="10"
                width="320"
                height="42"
                fill="rgba(21,128,61,0.06)"
              />
              <line
                x1="10"
                y1="52"
                x2="330"
                y2="52"
                stroke="#15803D"
                strokeWidth="1.5"
                strokeDasharray="6,3"
              />
              <text
                x="215"
                y="48"
                fontSize="9"
                fill="#15803D"
                fontFamily="DM Mono"
              >
                $65/lb incentive
              </text>
              <polyline
                points="10,155 40,150 70,145 100,130 130,140 160,150 190,130 220,40 250,50 280,60 310,58 330,55"
                fill="none"
                stroke="#F59E0B"
                strokeWidth="2.5"
              />
              <text x="10" y="15" fontSize="7" fill="#9CA3AF">
                2019–2026 | USD/lb spot vs incentive threshold
              </text>
            </svg>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div style={s.stat}>
          <p style={{ ...s.statVal, ...s.urC }} id="sb-spot">
            $82
          </p>
          <p style={s.statLbl}>U3O8 Spot</p>
          <p style={s.statSub}>USD/lb · UxC weekly</p>
        </div>
        <div style={s.stat}>
          <p style={{ ...s.statVal, ...s.purC }} id="sb-lt">
            $80
          </p>
          <p style={s.statLbl}>Long-Term Contract</p>
          <p style={s.statSub}>USD/lb · UxC monthly</p>
        </div>
        <div style={s.stat}>
          <p style={{ ...s.statVal, color: s.vars.rxr }}>−23%</p>
          <p style={s.statLbl}>From Jan 2024 peak</p>
          <p style={s.statSub}>$106/lb peak</p>
        </div>
        <div style={s.stat}>
          <p style={{ ...s.statVal, color: s.vars.kaz }}>+71%</p>
          <p style={s.statLbl}>From 2020 trough</p>
          <p style={s.statSub}>$48/lb base</p>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
