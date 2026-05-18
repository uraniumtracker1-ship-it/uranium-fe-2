import React from "react";
import * as s from "./styles";

const PipelineSection = () => {
  return (
    <section
      id="pipeline"
      className={s.section}
      aria-label="Uranium project pipeline"
    >
      <p style={s.secLabel}>Section E</p>
      <h2 style={s.h2}>
        Uranium Project Pipeline — Supply Coming Online Through 2030
      </h2>
      <p style={s.lede}>
        The goldandsilvertracker.com database tracks{" "}
        <strong>227 uranium assets</strong> across 10 countries — 66 producing,
        40 in development, 108 in exploration, 10 in care &amp; maintenance. The
        pipeline has been growing since the price recovery. But this is where
        uranium’s brutal lead-time problem is most visible: even projects that
        took FID in 2025–2026 are unlikely to produce before 2028–2030. The
        reactor fleet that is going to consume uranium in 2030 is already
        running or being built. The mines that will supply it are, mostly, not.
      </p>

      {/* Chart 9: Pipeline by status and method */}
      <div style={s.cb}>
        <div style={s.cbHdr}>
          <div style={s.cbLabels}>
            <p style={s.cl}>
              goldandsilvertracker.com database · 227 assets · Quarterly update
            </p>
            <p style={s.ct}>Uranium Pipeline by Status &amp; Mining Method</p>
            <p style={s.cm}>
              Sulphide vs ISR distinction matters: ISR produces in &lt;5 years;
              conventional underground 8–15 years
            </p>
          </div>
          <div style={s.cbTabs}>
            <button style={s.tabOn}>By status</button>
            <button style={s.tab}>By region</button>
          </div>
        </div>

        <div style={s.chartSvgWrap}>
          <svg
            viewBox="0 0 700 190"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%" }}
          >
            <text x="10" y="15" fontSize="9" fill={s.vars.muted}>
              Asset count by status and method | 227 total assets
            </text>

            {/* Producing Group */}
            <text x="35" y="185" fontSize="9" fill={s.vars.muted}>
              Producing
            </text>
            <rect x="35" y="100" width="20" height="75" fill="#22C55E" rx="2" />
            <rect
              x="58"
              y="125"
              width="20"
              height="50"
              fill={s.vars.lt}
              rx="2"
            />
            <rect
              x="81"
              y="130"
              width="20"
              height="45"
              fill={s.vars.ur}
              rx="2"
            />
            <text x="44" y="97" fontSize="8" fill={s.vars.muted}>
              ISR
            </text>
            <text x="44" y="112" fontSize="8" fill="#5B21B6">
              UG
            </text>

            {/* Development Group */}
            <text x="175" y="185" fontSize="9" fill={s.vars.muted}>
              Development
            </text>
            <rect
              x="185"
              y="130"
              width="20"
              height="45"
              fill="#22C55E"
              rx="2"
            />
            <rect
              x="208"
              y="110"
              width="20"
              height="65"
              fill={s.vars.lt}
              rx="2"
            />
            <rect
              x="231"
              y="120"
              width="20"
              height="55"
              fill={s.vars.ur}
              rx="2"
            />

            {/* Exploration Group */}
            <text x="325" y="185" fontSize="9" fill={s.vars.muted}>
              Exploration
            </text>
            <rect
              x="335"
              y="95"
              width="20"
              height="80"
              fill="#22C55E"
              rx="2"
              opacity=".6"
            />
            <rect
              x="358"
              y="70"
              width="20"
              height="105"
              fill={s.vars.lt}
              rx="2"
              opacity=".6"
            />
            <rect
              x="381"
              y="80"
              width="20"
              height="95"
              fill={s.vars.ur}
              rx="2"
              opacity=".6"
            />

            {/* Legend */}
            <rect x="540" y="20" width="10" height="10" fill="#22C55E" />
            <text x="554" y="29" fontSize="9" fill={s.vars.muted}>
              ISR
            </text>
            <rect x="540" y="35" width="10" height="10" fill={s.vars.lt} />
            <text x="554" y="44" fontSize="9" fill={s.vars.muted}>
              Underground
            </text>
            <rect x="540" y="50" width="10" height="10" fill={s.vars.ur} />
            <text x="554" y="59" fontSize="9" fill={s.vars.muted}>
              Open Pit
            </text>
          </svg>
        </div>
      </div>

      <div style={s.statBand}>
        <div style={s.stat}>
          <p style={{ ...s.statVal, color: s.vars.ur }}>227</p>
          <p style={s.statLbl}>Total assets</p>
          <p style={s.statSub}>10+ countries tracked</p>
        </div>
        <div style={s.stat}>
          <p style={{ ...s.statVal, color: "#065f46" }}>66</p>
          <p style={s.statLbl}>Producing</p>
          <p style={s.statSub}>Active mines</p>
        </div>
        <div style={s.stat}>
          <p style={{ ...s.statVal, color: "#92400e" }}>40</p>
          <p style={s.statLbl}>Development</p>
          <p style={s.statSub}>FID or construction</p>
        </div>
        <div style={s.stat}>
          <p style={{ ...s.statVal, color: s.vars.muted }}>10</p>
          <p style={s.statLbl}>Care &amp; Maintenance</p>
          <p style={s.statSub}>Ready for restart</p>
        </div>
      </div>

      <h3 style={s.h3}>Key Development Projects</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div style={{ ...s.projCard, ...s.dev }}>
          <p style={s.projTagDev}>▶ Under construction</p>
          <p style={s.projName}>Phoenix ISR — Wheeler River</p>
          <p style={s.projSub}>
            Denison Mines (TSX:DML / NYSEAMERICAN:DNN) · Saskatchewan
          </p>
          <p style={s.projDetail}>
            FID taken; construction started March 2026. First production target:
            2028. Capacity: ~6 Mlbs/yr using proprietary SABRE ISR method.
            Unique: no mill required, in-situ recovery directly from Athabasca
            high-grade deposits. Gryphon underground component (5 Mlbs/yr) to
            follow.
          </p>
        </div>

        <div style={{ ...s.projCard, ...s.dev }}>
          <p style={s.projTagDev}>⌛ CNSC review</p>
          <p style={s.projName}>Arrow Deposit — Rook I Project</p>
          <p style={s.projSub}>
            NexGen Energy (TSX/NYSE:NXE) · Athabasca Basin, Saskatchewan
          </p>
          <p style={s.projDetail}>
            Largest undeveloped high-grade uranium deposit globally. Target
            capacity: 30 Mlbs/yr (could represent ~15% of projected global
            supply at full build). CNSC environmental assessment hearings
            ongoing. FID pending regulatory approval. Estimated timeline:
            production 2030+.
          </p>
        </div>

        <div style={{ ...s.projCard, ...s.dev }}>
          <p style={s.projTagDev}>⌛ Commissioning target H2 2027</p>
          <p style={s.projName}>Dasa Uranium Project</p>
          <p style={s.projSub}>Global Atomic (TSX:GLO) · Agadez, Niger</p>
          <p style={s.projDetail}>
            High-grade underground uranium mine. Capacity: 4.4 Mlbs/yr.
            Commissioning target H2 2027. US DFC (Development Finance
            Corporation) financing is the primary gating factor. Niger political
            situation adds country risk despite the mine being in Orano’s legacy
            infrastructure zone.
          </p>
        </div>

        <div style={s.projCard}>
          <p style={s.projTag}>🚷 Ramp-up challenges</p>
          <p style={s.projName}>Langer Heinrich Phase 1–3</p>
          <p style={s.projSub}>Paladin Energy (ASX/TSX:PDN) · Namibia</p>
          <p style={s.projDetail}>
            Restarted in early 2024. FY2025 production guidance withdrawn March
            2025 after heavy rains and ore grade issues. Production rate: ~3.3
            Mlbs/yr at name plate; ramp progress behind schedule. Two class
            actions filed by shareholders. Phase 2 expansion (8 Mlbs/yr
            capacity) contingent on resolving Phase 1 ramp. Fission Uranium
            (PLS/Triple R) acquired Nov 2024.
          </p>
        </div>

        <div style={s.projCard}>
          <p style={s.projTag}>⌛ Development</p>
          <p style={s.projName}>Cigar Lake Zone 4 Extension</p>
          <p style={s.projSub}>Cameco (TSX:CCO / NYSE:CCJ) · Saskatchewan</p>
          <p style={s.projDetail}>
            Extends Cigar Lake mine life. Target: 18 Mlbs/yr capacity on
            extension development. Cameco operating at 13.4 Mlbs/yr from main
            operation. Extension development underway. Key asset for Cameco’s
            2028–2030 production profile.
          </p>
        </div>

        <div style={s.projCard}>
          <p style={s.projTag}>⌛ PFS / Permitting</p>
          <p style={s.projName}>Triple R / PLS — Patterson Lake South</p>
          <p style={s.projSub}>
            Paladin Energy / ex-Fission Uranium · Athabasca Basin
          </p>
          <p style={s.projDetail}>
            Acquired by Paladin from Fission Uranium (Nov 2024, C$1.14B).
            Planned capacity: 10 Mlbs/yr. Open pit + underground hybrid.
            Pre-feasibility ongoing. Paladin adding significant
            development-stage Athabasca exposure alongside Langer Heinrich
            operating asset.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PipelineSection;
