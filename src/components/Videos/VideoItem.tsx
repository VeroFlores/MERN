import React from "react";
import ReactPlayer from "react-player";
import { Video } from "./Video";
import { useHistory } from "react-router-dom";
import "./VideoItem.css";
import * as videoService from "./VideoService";
interface Props {
  video: Video;
  loadVideos: () => void;
}

const VideoItem = ({ video, loadVideos }: Props) => {
  const history = useHistory();
  const handleDelete = async (id: string) => {
    await videoService.deleteVideo(id);
    loadVideos();
  };
  return (
    <div className="col-lg-4 p-2">
      <div className="card card-body video-card" style={{ cursor: "pointer" }}>
        <div className="d-flex justify-content-between">
          <h5 onClick={() => history.push(`/update/${video._id}`)}>
            {video.title}
          </h5>
          <span
            className="text-danger"
            onClick={() => video._id && handleDelete(video._id)}
          >
            x
          </span>
        </div>
        <p>{video.description}</p>
        <div className="embed-responsive embed-responsive-16by9">
          <ReactPlayer url={video.url} />
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
