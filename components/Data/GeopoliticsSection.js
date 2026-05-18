import React from "react";
import * as s from "./styles";

const GeopoliticsSection = () => {
  return (
    <section
      id="geopolitics"
      className={s.section}
      aria-label="Uranium geopolitical risk"
    >
      <p style={s.secLabel}>Section L</p>
      <h2 style={s.h2}>
        Geopolitical Risk — Russia, Niger, Kazakhstan Transit
      </h2>

      <div style={s.timeline}>
        {/* SPUT Launch */}
        <div style={s.tlItem}>
          <div style={{ ...s.tlDot, backgroundColor: s.vars.ur }}></div>
          <p style={s.tlDate}>September 2021</p>
          <p style={s.tlTitle}>
            Sprott Physical Uranium Trust (SPUT) launches — changes the market
          </p>
          <p style={s.tlText}>
            Sprott Asset Management converted the Uranium Participation Corp.
            into SPUT, an open-ended physical uranium fund that can buy
            unlimited spot material. By 2024 SPUT held ~56 Mlbs of U3O8,
            absorbing approximately two years of spot market volume. Financial
            buyers competing directly with utilities for physical uranium was a
            structural change with no parallel in any prior uranium cycle.
          </p>
        </div>

        {/* Niger Coup */}
        <div style={s.tlItem}>
          <div style={{ ...s.tlDot, backgroundColor: s.vars.rxr }}></div>
          <p style={s.tlDate}>July 2023</p>
          <p style={s.tlTitle}>
            Niger military coup — Orano operations disrupted
          </p>
          <p style={s.tlText}>
            The junta that seized power in Niger subsequently expelled Orano
            from Somair operations and revoked the Imouraren permit. Niger had
            previously supplied ~5% of world uranium. Orano recognised
            impairment charges. The GoviEx Madaouela project licence was also
            revoked. Global Atomic’s Dasa project has separate regulatory
            standing but added country-risk overhang.
          </p>
        </div>

        {/* US Ban */}
        <div style={s.tlItem}>
          <div style={{ ...s.tlDot, backgroundColor: s.vars.rxr }}></div>
          <p style={s.tlDate}>August 11, 2024</p>
          <p style={s.tlTitle}>US Prohibits Russian Uranium Imports</p>
          <p style={s.tlText}>
            The Prohibiting Russian Uranium Imports Act signed into law,
            effective August 11 2024. Bans US utilities from importing
            Russian-origin enriched uranium products. Waivers available through
            2027 for utilities that cannot source alternatives. The ban
            accelerates US domestic enrichment investment (Centrus LEU+, URENCO
            USA expansion) and drives demand for Western services.
          </p>
        </div>

        {/* Russian Retaliation */}
        <div style={s.tlItem}>
          <div style={{ ...s.tlDot, backgroundColor: s.vars.rxr }}></div>
          <p style={s.tlDate}>November 15, 2024</p>
          <p style={s.tlTitle}>
            Russia retaliates — export restrictions on uranium
          </p>
          <p style={s.tlText}>
            Russia’s government introduced export restrictions on uranium
            hexafluoride (UF6) to “unfriendly states.” Pre-existing long-term
            contracts may be honoured under specific licenses. The restrictions
            effectively ended new Russian uranium supply to Western utilities.
            Rosatom’s position in the West is being unwound over a 3–7 year
            transition.
          </p>
        </div>

        {/* Inkai Suspension */}
        <div style={s.tlItem}>
          <div style={{ ...s.tlDot, backgroundColor: s.vars.muted }}></div>
          <p style={s.tlDate}>January 2025</p>
          <p style={s.tlTitle}>
            Inkai JV briefly suspended — Cameco/KAP shipment disruption
          </p>
          <p style={s.tlText}>
            Kazatomprom’s Inkai JV (40% Cameco) was suspended for approximately
            3 weeks in January 2025 due to a dispute over the Trans-Caspian
            logistics route. Recovered and FY2025 full-year output reached 8.4
            Mlbs (Cameco share). Incident highlighted the ongoing logistics
            vulnerability of Kazakh uranium exports.
          </p>
        </div>

        {/* Ongoing Bifurcation */}
        <div style={s.tlItem}>
          <div style={{ ...s.tlDot, backgroundColor: "#3B82F6" }}></div>
          <p style={s.tlDate}>Ongoing</p>
          <p style={s.tlTitle}>
            Uranium supply chain bifurcation: Western vs Russian/Chinese
          </p>
          <p style={s.tlText}>
            The global uranium supply chain is gradually bifurcating. Western
            utilities are reducing Russian/Chinese exposure (enrichment, fuel
            fabrication, uranium origin). Kazakhstan — which supplies both
            Western and Chinese utilities — sits at a geopolitical fault line.
            How Kazakhstan balances these relationships as US/European sanctions
            pressure increases is the longest-duration geopolitical risk in the
            uranium market.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GeopoliticsSection;
