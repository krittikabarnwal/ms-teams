import React from "react";
import "./CallPageFooter.scss";
import Stopwatch from "../../Stopwatch/Stopwatch";

const CallPageFooter = ({
  isPresenting,
  stopScreenShare,
  screenShare,
  isAudio,
  toggleAudio,
  disconnectCall,
  isVideo,
  stopVideo,
}) => {
  return (
    <div className="main-footer">
      <div className="icons-bar">
        <div className="mt-2 pl-2 mx-2 text-white" title="Meeting timer">
          <Stopwatch />
        </div>
        <div
          className={`icon-block ${!isAudio ? "red-bg" : null}`}
          onClick={() => toggleAudio(!isAudio)}
        >
          {isAudio ? (
            <i className="fas fa-microphone" title="Audio On"></i>
          ) : (
            <i className="fa fa-microphone-slash" title="Audio Off"></i>
          )}
        </div>
        <div
          className="icon-block"
          onClick={disconnectCall}
          title="Disconnect Call"
        >
          <i className="fas fa-phone"></i>
        </div>
        <div
          className={`icon-block ${!isVideo ? "red-bg" : null}`}
          onClick={() => stopVideo(!isVideo)}
        >
          {isVideo ? (
            <i className="fas fa-video" title="Video On"></i>
          ) : (
            <i className="fas fa-video-slash" title="Video Off"></i>
          )}
        </div>

        {isPresenting ? (
          <div
            className="icon-block"
            onClick={stopScreenShare}
            title="Stop Screen Share"
          >
            <span className="fa-stack fa-1x">
              <i className="fas fa-desktop fa-stack-1x"></i>
              <i className="fas fa-times fa-sm fa-stack-1x "></i>
            </span>
          </div>
        ) : (
          <div
            className="icon-block"
            onClick={screenShare}
            title="Start Screen Share"
          >
            <i className="fas fa-desktop" title="Start Screen Share"></i>
          </div>
        )}
      </div>
    </div>
  );
};
export default CallPageFooter;
