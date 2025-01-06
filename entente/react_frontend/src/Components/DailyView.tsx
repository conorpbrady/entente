import React from 'react'
import './DailyView.css'


export default function DailyView() {
  return (
    <div className={"daily-view"}>
    {[...Array(24).keys()].map((hour) => <HourEntry key={hour} hour={hour} />)}
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
