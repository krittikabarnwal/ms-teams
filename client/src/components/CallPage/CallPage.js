// This file controls all the features during the call

import React from "react";
import "./CallPage.scss";
import { useEffect, useReducer, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getRequest, postRequest } from "./../../utils/apiRequests";
import {
  BASE_URL,
  GET_CALL_ID,
  SAVE_CALL_ID,
} from "./../../utils/apiEndpoints";
import io from "socket.io-client";
import Peer from "simple-peer";
import MessageListReducer from "../../reducers/MessageListReducer";
import CallPageHeader from "./CallPageHeader/CallPageHeader";
import CallPageFooter from "./CallPageFooter/CallPageFooter";
import { Chatbox } from "./Chatbox/Chatbox";
import { Info } from "./Info/Info";
import Alert from "./Alert/Alert";
import Sidebar from "../Sidebar/Sidebar";
import MyVideo from "./MyVideo/MyVideo";

let peer = null;
const socket = io.connect(BASE_URL);
const initialState = [];

const CallPage = () => {
  const history = useHistory();
  let { id } = useParams();
  const isAdmin = window.location.hash == "#init" ? true : false;
  const url = `${window.location.origin}${window.location.pathname}`;
  let alertTimeout = null;

  const [messageList, messageListReducer] = useReducer(
    MessageListReducer,
    initialState
  );

  const [streamObj, setStreamObj] = useState();
  const [screenCastStream, setScreenCastStream] = useState();
  const [meetInfoPopup, setMeetInfoPopup] = useState(false);
  const [isPresenting, setIsPresenting] = useState(false);
  const [isMessenger, setIsMessenger] = useState(false);
  const [messageAlert, setMessageAlert] = useState({});
  const [isAudio, setIsAudio] = useState(true);
  const [isVideo, setIsVideo] = useState(true);

  useEffect(() => {
    if (isAdmin) {
      setMeetInfoPopup(true);
    }
    initWebRTC();
    socket.on("code", (data) => {
      peer.signal(data);
    });
  }, []);

  const getRecieverCode = async () => {
    const response = await getRequest(`${BASE_URL}${GET_CALL_ID}/${id}`);
    if (response.code) {
      peer.signal(response.code);
    }
  };

  const initWebRTC = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        setStreamObj(stream);

        peer = new Peer({
          initiator: isAdmin,
          trickle: false,
          stream: stream,
        });

        if (!isAdmin) {
          getRecieverCode();
        }

        peer.on("signal", async (data) => {
          if (isAdmin) {
            let payload = {
              id,
              signalData: data,
            };
            await postRequest(`${BASE_URL}${SAVE_CALL_ID}`, payload);
          } else {
            socket.emit("code", data, (cbData) => {
              console.log("code sent");
            });
          }
        });

        peer.on("connect", () => {
          // wait for 'connect' event before using the data channel
        });

        peer.on("data", (data) => {
          clearTimeout(alertTimeout);
          messageListReducer({
            type: "addMessage",
            payload: {
              user: "Friend",
              msg: data.toString(),
              time: Date.now(),
            },
          });

          setMessageAlert({
            alert: true,
            isPopup: true,
            payload: {
              user: "Friend",
              msg: data.toString(),
            },
          });

          alertTimeout = setTimeout(() => {
            setMessageAlert({
              ...messageAlert,
              isPopup: false,
              payload: {},
            });
          }, 10000);
        });

        peer.on("stream", (stream) => {
          let video = document.querySelector("video");

          if ("srcObject" in video) {
            video.srcObject = stream;
          } else {
            video.src = window.URL.createObjectURL(stream); // for older browsers
          }

          video.play();
        });
      })
      .catch(() => {});
  };

  const screenShare = () => {
    navigator.mediaDevices
      .getDisplayMedia({ cursor: true })
      .then((screenStream) => {
        peer.replaceTrack(
          streamObj.getVideoTracks()[0],
          screenStream.getVideoTracks()[0],
          streamObj
        );
        setScreenCastStream(screenStream);
        screenStream.getTracks()[0].onended = () => {
          peer.replaceTrack(
            screenStream.getVideoTracks()[0],
            streamObj.getVideoTracks()[0],
            streamObj
          );
        };
        setIsPresenting(true);
      });
  };
  const stopScreenShare = () => {
    screenCastStream.getVideoTracks().forEach(function (track) {
      track.stop();
    });
    peer.replaceTrack(
      screenCastStream.getVideoTracks()[0],
      streamObj.getVideoTracks()[0],
      streamObj
    );
    setIsPresenting(false);
  };

  const toggleAudio = (value) => {
    streamObj.getAudioTracks()[0].enabled = value;
    setIsAudio(value);
  };
  const stopVideo = (value) => {
    streamObj.getVideoTracks()[0].enabled = value;
    setIsVideo(value);
  };

  const disconnectCall = () => {
    peer.destroy();
    history.push("/");
    window.location.reload();
  };

  const sendMsg = (msg) => {
    peer.send(msg);
    messageListReducer({
      type: "addMessage",
      payload: {
        user: "Me",
        msg: msg,
        time: Date.now(),
      },
    });
  };

  return (
    <div className="callpage-container">
      {/* <Sidebar /> */}
      <video className="main-video" src="" controls></video>
      <CallPageHeader
        isMessenger={isMessenger}
        setIsMessenger={setIsMessenger}
        messageAlert={messageAlert}
        setMessageAlert={setMessageAlert}
      />
      <MyVideo />

      <CallPageFooter
        isPresenting={isPresenting}
        stopScreenShare={stopScreenShare}
        screenShare={screenShare}
        isAudio={isAudio}
        toggleAudio={toggleAudio}
        disconnectCall={disconnectCall}
        isVideo={isVideo}
        stopVideo={stopVideo}
      />
      {isAdmin && meetInfoPopup && (
        <Info setMeetInfoPopup={setMeetInfoPopup} url={url} />
      )}
      {isMessenger ? (
        <Chatbox
          setIsMessenger={setIsMessenger}
          sendMsg={sendMsg}
          messageList={messageList}
        />
      ) : (
        messageAlert.isPopup && <Alert messageAlert={messageAlert} />
      )}
    </div>
  );
};
export default CallPage;
