import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/Uranium thumbnail.png" type="image/png" />
        <link rel="shortcut icon" href="/Uranium thumbnail.png" type="image/png" />
        <link rel="apple-touch-icon" href="/Uranium thumbnail.png" />
        {/* Default OG image — must be absolute for social crawlers */}
        <meta property="og:image" content="https://www.uraniumtracker.com/logo.jpg" />
        {/* Google Fonts - DM Sans and DM Mono */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        {/* WebSite schema — enables sitelinks searchbox in Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Uranium Tracker",
              alternateName: "UraniumTracker",
              url: "https://www.uraniumtracker.com",
              description:
                "Live U3O8 spot price, uranium stocks, ETFs, insider trades, and nuclear industry news. The data hub for uranium investors.",
              inLanguage: "en-US",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://www.uraniumtracker.com/news?search={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        {/* SiteNavigationElement schema — helps search engines understand site structure */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Uranium Tracker Navigation",
              itemListElement: [
                { "@type": "SiteLinksSearchBox", url: "https://www.uraniumtracker.com/" },
                { "@type": "ListItem", position: 1, name: "Home", url: "https://www.uraniumtracker.com/" },
                { "@type": "ListItem", position: 2, name: "Uranium News", url: "https://www.uraniumtracker.com/news" },
                { "@type": "ListItem", position: 3, name: "Market Data", url: "https://www.uraniumtracker.com/data" },
                { "@type": "ListItem", position: 4, name: "Investments", url: "https://www.uraniumtracker.com/investments" },
                { "@type": "ListItem", position: 5, name: "Uranium 101", url: "https://www.uraniumtracker.com/C101" },
                { "@type": "ListItem", position: 6, name: "Calendar", url: "https://www.uraniumtracker.com/calendar" },
              ],
            }),
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
