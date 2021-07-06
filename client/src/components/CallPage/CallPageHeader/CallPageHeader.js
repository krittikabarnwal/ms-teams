import React from "react";
import "./CallPageHeader.scss";
import { formatDate } from "./../../../utils/helper";
import { useState, useEffect } from "react";

const CallPageHeader = ({
  isMessenger,
  setIsMessenger,
  messageAlert,
  setMessageAlert,
}) => {
  let interval = null;
  const [currentTime, setCurrentTime] = useState(() => {
    return formatDate();
  });

  useEffect(() => {
    interval = setInterval(() => setCurrentTime(formatDate()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="frame-header ">
      <div className="header-items call-icon-block">
        <i className="fas fa-user-friends"></i>{" "}
      </div>
      <div
        className="header-items call-icon-block"
        onClick={() => {
          setIsMessenger(true);
          setMessageAlert({});
        }}
      >
        <i className="far fa-comment-dots"></i>
        {!isMessenger && messageAlert.alert && (
          <span className="alert-circle-icon"></span>
        )}
      </div>
      <div className="header-items call-icon-block-time">{currentTime}</div>
      <div className="header-items call-icon-block profile">
        <i className="far fa-user-circle"></i>{" "}
      </div>
    </div>
  );
};
export default CallPageHeader;
