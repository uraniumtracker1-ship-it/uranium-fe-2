import React, { useState, useEffect } from "react";
import { STOCK_NEWS } from "@/src/api/uraniumAPI";
import { isUraniumRelevant, SECTION_HEADERS } from "@/lib/constants";

const FALLBACK_IMG = "/fallback-uranium.jpg";

const formatDate = (dateString) => {
  if (!dateString) return "";
  try {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return "";
  }
};

const NewsImage = ({ src, alt, className }) => (
  <img
    src={src || FALLBACK_IMG}
    alt={alt || ""}
    className={className}
    onError={(e) => {
      e.currentTarget.src = FALLBACK_IMG;
    }}
  />
);

const StockNews = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(STOCK_NEWS);
        if (!response.ok) {
          setNewsData([]);
          setLoading(false);
          return;
        }
        const data = await response.json();
        const raw = Array.isArray(data) ? data : [];
        const filtered = raw.filter(isUraniumRelevant);
        setNewsData(filtered);
        if (filtered.length > 0) {
          setLastUpdated(filtered[0].created_at || filtered[0].date || null);
        }
      } catch {
        setNewsData([]);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  const Header = () => (
    <div className="flex justify-between items-center mb-5 border-b border-black/10 pb-2">
      <h2 className="text-[21px] cambay font-bold">{SECTION_HEADERS.stockNews}</h2>
      {lastUpdated && (
        <span className="text-xs text-gray-400">
          Last updated: {formatDate(lastUpdated)}
        </span>
      )}
    </div>
  );

  if (loading) {
    return (
      <div>
        <Header />
        <div className="text-center py-8 text-gray-500">Loading…</div>
      </div>
    );
  }

  if (newsData.length === 0) {
    return (
      <div>
        <Header />
        <div className="text-center py-12 text-gray-600">
          No uranium stock news available at this time.
        </div>
      </div>
    );
  }

  const [featured, ...rest] = newsData;

  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-9 gap-6">
        {/* Featured article */}
        <div className="col-span-5">
          <a href={featured.url} target="_blank" rel="noopener noreferrer" className="block">
            <div className="overflow-hidden group cursor-pointer">
              <NewsImage
                src={featured.image_url}
                alt={featured.title}
                className="w-full h-[300px] object-cover rounded-sm"
              />
              <div className="pt-4">
                <div className="flex gap-x-2 mb-2 flex-wrap">
                  {featured.ticker && (
                    <span className="bg-accent text-[11px] rounded-sm text-white px-2 py-1">
                      {featured.ticker}
                    </span>
                  )}
                  {featured.company_name && (
                    <span className="bg-gray-100 text-[11px] rounded-sm text-gray-700 px-2 py-1">
                      {featured.company_name}
                    </span>
                  )}
                </div>
                <h3 className="text-[18px] font-medium leading-6 mb-2 group-hover:underline">
                  {featured.title}
                </h3>
                {featured.summary && (
                  <p className="text-[14px] text-gray-600 mb-2 line-clamp-2">
                    {featured.summary}
                  </p>
                )}
                <div className="text-[14px] text-gray-500">
                  {formatDate(featured.date)}
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Side articles */}
        <div className="col-span-4 space-y-3">
          {rest.slice(0, 3).map((news, i) => (
            <a
              href={news.url}
              target="_blank"
              rel="noopener noreferrer"
              key={news.id || i}
              className="flex overflow-hidden group cursor-pointer border-b border-black/10 pb-2"
            >
              <div className="flex-1">
                <div className="flex gap-x-2 mb-1 flex-wrap">
                  {news.ticker && (
                    <span className="bg-accent text-[11px] rounded-sm text-white px-2 py-1">
                      {news.ticker}
                    </span>
                  )}
                </div>
                <h3 className="text-[15px] leading-6 mb-1 font-medium group-hover:underline line-clamp-2">
                  {news.title}
                </h3>
                {news.company_name && (
                  <p className="text-[12px] text-gray-600 mb-1">{news.company_name}</p>
                )}
                <div className="text-[12px] text-gray-500">{formatDate(news.date)}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StockNews;
