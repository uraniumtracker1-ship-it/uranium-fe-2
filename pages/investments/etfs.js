import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import InvestmentHero from "@/components/Investment/InvestmentHero";
import IETF from "@/components/Investment/ETF/IETF";
import SEO from "@/components/SEO";
import React from "react";

const ETFs = () => {
  return (
    <div>
      <SEO
        title="Uranium ETF & Trust Holdings — URNM, URA, URNJ | Uranium Tracker"
        description="Full holdings and allocation data for uranium ETFs and trusts — URNM, URA, URNJ, HURA, NLR, NUKZ, and Sprott Physical Uranium Trust (SPUT)."
        keywords="uranium ETF holdings, URNM holdings, URA holdings, Sprott uranium trust, uranium ETF comparison"
        canonicalPath="/investments/etfs"
      />
      <Navbar />
      <div className="pt-[80px]">
        <InvestmentHero />
      </div>
      <div className="px-3 md:px-12 mt-6 mb-24">
        <h1 className="cambay text-3xl font-bold mb-6">Uranium ETF &amp; Trust Holdings</h1>
        <IETF />
      </div>
      <Footer />
    </div>
  );
};

export default ETFs;
