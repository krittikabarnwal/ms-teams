import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

import "./index.scss";
import {
  ScheduleComponent,
  Day,
  Week,
  Month,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";

export const index = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="calendar">
        <ScheduleComponent currentView="Month">
          <Inject services={[Day, Week, Month, Resize, DragAndDrop]} />
        </ScheduleComponent>
      </div>
    </>
  );
};
export default index;
