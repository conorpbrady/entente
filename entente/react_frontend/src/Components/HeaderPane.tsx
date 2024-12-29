import React from 'react';
import './HeaderPane.css';
import WeekView from './WeekView'

export default function HeaderPane() {
  return (
    <div className={"header-pane"}>
      <WeekView />
    </div>
  );
};
