import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import C101Cards from "@/components/C101/C101Cards";
import C101Hero from "@/components/C101/C101Hero";
import React from "react";
import SEO from "@/components/SEO";
import { SEO_COPY } from "@/lib/constants";

const UraniumInvesting101 = () => {
  return (
    <div>
      <SEO
        title="Uranium Investing 101 — Beginner's Guide to U3O8 & Nuclear Stocks"
        description="Learn how to invest in uranium — covering U3O8 spot price dynamics, top uranium stocks (CCJ, NXE, UEC), ETFs (URNM, URA), and the nuclear energy investment thesis."
        keywords="uranium investing, how to invest in uranium, uranium stocks beginners, U3O8 investing guide, nuclear energy stocks, uranium ETF guide"
        canonicalPath="/uranium-investing-101"
      />
      <Navbar />
      <C101Hero />
      <C101Cards />
      <Footer />
    </div>
  );
};

export default UraniumInvesting101;
