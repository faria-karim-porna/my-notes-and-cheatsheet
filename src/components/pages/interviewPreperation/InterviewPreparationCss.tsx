import React from "react";
import { TextToVoice } from "../../common/TextToVoice";

const InterviewPreparationCssComponent = () => {
  return (
    <>
      <TextToVoice className="que-voice" text={`1. What is CSS?`} shouldAlwaysView={true} />
      <TextToVoice
        className="ans-voice"
        text={`CSS stands for Cascading Style Sheet. It is a popular styling language. It is used with HTML to design websites. It can also be used with any XML documents including plain XML, SVG, and XUL.`}
      />

      <TextToVoice className="que-voice" text={`2. What is the origin of CSS?`} shouldAlwaysView={true} />
      <TextToVoice
        className="ans-voice"
        text={`SGML (Standard Generalized Markup Language) is the origin of CSS. It is a language that defines markup languages.`}
      />

      <TextToVoice className="que-voice" text={`3. What are the different variations of CSS?`} shouldAlwaysView={true} />
      <TextToVoice className="ans-voice" text={`The different variations of CSS are CSS1, CSS2, CSS2.1, CSS3, CSS4.`} />

      <TextToVoice className="que-voice" text={`4. How can you integrate CSS on a web page?`} shouldAlwaysView={true} />
      <TextToVoice
        className="ans-voice"
        text={`CSS can be integrated into a web page in three ways: inline, internal, and external. Inline CSS is directly added within the HTML tags using the "style" attribute. Internal CSS is placed within the "style" tags in the head section of an HTML document. External CSS is stored in a separate CSS file and linked to the HTML document using the "link" tag.`}
      />

      <TextToVoice className="que-voice" text={`5. What are the advantages of CSS?`} shouldAlwaysView={true} />
      <TextToVoice
        className="ans-voice"
        text={`The advantages of CSS include separation of style from content, which makes maintenance and updates easier; consistent styling across multiple web pages; improved page loading speed due to reduced HTML code; the ability to create responsive designs for different devices and screen sizes; and a wide range of design options and flexibility.`}
      />

      <TextToVoice className="que-voice" text={`6. What are the limitations of CSS?`} shouldAlwaysView={true} />
      <TextToVoice
        className="ans-voice"
        text={`Limitations of CSS include browser compatibility issues, as different browsers may interpret CSS code differently; CSS is primarily a styling language and has limited capabilities for interactivity and dynamic behavior. More complex interactions often require JavaScript or other scripting languages. Css provides basic mathematical operators for values like width and height, but it lacks the ability to perform more advanced calculations without the use of CSS preprocessors or JavaScript.`}
      />

      <TextToVoice className="que-voice" text={`7. What are the CSS frameworks?`} shouldAlwaysView={true} />
      <TextToVoice
        className="ans-voice"
        text={`They offer ready-to-use CSS styles, layout grids, and components, allowing developers to streamline the development process and create responsive and consistent designs more efficiently. Examples of popular CSS frameworks include Bootstrap, Foundation, and Bulma. Bootstrap, Foundation, Semantic UI, Gumby, Ulkit,`}
      />

      <TextToVoice
        className="que-voice"
        text={`8. Why background and color are the separate properties if they should always be set together?`}
        shouldAlwaysView={true}
      />
      <TextToVoice
        className="ans-voice"
        text={`Background and color are separate properties in CSS because they serve different purposes. The background property defines the background color or image of an element, while the color property defines the text color.`}
      />

      <TextToVoice className="que-voice" text={`9. What is Embedded Style Sheet?`} shouldAlwaysView={true} />
      <TextToVoice
        className="ans-voice"
        text={`An Embedded Style Sheet is CSS code that is placed within the HTML document itself, typically within the "style" tags in the head section.For example: <style>    
      body {    
          background-color: linen;    
      }    
      h1 {    
          color: red;    
          margin-left: 80px;    
      }     
      </style> `}
      />

      <TextToVoice className="que-voice" text={`10. What are the advantages of Embedded Style Sheets?`} shouldAlwaysView={true} />
      <TextToVoice
        className="ans-voice"
        text={`The advantages of Embedded Style Sheets simplifying maintenance as the styles are contained within the document, and No extra download is required to import the information.`}
      />
    </>
  );
};

export const InterviewPreparationCss = React.memo(InterviewPreparationCssComponent);
