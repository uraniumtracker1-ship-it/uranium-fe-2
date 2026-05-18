import React from "react";
import * as s from "./styles";

const ProducersSection = () => {
  return (
    <section
      id="producers"
      className={s.section}
      aria-label="Major uranium producers"
    >
      <p style={s.secLabel}>Section J</p>
      <h2 style={s.h2}>
        Major Uranium Producers — Kazatomprom, Cameco, Orano, Paladin
      </h2>

      <h3 style={s.h3}>Producing companies by output</h3>
      <div className="grid grid-col-1 lg:grid-cols-4 gap-4 ">
        <div style={s.prodCard}>
          <p style={{ ...s.prodTicker, color: s.vars.kaz }}>
            LSE:KAP / KASE:KZAP
          </p>
          <p style={s.prodName}>Kazatomprom</p>
          <p style={s.prodSub}>
            State-owned · Republic of Kazakhstan · World’s largest uranium
            producer
          </p>
          <div style={s.prodStats}>
            <div style={s.prodStat}>
              <p style={s.prodStatV}>67.18</p>
              <p style={s.prodStatL}>Mlbs FY2025 (100%)</p>
            </div>
            <div style={s.prodStat}>
              <p style={s.prodStatV}>~43%</p>
              <p style={s.prodStatL}>World share</p>
            </div>
            <div style={s.prodStat}>
              <p style={s.prodStatV}>ISR</p>
              <p style={s.prodStatL}>Mining method</p>
            </div>
          </div>
          <p style={s.prodText}>
            The single most important company in global uranium supply. All
            production uses ISR (in-situ recovery) — the lowest-cost method.
            Annual RKAB permit quota is the most market-moving supply event in
            uranium each year. Budenovskoye JV ramp-up has been a key driver of
            production growth. Cameco holds 40% of Inkai JV. Transit risk:
            historically Russia-routed, now shifting to Trans-Caspian route.
            LSE-listed GDR gives Western investor access.
          </p>
        </div>

        {/* Cameco */}
        <div style={s.prodCard}>
          <p style={{ ...s.prodTicker, color: s.vars.ur }}>
            TSX:CCO / NYSE:CCJ
          </p>
          <p style={s.prodName}>Cameco Corporation</p>
          <p style={s.prodSub}>
            Canadian · Largest Western uranium producer · Integrated fuel
            services
          </p>
          <div style={s.prodStats}>
            <div style={s.prodStat}>
              <p style={s.prodStatV}>21.0</p>
              <p style={s.prodStatL}>Mlbs FY2025 (share)</p>
            </div>
            <div style={s.prodStat}>
              <p style={s.prodStatV}>~14%</p>
              <p style={s.prodStatL}>Western share</p>
            </div>
            <div style={s.prodStat}>
              <p style={s.prodStatV}>Cigar+McAR</p>
              <p style={s.prodStatL}>Key mines</p>
            </div>
          </div>
          <p style={s.prodText}>
            The largest Western-controlled producer and most liquid equity for
            US investors. Key assets: Cigar Lake (83.33% operated) and McArthur
            River (70%). Owns 49% of Westinghouse (nuclear fuel services). Inkai
            JV (40%) recovered from brief Jan 2025 suspension. Cigar Lake Zone 4
            extension under development. CCJ is the benchmark uranium equity for
            North American portfolios.
          </p>
        </div>

        {/* Orano */}
        <div style={s.prodCard}>
          <p style={{ ...s.prodTicker, color: s.vars.rxr }}>STATE · France</p>
          <p style={s.prodName}>Orano</p>
          <p style={s.prodSub}>
            French state-owned · Integrated nuclear fuel cycle · Geopolitical
            complexity
          </p>
          <div style={s.prodStats}>
            <div style={s.prodStat}>
              <p style={s.prodStatV}>~20</p>
              <p style={s.prodStatL}>Mlbs/yr (est)</p>
            </div>
            <div style={s.prodStat}>
              <p style={s.prodStatV}>Kazakhstan</p>
              <p style={s.prodStatL}>Primary (KATCO)</p>
            </div>
            <div style={s.prodStat}>
              <p style={{ ...s.prodStatV, color: s.vars.rxr }}>Niger ✗</p>
              <p style={s.prodStatL}>Disrupted</p>
            </div>
          </div>
          <p style={s.prodText}>
            Integrated fuel cycle company 90% owned by the French state. Key
            assets: KATCO JV (Kazakhstan, 49%) and 16.67% of Cigar Lake. Niger
            operations severely disrupted: junta expelled Orano from Somair in
            2024 and revoked Imouraren permit. Developing Kiggavik (Nunavut) and
            Midwest (Saskatchewan) projects to offset African losses. Not
            publicly listed.
          </p>
        </div>

        {/* Paladin Energy */}
        <div style={s.prodCard}>
          <p style={{ ...s.prodTicker, color: "#22C55E" }}>ASX/TSX:PDN</p>
          <p style={s.prodName}>Paladin Energy</p>
          <p style={s.prodSub}>
            Australian · Langer Heinrich restart · Acquired Fission Uranium
          </p>
          <div style={s.prodStats}>
            <div style={s.prodStat}>
              <p style={s.prodStatV}>~3.3</p>
              <p style={s.prodStatL}>Mlbs/yr (LH)</p>
            </div>
            <div style={s.prodStat}>
              <p style={s.prodStatV}>Namibia</p>
              <p style={s.prodStatL}>Langer Heinrich</p>
            </div>
            <div style={s.prodStat}>
              <p style={{ ...s.prodStatV, color: s.vars.rxr }}>Ramp issues</p>
              <p style={s.prodStatL}>FY2025 challenges</p>
            </div>
          </div>
          <p style={s.prodText}>
            Restarted Langer Heinrich (Namibia) in early 2024. FY2025 guidance
            withdrawn March 2025 due to weather and grade issues. Acquisition of
            Fission Uranium (Nov 2024) adds the Triple R deposit (Athabasca
            Basin) as a major development project. Expansion to 8 Mlbs/yr
            contingent on resolving current Phase 1 operational hurdles.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProducersSection;
