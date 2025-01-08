import React from 'react'
import './DailyView.css'


export default function DailyView({ selectedDate } : { selectedDate: Date }) {
  return (
    <div className={"daily-view"}>
    <h4>{selectedDate.toLocaleDateString("en-US", {day: "2-digit", month: "short", year: "numeric"})}</h4>
    <div>

    {[...Array(24).keys()].map((hour) => <HourEntry key={hour} hour={hour} />)}
    </div>
    </div>
  );
};

function HourEntry({ hour }: { hour: number }): React.JSX.Element {
  return (
    <div className={"hour-card"}>
    <div className={"hour-head"}>
    <span>{`${hour}:00`}</span>
    </div>
    <div className={"hour-body"}>
    </div>
    <div className={"hour-body"}>
    </div>
    </div>
  );
};
