import React from 'react';
import './LeftPane.css';
import DailyView from './DailyView';

export default function RightPane() {
  return (
    <div className={"right-pane"}>
    <DailyView />
      </div>
  );
};
