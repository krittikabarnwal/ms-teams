import React from "react";
import "./Info.scss";

export const Info = ({ setMeetInfoPopup, url }) => {
  return (
    <div className="info-main">
      <div className="info-header">
        <h3>Invite People to join you...</h3>
        <i
          class="fa fa-times"
          aria-hidden="true"
          onClick={() => {
            setMeetInfoPopup(false);
          }}
          title="Close"
        ></i>
      </div>
      <hr></hr>
      <button className="add-people">
        <i class="fas fa-user-plus"></i>
        Add Participants
      </button>
      <p className="extra-info">Copy and share the link to invite someone</p>
      <div className="link-to-vc" title="Copy">
        <span>{url}</span>
        <i
          class="fas fa-copy"
          onClick={() => {
            navigator.clipboard.writeText(url);
            window.alert(
              "Url Link copied to clipboard ! Now send it to your Friend to start a video Call"
            );
          }}
        ></i>
      </div>
      <div className="small-text text-left"> Joining Microsoft Teams</div>
    </div>
  );
};
