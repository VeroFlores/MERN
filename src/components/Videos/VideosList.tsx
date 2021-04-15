import React, { useState, useEffect } from "react";
import { Video } from "./Video";
import { getVideos } from "./VideoService";
import VideoItem from "./VideoItem";
const VideosList = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const loadVideos = async () => {
    const res = await getVideos();
    const formatedVideos = res.data
      .map((video) => {
        return {
          ...video,
          createdAt: video.createdAt ? new Date(video.createdAt) : new Date(),
          updatedAt: video.updateAd ? new Date(video.updateAd) : new Date(),
        };
      })
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    setVideos(formatedVideos);
  };
  useEffect(() => {
    loadVideos();
  }, []);
  return (
    <div className="col-md-12">
      <div className="row">
        {videos.map((video) => (
          <VideoItem video={video} key={video._id} loadVideos={loadVideos} />
        ))}
      </div>
    </div>
  );
};

export default VideosList;
