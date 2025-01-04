import React from 'react';
import './RightPane.css';
import MonthlyCalendar from './MonthlyCalendar';
import HabitTracker from './HabitTracker';

export default function LeftPane() {
  return (
    <div className={"left-pane"}>
    <MonthlyCalendar />
    <HabitTracker />
    </div>

  );
};
