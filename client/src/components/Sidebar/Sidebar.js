import React from "react";
import "./Sidebar.scss";
export const Sidebar = () => {
  return (
    <div className="sidenav text-center">
      <a href="/" title="Home">
        <div className="text-center">
          <i className="fas fa-home"></i>
        </div>
        Home
      </a>
      <a href="/mycalendar" title="Calendar">
        <div>
          <i className="fa fa-calendar" aria-hidden="true"></i>
        </div>
        Calendar
      </a>
      <a href="/notepad" title="Notepad">
        <div>
          <i className="fa fa-file" aria-hidden="true"></i>
        </div>
        Notepad
      </a>
    </div>
  );
};
export default Sidebar;
