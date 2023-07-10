import React from "react";
import { TextToVoice } from "../../common/TextToVoice";
import { behavioralData } from "../../../data/interviewPreparation/behavioralData";

const InterviewPreparationBehavioralQuestionsComponent = () => {
  const data = behavioralData;
  return (
    <>
      <div>
        <div>BehavioralQuestions Interview Preparation</div>
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

export const InterviewPreparationBehavioralQuestions = React.memo(InterviewPreparationBehavioralQuestionsComponent);
