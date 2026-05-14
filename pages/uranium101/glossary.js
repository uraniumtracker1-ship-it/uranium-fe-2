import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import C101Breadcrumb from "@/components/C101/C101Breadcrumb";
import GlossaryAccordion from "@/components/C101/GlossaryAccordion";
import SEO from "@/components/SEO";

const Glossary = () => {
  return (
    <div>
      <SEO
        title="Uranium Glossary - Uranium Industry Terms & Definitions"
        description="Comprehensive glossary of uranium industry terms, definitions, and technical vocabulary. Learn about uranium mining, processing, alloys, and market terminology."
        keywords="uranium glossary, uranium terms, uranium definitions, uranium industry vocabulary, metal terminology, uranium alloys, mining terms"
        canonicalUrl="https://musical-panda-75f15d.netlify.app/uranium101/glossary"
      />
      <Navbar />
      <C101Breadcrumb link="/uranium101/glossary" title="Uranium Glossary" />
      
      <div className="container mx-auto px-4 py-8 mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Uranium Industry Glossary</h1>
          <p className="text-lg text-gray-600 mb-8 text-center">
            Comprehensive definitions and explanations of key terms in the uranium industry
          </p>
          <GlossaryAccordion />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Glossary;
