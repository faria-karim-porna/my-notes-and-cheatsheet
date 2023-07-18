import React from "react";
import { reactJsData } from "../../../data/interviewPreparation/reactJsData";
import { TextToVoice } from "../../common/TextToVoice";

const InterviewPreparationReactJsComponent = () => {
  const data = reactJsData;
  return (
    <>
      <div>
        <div>React.js Interview Preparation</div>
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

export const InterviewPreparationReactJs = React.memo(InterviewPreparationReactJsComponent);
