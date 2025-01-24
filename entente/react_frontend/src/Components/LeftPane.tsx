import React from 'react';
import './RightPane.css';
import MonthlyCalendar from './MonthlyCalendar';
import HabitTracker from './HabitTracker';

export default function LeftPane({ selectedDate, changeDate }: { selectedDate: Date, changeDate: (d: Date) => void}) {
  return (
    <div className={"left-pane"}>
    <MonthlyCalendar displayDate={selectedDate} changeDate={changeDate} />
    <HabitTracker selectedDate={selectedDate} />
    </div>

  );
};
