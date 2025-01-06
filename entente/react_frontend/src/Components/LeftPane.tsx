import React from 'react';
import './RightPane.css';
import MonthlyCalendar from './MonthlyCalendar';
import HabitTracker from './HabitTracker';

export default function LeftPane({ displayDate }: { displayDate: Date }) {
  return (
    <div className={"left-pane"}>
    <MonthlyCalendar displayDate={displayDate} />
    <HabitTracker />
    </div>

  );
};
