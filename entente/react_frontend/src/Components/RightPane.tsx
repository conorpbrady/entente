import React from 'react';
import './LeftPane.css';
import DailyView from './DailyView';

export default function RightPane({ selectedDate }: { selectedDate: Date }) {
  return (
    <div className={"right-pane"}>
    <DailyView selectedDate={selectedDate} />
      </div>
  );
};
