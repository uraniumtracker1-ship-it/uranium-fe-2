import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import InvestmentHero from "@/components/Investment/InvestmentHero";
import IETF from "@/components/Investment/ETF/IETF";
import SEO from "@/components/SEO";
import React from "react";

const ETFs = ({ hasData }) => {
  return (
    <div>
      <SEO
        title="Uranium ETF & Trust Holdings — URNM, URA, URNJ | Uranium Tracker"
        description="Full holdings and allocation data for uranium ETFs and trusts — URNM, URA, URNJ, HURA, NLR, NUKZ, and Sprott Physical Uranium Trust (SPUT)."
        keywords="uranium ETF holdings, URNM holdings, URA holdings, Sprott uranium trust, uranium ETF comparison"
        canonicalPath="/investments/etfs"
        robots={hasData ? undefined : "noindex,follow"}
      />
      <Navbar />
      <div className="pt-[80px]">
        <InvestmentHero
          title="Uranium ETF & Trust Holdings"
          description="Full holdings and allocation data for URNM, URA, URNJ, HURA, NLR, NUKZ, and Sprott Physical Uranium Trust."
        />
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

export async function getServerSideProps() {
  try {
    const { query } = await import("../../lib/database");
    const result = await query(`SELECT COUNT(*) as cnt FROM api_app_etfholdings`);
    const hasData = parseInt(result.rows[0]?.cnt ?? 0) > 0;
    return { props: { hasData } };
  } catch {
    return { props: { hasData: true } }; // fail open — don't noindex on DB error
  }
}
