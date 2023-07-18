import React from "react";
import { TextToVoice } from "../../common/TextToVoice";
import { behavioralData } from "../../../data/interviewPreparation/behavioralData";
import { Block } from "../../common/Block";
import { useState } from "react";

const InterviewPreparationBehavioralQuestionsComponent = () => {
  const data = behavioralData;
  const [showHints, setShowHints] = useState(false);
  return (
    <>
      <Block title="✨ Tips And Tricks">
        <div>1. Try To Give Answer Using STAR Method</div>
        <div>
          2. In STAR S = Situation : Give an example of a team/project/feature/a person who is aligned with the situation of the question.
        </div>
        <div>3. In STAR T = Task : Give an example of what you are supposed to do/why the situation arises.</div>
        <div>
          4. In STAR A = Action : Give an example of what you have done in that situation and show your problem-solving skills/ teamwork/
          adaptability/ effective communication skill/ leadership skill.
        </div>
        <div>5. In STAR R = Result : Tell whether you have succeeded or failed. If failed give example of your learning.</div>
      </Block>
      <div>
        <div>BehavioralQuestions Interview Preparation</div>
        <div>Total {data.length} Questions And Answers</div>
      </div>
      <hr />
      {data.map((queAndAns, index) => (
        <>
          <TextToVoice className="que-voice" text={`${index + 1}. ${queAndAns.questions}`} shouldAlwaysView={true} />
          <TextToVoice className="ans-voice" text={queAndAns.answers} />
          
          {queAndAns.hints && queAndAns.hints.length > 0 && !showHints ? (
            <div onClick={() => setShowHints(true)}>Show Hints</div>
          ) : queAndAns.hints && queAndAns.hints.length > 0 && showHints ? (
            <div>
              {queAndAns.hints?.map((hint) => (
                <span className="bg-danger mx-2 px-2 py-3">{hint}</span>
              ))}
              <span onClick={() => setShowHints(false)}>Hide Hints</span>
            </div>
          ) : null}
        </>
      ))}
    </>
  );
};

export const InterviewPreparationBehavioralQuestions = React.memo(InterviewPreparationBehavioralQuestionsComponent);
