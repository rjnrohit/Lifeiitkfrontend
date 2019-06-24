import React from "react";
import Calendar from "./calendar/calendar";
// import Calendar from "react-event-calendar"

const Main = props => {
  console.log(props.page.name);
  // var CALENDAR;
  if (props.page.name === "Calendar") {
    // CALENDAR = <Calendar />;
  }
  return (
    <div
      className={
        "main-wrapper" + (props.sidebarActive ? "" : " sidebar-hidden")
      }
    >
      {/* Depending on page passed in props, render corresponding component */}
      {props.page.name === "Calendar" ? <Calendar /> : ""}
    </div>
  );
};

export default Main;
