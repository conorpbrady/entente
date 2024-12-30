import React from 'react';
import './RightPane.css';
import MonthlyCalendar from './MonthlyCalendar';

export default function LeftPane() {
  return (
    <div className={"left-pane"}>
    <MonthlyCalendar />
    </div>

  );
};
