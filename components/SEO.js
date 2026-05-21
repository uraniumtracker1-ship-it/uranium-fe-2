import Head from "next/head";

const SEO = ({ title, description, keywords, canonicalUrl }) => {
  const siteUrl = "https://www.uraniumtracker.com";
  const canonical = canonicalUrl || siteUrl;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow, max-image-preview:large" />

      {/* Open Graph */}
      <meta property="og:site_name" content="Uranium Tracker" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={`${siteUrl}/og-home.jpg`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Uranium Tracker — live U3O8 spot price, uranium stocks, ETFs and nuclear news" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}/og-home.jpg`} />

      <link rel="canonical" href={canonical} />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Uranium Tracker",
          url: siteUrl,
          logo: `${siteUrl}/logo.jpg`,
          description,
        })}
      </script>
    </Head>
  );
};

export default SEO;
