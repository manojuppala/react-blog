import React from "react";

const Video = ({ id }) => {
  return (
    <div
      className="embed-responsive embed-responsive-16by9"
      style={{ maxWidth: "750px", margin: "auto", marginBottom: "10px" }}
    >
      <iframe
        title="youtube-video"
        className="embed-responsive-item"
        src={`https://www.youtube.com/embed/${id}?rel=0&fs=0&modestbranding=1&loop=1`}
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;
