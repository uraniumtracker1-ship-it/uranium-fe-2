import React from "react";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { FaBars } from "react-icons/fa";
import Sidebar from "@/components/Dashboard/DSidebar";
import Header from "@/components/Dashboard/DHeader";
import ProfileContent from "@/components/Dashboard/DProfile";
import WatchlistContent from "@/components/Dashboard/DWatchlist";
import ScreenerContent from "@/components/Dashboard/DStockScreener";
import { GetUserData } from "@/src/utils/GetUserData";
import SEO from "@/components/SEO";

const DashboardLayout = () => {
  const userData = GetUserData();
  const router = useRouter();
  const [activeTab, setActiveTab] = React.useState("profile");
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const handleLogout = () => {
    document.cookie =
      "userData=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    router.push("/");
    toast.success("Logged out successfully");
  };

  const Content = () => {
    switch (activeTab) {
      case "screener":
        return <ScreenerContent />;
      case "watchlist":
        return <WatchlistContent userData={userData} />;
      case "profile":
        return <ProfileContent />;
      default:
        return null;
    }
  };

  return (
    <div className="h-screen w-full bg-gray-100 overflow-hidden">
      <SEO
        title="Dashboard — Stock Screener, Watchlist & Market Tools"
        description="Access your uranium investment dashboard — manage your watchlist, screen uranium stocks, track insider trades, and stay updated with the latest market data."
        keywords="uranium dashboard, uranium stock screener, uranium watchlist, uranium market tools, uranium investment tracker"
        canonicalUrl="https://www.uraniumtracker.com/dashboard"
        noindex={true}
      />
      <div className="flex h-full">
        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          handleLogout={handleLogout}
        />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          <main className="flex-1 overflow-y-auto">
            <Content />
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
