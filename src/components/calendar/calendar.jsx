import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import calendar from "@fullcalendar/daygrid";
import "./main.css";
import { DropdownButton, Dropdown } from "react-bootstrap";
class Calendar extends Component {
  render() {
    return (
      <div className="calendarDiv">
        <DropdownButton id="dropdown-basic-button" title="filter">
          <Dropdown.Item href="#/action-1">By Time</Dropdown.Item>
          <Dropdown.Item href="#/action-2">By Venue</Dropdown.Item>
          <Dropdown.Item href="#/action-3">By tags</Dropdown.Item>
        </DropdownButton>
        <FullCalendar
          defaultView="dayGridMonth"
          plugins={[calendar]}
          events={[
            { title: "event 1", date: "2019-06-24" },
            { title: "event 2", date: "2019-06-24" },
            { title: "event3", date: "2019-06-24" }
          ]}
        />
      </div>
    );
  }
}

export default Calendar;
