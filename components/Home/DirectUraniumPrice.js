import React, { useState, useEffect } from "react";
import { PRICE_FIELD_LABELS } from "@/lib/constants";

const fmt = (val, decimals = 2) => {
  const n = parseFloat(val);
  return isNaN(n) ? null : n.toFixed(decimals);
};

const PriceRow = ({ label, value, suffix = "", colorClass = "" }) => (
  <div className="flex justify-between items-center py-1.5 border-b border-black1/10 last:border-b-0">
    <span className="text-[11px] text-black1/60 font-medium">{label}</span>
    <span className={`text-[12px] font-semibold ${colorClass || "text-gray-900"}`}>
      {value ?? "—"}
      {value != null && suffix}
    </span>
  </div>
);

const DirectUraniumPrice = ({ spotPrice: initialSpotPrice }) => {
  const [data, setData] = useState(
    initialSpotPrice
      ? { spot: parseFloat(initialSpotPrice), change: 0, changePct: 0, longTerm: null, high52w: null, low52w: null, ytdPct: null, updatedAt: null }
      : null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch_ = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/cme-uranium-spot");
        if (!res.ok) throw new Error(`API ${res.status}`);
        const raw = await res.json();

        // API returns an array from the scraper — grab the first item
        const item = Array.isArray(raw) ? raw[0] : raw?.data ?? raw;
        if (!item) throw new Error("No data");

        // Normalise field names — scraper uses several naming conventions
        setData({
          spot:        parseFloat(item.price ?? item.last_price ?? item.spot_price) || null,
          change:      parseFloat(item.day_change ?? item.price_change ?? item.change) || 0,
          changePct:   parseFloat(item.percent_change ?? item.price_change_percent ?? item.change_percent) || 0,
          longTerm:    parseFloat(item.long_term_price ?? item.lt_price ?? item.long_term ?? item.longterm) || null,
          high52w:     parseFloat(item.high_52w ?? item["52_week_high"] ?? item.week_52_high ?? item.high52) || null,
          low52w:      parseFloat(item.low_52w  ?? item["52_week_low"]  ?? item.week_52_low  ?? item.low52)  || null,
          ytdPct:      parseFloat(item.ytd_change ?? item.ytd_percent ?? item.ytd ?? item.year_to_date) || null,
          updatedAt:   item.last_updated ?? item.scraped_at ?? item.updated_at ?? null,
        });
      } catch (e) {
        console.error("DirectUraniumPrice fetch error:", e);
        setError(e.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetch_();
    const id = setInterval(fetch_, 2 * 60 * 1000);
    return () => clearInterval(id);
  }, []);

  const title = (
    <h2 className="text-[21px] md:text-[16px] lg:text-[21px] cambay font-bold text-black1/80 capitalize border-b border-black1/20 pb-2 mb-4">
      Live Uranium Price
    </h2>
  );

  if (loading) {
    return (
      <div>
        {title}
        <div className="flex justify-center items-center h-24">
          <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-gray-800" />
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div>
        {title}
        <p className="text-sm text-red-500 text-center py-4">
          Price data unavailable
          {error && <span className="block text-xs text-gray-500 mt-1">{error}</span>}
        </p>
      </div>
    );
  }

  const { spot, change, changePct, longTerm, high52w, low52w, ytdPct, updatedAt } = data;
  const spread = spot != null && longTerm != null ? (spot - longTerm).toFixed(2) : null;

  const changeColor = change >= 0 ? "text-green-600" : "text-red-500";
  const ytdColor    = ytdPct != null ? (ytdPct >= 0 ? "text-green-600" : "text-red-500") : "";

  const formattedUpdated = updatedAt
    ? new Date(updatedAt).toLocaleString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })
    : new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });

  return (
    <div>
      {title}

      {/* Spot price hero row */}
      <div className="bg-accent/10 border border-accent/30 rounded-md p-3 mb-3 flex items-center justify-between">
        <div>
          <p className="text-[10px] text-black1/60 font-medium mb-0.5">U3O8 Spot (USD/lb)</p>
          <p className="text-xl font-extrabold text-accent">
            {spot != null ? `$${fmt(spot)}` : "—"}
          </p>
        </div>
        <div className="text-right">
          <p className={`text-sm font-bold ${changeColor}`}>
            {change >= 0 ? `+$${fmt(Math.abs(change))}` : `-$${fmt(Math.abs(change))}`}
          </p>
          <p className={`text-xs font-semibold ${changeColor}`}>
            {changePct >= 0 ? `+${fmt(changePct)}%` : `${fmt(changePct)}%`}
          </p>
        </div>
      </div>

      {/* Extended fields */}
      <div className="space-y-0">
        {longTerm != null && (
          <PriceRow label={PRICE_FIELD_LABELS.longTerm} value={`$${fmt(longTerm)}`} />
        )}
        {spread != null && (
          <PriceRow
            label={PRICE_FIELD_LABELS.spread}
            value={`${parseFloat(spread) >= 0 ? "+" : ""}$${spread}`}
            colorClass={parseFloat(spread) >= 0 ? "text-green-600" : "text-red-500"}
          />
        )}
        {high52w != null && (
          <PriceRow label={PRICE_FIELD_LABELS.high52w} value={`$${fmt(high52w)}`} />
        )}
        {low52w != null && (
          <PriceRow label={PRICE_FIELD_LABELS.low52w} value={`$${fmt(low52w)}`} />
        )}
        {ytdPct != null && (
          <PriceRow
            label={PRICE_FIELD_LABELS.ytdPct}
            value={`${ytdPct >= 0 ? "+" : ""}${fmt(ytdPct)}%`}
            colorClass={ytdColor}
          />
        )}
      </div>

      <div className="mt-3 space-y-0.5">
        <p className="text-[10px] text-gray-500">{PRICE_FIELD_LABELS.sourceLabel}</p>
        <p className="text-[10px] text-gray-400">Updated {formattedUpdated} · Auto-refresh 2 min</p>
      </div>
    </div>
  );
};

export default DirectUraniumPrice;
