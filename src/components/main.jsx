import React from "react";
import Calendar from "./calendar/calendar";

const Main = props => {
  console.log(props.page.name);
  var CALENDAR;
  if (props.page.name === "Calendar") {
    CALENDAR = <Calendar />;
  }
  return (
    <div
      className={
        "main-wrapper" + (props.sidebarActive ? "" : " sidebar-hidden")
      }
    >
      {/* Depending on page passed in props, render corresponding component */}
      {CALENDAR}
    </div>
  );
};

export default Main;
