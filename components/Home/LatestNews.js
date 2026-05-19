import React, { useState, useEffect } from "react";
import Loader from "../Loader";
import { GENERAL_NEWS } from "@/src/api/uraniumAPI";
import { isUraniumRelevant, SECTION_HEADERS } from "@/lib/constants";

const FALLBACK_IMG = "/fallback-uranium.jpg";

const formatDate = (dateString) => {
  if (!dateString) return "";
  try {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
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

const LatestNews = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(GENERAL_NEWS);
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
      <h2 className="text-[21px] cambay font-bold">{SECTION_HEADERS.breakingNews}</h2>
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
        <div className="flex justify-center items-center h-32">
          <Loader />
        </div>
      </div>
    );
  }

  if (newsData.length === 0) {
    return (
      <div>
        <Header />
        <div className="text-center py-8 text-gray-500">
          No uranium news available at this time.
        </div>
      </div>
    );
  }

  const [featured, ...rest] = newsData;

  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Featured article */}
        <a href={featured.url} target="_blank" rel="noopener noreferrer" className="block">
          {featured.image_url && (
            <NewsImage
              src={featured.image_url}
              alt={featured.title}
              className="w-full h-64 object-cover mb-2 rounded-md"
            />
          )}
          {featured.source && (
            <span className="bg-accent text-[11px] rounded-sm text-white px-2 py-1 mb-2 inline-block">
              {featured.source}
            </span>
          )}
          <h3 className="text-lg font-semibold text-primary mb-1 hover:underline">
            {featured.title}
          </h3>
          {featured.summary && (
            <p className="text-[14px] text-gray-600 mb-2 line-clamp-2">
              {featured.summary}
            </p>
          )}
          <p className="text-gray-500 text-sm">{formatDate(featured.date)}</p>
        </a>

        {/* Side articles */}
        <div className="space-y-4">
          {rest.slice(0, 3).map((news, i) => (
            <a
              key={news.id || i}
              href={news.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex space-x-4"
            >
              {news.image_url && (
                <NewsImage
                  src={news.image_url}
                  alt={news.title}
                  className="w-24 h-24 object-cover flex-shrink-0 rounded-md"
                />
              )}
              <div>
                {news.source && (
                  <span className="bg-accent text-[10px] rounded-sm text-white px-2 py-[2px] mb-1 inline-block">
                    {news.source}
                  </span>
                )}
                <h3 className="text-sm font-medium text-primary line-clamp-2 hover:underline">
                  {news.title}
                </h3>
                <p className="text-gray-500 text-xs mt-1">{formatDate(news.date)}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
