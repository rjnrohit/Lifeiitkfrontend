import React, { Component } from "react";
import dateFns from "date-fns";
import "./calendar.css";
import { Button } from "@material-ui/core";
import filterBox from "./filterModal"
import CalendarBox from "./calendarBox"

class Calendar extends Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date()
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <Button
              onClick={() => {}}
              variant="contained"
              color="primary"
              style={{ width: 105, margin: 10 }}
            >
              Filter
            </Button>
        </div>
        <CalendarBox ></CalendarBox>
        <filterBox open={this.state.filterBoxOpen}></filterBox>
      </React.Fragment>
    );
  }
}

export default Calendar;
