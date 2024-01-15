import { QuestionsAndAnswersType } from "../../types/questionsAndAnswersType";

export const cssData: QuestionsAndAnswersType[] = [
  {
    questions: [`What is CSS?`],
    answers: [
      `CSS stands for Cascading Style Sheet. It is a popular styling language. It is used with HTML to design websites. It can also be used with any XML documents including plain XML, SVG, and XUL.`,
    ],
    hints: [`Cascading Style Sheet`, `Styling Language`, `Xml, Svg, And Xul.`],
  },

  {
    questions: [`What is the origin of CSS?`],
    answers: [
      `SGML (Standard Generalized Markup Language) is the origin of CSS. It is a language that defines markup languages.`,
    ],
    hints: [`Standard Generalized Markup Language`, `Origin Of CSS`],
  },

  {
    questions: [`What are the different variations of CSS?`],
    answers: [
      `The different variations of CSS are CSS1, CSS2, CSS2.1, CSS3, CSS4.`,
    ],
    hints: [`CSS1`, `CSS2`, `CSS2.1`, `CSS3`, `CSS4`],
  },

  {
    questions: [`How can you integrate CSS on a web page?`],
    answers: [
      `CSS can be integrated into a web page in three ways: inline, internal, and external. Inline CSS is directly added within the HTML tags using the "style" attribute. Internal CSS is placed within the "style" tags in the head section of an HTML document. External CSS is stored in a separate CSS file and linked to the HTML document using the "link" tag.`,
    ],
    hints: [
      `Three Ways`,
      `Inline`,
      `Internal`,
      `External`,
      `Within The Html Tags`,
      `Within The "Style" Tags`,
      `Separate Css File`,
      `Linked Using "Link" Tag`,
    ],
  },

  {
    questions: [`What are the advantages of CSS?`],
    answers: [
      `The advantages of CSS include separation of style from content, which makes maintenance and updates easier; consistent styling across multiple web pages; improved page loading speed due to reduced HTML code; the ability to create responsive designs for different devices and screen sizes; and a wide range of design options and flexibility.`,
    ],
    hints: [
      `Separation Of Style From Content`,
      `Easy Maintenance And Updates`,
      `Consistent Styling`,
      `Improved Page Loading`,
      `Responsive Designs`,
      `Design Options And Flexibility.`,
    ],
  },

  {
    questions: [`What are the limitations of CSS?`],
    answers: [
      `Limitations of CSS include browser compatibility issues, as different browsers may interpret CSS code differently; CSS is primarily a styling language and has limited capabilities for interactivity and dynamic behavior. More complex interactions often require JavaScript or other scripting languages. Css provides basic mathematical operators for values like width and height, but it lacks the ability to perform more advanced calculations without the use of CSS preprocessors or JavaScript.`,
    ],
    hints: [
      `Browser Compatibility Issues`,
      `Interactivity And Dynamic Behavior`,
      `Complex Interactions Need Javascript`,
      `Mathematical Operators For Width And Height`,
      `Advanced Calculations Need Css Preprocessors/Javascript`,
    ],
  },

  {
    questions: [`What are the CSS frameworks?`],
    answers: [
      `They offer ready-to-use CSS styles, layout grids, and components, allowing developers to streamline the development process and create responsive and consistent designs more efficiently. Examples of popular CSS frameworks include Bootstrap, Foundation, Bulma, Foundation, Semantic UI, Gumby, Ulkit.`,
    ],
    hints: [
      `Ready-To-Use Css Styles, Layout Grids, And Components`,
      `Streamline The Development Process`,
      `Create Responsive And Consistent Designs More Efficiently`,
      `Bootstrap, Foundation, Bulma, Foundation, Semantic Ui, Gumby, Ulkit.`,
    ],
  },

  {
    questions: [
      `Why background and color are the separate properties if they should always be set together?`,
    ],
    answers: [
      `Background and color are separate properties in CSS because they serve different purposes. The background property defines the background color or image of an element, while the color property defines the text color.`,
    ],
    hints: [`Background Color/Image`, `Defines Text Color`],
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
    hints: [
      `Css Code`,
      `Placed Within Html Document Itself`,
      `Within "Style" Tags`,
    ],
  },

  {
    questions: [`What are the advantages of Embedded Style Sheets?`],
    answers: [
      ` Styles are limited to a specific document, reducing the risk of unintentional global styling conflicts. CSS rules are directly within the HTML file, enhancing code readability and making it easier to manage styles associated with specific elements. Reduces the need for external HTTP requests, as styles are included within the document, leading to faster page loading.`,
    ],
    hints: [
      `Reducing Unintentional Global Styling Conflicts`,
      `Readability And Easier To Manage Styles`,
      `Reduces External Http Requests`,
      `Faster Page Loading`,
    ],
  },

  {
    questions: [`What is a CSS selector?`],
    answers: [
      `It is a string that used to target and select specific HTML elements on a web page for styling. It is equivalent of HTML elements. There are several different types of selectors in CSS such as CSS Element Selector, CSS Id Selector, CSS Class Selector, CSS Universal Selector, CSS Group Selector.`,
    ],
    hints: [
      `String`,
      `Used To Target And Select Specific Html Elements`,
      `Css Element Selector, Css Id Selector, Css Class Selector, Css Universal Selector, Css Group Selector.`,
    ],
  },

  {
    questions: [`Name some CSS style components.`],
    answers: [
      `Some CSS Style components are color, font-size, padding, margin, background-color, border , width, height, text-align, display and more.`,
    ],
    hints: [
      `color`,
      `font-size`,
      `padding`,
      `margin`,
      `background-color`,
      `border `,
      `width`,
      `height`,
      `text-align`,
      `display`,
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
    hints: [
      `Clarity/Transparency Of Image`,
      `Degree To Which Light Is Allowed To Travel.`,
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
    hints: [`Asterisk Symbol (*)`],
  },

  {
    questions: [
      `Which command is used for the selection of all the elements of a paragraph?`,
    ],
    answers: [
      `The p command is used for selecting all the elements of a paragraph.`,
    ],
    hints: [`p Command`],
  },

  {
    questions: [`What is the use of % unit?`],
    answers: [
      `The % unit in CSS represents a percentage value relative to another value, typically the parent container. It can be used in various properties like width, height, padding, margin, and more.`,
    ],
    hints: [
      `Value Relative To Another Value`,
      `Typically The Parent Container`,
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
    hints: [
      `background-color`,
      `Specific Color Value (E.G., "Red", "#Ffffff")`,
      `Color Representations (E.G., Rgb Or Hsl)`,
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
    hints: [
      `background-repeat`,
      `Image Horizontally And Vertically`,
      `"repeat"`,
      `"no-repeat"`,
      `"repeat-x"`,
      `"repeat-y"`,
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
    hints: [
      `background-position`,
      `Default is  Top-Left`,
      `"top"`,
      `"center"`,
      `"bottom"`,
      `Pixels/Percentages`,
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
    hints: [`background-attachment`, `"scroll" `, `"fixed"`],
  },

  {
    questions: [`What is the use of ruleset?`],
    answers: [
      `A ruleset in CSS consists of a selector and a declaration block. Selector indicates the HTML element where the style to be applied. The declaration block contains the specific styles (red) and properties (color) to be applied. The declaration block can contain one or more declarations separated by a semicolon. For example: /* This is a ruleset */
      h1 {
        color: blue; /* Declaration 1 */
        font-size: 24px; /* Declaration 2 */
      }`,
    ],
    hints: [
      `Consists Of Selector And Declaration Block`,
      `Selector Is Where The Style To Be Applied`,
      `Specific Styles (Red) And Properties (Color)`,
      `One/More Declarations Separated By Semicolon`,
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
    hints: [
      `Dot`,
      `Multiple Elements`,
      `Allowing For Group Styling`,
      `Hash`,
      `Single Elements`,
      `Higher Specificity`,
    ],
  },

  {
    questions: [`What are the advantages of External Style Sheets?`],
    answers: [
      `External Style Sheets offer several advantages. It keeps style information separate from HTML markup and enhance maintainability. The styles of multiple documents can be controlled from one file. External Style Sheets can also be cached by the browser which improves page loading speed and reduces bandwidth usage.`,
    ],
    hints: [
      `Style Information Separate`,
      `Enhance Maintainability`,
      `Multiple Documents Controlled From One File`,
      `Cached By The Browser`,
      `Improves Page Loading Speed`,
      `Reduces Bandwidth Usage.`,
    ],
  },

  {
    questions: [
      `What is the difference between inline, embedded and external style sheets?`,
    ],
    answers: [
      `In inline style, styling is applied directly within the HTML tags using the style attribute. For example: <p style="color: red;">This is a red paragraph.</p>. It is quick for small changes, but can make code less maintainable and harder to update. In embedded style, styling is placed within the HTML file using the <style> tag in the document's <head> section. For example:
      <head>
        <style>
          p {
            color: blue;
          }
        </style>
      </head>
      <body>
        <p>This is a blue paragraph.</p>
      </body>
It keeps styles closer to content, but still involves mixing HTML with CSS. In external style, styling is stored in a separate CSS file and linked to the HTML file using the <link> tag. For example:
      <head>
        <link rel="stylesheet" type="text/css" href="styles.css">
      </head>
It promotes clean separation of HTML and CSS, making code more modular and maintainable. Requires an additional HTTP request. In summary, inline styles are inside HTML tags, embedded styles are within the HTML file, and external styles are stored in a separate CSS file. The choice depends on the project's needs for maintainability and organization.`,
    ],
    hints: [
      `Within The Html Tags`,
      `Quick For Small Changes`,
      `Less Maintainable And Harder To Update`,
      `Within Html File Using <style> Tag`,
      `Closer To Content`,
      `Mixing Html With Css`,
      `Separate Css File`,
      `Linked To Html File Using <link> Tag`,
    ],
  },

  {
    questions: [`What is RWD?`],
    answers: [
      `RWD stands for Responsive Web Design. This technique is used to display the designed page perfectly on every screen size and device. RWD involves using fluid layouts, flexible images, and CSS media queries to ensure optimal user experience across all devices.`,
    ],
    hints: [
      `Responsive Web Design`,
      `Every Screen Size And Device.`,
      `Fluid Layouts, Flexible Images, And Css Media Queries`,
    ],
  },
];
