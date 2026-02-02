import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { FaPlay } from "react-icons/fa";
import Loader from "../Loader";
import { VIDEOS } from "@/src/api/copperAPI";
const VideoList = ({ category }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const response = await axios.get(VIDEOS);
        
        // Handle the new API response format
        const allVideos = response.data.videos || [];
        
        const filteredVideos =
          category === "All"
            ? allVideos
            : allVideos.filter(
                (video) => video.category === category
              );
        setVideos(filteredVideos);
      } catch (err) {
        console.error('Error fetching videos:', err);
        setError("Failed to fetch videos");
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [category]);

  const getEmbedUrl = (url) => {
    const videoId = getYouTubeId(url);
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const getThumbnailUrl = (url) => {
    const videoId = getYouTubeId(url);
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  };

  const openModal = (videoUrl) => {
    setCurrentVideoUrl(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideoUrl(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center py-12">
        <Loader />
      </div>
    );
    
  if (error) 
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Retry
          </button>
        </div>
      </div>
    );

  if (!videos || videos.length === 0) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-center">
          <p className="text-gray-500 mb-2">No videos found for {category} category</p>
          <p className="text-sm text-gray-400">Check back later for new content</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray- rounded-md mb-7">
      <h2 className="frank text-[1rem] md:text-[1.25rem] lg:mb-6 ml-2 font-semibold inter tracking-tight text-black1/90">
        {category} Videos
      </h2>

      <div className="mt-7 flex justify-center flex-wrap gap-x-11 gap-y-8">
        {videos.map((video) => (
          <div
            key={video.id}
            className="w-[250px] cursor-pointer"
            onClick={() => openModal(video.link)}
          >
            <div
              className="w-full h-[133px] mb-3 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url(${getThumbnailUrl(video.link)})`,
              }}
            >
              <div className="flex items-center justify-center w-full h-full bg-black1 bg-opacity-30 rounded-lg">
                <span className="text-white text-xl">
                  <FaPlay />
                </span>
              </div>
            </div>
            <div className="flex gap-x-2 items-center -mt-1">
              <p className="text-[12px] text-date">
                {video.channel || "Unknown Channel"}
              </p>
              <span className="mt-[-6px] text-date"> | </span>
              <p className="text-[12px] text-date">
                {formatDate(video.date) || "Unknown Date"}
              </p>
            </div>
            <h1 className="mt-[3px] text-[15px] leading-[24px] font-medium text-black1/90">
              {video.title || "No Title Available"}
            </h1>
            {video.company && video.company !== "NA" && (
              <p className="text-[12px] text-date mt-1">
                Company: {video.company}
              </p>
            )}
            {video.ticker && video.ticker !== "NA" && (
              <p className="text-[12px] text-date">
                Stock Ticker: {video.ticker}
              </p>
            )}
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div
            ref={modalRef}
            className="relative w-[45vh] h-[30vh] md:w-[70vw] md:h-[70vh] bg-white p-1 rounded-lg"
          >
            <iframe
              width="100%"
              height="100%"
              src={getEmbedUrl(currentVideoUrl)}
              title="Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              onClick={closeModal}
              className="absolute top-4 right-3 text-white text-sm font-bold"
            >
              ✕
            </button>
            <button
              onClick={() =>
                document.fullscreenElement
                  ? document.exitFullscreen()
                  : modalRef.current.requestFullscreen()
              }
              className="absolute top-2 left-2 text-white text-xl font-bold"
            >
              ⛶
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

function getYouTubeId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

export default VideoList;
