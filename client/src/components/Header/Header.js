import React, { useState } from "react";
import logo from "./logo1.png";
import "./Header.scss";
import Modal from "react-modal";
import modalframe from "./Modalframe.jpg";

const Header = () => {
  // Usestate to store the state of the modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <div className="header-main">
        <div className="d-flex justify-content-between">
          <a href="/">
            <img src={logo} href="/" alt="logo" width="70px" height="70px" />
          </a>
          {/* Adding the name od Application */}
          <h1 className=" mt-3 py-3 text-white heading-brand">
            Microsoft Teams
          </h1>
          <div className="action-btn d-flex align-items-center pr-5 mr-5 ">
            <div className="dropdown show">
              <a
                className="btn dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                title="Downloads"
              >
                <i className="fas fa-angle-double-down icon-block"></i>
              </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a
                  className="dropdown-item h5 "
                  href="https://www.microsoft.com/en-in/microsoft-teams/download-app"
                  target="_blank"
                >
                  Download the desktop app
                </a>
                <a
                  className="dropdown-item h5 "
                  href="https://www.microsoft.com/en-in/microsoft-teams/download-app"
                  target="_blank"
                >
                  Download the mobile app
                </a>
              </div>
            </div>
            <button
              className="modalbutton"
              onClick={() => setModalIsOpen(true)}
              title="More info"
            >
              <i
                className="fa fa-question-circle icon-block"
                aria-hidden="true"
                title="More info"
              ></i>
            </button>
            <Modal
              className="modalclass"
              isOpen={modalIsOpen}
              onRequestClose={() => setModalIsOpen(false)}
            >
              <img src={modalframe} width="500px" height="375"></img>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
