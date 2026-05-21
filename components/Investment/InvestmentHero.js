import React from "react";

const InvestmentHero = ({ title, description }) => {
  return (
    <div className="relative bg-gray-900 w-full py-12">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="pt-[60px] md:pt-[80px] pb-8">
          <div className="text-white max-w-2xl">
            <p className="inline-block px-2 py-1 rounded-full text-xs font-semibold bg-accent mb-4">
              Uranium Investments
            </p>
            <h1 className="text-2xl lg:text-4xl font-bold my-4 cambay">
              {title || "Uranium Investment Data"}
            </h1>
            {description && (
              <p className="text-sm md:text-base text-white/80">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentHero;
