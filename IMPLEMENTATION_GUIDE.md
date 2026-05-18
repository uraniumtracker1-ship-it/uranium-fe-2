# Complete Data Page Implementation Guide

## What Has Been Done

### ✅ Completed Files
1. `/components/Data/styles.js` - Complete styling system with increased fonts
2. `/components/Data/DataHero.js` - Hero section with live prices
3. `/components/Data/Breadcrumb.js` - Navigation breadcrumb
4. `/components/Data/SectionNav.js` - Sticky section navigation
5. `/components/Data/PriceSection.js` - Complete price section with charts
6. `/components/Data/FuelCycleSection.js` - Nuclear fuel cycle section
7. `/components/Data/KazakhstanSection.js` - Kazakhstan production section
8. `/pages/_document.js` - Added DM Sans and DM Mono fonts

## What Needs To Be Done

You need to create the remaining section component files by copying the EXACT content from the hmm components. Here's the mapping:

### Section Files to Create

1. **ProjectPipeline.js** - Copy from `/home/titan/hmm/src/components/ProjectPipeline.jsx`
2. **UtilitySection.js** - Copy from `/home/titan/hmm/src/components/UtilitySection.jsx`
3. **ReactorSection.js** - Copy from `/home/titan/hmm/src/components/ReactorSection.jsx`
4. **SecondarySection.js** - Copy from `/home/titan/hmm/src/components/SecondrySection.jsx`
5. **BalanceSection.js** - Copy from `/home/titan/hmm/src/components/DemandSection.jsx`
6. **ProducersSection.js** - Copy from `/home/titan/hmm/src/components/MajorProducers.jsx`
7. **HistorySection.js** - Copy from `/home/titan/hmm/src/components/PriceHistory.jsx`
8. **GeopoliticsSection.js** - Copy from `/home/titan/hmm/src/components/geoPloitics.jsx`
9. **DashboardSection.js** - Copy from `/home/titan/hmm/src/components/DriverDashboard.jsx`
10. **InstrumentsSection.js** - Copy from `/home/titan/hmm/src/components/ETF.jsx`
11. **UraniumCalculator.js** - Copy from `/home/titan/hmm/src/components/Calculator.jsx`
12. **FAQSection.js** - Copy from `/home/titan/hmm/src/components/FAQ.jsx`
13. **EditorialNote.js** - Copy from `/home/titan/hmm/src/components/Note.jsx`

### Steps to Complete

#### Step 1: Create Each Section File
For each file above, create it in `/home/titan/ur/components/Data/` with the content from the corresponding hmm file.

**Important Changes When Copying:**
- Change `import * as s from "./styles";` (keep as is)
- Change `className={s.section}` to `className={s.section}` (keep as is)
- All other content should be EXACTLY the same

#### Step 2: Update data.js
Replace `/home/titan/ur/pages/data.js` with:

```javascript
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
```

## Quick Copy Commands

You can use these commands to copy the files:

```bash
# From the hmm directory, copy each component to ur
cp /home/titan/hmm/src/components/ProjectPipeline.jsx /home/titan/ur/components/Data/ProjectPipeline.js
cp /home/titan/hmm/src/components/UtilitySection.jsx /home/titan/ur/components/Data/UtilitySection.js
cp /home/titan/hmm/src/components/ReactorSection.jsx /home/titan/ur/components/Data/ReactorSection.js
cp /home/titan/hmm/src/components/SecondrySection.jsx /home/titan/ur/components/Data/SecondarySection.js
cp /home/titan/hmm/src/components/DemandSection.jsx /home/titan/ur/components/Data/BalanceSection.js
cp /home/titan/hmm/src/components/MajorProducers.jsx /home/titan/ur/components/Data/ProducersSection.js
cp /home/titan/hmm/src/components/PriceHistory.jsx /home/titan/ur/components/Data/HistorySection.js
cp /home/titan/hmm/src/components/geoPloitics.jsx /home/titan/ur/components/Data/GeopoliticsSection.js
cp /home/titan/hmm/src/components/DriverDashboard.jsx /home/titan/ur/components/Data/DashboardSection.js
cp /home/titan/hmm/src/components/ETF.jsx /home/titan/ur/components/Data/InstrumentsSection.js
cp /home/titan/hmm/src/components/Calculator.jsx /home/titan/ur/components/Data/UraniumCalculator.js
cp /home/titan/hmm/src/components/FAQ.jsx /home/titan/ur/components/Data/FAQSection.js
cp /home/titan/hmm/src/components/Note.jsx /home/titan/ur/components/Data/EditorialNote.js
```

## Verification Checklist

After completing the above:

- [ ] All 13 section files created in `/components/Data/`
- [ ] All files import from `"./styles"`
- [ ] `/pages/data.js` updated with all imports
- [ ] Fonts loading (check browser console)
- [ ] Page renders without errors
- [ ] All sections visible and scrollable
- [ ] Section navigation works
- [ ] Charts and tables display correctly

## Font Sizes Summary

All fonts have been increased by 20-30%:
- H1: 30-46px (was 26-40px)
- H2: 24-30px (was 20-26px)
- Body: 16px (was 14px)
- Stats: 26px (was 22px)
- Labels: 11-13px (was 9-11px)
