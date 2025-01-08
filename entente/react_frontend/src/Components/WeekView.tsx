import React from 'react';
import "./WeekView.css";

export default function WeekView({ selectedDate, changeDate }: { selectedDate: Date, changeDate: (d: Date) => void }) {

  const year = selectedDate.getFullYear()
  const month = selectedDate.getMonth()
  const dow = selectedDate.getDay()
  const day = selectedDate.getDate()
  selectedDate.setHours(0,0,0,0) // Needed so day is selected on page load
  return (
    <div className={"wv-container"}>
    {[...Array(7).keys()].map((i) => <DayCard key={i} changeDate={changeDate} selectedDate={selectedDate} day={new Date(year, month, day - dow + i, 0, 0, 0)} />)}
    </div>
  );
};

function DayCard({ day, selectedDate, changeDate }: { day: Date, selectedDate: Date, changeDate: (d: Date) => void }): React.JSX.Element {
  const activeClass = day.toISOString() === selectedDate.toISOString() ? " highlighted-day": ""
  const classes = "wv-card" + activeClass
  return (
        <div className={classes} onClick={() => changeDate(day)}>
          <div className={"wv-card-head"}>
            <span>{day.toLocaleDateString("en-US", {weekday: "short", month: "2-digit", day: "2-digit"})}</span>
          </div>
          <div className={"wv-card-body"}>
            <span>Some stuff here</span>
          </div>
        </div>
  );
};
