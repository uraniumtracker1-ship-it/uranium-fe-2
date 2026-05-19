import { query } from "@/lib/database";
import { SITE_CONFIG } from "@/lib/constants";

const BASE = SITE_CONFIG.url;

function toXmlUrl(loc, lastmod, changefreq, priority) {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

function SitemapXml() {
  return null;
}

export async function getServerSideProps({ res }) {
  const today = new Date().toISOString().split("T")[0];

  const staticPages = [
    toXmlUrl(`${BASE}/`, today, "daily", "1.0"),
    toXmlUrl(`${BASE}/data`, today, "daily", "0.9"),
    toXmlUrl(`${BASE}/news`, today, "hourly", "0.9"),
    toXmlUrl(`${BASE}/investments`, today, "daily", "0.8"),
    toXmlUrl(`${BASE}/investments/leaders`, today, "daily", "0.8"),
    toXmlUrl(`${BASE}/investments/screener`, today, "daily", "0.8"),
    toXmlUrl(`${BASE}/investments/insider-trades`, today, "daily", "0.8"),
    toXmlUrl(`${BASE}/investments/etfs`, today, "weekly", "0.7"),
    toXmlUrl(`${BASE}/investments/projects`, today, "weekly", "0.7"),
    toXmlUrl(`${BASE}/uranium-investing-101`, today, "monthly", "0.7"),
    toXmlUrl(`${BASE}/videos`, today, "weekly", "0.6"),
  ];

  let stockUrls = [];
  let newsUrls = [];

  try {
    const stockRows = await query(
      "SELECT ticker, updated_at FROM api_app_stockmetrics ORDER BY ticker"
    );
    stockUrls = (stockRows.rows || []).map((s) =>
      toXmlUrl(
        `${BASE}/stock-detail/${encodeURIComponent(s.ticker)}`,
        s.updated_at ? new Date(s.updated_at).toISOString().split("T")[0] : today,
        "daily",
        "0.6"
      )
    );
  } catch {
    // Non-fatal — sitemap still renders without stock pages
  }

  try {
    const newsRows = await query(
      "SELECT id, updated_at FROM api_app_generalnews ORDER BY updated_at DESC LIMIT 500"
    );
    newsUrls = (newsRows.rows || []).map((n) =>
      toXmlUrl(
        `${BASE}/news/${n.id}`,
        n.updated_at ? new Date(n.updated_at).toISOString().split("T")[0] : today,
        "monthly",
        "0.5"
      )
    );
  } catch {
    // Non-fatal
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticPages, ...stockUrls, ...newsUrls].join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  res.write(xml);
  res.end();

  return { props: {} };
}

export default SitemapXml;
