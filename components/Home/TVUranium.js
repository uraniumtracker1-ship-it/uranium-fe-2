import React, { useEffect, useRef, memo } from "react";

// Sprott Uranium Miners ETF (URNM) — used as a uranium equity proxy.
// Note: there is no public TradingView ticker for U3O8 spot (OTC market).
function UraniumMinersETFWidget() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: "AMEX:URNM",
      interval: "D",
      timezone: "Etc/UTC",
      theme: "light",
      style: "1",
      locale: "en",
      enable_publishing: false,
      hide_top_toolbar: false,
      hide_legend: false,
      allow_symbol_change: true,
      save_image: false,
      calendar: false,
      hide_volume: false,
      support_host: "https://www.tradingview.com",
    });

    if (container.current) {
      container.current.innerHTML = "";
      container.current.appendChild(script);
    }
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      style={{ height: "325px", width: "100%" }}
    >
      <div
        className="tradingview-widget-container__widget"
        ref={container}
        style={{ height: "calc(100% - 32px)", width: "100%" }}
      />
      <p className="text-[10px] text-gray-400 mt-1">
        ETF proxy — not U3O8 spot price.{" "}
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
          className="underline"
        >
          TradingView
        </a>
      </p>
    </div>
  );
}

export default memo(UraniumMinersETFWidget);
