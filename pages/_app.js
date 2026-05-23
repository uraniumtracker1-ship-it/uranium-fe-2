import "@/styles/globals.css";
import { ToastContainer } from 'react-toastify';
import { Toaster } from "react-hot-toast";
import 'react-toastify/dist/ReactToastify.css';
import { ForumPostsProvider } from "../context/ForumPostsContext";
import { SidebarLatestNewsProvider } from '../context/SidebarLatestNewsContext';
import { CommunityPostUtilsProvider } from '../context/CommunityPostUtilsContext';
import NetworkBar from "../components/NetworkBar";

export default function App({ Component, pageProps }) {
  return (
    <SidebarLatestNewsProvider>
      <CommunityPostUtilsProvider>
        <ForumPostsProvider>
          <Toaster position="top-right" reverseOrder={false} />
          {/* Network bar sits just below the fixed navbar */}
          <div className="fixed top-[80px] left-0 w-full z-40">
            <NetworkBar />
          </div>
          {/* Push page content down to account for navbar + network bar */}
          <div className="pt-[32px]">
            <Component {...pageProps} />
          </div>
          <ToastContainer />
        </ForumPostsProvider>
      </CommunityPostUtilsProvider>
    </SidebarLatestNewsProvider>
  );
}
