// This page is rendered when an invalid url is provided by the user
// and tells the user to return to the home page
import React from "react";
import Header from "../Header/Header";
import "./NoMatch.scss";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div className="no-match">
      <Header />
      <div className="no-match-main">
        <h2>Invalid Video Call name</h2>
        <Link className="btn" to="/">
          <button className="btn btn-sm join-button" href="/">
            <i className="fas fa-video icon-block"></i>{" "}
            <span className="h4">Return to HomePage</span>
          </button>
        </Link>
      </div>
    </div>
  );
};
export default NoMatch;
