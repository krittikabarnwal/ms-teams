import React from "react";
import "./Chatbox.scss";
import { useState } from "react";
import { formatDate } from "../../../utils/helper";

export const Chatbox = ({ setIsMessenger, sendMsg, messageList }) => {
  const [msg, setMsg] = useState("");

  const handleChangeMsg = (e) => {
    setMsg(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMsg(msg);
      setMsg("");
    }
  };

  const handleSendMsg = () => {
    sendMsg(msg);
    setMsg("");
  };

  return (
    <div className="chatbox-container">
      <div className="chatbox-header">
        <h3>Meeting Details</h3>
        <i
          class="fas fa-times"
          onClick={() => {
            setIsMessenger(false);
          }}
        ></i>
      </div>
      <div className="header-tab">
        <div className="tab">
          <i class="fas fa-user-friends"></i>
          <p>People(1)</p>
        </div>
        <div className="tab active">
          <i class="fas fa-comment-alt"></i>
          <p>Chat</p>
        </div>
      </div>

      <div className="chat-section">
        {messageList
          ? messageList.map((item) => (
              <div key={item.time} className="chat-block">
                <div className="sender">
                  {item.user} <small>{formatDate(item.time)}</small>
                </div>
                <p className="msg">{item.msg}</p>
              </div>
            ))
          : null}
      </div>

      <div className="send-msg-section">
        <input
          placeholder="Send a message"
          value={msg}
          onChange={(e) => handleChangeMsg(e)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <i class="fas fa-paper-plane" onClick={handleSendMsg}></i>
      </div>
    </div>
  );
};
