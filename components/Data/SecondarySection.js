import React from "react";
import * as s from "./styles";

const SecondarySection = () => {
  return (
    <section
      id="secondary"
      className={s.section}
      aria-label="Secondary uranium supply"
    >
      <p style={s.secLabel}>Section H</p>
      <h2 style={s.h2}>
        Secondary Supply — Enrichment Tails, HEU, Reprocessing
      </h2>
      <p style={s.lede}>
        Here is a number that surprises most people new to the uranium market:
        mines produce roughly 145–155 Mlbs U3O8 per year. Reactors consume
        roughly 175 Mlbs. The gap — 20–30 Mlbs — gets filled every year by
        sources that have nothing to do with new mining. Some of those sources
        are structural and permanent (enrichment tails re-enrichment). Some were
        temporary and are now exhausted (the Cold War HEU downblend programme
        that ended in 2013). Understanding what has been filling the gap — and
        how those sources are shrinking — is as important as understanding mine
        supply.
      </p>

      <h3 style={s.h3}>Secondary supply sources</h3>
      <div className="overflow-x-auto" style={s.tblWrap}>
        <table className="min-w-[800px] w-full no-scrollbar" style={s.ctbl}>
          <thead>
            <tr>
              <th style={s.ctblTh}>Secondary source</th>
              <th style={{ ...s.ctblTh, color: s.vars.ur }}>
                Est. annual contribution
              </th>
              <th style={s.ctblTh}>Status</th>
              <th style={s.ctblTh}>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={s.ctblTd}>Enrichment tails re-enrichment</td>
              <td style={s.ctblTd}>~8–15 Mlbs/yr</td>
              <td style={s.ctblTd}>Active</td>
              <td style={s.ctblTd}>
                When SWU prices are low relative to uranium prices, enrichers
                re-enrich depleted uranium (tails) using excess centrifuge
                capacity. Creates “virtual” uranium supply. Responsive to the
                uranium/SWU price ratio.
              </td>
            </tr>
            <tr>
              <td style={s.ctblTd}>Russian HEU downblend (legacy)</td>
              <td style={s.ctblTd}>Largely complete</td>
              <td style={s.ctblTd}>Programme ended 2013</td>
              <td style={s.ctblTd}>
                The 1993–2013 “Megatons to Megawatts” programme converted 500
                tonnes of Russian HEU to reactor fuel. Supplied ~10–13% of world
                uranium annually for 20 years. Ending this programme was the
                primary cause of the 2006–2007 price spike.
              </td>
            </tr>
            <tr>
              <td style={s.ctblTd}>Russian government stockpiles</td>
              <td style={s.ctblTd}>Variable — ≤5 Mlbs/yr</td>
              <td style={s.ctblTd}>Sanction-constrained</td>
              <td style={s.ctblTd}>
                Russia retains large enrichment tails and natural uranium
                inventories. Post-August 2024 US import ban and November 2024
                Russian export restrictions, the flow of Russian uranium to
                Western utilities has been constrained. Remaining deliveries
                under pre-existing contracts are in a legal grey zone.
              </td>
            </tr>
            <tr>
              <td style={s.ctblTd}>US Department of Energy inventories</td>
              <td style={s.ctblTd}>~2–4 Mlbs/yr</td>
              <td style={s.ctblTd}>Policy-driven</td>
              <td style={s.ctblTd}>
                DOE releases uranium from excess inventories for cleanup
                programs and market sales. Subject to congressional oversight.
                The US Uranium Reserve programme (begun 2021) is purchasing
                domestic uranium to rebuild strategic stocks — net demand
                positive.
              </td>
            </tr>
            <tr>
              <td style={s.ctblTd}>Utility inventory drawdown</td>
              <td style={s.ctblTd}>~5–10 Mlbs/yr</td>
              <td style={s.ctblTd}>Now rebuilding</td>
              <td style={s.ctblTd}>
                During 2014–2021, many Western utilities ran down uranium
                inventories built post-Fukushima. Those inventories are now
                rebuilding, turning utilities from net sellers to net buyers.
                This transition from drawdown to rebuild is a structural bull
                catalyst.
              </td>
            </tr>
            <tr>
              <td style={s.ctblTd}>Plutonium reprocessing / MOX</td>
              <td style={s.ctblTd}>~5 Mlbs/yr equiv.</td>
              <td style={s.ctblTd}>Limited</td>
              <td style={s.ctblTd}>
                Mixed oxide (MOX) fuel displaces some uranium demand in France
                and Japan. Japan’s post-Fukushima reactor restarts have been
                slow, limiting MOX deployment. Not a significant swing factor at
                current scale.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default SecondarySection;
