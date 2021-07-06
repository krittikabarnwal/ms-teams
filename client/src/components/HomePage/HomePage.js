import React from "react";
import { useHistory } from "react-router-dom";
import picture from "./picture.jpg";
import shortid from "shortid";
import Header from "../Header/Header";
import "./HomePage.scss";
import Sidebar from "../Sidebar/Sidebar";

const HomePage = () => {
  const history = useHistory();
  //To generate unique Id and redirect to the call page
  const startCall = () => {
    const uid = shortid.generate();
    history.push(`/${uid}#init`);
  };
  return (
    <div className="home-page">
      <Header />
      <Sidebar />
      <div className="body text-center">
        <div className=" mt-5">
          <h1>Welcome to Teams</h1>
          <h2>Here are some things to get going..</h2>
          <div>
            <img
              src={picture}
              width="350px"
              height="350px"
              title="Welcome to teams"
            ></img>
          </div>
          <div className="d-flex justify-content-center">
            <div className="action-btn d-flex">
              <button className="btn btn-sm join-button" onClick={startCall}>
                <i className="fas fa-video icon-block"></i>{" "}
                <span className="h4">Create New Meeting</span>
              </button>
              {/* <div className="input-block d-flex justify-content-between">
                <div className="input-section">
                  <i className="fas fa-keyboard icon-block"></i>{" "}
                  <input placeholder="Enter a code or link" />
                </div>
                <button className="btn no-bg">Join</button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
