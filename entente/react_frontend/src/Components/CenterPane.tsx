import React from 'react';
import './CenterPane.css';
import WritingPrompt from './WritingPrompt';

interface Props {
  toggleTop: () => void;
  toggleRight: () => void;
  toggleLeft: () => void;
  showTop: boolean;
  showRight: boolean;
  showLeft: boolean;
}
export default function CenterPane(props: Props) {
  return (
    <div className={"center-pane"}>
    <WritingPrompt promptTitle={"What's on your mind?"} promptBody={""} />
    <WritingPrompt promptTitle={"What would you like to do today?"} promptBody={""} />

    <a onClick={props.toggleTop}>{props.showTop ? "Hide": "Show"} Top Pane</a>
    <br />
    <a onClick={props.toggleLeft}>{props.showLeft ? "Hide": "Show"} Left Pane</a>
    <br />
    <a onClick={props.toggleRight}>{props.showRight ? "Hide": "Show"} Right Pane</a>
    </div>

  );
};
