import React from "react";
import Calendar from "./calendar/calendar";
// import Calendar from "react-event-calendar"
import Feed from "./feed/feed"
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
      {props.page.name === "Feed" ? <Feed /> : ""}
    </div>
  );
};

export default Main;
