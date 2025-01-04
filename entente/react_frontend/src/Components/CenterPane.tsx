import React from 'react';
import './CenterPane.css';
import WritingPrompt from './WritingPrompt';

export default function CenterPane() {
  return (
    <div className={"center-pane"}>
    <WritingPrompt promptTitle={"What's on your mind?"} promptBody={""} />
    <WritingPrompt promptTitle={"What would you like to do today?"} promptBody={""} />
    </div>

  );
};
