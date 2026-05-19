import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import InvestmentHero from "@/components/Investment/InvestmentHero";
import IUraniumAssets from "@/components/Investment/IUraniumAssets";
import SEO from "@/components/SEO";
import React from "react";

const Projects = () => {
  return (
    <div>
      <SEO
        title="Uranium Projects Database — 419 Global Assets | Uranium Tracker"
        description="Explore 419 uranium development projects worldwide — filter by country, development stage, and resource estimate. Includes operating mines, advanced projects, and exploration plays."
        keywords="uranium projects database, uranium mines, uranium development projects, uranium exploration, global uranium assets"
        canonicalPath="/investments/projects"
      />
      <Navbar />
      <div className="pt-[80px]">
        <InvestmentHero />
      </div>
      <div className="px-3 md:px-12 mt-6 mb-24">
        <h1 className="cambay text-3xl font-bold mb-6">Global Uranium Projects</h1>
        <IUraniumAssets />
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
