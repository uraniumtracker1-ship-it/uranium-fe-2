import * as style from "./styles.js";

export default function DataHero() {
  return (
    <div style={style.hero}>
      <div style={style.heroInner}>
        <p style={style.heroEyebrow}>
          <span id="eyebrow-spot">U3O8 Spot — see live strip below</span>
          &nbsp;&middot;&nbsp; Kazakhstan 43% of world supply
          &nbsp;&middot;&nbsp;
          <span id="eyebrow-updated">Updated regularly</span>
        </p>

        <h1 style={style.h1}>
          Uranium Price Today &mdash;
          <em style={style.h1Em}>U3O8 Spot &amp; Long-Term Contract</em>
        </h1>

        <p style={style.heroSub}>
          Uranium trades in a market unlike any other commodity. Utilities buy
          fuel years in advance through long-term contracts. The spot market
          sets the marginal price. Kazakhstan controls 43% of global supply. One
          company &mdash; Kazatomprom &mdash; sets the tone for the entire
          market via annual RKAB permit quotas. This page tracks every number
          that matters.
        </p>

        <div style={style.heroMeta}>
          <span style={style.heroMetaSpan}>
            &#9889; <strong style={style.heroMetaStrong}>227</strong> assets
            tracked &middot; 10 countries
          </span>

          <span style={style.heroMetaSpan}>&#128197; Updated daily</span>

          <span style={style.heroMetaSpan}>
            <a
              href="/uranium-investing-101/"
              style={{ color: "rgba(255, 255, 255, 0.5)" }}
            >
              Uranium 101 &rarr;
            </a>
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4" id="hero-prices">
          <div style={style.hs}>
            <p style={style.hsL}>U3O8 Spot</p>
            <p style={{ ...style.hsV, ...style.urC }} id="h-spot">
              —
            </p>
            <p style={style.hsS} id="h-spot-sub">
              UxC weekly &middot; USD/lb
            </p>
          </div>

          <div style={style.hs}>
            <p style={style.hsL}>Long-Term Contract</p>
            <p style={{ ...style.hsV, ...style.purC }} id="h-lt">
              —
            </p>
            <p style={style.hsS}>UxC monthly &middot; USD/lb</p>
          </div>

          <div style={style.hs}>
            <p style={style.hsL}>Spot Premium / Disc.</p>
            <p style={{ ...style.hsV, ...style.ambC }} id="h-spread">
              —
            </p>
            <p style={style.hsS}>Spot minus LT price</p>
          </div>

          <div style={style.hs}>
            <p style={style.hsL}>Kazatomprom Output</p>
            <p style={{ ...style.hsV, ...style.grnC }} id="h-kap">
              67.18 Mlbs
            </p>
            <p style={style.hsS}>FY2025 100% basis &middot; +11%</p>
          </div>

          <div style={style.hs}>
            <p style={style.hsL}>Cameco Output</p>
            <p style={{ ...style.hsV, color: "#93c5fd" }} id="h-cam">
              21.0 Mlbs
            </p>
            <p style={style.hsS}>FY2025 Cameco share</p>
          </div>
        </div>
      </div>
    </div>
  );
}
