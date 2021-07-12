// This page shows the homepage of the website
import React from "react";
import { useHistory } from "react-router-dom";
import picture from "./picture.jpg";
import shortid from "shortid";
import "./HomePage.scss";
import { Link } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();
  //To generate unique Id and redirect to the call page
  const startCall = () => {
    const uid = shortid.generate();
    history.push(`/${uid}#init`);
  };
  return (
    <div className="home-page">
      <div className="body text-center">
        <div className=" mt-5">
          <h1>Welcome to Teams</h1>
          <h2>Here are some things to get going..</h2>
          <div>
            <img
              src={picture}
              width="320px"
              height="320px"
              title="Welcome to teams"
            ></img>
          </div>
          <div className="d-flex justify-content-center">
            <div className="action-btn d-flex">
              <Link className="ml-4" to="/chatroom">
                <button className="btn btn-sm join-button">
                  <i class="fas fa-comment-alt icon-block"></i>{" "}
                  <span className="h4">Join Chatroom</span>
                </button>
              </Link>
              <button
                className="btn btn-sm join-button mr-4"
                onClick={startCall}
              >
                <i className="fas fa-video icon-block"></i>{" "}
                <span className="h4">Create New Meeting</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
