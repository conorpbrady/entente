import React from 'react';
import "./WeekView.css";

const daysOfWeek: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function WeekView() {
  return (
    <div className={"wv-container"}>
    {daysOfWeek.map((day) => <DayCard day={day} />)}
    </div>
  );
};

function DayCard({ day }: { day: string }): React.JSX.Element {
  return (
        <div className={"wv-card"}>
          <div className={"wv-card-head"}>
            <span>{day}</span>
          </div>
          <div className={"wv-card-body"}>
            <span>Some stuff here</span>
          </div>
        </div>
  );
};
