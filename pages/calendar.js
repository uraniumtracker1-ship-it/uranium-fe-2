import CalendarPage from "@/components/Calendar/CalendarPage";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import SEO from "@/components/SEO";

const calendar = () => {
  return (
    <div>
      <SEO
        title="Uranium Market Calendar — Key Events & Industry Updates"
        description="Stay informed with the latest uranium market events in 2026. Track key industry conferences, financial updates, and supply-demand shifts with our comprehensive market calendar."
        keywords="uranium market calendar 2026, uranium events, uranium industry conferences, nuclear energy events, uranium market updates, supply and demand trends"
        canonicalUrl="https://www.uraniumtracker.com/calendar"
      />
      <Navbar />
      <CalendarPage />

      <div className="mt-10 md:mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default calendar;
