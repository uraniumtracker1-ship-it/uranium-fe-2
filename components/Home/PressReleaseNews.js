import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { PRESS_RELEASE } from "@/src/api/uraniumAPI";
import { isUraniumRelevant, SECTION_HEADERS } from "@/lib/constants";

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

const PressReleaseNews = () => {
  const router = useRouter();
  const [pressReleases, setPressReleases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    const fetchPressReleases = async () => {
      try {
        const res = await fetch(PRESS_RELEASE);
        if (!res.ok) {
          setPressReleases([]);
          setLoading(false);
          return;
        }
        const data = await res.json();
        const raw = Array.isArray(data) ? data : [];
        const filtered = raw.filter(isUraniumRelevant);
        setPressReleases(filtered);
        if (filtered.length > 0) {
          setLastUpdated(filtered[0].created_at || filtered[0].date || null);
        }
      } catch {
        setPressReleases([]);
      } finally {
        setLoading(false);
      }
    };
    fetchPressReleases();
  }, []);

  const Header = () => (
    <div className="flex justify-between items-center mb-5 border-b border-black/10 pb-2">
      <h2 className="text-[21px] cambay font-bold">{SECTION_HEADERS.pressReleases}</h2>
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

  if (pressReleases.length === 0) {
    return (
      <div>
        <Header />
        <div className="text-center py-8 text-gray-500">
          No press releases available at this time.
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-x-7">
        {pressReleases.slice(0, 8).map((release) => (
          <div
            key={release.id}
            className="flex overflow-hidden group cursor-pointer border-b border-black/10 pb-4"
            onClick={() => router.push(`/news/press-release/${release.id}`)}
          >
            <div className="flex-1">
              {release.ticker && (
                <div className="mb-2">
                  <span className="bg-accent text-[11px] rounded-sm text-white px-2 py-1">
                    {release.ticker}
                  </span>
                </div>
              )}
              <h3 className="text-[15px] leading-6 mb-1 font-medium group-hover:underline line-clamp-3">
                {release.title || "No title available"}
              </h3>
              {release.company_name && (
                <p className="text-[13px] text-gray-600 mb-1">{release.company_name}</p>
              )}
              <div className="text-[12px] text-gray-500">
                {formatDate(release.date || release.created_at)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PressReleaseNews;
