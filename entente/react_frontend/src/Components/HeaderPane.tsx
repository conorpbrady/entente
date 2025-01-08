import React from 'react';
import './HeaderPane.css';
import WeekView from './WeekView'

export default function HeaderPane({ selectedDate, changeDate }: { selectedDate: Date, changeDate: (d: Date) => void }) {
  return (
    <div className={"header-pane"}>
      <WeekView selectedDate={selectedDate} changeDate={changeDate} />
    </div>
  );
};
