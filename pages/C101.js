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
        title="Uranium 101 - Uranium Guide & Glossary"
        description="Explore the world of Uranium with our comprehensive guide. Learn about uranium mining, nuclear fuel cycles, enrichment, yellowcake, U3O8, and the uranium market, their properties, uses, and market significance."
        keywords="Uranium 101, uranium guide, uranium glossary, nuclear fuel cycle, U3O8, yellowcake, uranium mining, uranium enrichment, nuclear energy, uranium market"
        canonicalUrl="https://musical-panda-75f15d.netlify.app/C101"
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