import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import DataHero from "@/components/Data/DataHero";
import Breadcrumb from "@/components/Data/Breadcrumb";
import SectionNav from "@/components/Data/SectionNav";
import PriceSection from "@/components/Data/PriceSection";
import FuelCycleSection from "@/components/Data/FuelCycleSection";
import KazakhstanSection from "@/components/Data/KazakhstanSection";
import ProjectPipeline from "@/components/Data/ProjectPipeline";
import UtilitySection from "@/components/Data/UtilitySection";
import ReactorSection from "@/components/Data/ReactorSection";
import SecondarySection from "@/components/Data/SecondarySection";
import BalanceSection from "@/components/Data/BalanceSection";
import ProducersSection from "@/components/Data/ProducersSection";
import HistorySection from "@/components/Data/HistorySection";
import GeopoliticsSection from "@/components/Data/GeopoliticsSection";
import DashboardSection from "@/components/Data/DashboardSection";
import InstrumentsSection from "@/components/Data/InstrumentsSection";
import UraniumCalculator from "@/components/Data/UraniumCalculator";
import FAQSection from "@/components/Data/FAQSection";
import EditorialNote from "@/components/Data/EditorialNote";

const Data = () => {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <SEO
        title="Uranium Market Data - Live Prices, Supply & Demand Intelligence"
        description="Access comprehensive uranium market data including live spot prices, long-term contracts, supply-demand analytics, reactor intelligence, and exclusive market insights used by industry professionals."
        keywords="uranium prices today, live uranium market data, nuclear reactor intelligence, uranium supply chain analytics, uranium demand forecasting, SMR market opportunities, nuclear energy statistics, uranium investment intelligence"
        canonicalUrl="https://uraniumtracker.com/data"
      />
      
      <nav id="navigation" role="navigation" aria-label="Main navigation">
        <Navbar />
      </nav>
      
      <Breadcrumb />
      <DataHero />
      <SectionNav />
      <PriceSection />
      <FuelCycleSection />
      <KazakhstanSection />
      <ProjectPipeline />
      <UtilitySection />
      <ReactorSection />
      <SecondarySection />
      <BalanceSection />
      <ProducersSection />
      <HistorySection />
      <GeopoliticsSection />
      <DashboardSection />
      <InstrumentsSection />
      <UraniumCalculator />
      <FAQSection />
      <EditorialNote />

      <footer role="contentinfo" aria-label="Site footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Data;
