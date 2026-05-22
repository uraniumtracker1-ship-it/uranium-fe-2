import React, { useEffect, useRef, memo } from "react";

// Core uranium tickers for the snapshot
const URANIUM_TICKERS = [
  { symbol: "NYSE:CCJ",      label: "Cameco" },
  { symbol: "NYSE:NXE",      label: "NexGen Energy" },
  { symbol: "AMEX:UEC",      label: "Uranium Energy" },
  { symbol: "AMEX:DNN",      label: "Denison Mines" },
  { symbol: "NASDAQ:EU",     label: "enCore Energy" },
  { symbol: "ASX:PDN",       label: "Paladin Energy" },
  { symbol: "ASX:BOE",       label: "Boss Energy" },
  { symbol: "ASX:DYL",       label: "Deep Yellow" },
  { symbol: "AMEX:URNM",     label: "URNM ETF" },
  { symbol: "AMEX:URA",      label: "URA ETF" },
  { symbol: "NASDAQ:URNJ",   label: "URNJ ETF" },
  { symbol: "NYSE:LEU",      label: "Centrus Energy" },
];

// Single TradingView single-quote widget
const SingleQuoteWidget = memo(({ symbol }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear any previous widget
    containerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol,
      colorTheme: "light",
      isTransparent: false,
      locale: "en",
      width: "100%",
    });

    containerRef.current.appendChild(script);
  }, [symbol]);

  return (
    <div
      className="tradingview-widget-container rounded-md overflow-hidden border border-gray-100"
      ref={containerRef}
    >
      <div className="tradingview-widget-container__widget" />
    </div>
  );
});

SingleQuoteWidget.displayName = "SingleQuoteWidget";

const ISnapshot = () => {
  return (
    <div className="px-3 md:px-12 py-5">
      <h1 className="cambay text-[22px] sm:text-3xl font-semibold mb-1">
        Market Leaders
      </h1>
      <p className="text-sm text-gray-500 mb-6">
        Live prices for top uranium stocks, ETFs, and futures — powered by TradingView.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {URANIUM_TICKERS.map((t) => (
          <SingleQuoteWidget key={t.symbol} symbol={t.symbol} />
        ))}
      </div>
    </div>
  );
};

export default ISnapshot;
