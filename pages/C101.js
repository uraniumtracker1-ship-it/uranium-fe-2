import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import C101Cards from "@/components/C101/C101Cards";
import C101Hero from "@/components/C101/C101Hero";
import React from "react";
import SEO from "@/components/SEO";

const C101 = () => {
  return (
    <div>
      <SEO
        title="Uranium 101 — Uranium Investing Guide & Glossary"
        description="Learn everything about uranium investing — from U3O8 spot prices and nuclear fuel cycles to uranium stocks, ETFs, and the global supply-demand outlook. The complete guide for uranium investors."
        keywords="uranium 101, uranium investing guide, uranium glossary, nuclear fuel cycle, U3O8, yellowcake, uranium mining, uranium enrichment, nuclear energy, uranium market"
        canonicalUrl="https://www.uraniumtracker.com/C101"
      />
      <Navbar />
      <C101Hero />
      <C101Cards />

      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
};

export default C101;