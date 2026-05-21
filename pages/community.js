import React from "react";
import { SidebarLatestNewsProvider } from "../context/SidebarLatestNewsContext";
import { CommunityPostUtilsProvider } from "../context/CommunityPostUtilsContext";
import SEO from "@/components/SEO";
import Community from "@/components/Community/Community";

const CommunityPage = () => {
  return (
    <>
      <SEO
        title="Uranium Community - Discussions, Insights & Market Trends"
        description="Join the Uranium investment community to discuss market trends, stock insights, and industry news. Share your views, connect with investors, and stay informed about the latest updates in the Uranium sector."
        keywords="Uranium community, investment discussions, stock insights, market trends, investor forum, Uranium, financial discussions, market analysis"
        canonicalUrl="https://musical-panda-75f15d.netlify.app/community"
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
