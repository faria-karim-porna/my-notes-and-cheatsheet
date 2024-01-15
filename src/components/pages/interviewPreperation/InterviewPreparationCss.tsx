import React from "react";
import { TextToVoice } from "../../common/TextToVoice";
import { cssData } from "../../../data/interviewPreparation/cssData";
import { Hints } from "../../common/Hints";

const InterviewPreparationCssComponent = () => {
  const data = cssData;
  return (
    <>
      <div>
        <div>CSS Interview Preparation</div>
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

export const InterviewPreparationCss = React.memo(
  InterviewPreparationCssComponent
);
