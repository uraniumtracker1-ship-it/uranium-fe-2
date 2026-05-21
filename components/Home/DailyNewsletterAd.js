import React from "react";
import { useRouter } from "next/router";

const DailyNewsletterAd = () => {
  const router = useRouter();

  const handleDataPage = () => {
    router.push("/data");
  };

  return (
    <div className="bg-gradient-to-b from-accent to-accent/50 rounded-lg p-8">
      {/* Heading Section */}
      <h2 className="text-white text-3xl font-semibold cambay">
        Check our <span className="text-white">Free</span>
      </h2>
      <h2 className="text-white text-3xl font-bold cambay">
        Data Page.
      </h2>

      {/* Button Section */}
      <div className="mt-6">
        <button
          onClick={handleDataPage}
          className="w-full text-sm bg-white hover:bg-white/80 text-black font-bold py-[10px] rounded transition-colors duration-200"
        >
          DATA PAGE
        </button>
      </div>
    </div>
  );
};

export default DailyNewsletterAd;
