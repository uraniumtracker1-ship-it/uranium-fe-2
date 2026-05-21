/**
 * Fetches and merges RSS feeds from uranium-focused Substack newsletters.
 * All Substack publications expose a public RSS feed at /<feed>.
 */

const URANIUM_SUBSTACKS = [
  {
    name: "Uranium Unleashed",
    rss: "https://uraniumunleashed.substack.com/feed",
    url: "https://uraniumunleashed.substack.com",
  },
  {
    name: "The Uranium Desk",
    rss: "https://theuraniumdesk.substack.com/feed",
    url: "https://theuraniumdesk.substack.com",
  },
  {
    name: "PauloMacro",
    rss: "https://paulomacro.substack.com/feed",
    url: "https://paulomacro.substack.com",
  },
  {
    name: "Uranium Technology",
    rss: "https://utech.substack.com/feed",
    url: "https://utech.substack.com",
  },
  {
    name: "Uranium Insider",
    rss: "https://uraniuminsider.substack.com/feed",
    url: "https://uraniuminsider.substack.com",
  },
];

/**
 * Minimal XML parser — extracts <item> blocks from an RSS feed string.
 */
function parseRSSItems(xml) {
  const items = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;

  while ((match = itemRegex.exec(xml)) !== null) {
    const block = match[1];

    const get = (tag) => {
      // Handle CDATA and plain text
      const re = new RegExp(
        `<${tag}[^>]*>(?:<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>|([\\s\\S]*?))<\\/${tag}>`,
        "i"
      );
      const m = re.exec(block);
      return m ? (m[1] !== undefined ? m[1] : m[2] || "").trim() : "";
    };

    // Extract enclosure / media:content image
    const enclosureMatch = /enclosure[^>]+url="([^"]+)"/i.exec(block);
    const mediaMatch = /media:content[^>]+url="([^"]+)"/i.exec(block);
    const imgInDesc = /<img[^>]+src="([^"]+)"/i.exec(get("description"));

    const image =
      (enclosureMatch && enclosureMatch[1]) ||
      (mediaMatch && mediaMatch[1]) ||
      (imgInDesc && imgInDesc[1]) ||
      null;

    // Strip HTML from description for plain-text snippet
    const rawDesc = get("description");
    const plainDesc = rawDesc
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    items.push({
      title: get("title"),
      url: get("link"),
      description: plainDesc.slice(0, 120) + (plainDesc.length > 120 ? "…" : ""),
      image,
      pubDate: get("pubDate"),
    });
  }

  return items;
}

async function fetchFeed(source) {
  const res = await fetch(source.rss, {
    headers: { "User-Agent": "UraniumTracker/1.0 RSS Reader" },
    signal: AbortSignal.timeout(5000),
  });

  if (!res.ok) throw new Error(`HTTP ${res.status}`);

  const xml = await res.text();
  const items = parseRSSItems(xml);

  return items.slice(0, 3).map((item, i) => ({
    id: `${source.name}-${i}`,
    title: item.title || "Untitled",
    url: item.url || source.url,
    content: item.description,
    image_url: item.image,
    date: item.pubDate ? new Date(item.pubDate).toISOString() : null,
    source: source.name,
    source_url: source.url,
  }));
}

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  // Cache for 30 minutes
  res.setHeader("Cache-Control", "s-maxage=1800, stale-while-revalidate=3600");

  const results = await Promise.allSettled(
    URANIUM_SUBSTACKS.map((s) => fetchFeed(s))
  );

  const posts = results
    .filter((r) => r.status === "fulfilled")
    .flatMap((r) => r.value)
    .sort((a, b) => {
      if (!a.date) return 1;
      if (!b.date) return -1;
      return new Date(b.date) - new Date(a.date);
    });

  if (posts.length === 0) {
    return res.status(200).json([]);
  }

  return res.status(200).json(posts);
}
