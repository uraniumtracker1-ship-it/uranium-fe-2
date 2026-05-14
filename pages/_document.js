import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/Uranium thumbnail.png" type="image/png" />
        <link rel="shortcut icon" href="/Uranium thumbnail.png" type="image/png" />
        <link rel="apple-touch-icon" href="/Uranium thumbnail.png" />
        {/* Default OG image */}
        <meta property="og:image" content="/Uranium thumbnail.png" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
