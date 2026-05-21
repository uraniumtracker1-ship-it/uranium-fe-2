import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { SEO_COPY, SITE_CONFIG } from "@/lib/constants";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { delay: 0.5, duration: 0.8 } },
};

const Hero = ({ spotPrice }) => {
  const videoRef = useRef(null);
  const router = useRouter();
  const [clientPrice, setClientPrice] = useState(spotPrice ?? null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  // Client-side price refresh every 5 minutes
  useEffect(() => {
    const refresh = async () => {
      try {
        const res = await fetch("/api/uranium-prices");
        if (!res.ok) return;
        const data = await res.json();
        const p = Array.isArray(data)
          ? data.find((d) => d.metal_name?.toLowerCase().includes("uranium"))?.price
          : data.uranium ?? data.price ?? data.spot_price ?? null;
        if (p) setClientPrice(p);
      } catch {
        /* non-fatal */
      }
    };
    if (!clientPrice) refresh();
    const id = setInterval(refresh, 5 * 60 * 1000);
    return () => clearInterval(id);
  }, []);

  const displayPrice = clientPrice ?? spotPrice;

  return (
    <div className="relative overflow-hidden px-5 sm:px-8 md:px-20 lg:px-32 xl:px-40 w-full h-[80vh] py-20 md:h-[70vh] flex items-center justify-start mb-14 bg-black">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          src="/HeroBG.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative z-10 text-white w-full sm:w-[90%] md:w-[80%] lg:w-[77%]">
        {/* Eyebrow — server-rendered price strip visible to crawlers */}
        <p className="hero-eyebrow text-sm text-white/80 mb-4 font-mono tracking-wide">
          <span className="live-val" id="hero-spot">
            U3O8 Spot {displayPrice ? `$${Number(displayPrice).toFixed(2)}/lb` : "—"}
          </span>
          {" · "}
          <span>Long-Term ~$90/lb</span>
          {" · "}
          <span id="hero-updated">
            Updated{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </p>

        {/* H1 — the single most important SEO signal on the page */}
        <motion.h1
          className="text-[30px] sm:text-[37px] md:text-[48px] lg:text-[57px] font-extrabold capitalize tracking-[-1px] md:leading-[67px] drop-shadow-md"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          {SEO_COPY.home.h1}
        </motion.h1>

        {/* Hero subhead — substantive, LLM-citeable */}
        <motion.p
          className="hero-subhead mt-4 text-white/80 text-base md:text-lg max-w-2xl leading-relaxed"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15, duration: 1 }}
        >
          {SEO_COPY.home.subhead}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-3"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          <button
            onClick={() => router.push("/investments")}
            aria-label="View live uranium price data and charts"
            className="bg-accent text-white px-6 py-3 rounded-sm w-full sm:w-auto hover:bg-accent/90 font-semibold"
          >
            View Live Data
          </button>
          <button
            onClick={() => router.push("/uranium-investing-101")}
            aria-label="Learn how to invest in uranium"
            className="bg-white/10 border border-white/40 text-white px-6 py-3 rounded-sm w-full sm:w-auto hover:bg-white/20 font-semibold"
          >
            Uranium Investing 101
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
