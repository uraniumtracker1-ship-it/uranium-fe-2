import Head from "next/head";

const SITE_URL = "https://www.uraniumtracker.com";

// Rich Organization schema used on every page
const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Uranium Tracker",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.jpg`,
    width: 200,
    height: 60,
  },
  description:
    "Uranium Tracker is the leading data hub for uranium investors — providing live U3O8 spot prices, uranium stock and ETF data, insider trading records, nuclear reactor intelligence, and daily nuclear industry news.",
  foundingDate: "2023",
  areaServed: "Worldwide",
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@uraniumtracker.com",
    contactType: "customer support",
  },
  sameAs: [
    "https://twitter.com/uraniumtracker",
  ],
};

const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogType = "website",
  ogImage,
  noindex = false,
  jsonLd,
}) => {
  const canonical = canonicalUrl || SITE_URL;
  const image = ogImage || `${SITE_URL}/logo.jpg`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="robots"
        content={
          noindex
            ? "noindex, nofollow"
            : "index, follow, max-image-preview:large"
        }
      />

      {/* Open Graph */}
      <meta property="og:site_name" content="Uranium Tracker" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Uranium Tracker — live U3O8 spot price, uranium stocks, ETFs and nuclear news"
      />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@uraniumtracker" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href={canonical} />

      {/* Per-page JSON-LD — falls back to rich Organization schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd || ORG_SCHEMA),
        }}
      />
    </Head>
  );
};

export default SEO;
