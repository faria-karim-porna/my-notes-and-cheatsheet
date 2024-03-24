import React from "react";
import { TextToVoice } from "../../common/TextToVoice";
import { htmlData } from "../../../data/interviewPreparation/htmlData";
import { Hints } from "../../common/Hints";

const InterviewPreparationHtmlComponent = () => {
  const data = htmlData;
  return (
    <>
      <div>
        <div>Html Interview Preparation</div>
        <div>Total {data.length} Questions And Answers</div>
      </div>
      <hr />
      {data.map((queAndAns, index) => (
        <>
          <TextToVoice
            className="que-voice"
            text={[`${index + 1}. ${queAndAns.questions[0]}`]}
            shouldAlwaysView={true}
          />
          <TextToVoice className="ans-voice" text={queAndAns.answers} />
          <Hints hints={queAndAns.hints} />
        </>
      ))}
    </>
  );
};

export const InterviewPreparationHtml = React.memo(
  InterviewPreparationHtmlComponent
);
