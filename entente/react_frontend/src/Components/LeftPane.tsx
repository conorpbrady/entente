import React from 'react';
import './RightPane.css';
import MonthlyCalendar from './MonthlyCalendar';
import HabitTracker from './HabitTracker';

export default function LeftPane({ displayDate, changeDate }: { displayDate: Date, changeDate: (d: Date) => void}) {
  return (
    <div className={"left-pane"}>
    <MonthlyCalendar displayDate={displayDate} changeDate={changeDate} />
    <HabitTracker />
    </div>

  );
};
