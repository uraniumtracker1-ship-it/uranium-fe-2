import React, { useState, useEffect } from "react";
import Link from "next/link";
import { SUBSTACKS } from "@/src/api/uraniumAPI";

const FALLBACK_IMAGE =
  "https://substackcdn.com/image/fetch/w_96,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2ea5e5e2-da11-4f7e-8f9e-b5e5e5e5e5e5_256x256.png";

const Substacks = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const formatTitle = (title) => {
    if (!title) return "Untitled";
    return title.length <= 70 ? title : `${title.substring(0, 70)}…`;
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(SUBSTACKS);
        if (!response.ok) {
          setPosts([]);
          setLoading(false);
          return;
        }
        const data = await response.json();
        const formatted = Array.isArray(data)
          ? data.map((post, i) => ({
              id: post.id || `post-${i}`,
              title: formatTitle(post.title),
              url: post.url || "#",
              content: post.content || "",
              image: post.image_url || null,
              date: formatDate(post.date),
              source: post.source || "Substack",
              source_url: post.source_url || "#",
            }))
          : [];
        setPosts(formatted);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching substack feeds:", err);
        setError(err.message);
        setPosts([]);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const header = (
    <h2 className="flex items-center text-[19px] md:text-[21px] font-bold cambay border-b border-gray-300 pb-1 mb-3">
      Uranium Substacks
    </h2>
  );

  if (loading) {
    return (
      <div>
        {header}
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-800" />
          <span className="ml-3 text-gray-800 font-semibold">Loading…</span>
        </div>
      </div>
    );
  }

  if (error || posts.length === 0) {
    return (
      <div>
        {header}
        <div className="text-center py-8 text-gray-500 text-sm">
          {error ? `Error: ${error}` : "No posts available at this time."}
        </div>
      </div>
    );
  }

  return (
    <div>
      {header}
      <div className="space-y-5">
        {posts.slice(0, 4).map((post) => (
          <Link
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start justify-between space-x-3 pb-4 cursor-pointer group border-b border-gray-100 last:border-b-0"
          >
            {/* Text */}
            <div className="flex flex-col flex-grow min-w-0">
              <p className="text-xs font-semibold text-accent mb-1 truncate">
                {post.source}
              </p>
              <h3 className="text-sm font-bold text-gray-800 group-hover:text-accent transition-colors leading-snug">
                {post.title}
              </h3>
              {post.content && (
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                  {post.content}
                </p>
              )}
              {post.date && (
                <span className="text-xs text-gray-400 mt-1">{post.date}</span>
              )}
            </div>

            {/* Thumbnail */}
            {post.image && (
              <div className="flex-shrink-0">
                <div className="w-[72px] h-[64px] overflow-hidden rounded-md bg-gray-100">
                  <img
                    src={post.image}
                    alt={post.title.substring(0, 30)}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform"
                    onError={(e) => {
                      e.target.parentElement.style.display = "none";
                    }}
                  />
                </div>
              </div>
            )}
          </Link>
        ))}
      </div>

      {/* Footer link */}
      <div className="mt-3 text-right">
        <a
          href="https://substack.com/search?q=uranium"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-accent hover:underline"
        >
          More on Substack →
        </a>
      </div>
    </div>
  );
};

export default Substacks;
