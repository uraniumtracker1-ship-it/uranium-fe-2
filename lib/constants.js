// ─── Site Config ─────────────────────────────────────────────────────────────
export const SITE_CONFIG = {
  name: "Uranium Tracker",
  url: "https://www.uraniumtracker.com",
  email: "info@uraniumtracker.com",
  logoPath: "/logo.jpg",
  logoWidth: 512,
  logoHeight: 512,
  ogImagePath: "/og-home.jpg", // 1200x630 — provide this asset
};

// ─── SEO Copy ─────────────────────────────────────────────────────────────────
export const SEO_COPY = {
  home: {
    title: "Uranium Tracker — Live U3O8 Price, Stocks & Nuclear News",
    description:
      "Live U3O8 spot price, uranium stocks (CCJ, NXE, UEC), ETFs (URNM, URA, URNJ), insider trades, and nuclear market news — the data hub for uranium investors.",
    h1: "Uranium Price Today & Nuclear Market Data",
    subhead:
      "The independent data hub for uranium investors — track U3O8 spot and long-term contract prices, top uranium stocks (Cameco, NexGen, UEC, Energy Fuels, Boss Energy), uranium ETFs (URNM, URA, URNJ, NLR, NUKZ, HURA), insider trading across US, Canada and Australia, and 419 uranium projects globally.",
    keywords:
      "uranium price, U3O8 spot price, uranium stocks, uranium ETF, URNM, URA, CCJ, NXE, UEC, nuclear energy, uranium market, uranium investing, yellowcake price, uranium mining stocks",
  },
  news: {
    title: "Uranium News — Latest Nuclear Market Headlines | Uranium Tracker",
    description:
      "Latest uranium and nuclear energy news — mining company updates, reactor developments, U3O8 price moves, and nuclear policy from around the world.",
    h1: "Uranium Market News",
    keywords:
      "uranium news, nuclear energy news, uranium mining news, U3O8 news, nuclear reactor news",
  },
  investments: {
    title: "Uranium Stocks & ETFs — Screener, Insider Trades | Uranium Tracker",
    description:
      "Screen 60+ uranium mining stocks, track insider transactions, explore ETF holdings (URNM, URA, URNJ), and browse 419 uranium projects globally.",
    h1: "Uranium Investments — Stocks, ETFs & Projects",
    keywords:
      "uranium stocks, uranium ETF, uranium stock screener, uranium insider trades, uranium projects, URNM holdings, URA holdings",
  },
};

// ─── Navigation Labels ────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Live Data", href: "/data" },
  { label: "Stocks & ETFs", href: "/investments" },
  { label: "News", href: "/news" },
  { label: "Analyst Videos", href: "/videos" },
  { label: "Uranium 101", href: "/uranium-investing-101" },
];

// ─── Section Headers ──────────────────────────────────────────────────────────
export const SECTION_HEADERS = {
  breakingNews: "Latest Uranium News",
  stockNews: "Uranium Stock Coverage",
  pressReleases: "Insider Press Release Alerts",
  mostPopular: "Most Read This Week",
  insiderTransactions: "Recent Insider Transactions",
  nuclearEnergy: "The Nuclear Energy Revolution — Market Intelligence",
  popularTools: "Popular Research Tools",
  mostFollowed: "Most Watched Uranium Stocks",
};

// ─── Uranium Keyword Filter ───────────────────────────────────────────────────
// Used across all news components to filter out non-uranium content.
// Root cause: Django ingest pipeline lacks primary_commodity tagging.
// This client-side filter is the interim fix until the backend is updated.
export const URANIUM_KEYWORDS = [
  "uranium",
  "u3o8",
  "yellowcake",
  "nuclear",
  "olympic dam",
  "enrichment",
  "smr",
  "reactor",
  "cameco",
  "nexgen",
  "nxe",
  "paladin",
  "boss energy",
  "energy fuels",
  "kazatomprom",
  "athabasca",
  "cigar lake",
  "mcarthur river",
  "sprott uranium",
  "urnm",
  "ura etf",
  "urnj",
  "uranium one",
  "orano",
  "centrus",
  "oklo",
  "nuscale",
];

// Companies that must be excluded from uranium sections regardless of tags.
// These companies have no material uranium business.
export const URANIUM_BANNED_COMPANIES = [
  "wheaton precious metals",
  "wpm",
  "doordash",
  "wsp global",
  "enbridge",
];

/**
 * Returns true if the article is relevant to uranium.
 * Checks title and summary (case-insensitive) against URANIUM_KEYWORDS,
 * and rejects articles from URANIUM_BANNED_COMPANIES.
 *
 * @param {{ title?: string, summary?: string, content?: string, company_name?: string }} article
 * @returns {boolean}
 */
export function isUraniumRelevant(article) {
  const haystack = [
    article.title || "",
    article.summary || "",
    article.content || "",
  ]
    .join(" ")
    .toLowerCase();

  const companyName = (article.company_name || "").toLowerCase();

  const isBanned = URANIUM_BANNED_COMPANIES.some((banned) =>
    companyName.includes(banned) || haystack.includes(banned)
  );
  if (isBanned) return false;

  return URANIUM_KEYWORDS.some((kw) => haystack.includes(kw.toLowerCase()));
}

// ─── Insider Trade Helpers ────────────────────────────────────────────────────

// Maps SEC form title codes to plain English.
export const INSIDER_TITLE_MAP = {
  "10": "10% Owner",
  "4": "Director",
  "5": "Officer",
  "3": "Initial Filer",
  director: "Director",
  officer: "Officer",
  ceo: "CEO",
  cfo: "CFO",
  coo: "COO",
  vp: "VP",
  president: "President",
  chairman: "Chairman",
  trustee: "Trustee",
  "10% owner": "10% Owner",
};

/**
 * Converts a raw SEC/SEDI title code to a readable label.
 * Falls back to the original value if not found.
 * @param {string} raw
 * @returns {string}
 */
export function formatInsiderTitle(raw) {
  if (!raw) return "—";
  const normalized = raw.trim().toLowerCase().replace(/^(\d+)\s*-\s*.*$/, "$1");
  return INSIDER_TITLE_MAP[normalized] || raw.replace(/^\d+\s*-\s*/i, "").trim();
}

/**
 * Normalises SEC "acquisition or disposition" language to Buy / Sell.
 * @param {string} raw
 * @returns {{ label: "Buy" | "Sell" | string, color: string }}
 */
export function formatTradeType(raw) {
  if (!raw) return { label: "—", color: "text-gray-500" };
  const lower = raw.toLowerCase();
  if (lower.includes("acqui") || lower === "buy" || lower === "purchase") {
    return { label: "Buy", color: "text-green-600" };
  }
  if (lower.includes("dispo") || lower === "sell" || lower === "sale") {
    return { label: "Sell", color: "text-red-600" };
  }
  return { label: raw, color: "text-gray-500" };
}

// ─── Price Widget Labels ──────────────────────────────────────────────────────
export const PRICE_FIELD_LABELS = {
  spot: "U3O8 Spot Price (USD/lb)",
  longTerm: "U3O8 Long-Term Contract Price (USD/lb)",
  spread: "Spot–LT Spread (USD/lb)",
  high52w: "52-Week High",
  low52w: "52-Week Low",
  ytdPct: "YTD Performance",
  conversion: "Conversion Price (USD/kgU)",
  swu: "Enrichment SWU Price (USD/SWU)",
  sourceLabel: "Source: UxC weekly U3O8 spot, via Yellow Cake plc NAV",
};

// ─── Disclaimer & Attribution ─────────────────────────────────────────────────
export const FOOTER_DISCLAIMER =
  "Uranium Tracker is an independent uranium market data and news aggregator. Nothing on this site constitutes investment advice, a recommendation to buy or sell any security, or a solicitation to invest. All data is provided for informational purposes only and may contain errors or be subject to delays. Investing in commodities and equities involves substantial risk, including the loss of principal. Past performance is not indicative of future results. Consult a licensed financial advisor before making any investment decision.";

export const FOOTER_SOURCE_ATTRIBUTION =
  "U3O8 spot price data sourced from yellowcakeplc.com indicative price. Long-term contract price from UxC weekly indicators. Stock prices from public exchanges. Insider transactions from SEC EDGAR (Form 4), SEDI (Canada), and ASX (Australia). ETF holdings from Sprott, abrdn, VanEck, Global X, and Range Funds quarterly disclosures. Uranium project data compiled from company disclosures, NI 43-101 reports, and JORC technical reports.";
