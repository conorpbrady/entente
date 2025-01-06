import React from 'react';
import './WritingPrompt.css'

interface Props {
  promptTitle: string;
  promptBody: string;
}

export default function WritingPrompt({ promptTitle, promptBody }: Props): React.JSX.Element {
  return (
    <div className={"prompt-card"}>
      <div className={"prompt-title"}>
      <p>{promptTitle}</p>
      </div>
      <div contentEditable suppressContentEditableWarning className={"prompt-body"}>
      {promptBody}
      </div>
      </div>
  );
                                      }
