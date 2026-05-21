import React from "react";
import { SidebarLatestNewsProvider } from "../context/SidebarLatestNewsContext";
import { CommunityPostUtilsProvider } from "../context/CommunityPostUtilsContext";
import SEO from "@/components/SEO";
import Community from "@/components/Community/Community";

const CommunityPage = () => {
  return (
    <>
      <SEO
        title="Uranium Community — Discussions, Insights & Market Trends"
        description="Join the Uranium Tracker community to discuss market trends, stock insights, and industry news. Share your views, connect with investors, and stay informed about the latest uranium market developments."
        keywords="uranium community, uranium investment discussions, uranium stock insights, nuclear energy forum, uranium market trends, investor forum"
        canonicalUrl="https://www.uraniumtracker.com/community"
      />
      <SidebarLatestNewsProvider>
        <CommunityPostUtilsProvider>
          <Community />
        </CommunityPostUtilsProvider>
      </SidebarLatestNewsProvider>
    </>
  );
};

export default CommunityPage;
