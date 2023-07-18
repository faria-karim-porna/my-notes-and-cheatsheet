import React from "react";
import { jsData } from "../../../data/interviewPreparation/jsData";
import { TextToVoice } from "../../common/TextToVoice";

const InterviewPreparationJavaScriptComponent = () => {
  const data = jsData;
  return (
    <>
      <div>
        <div>JavaScript Interview Preparation</div>
        <div>Total {data.length} Questions And Answers</div>
      </div>
      <hr />
      {data.map((queAndAns, index) => (
        <>
          <TextToVoice className="que-voice" text={`${index + 1}. ${queAndAns.questions}`} shouldAlwaysView={true} />
          <TextToVoice className="ans-voice" text={queAndAns.answers} />
        </>
      ))}
    </>
  );
};

export const InterviewPreparationJavaScript = React.memo(InterviewPreparationJavaScriptComponent);
