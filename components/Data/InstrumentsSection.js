import React from "react";
import * as s from "./styles";

const InstrumentsSection = () => {
  return (
    <section
      id="instruments"
      className={s.section}
      aria-label="Uranium ETFs and investment instruments"
    >
      <p style={s.secLabel}>Section N</p>
      <h2 style={s.h2}>
        Uranium ETFs, Physical Trusts & Investment Instruments
      </h2>
      <p style={s.lede}>
        Uranium is unusual in that retail investors can get actual physical
        exposure — through SPUT and Yellow Cake, which hold real U3O8 in
        licensed storage — or equity exposure through a range of ETFs and
        individual stocks. The physical trusts track spot uranium directly. The
        equity ETFs add operational leverage (and company-specific risk). The
        right mix depends on whether you want commodity exposure or operating
        leverage.
      </p>

      <h3 style={s.h3}>Available investment vehicles</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* URNM */}
        <div style={s.instCard}>
          <p style={s.instTicker}>URNM</p>
          <p style={s.instName}>Sprott Uranium Miners ETF</p>
          <p style={s.instType}>Equity ETF · NYSE Arca</p>
          <p style={s.instDetail}>
            0.75%/yr. Tracks the North Shore Global Uranium Mining Index. ~25
            holdings. Top weights: Cameco (21%), SPUT (12%), NexGen (12%). The
            benchmark uranium equity ETF with ~$2.4B AUM. Includes producers,
            developers, and physical exposure.
          </p>
        </div>

        {/* SPUT */}
        <div style={s.instCard}>
          <p style={s.instTicker}>U.UN / U.U</p>
          <p style={s.instName}>Sprott Physical Uranium Trust (SPUT)</p>
          <p style={s.instType}>Physical U3O8 trust · TSX</p>
          <p style={s.instDetail}>
            Holds physical U3O8 in licensed storage.
            <span style={{ ...s.liveVal, fontWeight: "700" }}>
              81.2 Mlbs
            </span>{" "}
            holdings as of April 2026. The most direct uranium price exposure.
            Monitor NAV premium/discount as a market sentiment signal for new
            buying intent.
          </p>
        </div>

        {/* Yellow Cake */}
        <div style={s.instCard}>
          <p style={s.instTicker}>YCA</p>
          <p style={s.instName}>Yellow Cake plc</p>
          <p style={s.instType}>Physical U3O8 trust · LSE AIM</p>
          <p style={s.instDetail}>
            UK-listed holding company with an agreement to purchase up to
            $100M/yr from Kazatomprom. Holds
            <span style={{ ...s.liveVal, fontWeight: "700" }}>
              23.1 Mlbs
            </span>{" "}
            U3O8. Raised ~$110M in Q1 2026 to exercise purchase options. Direct
            access for UK/European investors.
          </p>
        </div>

        {/* NLR */}
        <div style={s.instCard}>
          <p style={s.instTicker}>NLR</p>
          <p style={s.instName}>VanEck Uranium + Nuclear ETF</p>
          <p style={s.instType}>Equity ETF · NYSE Arca</p>
          <p style={s.instDetail}>
            0.61%/yr. Broader exposure including nuclear utilities
            (Constellation, PG&E) alongside miners. Benefits from AI data center
            power demand. Lower volatility than pure mining ETFs. ~$4.1B AUM.
          </p>
        </div>

        {/* CCJ */}
        <div style={s.instCard}>
          <p style={s.instTicker}>CCJ</p>
          <p style={s.instName}>Cameco Corporation</p>
          <p style={s.instType}>Individual stock · NYSE</p>
          <p style={s.instDetail}>
            The primary blue-chip individual stock for US investors. S&P 500
            constituent. 49% owner of Westinghouse. Highly liquid proxy for the
            sector with significant operating leverage.
          </p>
        </div>

        {/* UEC */}
        <div style={s.instCard}>
          <p style={s.instTicker}>UEC</p>
          <p style={s.instName}>Uranium Energy Corp</p>
          <p style={s.instType}>Individual stock · NYSE American</p>
          <p style={s.instDetail}>
            US-focused ISR producer. Largest pure-play US uranium producer.
            Significant beneficiary of the 2024 Russian import ban and
            incentives for domestic production. High-beta development exposure.
          </p>
        </div>
      </div>

      <h3 style={s.h3}>Physical uranium trusts vs equity ETFs</h3>
      <div style={s.tblWrap}>
        <table style={s.ctbl}>
          <thead>
            <tr>
              <th style={s.ctblTh}>Instrument</th>
              <th style={s.ctblTh}>Type</th>
              <th style={s.ctblTh}>Exchange</th>
              <th style={{ ...s.ctblTh, color: s.vars.ur }}>
                Holdings (Apr '26)
              </th>
              <th style={s.ctblTh}>US-accessible?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={s.ctblTd}>SPUT (U.UN)</td>
              <td style={s.ctblTd}>Physical trust</td>
              <td style={s.ctblTd}>TSX</td>
              <td style={{ ...s.ctblTd, fontWeight: "600" }}>81.2 Mlbs</td>
              <td style={s.ctblTd}>Via OTC (SRUUF) or URNM</td>
            </tr>
            <tr>
              <td style={s.ctblTd}>Yellow Cake (YCA)</td>
              <td style={s.ctblTd}>Physical trust</td>
              <td style={s.ctblTd}>LSE AIM</td>
              <td style={{ ...s.ctblTd, fontWeight: "600" }}>23.1 Mlbs</td>
              <td style={s.ctblTd}>Via OTC (YLLXF)</td>
            </tr>
            <tr>
              <td style={s.ctblTd}>URNM ETF</td>
              <td style={s.ctblTd}>Equity ETF</td>
              <td style={s.ctblTd}>NYSE Arca</td>
              <td style={s.ctblTd}>~25 stocks + SPUT</td>
              <td style={s.ctblTd}>✓ Direct NYSE listing</td>
            </tr>
            <tr>
              <td style={s.ctblTd}>NLR ETF</td>
              <td style={s.ctblTd}>Equity ETF</td>
              <td style={s.ctblTd}>NYSE Arca</td>
              <td style={s.ctblTd}>Utilities + Miners</td>
              <td style={s.ctblTd}>✓ Direct NYSE listing</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default InstrumentsSection;
