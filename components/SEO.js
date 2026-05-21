import Head from "next/head";
import { SITE_CONFIG } from "@/lib/constants";

/**
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.description
 * @param {string} [props.keywords]
 * @param {string} [props.canonicalPath]   - relative path e.g. "/" or "/news"
 * @param {string} [props.ogImagePath]     - absolute URL or path to OG image
 * @param {string} [props.h1]              - page H1 for JSON-LD WebPage name
 * @param {object} [props.jsonLdExtra]     - additional JSON-LD @graph entries
 * @param {number} [props.spotPrice]       - current U3O8 spot price for Dataset schema
 * @param {string} [props.robots]          - robots meta content, defaults to "index, follow, max-image-preview:large"
 */
const SEO = ({
  title,
  description,
  keywords,
  canonicalPath = "/",
  ogImagePath,
  h1,
  jsonLdExtra = [],
  spotPrice,
  robots = "index, follow, max-image-preview:large",
}) => {
  const canonicalUrl = `${SITE_CONFIG.url}${canonicalPath}`;
  const ogImage = ogImagePath
    ? `${SITE_CONFIG.url}${ogImagePath}`
    : null;

  const today = new Date().toISOString().split("T")[0];

  const jsonLdGraph = [
    {
      "@type": "WebSite",
      "@id": `${SITE_CONFIG.url}/#website`,
      url: `${SITE_CONFIG.url}/`,
      name: SITE_CONFIG.name,
      description: "Live uranium prices, stocks, ETFs and nuclear market data.",
      publisher: { "@id": `${SITE_CONFIG.url}/#organization` },
      inLanguage: "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_CONFIG.url}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
      url: `${SITE_CONFIG.url}/`,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.url}${SITE_CONFIG.logoPath}`,
        width: SITE_CONFIG.logoWidth,
        height: SITE_CONFIG.logoHeight,
      },
      sameAs: [
        "https://goldtracker.io",
        "https://silvertracker.io",
        "https://coppertracker.io",
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: h1 || title,
      description,
      isPartOf: { "@id": `${SITE_CONFIG.url}/#website` },
      about: { "@id": `${SITE_CONFIG.url}/#organization` },
      datePublished: "2024-01-01",
      dateModified: today,
      inLanguage: "en-US",
    },
    ...(spotPrice
      ? [
          {
            "@type": "Dataset",
            "@id": `${SITE_CONFIG.url}/#dataset`,
            name: "U3O8 Uranium Spot Price",
            description:
              "Daily indicative spot price for U3O8 uranium concentrate.",
            url: `${SITE_CONFIG.url}/`,
            creator: { "@id": `${SITE_CONFIG.url}/#organization` },
            dateModified: today,
            license: `${SITE_CONFIG.url}/terms`,
            variableMeasured: [
              {
                "@type": "PropertyValue",
                name: "U3O8 Spot Price",
                unitText: "USD per pound",
                value: String(spotPrice),
              },
            ],
          },
        ]
      : []),
    ...jsonLdExtra,
  ];

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content={robots} />
      <meta charset="UTF-8" />
      <html lang="en-US" dir="ltr" />

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_CONFIG.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      {ogImage && (
        <>
          <meta property="og:image" content={ogImage} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta
            property="og:image:alt"
            content={`${SITE_CONFIG.name} — live U3O8 spot price, uranium stocks and nuclear news`}
          />
        </>
      )}

      {/* Twitter / X Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": jsonLdGraph,
          }),
        }}
      />
    </Head>
  );
};

export default SEO;
