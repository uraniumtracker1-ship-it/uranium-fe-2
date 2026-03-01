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
        title="Lithium 101 - Lithium Alloys Guide & Glossary"
        description="Explore the world of Lithium and its alloys with our comprehensive guide. Learn about lithium, brass, bronze, aluminum bronze, nickel silver, and beryllium lithium, their properties, uses, and market significance."
        keywords="Lithium 101, Lithium Alloys, lithium, brass, bronze, aluminum bronze, nickel silver, beryllium lithium, metal properties, lithium glossary, industrial metals"
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