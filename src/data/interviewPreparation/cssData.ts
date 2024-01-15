import { QuestionsAndAnswersType } from "../../types/questionsAndAnswersType";

export const cssData: QuestionsAndAnswersType[] = [
  {
    questions: [`What is CSS?`],
    answers: [
      `CSS stands for Cascading Style Sheet. It is a popular styling language. It is used with HTML to design websites. It can also be used with any XML documents including plain XML, SVG, and XUL.`,
    ],
  },

  {
    questions: [`What is the origin of CSS?`],
    answers: [
      `SGML (Standard Generalized Markup Language) is the origin of CSS. It is a language that defines markup languages.`,
    ],
  },

  {
    questions: [`What are the different variations of CSS?`],
    answers: [
      `The different variations of CSS are CSS1, CSS2, CSS2.1, CSS3, CSS4.`,
    ],
  },

  {
    questions: [`How can you integrate CSS on a web page?`],
    answers: [
      `CSS can be integrated into a web page in three ways: inline, internal, and external. Inline CSS is directly added within the HTML tags using the "style" attribute. Internal CSS is placed within the "style" tags in the head section of an HTML document. External CSS is stored in a separate CSS file and linked to the HTML document using the "link" tag.`,
    ],
  },

  {
    questions: [`What are the advantages of CSS?`],
    answers: [
      `The advantages of CSS include separation of style from content, which makes maintenance and updates easier; consistent styling across multiple web pages; improved page loading speed due to reduced HTML code; the ability to create responsive designs for different devices and screen sizes; and a wide range of design options and flexibility.`,
    ],
  },

  {
    questions: [`What are the limitations of CSS?`],
    answers: [
      `Limitations of CSS include browser compatibility issues, as different browsers may interpret CSS code differently; CSS is primarily a styling language and has limited capabilities for interactivity and dynamic behavior. More complex interactions often require JavaScript or other scripting languages. Css provides basic mathematical operators for values like width and height, but it lacks the ability to perform more advanced calculations without the use of CSS preprocessors or JavaScript.`,
    ],
  },

  {
    questions: [`What are the CSS frameworks?`],
    answers: [
      `They offer ready-to-use CSS styles, layout grids, and components, allowing developers to streamline the development process and create responsive and consistent designs more efficiently. Examples of popular CSS frameworks include Bootstrap, Foundation, and Bulma. Bootstrap, Foundation, Semantic UI, Gumby, Ulkit,`,
    ],
  },

  {
    questions: [
      `Why background and color are the separate properties if they should always be set together?`,
    ],
    answers: [
      `Background and color are separate properties in CSS because they serve different purposes. The background property defines the background color or image of an element, while the color property defines the text color.`,
    ],
  },

  {
    questions: [`What is Embedded Style Sheet?`],
    answers: [
      `An Embedded Style Sheet is CSS code that is placed within the HTML document itself, typically within the "style" tags in the head section.For example: <style>    
            body {    
                background-color: linen;    
            }    
            h1 {    
                color: red;    
                margin-left: 80px;    
            }     
            </style> `,
    ],
  },

  {
    questions: [`What are the advantages of Embedded Style Sheets?`],
    answers: [
      `The advantages of Embedded Style Sheets simplifying maintenance as the styles are contained within the document, and No extra download is required to import the information.`,
    ],
  },

  {
    questions: [`What is a CSS selector?`],
    answers: [
      `It is a string that used to target and select specific HTML elements on a web page for styling. It is equivalent of HTML elements. There are several different types of selectors in CSS such as CSS Element Selector, CSS Id Selector, CSS Class Selector, CSS Universal Selector, CSS Group Selector,`,
    ],
  },

  {
    questions: [`Name some CSS style components.`],
    answers: [
      `Some CSS Style components are color, font-size, padding, margin, background-color, border , width, height, text-align, display and more.`,
    ],
  },

  {
    questions: [`What is the use of CSS Opacity?`],
    answers: [
      `It specifies the clarity/transparency of the image. In technical terms, Opacity is defined as the degree to which light is allowed to travel through an object. For example: <style>    
img.trans {    
    opacity: 0.4;    
    filter: alpha(opacity=40); /* For IE8 and earlier */    
}    
</style> `,
    ],
  },

  {
    questions: [`Explain universal selector.`],
    answers: [
      `The universal selector in CSS is represented by the asterisk symbol (*). It matches and selects all elements in the document.For example: <style>    
* {    
   color: green;    
   font-size: 20px;    
}     
</style> `,
    ],
  },

  {
    questions: [
      `Which command is used for the selection of all the elements of a paragraph?`,
    ],
    answers: [
      `The p[lang] command is used for selecting all the elements of a paragraph.`,
    ],
  },

  {
    questions: [`What is the use of % unit?`],
    answers: [
      `The % unit in CSS represents a percentage value relative to another value. It can be used in various properties like width, height, padding, margin, and more.`,
    ],
  },

  {
    questions: [
      `Name the property used to specify the background color of an element.`,
    ],
    answers: [
      `The background-color property is used to specify the background color of the element. A specific color value (e.g., "red", "#ffffff") or color representations like RGB or HSL can be assigned in the the background color. For example:<style>    
h2,p{    
    background-color: #b0d4de;    
}    
</style> `,
    ],
  },

  {
    questions: [
      `Name the property for controlling the image repetition of the background.`,
    ],
    answers: [
      `The background-repeat property repeats the background image horizontally and vertically. Some images are repeated only horizontally or vertically. Values like "repeat", "no-repeat", "repeat-x", and "repeat-y" can be used to control the repetition behavior.For example: <style>    
body {    
background-image: url("paper1.gif");    
background-repeat: repeat-y;   
}    
</style>`,
    ],
  },

  {
    questions: [
      `Name the property for controlling the image position in the background.`,
    ],
    answers: [
      `The background-position property is used to define the initial position of the background image. By default, the background image is placed on the top-left of the webpage. Keywords like "top", "center", "bottom", or specific units like pixels or percentages can be used to define the position.For example: <style>
div{ background: white url('good-morning.jpg');  
background-repeat: no-repeat;  
background-attachment: fixed;  
background-position: center;}
</style>`,
    ],
  },

  {
    questions: [
      `Name the property for controlling the image scroll in the background.`,
    ],
    answers: [
      `The background-attachment property is used to specify if the background image is fixed or scroll as the user scrolls the page. Values like "scroll" or "fixed" can be used to control the scroll behavior.For example: <style>
div{background: white url('bbb.gif');  
background-repeat: no-repeat;  
background-attachment: fixed;}
</style>`,
    ],
  },

  {
    questions: [`What is the use of ruleset?`],
    answers: [
      `A ruleset in CSS consists of a selector and a declaration block. Selector indicates the HTML element where the style to be applied. The declaration block contains the specific styles (red) and properties (color) to be applied. The declaration block can contain one or more declarations separated by a semicolon.`,
    ],
  },

  {
    questions: [
      `What is the difference between class selectors and id selectors?`,
    ],
    answers: [
      `Class selectors (defined with a dot, e.g., ".my-class") can be applied to multiple elements, allowing for group styling. ID selectors (defined with a hash, e.g., "#my-id") should be used for single elements only. IDs have higher specificity. For example: CSS Class Selector: <style>    
.center {    
    text-align: center;    
    color: blue;    
}    
</style>  
CSS Id Selector: <style>    
#para1 {    
    text-align: center;    
    color: blue;    
}    
</style>`,
    ],
  },

  {
    questions: [`What are the advantages of External Style Sheets?`],
    answers: [
      `External Style Sheets offer several advantages. It keeps style information separate from HTML markup and enhance maintainability. The styles of multiple documents can be controlled from one file. External Style Sheets can also be cached by the browser which improves page loading speed and reduces bandwidth usage.`,
    ],
  },

  {
    questions: [
      `What is the difference between inline, embedded and external style sheets?`,
    ],
    answers: [
      `Inline Style Sheet is used to style only a small piece of code. Syntax: <htmltag style="cssproperty1:value; cssproperty2:value;"> </htmltag>     
Embedded style sheets are put between the <head> </head> tags inside the <style></style> tags. Syntax: <style>    
body {    
    background-color: linen;    
}    
h1 {    
    color: red;    
    margin-left: 80px;    
}     
</style>
External style sheets are separate CSS files linked to the HTML document using the "link" tag. Syntax: <head>    
<link rel="stylesheet" type="text/css" href="mystyle.css">    
</head>`,
    ],
  },

  {
    questions: [`What is RWD?`],
    answers: [
      `RWD stands for Responsive Web Design. This technique is used to display the designed page perfectly on every screen size and device. RWD involves using fluid layouts, flexible images, and CSS media queries to ensure optimal user experience across all devices.`,
    ],
  },
];
