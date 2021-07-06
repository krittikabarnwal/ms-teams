import React, { useState } from "react";
import "./MyVideo.scss";

export const MyVideo = () => {
  const [playing, setPlaying] = useState(false);

  const HEIGHT = 180;
  const WIDTH = 260;

  const startVideo = () => {
    setPlaying(true);
    navigator.getUserMedia(
      {
        video: true,
      },
      (stream) => {
        let video = document.getElementsByClassName("appvideo__videoFeed")[0];
        if (video) {
          video.srcObject = stream;
        }
      },
      (err) => console.error(err)
    );
  };

  const stopVideo = () => {
    setPlaying(false);
    let video = document.getElementsByClassName("appvideo__videoFeed")[0];
    video.srcObject.getTracks()[0].stop();
  };

  return (
    <div className="appvideo ">
      <div className="appvideo__container">
        <video
          height={HEIGHT}
          width={WIDTH}
          muted
          autoPlay
          className="appvideo__videoFeed"
        ></video>
      </div>
      <div className="appvideo__input">
        {playing ? (
          <button onClick={stopVideo}>Stop</button>
        ) : (
          <button onClick={startVideo}>Start</button>
        )}
      </div>
    </div>
  );
};

export default MyVideo;
