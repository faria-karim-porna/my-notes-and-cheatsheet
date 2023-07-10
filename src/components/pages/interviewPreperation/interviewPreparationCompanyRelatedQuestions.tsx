import React from "react";
import { TextToVoice } from "../../common/TextToVoice";
import { companyRelatedData } from "../../../data/interviewPreparation/companyRelatedData";

const InterviewPreparationCompanyRelatedQuestionsComponent = () => {
  const data = companyRelatedData;
  return (
    <>
      <div>
        <div>CompanyRelatedQuestions Interview Preparation</div>
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

export const InterviewPreparationCompanyRelatedQuestions = React.memo(InterviewPreparationCompanyRelatedQuestionsComponent);
