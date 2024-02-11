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

  {
    questions: [`Tell us about the use of the ruleset.`],
    answers: [
      `A ruleset in CSS is a set of instructions that defines how HTML elements should be styled on a webpage. It consists of a selector (target HTML element) and a declaration block (styling rules enclosed in curly braces), specifying properties and values for the selected element. For example: /* CSS Ruleset Example */
    p {
      color: #336699;
      font-size: 16px;
      margin-bottom: 10px;
    }`,
    ],
    hints: [
      `Set Of Instructions`,
      `How Should Be Styled`,
      `Selector`,
      `Declaration Block`,
      `Properties`,
      `Values`,
    ],
  },

  {
    questions: [`What are the elements of the CSS Box Model?`],
    answers: [
      `The CSS Box Model defines the layout and design of CSS elements. The elements are content (like text and images, padding (the area around content), border (the area around padding), and margin (the area around the border). `,
    ],
    hints: [`Content`, `Padding`, `Border`, `Margin`],
  },

  {
    questions: [`Differentiate between CSS3 and CSS2.`],
    answers: [
      `CSS3 divides different sections into modules like Flexbox, and Grid and introduces new features like animations and transitions, enhancing design capabilities compared to the older CSS2.`,
    ],
    hints: [
      `Divides Different Sections Into Modules`,
      `Animations`,
      `Transitions`,
      `Enhance Design Capabilities`,
    ],
  },

  {
    questions: [`What is meant by RGB stream?`],
    answers: [
      `In web development, RGB stands for Red, Green, and Blue – the primary colours used to create a wide range of colours by combining different intensities of each. An RGB stream typically represents a sequence of these colour values.`,
    ],
    hints: [
      `Red, Green, And Blue`,
      `Combining Different Intensities Of Each`,
      `Sequence Of These Colour Values`,
    ],
  },

  {
    questions: [`What was the purpose of developing CSS?`],
    answers: [
      `CSS was developed to style and format web documents, separating presentation from content for a more flexible and consistent design.`,
    ],
    hints: [
      `Style And Format Web`,
      `Separate Presentation From Content`,
      `Flexible And Consistent Design`,
    ],
  },

  {
    questions: [`Define z-index.`],
    answers: [
      `z-index determines the stacking order of positioned elements that overlap each other; higher values appear in front of lower values. The stack order will be set equal to the parent for auto. The default value of 0 is set to the property if the value is set to initial.For the value inherit, the properties are inherited from the parent.
      `,
    ],
    hints: [
      `Stacking Order Of Positioned Elements`,
      `Overlap Each Other`,
      `Higher Values In Front Of Lower Values`,
    ],
  },

  {
    questions: [`What are the benefits of CSS Sprites?`],
    answers: [
      `CSS Sprites reduce server requests, improving website performance by combining multiple images into a single file.`,
    ],
    hints: [
      `Reduce Server Requests`,
      `Combine Multiple Images Into A Single File`,
    ],
  },

  {
    questions: [`How can you target h3 and h2 with the same styling?`],
    answers: [
      `Multiple elements can be targeted by separating with a comma: h2, h3 {color: red;}`,
    ],
    hints: [`Separating With A Comma`, `h2, h3 {color: red;}`],
  },

  {
    questions: [`Name media types allowed by CSS.`],
    answers: [
      `Here are examples of CSS media queries for different media types:
    all: @media all { 
    /* Styles for all devices */ 
    } 
    print: @media print { 
    /* Styles for print and print preview */ 
    } 
    screen: @media screen { 
    /* Styles for computer screens, tablets, smartphones, etc. */ 
    } 
    speech: @media speech { 
    /* Styles for speech synthesizers */ 
    } 
    braille: @media braille { 
    /* Styles for braille tactile feedback devices */ 
    } 
    handheld: @media handheld { 
    /* Styles for handheld devices like smartphones */ 
    } 
    projection: @media projection { 
    /* Styles for presentations, projectors, etc. */ 
    } 
    aural or speech: @media aural, speech { 
    /* Styles for screen readers and speech synthesizers */ 
    } 
    tv: @media tv { 
    /* Styles for television-type devices */
    }
    tty: @media tty { 
    /* Styles for teletypewriter or terminal devices */
    }
    `,
    ],
    hints: [
      `All`,
      `Print`,
      `Screen`,
      `Speech`,
      `Braille`,
      `Handheld`,
      `Projection`,
      `Aural Or Speech`,
      `Tv`,
      `Tty`,
    ],
  },

  {
    questions: [`Name some font-related CSS attributes. `],
    answers: [
      `Some font-related CSS attributes are: font-family, font-size, font-weight, font-style`,
    ],
    hints: [` Font-Family`, `Font-Size`, `Font-Weight`, `Font-Style`],
  },

  {
    questions: [`Define contextual selectors.`],
    answers: [
      `Contextual selectors target specific elements within a context, like "div p" selecting all paragraphs inside divs.`,
    ],
    hints: [`Specific Elements Within A Context`, `div p`],
  },

  {
    questions: [`Tell us about the general CSS nomenclature.`],
    answers: [
      `CSS nomenclature involves selectors, properties, and values, forming rules like "selector { property: value; }."`,
    ],
    hints: [`selector { property: value; }`],
  },

  {
    questions: [`What are the different types of Selectors in CSS?`],
    answers: [
      `Different types of selectors in CSS include: Type Selectors (element names), Class Selectors (.), ID Selectors (#), Attribute Selectors ([]), Descendant Selectors (whitespace), Child Selectors (>), Universal Selectors (*), Pseudo-class Selectors (:hover), Pseudo-element Selectors (::before), Grouping Selectors (selector1, selector2), Adjacent Sibling Selectors (+), General Sibling Selectors (~), Attribute Value Selectors ([attribute=value]), Attribute Starts With Selectors ([attribute^=value]), Attribute Ends With Selectors ([attribute$=value]), Attribute Contains Selectors ([attribute*=value])`,
    ],
    hints: [
      `Type Selectors (Element Names)`,
      `Class Selectors (.)`,
      `Id Selectors (#)`,
      `Attribute Selectors ([])`,
      `Descendant Selectors (Whitespace)`,
      `Child Selectors (>)`,
      `Universal Selectors (*)`,
      `Pseudo-Class Selectors (:Hover)`,
      `Pseudo-Element Selectors (::Before)`,
      `Grouping Selectors (Selector1`,
      `Selector2)`,
      `Adjacent Sibling Selectors (+)`,
      `General Sibling Selectors (~)`,
      `Attribute Value Selectors ([Attribute=Value])`,
      `Attribute Starts With Selectors ([Attribute^=Value])`,
      `Attribute Ends With Selectors ([Attribute$=Value])`,
      `Attribute Contains Selectors ([Attribute*=Value])`,
    ],
  },

  {
    questions: [
      `What is a CSS Preprocessor? What are Sass, Less, and Stylus? Why do people use them?`,
    ],
    answers: [
      `A CSS preprocessor is a scripting language that extends CSS. They add features like variables, nesting, and functions to improve code organization, maintainability, and efficiency in styling web applications. Sass (Syntactically Awesome Style Sheets) uses .sass extension. It is used for indentation; it doesn’t use semicolons or curly brackets. Less (Leener Stylesheets) uses .less extension. It is easy to add to any JavaScript Project by using NPM or less.js file. Here, @ is used to define the variables. Stylus provides great flexibility in writing syntax. It is able to use native CSS as well as the exclusion of brackets, colons, and semicolons. There is no need to use @ or $ to define the variables.`,
    ],
    hints: [
      `Scripting Language`,
      `Extends Css.`,
      `Variables, Nesting, And Functions`,
      `Improve Organization`,
      `Maintainability`,
      `Syntactically Awesome Style Sheets)`,
      `No Semicolons/Curly Brackets`,
      `Leener Stylesheets`,
      `@`,
      `Use Both`,
      `No @/$`,
    ],
  },

  {
    questions: [`What is VH/VW (viewport height/ viewport width) in CSS?`],
    answers: [
      `VH/VW in CSS stands for viewport height and viewport width, respectively. They are units used to size elements relative to the browser window, making designs more responsive.`,
    ],
    hints: [
      `Viewport Height`,
      `Viewport Width`,
      `Relative To Browser Window`,
      `Responsive`,
    ],
  },

  {
    questions: [
      `Difference between reset vs normalize CSS? How do they differ?`,
    ],
    answers: [
      `Reset CSS is used to remove all built-in styles in the browser such as paddings, margins, and font sizes, and can be reset using all the elements. Normalize CSS, on the other hand, preserves useful default styles, only normalizing styles that might vary between browsers. It aims to create a more consistent baseline while maintaining some default behaviors.`,
    ],
    hints: [
      `Remove All Built-In Styles`,
      `Preserves Useful Default Styles`,
      `Normalizing Styles Which Vary Between Browsers`,
    ],
  },

  {
    questions: [
      `What is the difference between inline, inline-block, and block?`,
    ],
    answers: [
      `Block Elements are <div> and <p>. They usually start on a new line and can take space for an entire row or width. Inline elements are <a>, <span>, <strong>, and <img> tags. They don't start on a new line. However, they appear on the same line as the content and tags beside them. Compared to display: inline, the major difference is that display: inline-block allows to set a width and height on the element. Also, with display: inline-block, the top and bottom margins/paddings are respected, but with display: inline they are not. Compared to display: block, the major difference is that display: inline-block does not add a line-break after the element, so the element can sit next to other elements.`,
    ],
    hints: [
      `Start On A New Line`,
      `Entire Row/Width`,
      `Don't Start On A New Line`,
      `Set A Width And Height On Element`,
      `Top And Bottom Margins/Paddings Are Respected`,
      `Not Add A Line-Break`,
    ],
  },

  {
    questions: [`Is it important to test the webpage in different browsers?`],
    answers: [
      `Yes, testing webpages in different browsers is crucial to ensure consistent functionality and appearance across various platforms, preventing compatibility issues.`,
    ],
    hints: [
      `Yes`,
      `Consistent Functionality`,
      `Appearance`,
      `Prevent Compatibility Issues`,
    ],
  },

  {
    questions: [`What are Pseudo classes?`],
    answers: [
      `Pseudo classes in CSS are used to style elements based on their state or position, like:hover or :nth-child. They allow you to style elements that are not explicitly present in the HTML markup.`,
    ],
    hints: [`State Or Position,`, `:hover`, `Not Explicitly In Html`],
  },

  {
    questions: [
      `How do you specify units in the CSS? What are the different ways to do it?`,
    ],
    answers: [
      `The length unit in CSS is of two types: absolute length and relative length. These are the fixed-length units, and the length expressed using the absolute units will appear as exactly that size. Absolute units are useful when responsiveness is not considered in a project.  cm is used to define the measurement in centimetres. mm is used to define the measurement in millimeters. in is used to define the measurement in inches. 1in = 96px = 2.54cm pt is used to define the measurement in points. 1pt = 1/72 of 1 inch. pc is used to define the measurement in picas. 1pc = 12pt so, there 6 picas are equivalent to 1 inch. px is used to define the measurement in pixels. 1px = 1/96th of inch. Relative units are good for styling the responsive site because they scale relative to the window size or the parent. em is relative to the font-size of the element. ex is relative to the x-height of the font of the element. is rarely used. The x-height is determined by the height of the lowercase letter 'x'. ch is similar to the unit ex, but instead of using the height of the letter x, measures the width of the integer "0" (zero). rem is the font-size of the root element vh is relative to the height of the viewport. 1vh = 1% or 1/100 of the height of the viewport. vw is relative to the width of the viewport. 1vw = 1% or 1/100 of the width of the viewport vmin is relative to the smaller dimension of the viewport. 1vmin = 1% or 1/100 of the viewport's smaller dimension. vmax is relative to the larger dimension of the viewport. 1vmax = 1% or 1/100 of the viewport's larger dimension. % is used to define the measurement as a percentage that is relative to another value.`,
    ],
    hints: [
      `Absolute Length`,
      `Relative Length`,
      `Fixed-Length Units`,
      `Responsiveness Is Not Considered`,
      `cm, mm, in, pt, pc, px`,
      `Good For Responsive`,
      `Relative To Window/Parent`,
      `em, ex, ch, rem, vh, vw, vmin, vmax, %`,
    ],
  },

  {
    questions: [
      `Does margin-top or margin-bottom have an effect on inline elements?`,
    ],
    answers: [
      `No, margin-top and margin-bottom don't affect inline elements; they apply to block-level elements.`,
    ],
    hints: [`No`, `Don't Affect`],
  },

  {
    questions: [`What property is used for changing the font face?`],
    answers: [
      `The "font-family" property is used to change the font face in CSS.`,
    ],
    hints: [`font-family`],
  },

  {
    questions: [
      `What are the differences between adaptive design and responsive design?`,
    ],
    answers: [
      `In adaptive design, the main focus is to develop a website in multiple fixed layout sizes. Offers good control over the design to develop variation in screens. is very time-consuming and takes a lot of effort to build the best possible adaptive design as examining will need to go for many options concerning the realities of the end user. There are six standard screen sizes for the appropriate layouts; they are 320px, 480px, 760px, 960px, 1200px, and 1600px to design. Responsive design adjusts to various screen sizes dynamically. Offers less control over the design. It takes less time to build the design and there is no screen size issue irrespective of content. uses CSS media queries to design the screen layouts with respect to specific devices and property changes in the screen.`,
    ],
    hints: [
      `Multiple Fixed Layout Sizes`,
      `Good Control Over Design`,
      `Very Time-Consuming`,
      `Lot Of Effort`,
      `Six Standard Screen Sizes`,
      `320px, 480px, 760px, 960px, 1200px, And 1600px`,
      `Adjusts Dynamically`,
      `Less Control Over Design`,
      `Less Time`,
      `Media Queries`,
    ],
  },

  {
    questions: [
      `How are the CSS selectors matched against the elements by the browser?`,
    ],
    answers: [
      `The browser uses the Document Object Model (DOM) tree and the CSS object model to determine which styles should be applied to each element on the page. It starts at the root of the DOM tree and compares each element to the CSS selectors in the CSS object model using different matching algorithms. The matching process begins with the most specific selector and works its way down to the least specific. For example, if a selector is #id, it will be more specific than .class and will be applied first. If there are multiple selectors with the same specificity, then the order in which the selectors appear in the stylesheet determines which one will be applied.`,
    ],
    hints: [
      `Document Object Model (Dom) Tree And Css Object Model `,
      `Starts At The Roo`,
      `Different Matching Algorithms`,
      `Begins With Most Specific Selector`,
      `Order`,
    ],
  },

  {
    questions: [`How is the border-box different from the content box?`],
    answers: [
      `Border-box includes padding and borders within the element's total width, while the content box only considers the content's width. For example: /* Content Box */
    .content-box-example {
      width: 200px;
      padding: 20px;
      border: 5px solid black;
      /* Total width calculation: content + padding + border */
      /* 200px (content) + 2 * 20px (padding) + 2 * 5px (border) = 250px */
    }
    /* Border Box */
    .border-box-example {
      box-sizing: border-box;
      width: 200px;
      padding: 20px;
      border: 5px solid black;
      /* Total width includes content, padding, and border (specified width: 200px) */
      /* The actual content width will be 200px, and padding and border are included within this width. */
    }`,
    ],
    hints: [
      `Includes Padding And Borders Within The Element`,
      `Only Considers Content's Width`,
    ],
  },

  {
    questions: [`How is opacity specified in CSS3?`],
    answers: [
      `Opacity in CSS3 is set using the opacity property, ranging from 0 (fully transparent) to 1 (fully opaque).`,
    ],
    hints: [`opacity Property`, `0 (Fully Transparent)`, `1 (Fully Opaque)`],
  },

  {
    questions: [`What is cascading in CSS?`],
    answers: [
      `Cascading in CSS refers to the process of determining the priority and inheritance of styles when multiple style rules conflict. It follows a specific order: inline styles override internal (or embedded) styles, which, in turn, override external (or linked) styles. The specificity of selectors and the order of appearance also influence the cascading process.`,
    ],
    hints: [
      `Priority And Inheritance Of Styles`,
      `Multiple Style Rules Conflict`,
      `Specific Order`,
      `Inline Styles > Internal (Or Embedded) Styles > External (Or Linked) Styles`,
      `Specificity Of Selectors`,
      `Order Of Appearance`,
    ],
  },

  {
    questions: [`When does DOM reflow occur?`],
    answers: [
      `The reflow of an element recomputes the dimension and position of the webpage. DOM reflow occurs when there are changes to the structure or layout of a webpage, such as modifying the content, changing styles, or manipulating the DOM elements. It can be triggered by actions like adding, removing, or resizing elements, which impact the position and size of elements on the page.`,
    ],
    hints: [
      `Recomputes Dimension And Position Of Webpage`,
      `Changes In Structure/Layout`,
      `Modifying In Content`,
      `Changing Styles`,
      `Manipulating Dom Elements`,
      `Adding, Removing/Resizing Elements`,
    ],
  },

  {
    questions: [`Different Box Sizing Property?`],
    answers: [
      `Content-box includes only content; Border-box includes content, padding, and border; Padding-box includes content, padding. The border is added to the outside of the box. Currently, only Firefox supports the padding-box value.`,
    ],
    hints: [`Content-Box`, `Border-Box`, `Padding-Box`],
  },

  {
    questions: [`How to center align a div inside another div?`],
    answers: [
      `Use CSS flexbox with align-items and justify-content set to center.`,
    ],
    hints: [`Flexbox`, `Align-Items`, `Justify-Content`, `Center`],
  },

  {
    questions: [`What is the grid system?`],
    answers: [
      `A layout system in CSS for creating two-dimensional grid-based layouts.`,
    ],
    hints: [`Two-Dimensional Grid-Based Layouts`],
  },

  {
    questions: [`What are the different ways to hide the element using CSS?`],
    answers: [
      `display: none; visibility: hidden; opacity: 0; or position: absolute; left: -9999px;`,
    ],
    hints: [
      `display: none;`,
      `visibility: hidden;`,
      `opacity: 0;`,
      `position: absolute;`,
      `left: -9999px;`,
    ],
  },

  {
    questions: [`What does the: root pseudo-class refer to?`],
    answers: [
      `The: root selector pseudo-class refers to the CSS selector level 3. Selects the highest-level parent element in a document, often the <html> element.`,
    ],
    hints: [`Css Selector Level 3. Selects <Html> (Highest Parent)`],
  },

  {
    questions: [`What does Accessibility (a11y) mean?`],
    answers: [
      `Accessibility means designing software so everyone, including those with disabilities, can use it easily.`,
    ],
    hints: [`Everyone`, `Even With Disabilities`],
  },

  {
    questions: [`How do I restore the default value of a property?`],
    answers: [
      `To restore a property's default value, set it to "initial" or remove the custom value.`,
    ],
    hints: [`"initial"`],
  },

  {
    questions: [`Difference between CSS grid vs flexbox?`],
    answers: [
      `CSS grid is for 2D layouts, flexbox is for 1D layouts like rows or columns.`,
    ],
    hints: [`2d`, `1d => Rows/Columns`],
  },

  {
    questions: [`How does Calc work?`],
    answers: [
      `Calc() is a CSS function for mathematical operations in property values. For example: .foo {
      width: calc(100px+50px)
      }`,
    ],
    hints: [`Mathematical Operations In Property Values`],
  },

  {
    questions: [`What do CSS Custom properties variables mean?`],
    answers: [
      `CSS Custom properties are variables storing reusable values for styling across a stylesheet. They are declared using the -- prefix and can be assigned values using the var() function. For example::root {
      --main-color: #3498db;
      --font-size: 16px;
    }
    body {
      color: var(--main-color);
      font-size: var(--font-size);
    }
    .header {
      background-color: var(--main-color);
    }
    .footer {
      font-size: var(--font-size);
    }`,
    ],
    hints: [`Variables Storing Reusable Values`, `Across A Stylesheet`],
  },

  {
    questions: [
      `What is the difference between CSS variables and pre-processor (SASS, LESS, Stylus) variables?`,
    ],
    answers: [
      `CSS variables are native to CSS, while pre-processor variables are part of a pre-processing language like SASS. CSS variables are resolved at runtime, and pre-processor variables are compiled before runtime.`,
    ],
    hints: [
      `Native To Css`,
      `Part Of Pre-Processing`,
      `Resolved At Runtime`,
      `Compiled Before Runtime`,
    ],
  },

  {
    questions: [
      `What does * { box-sizing: border-box; } do? What are its advantages?`,
    ],
    answers: [
      `* { box-sizing: border-box; } is a CSS rule that applies the "border-box" box-sizing model to all elements on a webpage. In this model, an element's padding and border are included in its total width and height, simplifying layout calculations.`,
    ],
    hints: [
      `All Elements`,
      `Padding And Border Are Included`,
      `Simplifying Layout Calculations`,
    ],
  },

  {
    questions: [`What does !important mean in CSS?`],
    answers: [
      `The style “!important” in the CSS has the highest precedence. Also, the cascaded property will be overridden with it.`,
    ],
    hints: [`Highest Precedence`, `Override Cascading`],
  },

  {
    questions: [
      `What is progressive rendering? How do you implement progressive rendering on the website? What are its advantages?`,
    ],
    answers: [
      `Progressive rendering is an optimization technique in web development where a webpage is gradually displayed to the user as content is loaded, instead of waiting for the entire page to load before rendering. Load essential assets (HTML, CSS, and critical JavaScript) first to display basic content quickly. Users see meaningful content sooner, creating a perception of a faster-loading website. Its advantages are improved user experience, SEO benefits, optimized for low-bandwidth users.`,
    ],
    hints: [
      `Optimization Technique`,
      `Gradually Displayed As Content Is Loaded`,
      `Load Essential Assets (Html, Css, And Critical Javascript) First`,
      `Faster-Loading Website`,
      `Improved User Experience`,
      `SEO Benefits`,
      `Optimized For Low-Bandwidth Users`,
    ],
  },

  {
    questions: [
      `Does style1.css have to be downloaded and parsed before style2.css can be fetched?`,
    ],
    answers: [
      `No, in general, style1.css does not have to be downloaded and parsed before style2.css can be fetched. Browsers can download and parse CSS files concurrently. The order of stylesheets doesn't necessarily impact their downloading and parsing sequence.`,
    ],
    hints: [`No`, `Download And Parse Concurrently`, `Doesn't Impact Sequence`],
  },

  {
    questions: [`How to determine if the browser supports a certain feature?`],
    answers: [
      `@support in the CSS is used to scan and determine whether the browser supports a certain feature or not. For example: @supports (feature: value) {
      /* CSS code for browsers that support the feature */
    }`,
    ],
    hints: [`@support`],
  },

  {
    questions: [`How does absolute positioning work?`],
    answers: [
      `Absolute positioning positions an element relative to its closest positioned ancestor or the initial containing block.`,
    ],
    hints: [`Relative To Closest Ancestor`, `Initial Containing Block`],
  },

  {
    questions: [`Does this property work overflow: hidden?`],
    answers: [
      `The CSS property overflow: hidden; hides any content that exceeds the dimensions of its container. It clips or truncates the overflowing content and does not display scrollbars. This is often used to create a hidden overflow effect within a fixed-size container.`,
    ],
    hints: [
      `Hides Content That Exceeds Dimensions Of Container`,
      `Clips/Truncates`,
      `Display No Scrollbars`,
    ],
  },

  {
    questions: [
      `When should you use translate() instead of absolute positioning?`,
    ],
    answers: [
      `Use translate() instead of absolute positioning when you want to animate or move an element. translate() is generally more efficient for animations, providing smoother performance and avoiding layout recalculations, compared to changing the position with absolute positioning.`,
    ],
    hints: [
      `Animate/Move An Element`,
      `Smoother Performance`,
      `Avoid Layout Recalculations`,
    ],
  },

  {
    questions: [`Name different ways to position some aspects in CSS.`],
    answers: [
      `CSS positioning options include static, relative, absolute, fixed, and sticky.`,
    ],
    hints: [`static`, `relative`, `absolute`, `fixed`, `sticky`],
  },

  {
    questions: [`What are mixins?`],
    answers: [
      `A mixin is similar to a function block of code returning a single value—mixin output lines of Sass code that directly compiles into CSS styles. At the same time, the function returns a value that becomes the value for a CSS property or something that can be passed to another mixin. For example: // Define the mixin
    @mixin flexbox {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    // Use the mixin in different style definitions
    .header {
      @include flexbox;
      background-color: lightblue;
    }
    .sidebar {
      @include flexbox;
      background-color: lightgreen;
    }`,
    ],
    hints: [
      `Similar To Function Block`,
      `Return A Single Value`,
      `Passed To Another Mixin`,
    ],
  },

  {
    questions: [`How can you optimize the webpage for prints?`],
    answers: [
      `Using the “@media print”, we can specify what styles the webpage needs to apply when it is considered for printing. Remove the unnecessary/redundant information like header, footer, CTA, etc which need not be there in print. You can simply do “display: none;” for all those elements using the following syntax: @media print{
      selector{
          display: none;
      }
  }
  Use the “@page” to define margins, paddings, etc for a particular page’s specific style. If you are playing with margins and padding then try to use “cm” instead of “px”. You can add the address of the link after the text of the link as the link text will not be that useful in print form. You can do that by adding this line: @media{
      a::after{
          content: "("attr(href)")";
      }
  }
  Make your text readable and try to remove the excess background color and background images wherever possible. Make the website look simpler, concise, and clear for achieving much more printer friendliness.
  `,
    ],
    hints: [
      `“@media print”`,
      `Remove Unnecessary Info`,
      `Header, Footer`,
      `“@page”`,
      `“cm” Instead Of “px”`,
      `"("attr(href)")"`,
      `Remove Excess Background Color And Images`,
      `Look Simpler, Concise, And Clear`,
    ],
  },

  {
    questions: [`What is meant by CSS working under the hood?`],
    answers: [
      `CSS working under the hood means the browser interpreting styles, creating a render tree, and applying layout to visually present web content.`,
    ],
    hints: [
      `Browser Interpreting Styles`,
      `Render Tree`,
      `Applying Layout To Visually Present Web Content`,
    ],
  },

  {
    questions: [`Tell us about the CSS float property.`],
    answers: [
      `CSS float property positions an element left or right within its container, enabling text or other elements to wrap around it.`,
    ],
    hints: [
      `Left Or Right Within Its Container`,
      ` Content Can Wrap Around It`,
    ],
  },

  {
    questions: [`What do you understand by pseudo-elements?`],
    answers: [
      `Pseudo-elements are selectors that target specific parts of an element, like ::before or ::after, allowing the styling/decoration of content not present in the HTML without changing the HTML structure.`,
    ],
    hints: [
      `Target Specific Parts`,
      `Content Not Present In Html`,
      `No Change In Structure`,
    ],
  },

  {
    questions: [`How do media types in CSS work?`],
    answers: [
      `Media types in CSS control how styles are applied based on the device, like 'screen' for displays and 'print' for printing. they specify how a document is to be presented on different media: on the screen, on paper, with a speech synthesizer, with a braille device, etc.`,
    ],
    hints: [
      `How Styles Are Applied On Device`,
      `How A Document Is To Be Presented On Different Media`,
    ],
  },

  {
    questions: [`Tell us something about CSS3.`],
    answers: [
      `CSS3 is the latest version of Cascading Style Sheets that divides different sections into modules like Flexbox, and Grid and introduces new features like animations and transitions, enhancing design capabilities.`,
    ],
    hints: [
      `Latest Version Of Cascading Style Sheets`,
      `Divides Different Sections Into Modules`,
      `Animations`,
      `Transitions`,
      `Enhance Design Capabilities`,
    ],
  },

  {
    questions: [`How is a CSS selector used?`],
    answers: [
      `CSS selectors target HTML elements for styling; you can select by tag, class, ID, or relationship (parent, child, sibling).`,
    ],
    hints: [
      `Target Html Elements`,
      `For Styling`,
      `Tag, Class, Id, Or Relationship (Parent, Child, Sibling)`,
    ],
  },

  {
    questions: [`Explain CSS specificity.`],
    answers: [
      `CSS specificity determines which style rule takes precedence, based on selectors' weight and specificity; higher specificity wins.`,
    ],
    hints: [`Precedence`, `Higher Specificity Wins`],
  },

  {
    questions: [`Define gradients in CSS. `],
    answers: [
      `Gradients in CSS define smooth transitions between colours, allowing for visually appealing backgrounds or elements.`,
    ],
    hints: [`Smooth Transitions Between Colours`, `Visually Appealing`],
  },

  {
    questions: [`What are the properties of flexbox?`],
    answers: [
      `Flexbox properties include flex-direction defines the direction of the flex container's main axis. justify-content aligns flex items along the main axis. align-items aligns flex items along the cross-axis. flex-grow specifies the ability for a flex item to grow if necessary. flex-shrink specifies the ability for a flex item to shrink if necessary. flex-basis sets the initial size of a flex item. flex shorthand for flex-grow, flex-shrink, and flex-basis. order controls the order in which flex items appear within the flex container. align-content aligns flex lines within the flex container when there is extra space in the cross-axis. flex-wrap determines whether flex items should wrap into multiple lines if they overflow the flex container. flex-flow shorthand for flex-direction and flex-wrap properties. align-self lets you adjust the up-and-down position of one item in a flex group, even if the others are standing differently. justify-self helps adjust the side-to-side position of a single item in a row of things, even if the rest are standing differently.`,
    ],
    hints: [
      `flex-direction`,
      `Direction`,
      `justify-content`,
      `Main Axis`,
      `align-items`,
      `Cross-Axis`,
      `flex-grow `,
      `To Grow`,
      `flex-shrink`,
      `To Shrink`,
      `flex-basis`,
      `Initial Size`,
      `flex`,
      `flex-grow, flex-shrink, And flex-basis`,
      `order`,
      `Controls Order`,
      `align-content`,
      `Flex Lines When Is Extra Space In Cross-Axis`,
      `flex-wrap`,
      `Wrap Or Not Into Multiple Lines If Overflow`,
      `flex-flow`,
      `flex-direction And flex-wrap `,
      `align-self`,
      `Up-And-Down Position Of One Item In Flex Group`,
      `justify-self`,
      `Side-To-Side Position`,
      `Standing Differently`,
    ],
  },

  {
    questions: [`Tell us about the use of the CSS Box Model.`],
    answers: [
      `The CSS Box Model is like thinking of a webpage element as a box. It has layers like content, padding, border, and margin. Content is what's inside, padding is space around the content, border is a line around the padding, and margin is space outside the border. It helps control how elements are spaced and sized on a webpage.`,
    ],
    hints: [
      `Element As A Box`,
      `Layers`,
      `Content`,
      `Padding`,
      `Border`,
      `Margin`,
      `Spaced And Sized`,
    ],
  },

  {
    questions: [`What are the position states in CSS?`],
    answers: [
      `Position states in CSS include static, relative, absolute, fixed, and sticky, determining how elements are positioned within the document flow.`,
    ],
    hints: [
      `static`,
      `relative`,
      `absolute`,
      `fixed`,
      `sticky`,
      `Positioned Within Document Flow`,
    ],
  },

  {
    questions: [`Differentiate between absolute and relative in CSS.`],
    answers: [
      `In CSS, absolute positioning is relative to the nearest positioned ancestor, while relative positioning is based on the element's normal position in the document flow. The main difference is that relative is used for the same tag in CSS. If we write right: 20 px, then padding shifts 20 px to the right. Whereas absolute is relative to the non-static parent, i.e., if we write right: 20 px, the result will be 20 px far from the right edge of the parent element.`,
    ],
    hints: [`Relative To The Nearest `, `Normal Position`, `Same Tag`],
  },

  {
    questions: [`What is common between class and ID?`],
    answers: [
      `Both class and ID are attributes in HTML used to apply styling through CSS. They help identify and target specific elements for styling, with the main difference being that a class can be used on multiple elements, while an ID should be unique within a page.`,
    ],
    hints: [
      `Apply Styling`,
      `Identify And Target Specific Elements`,
      `Multiple Elements`,
      `Unique`,
    ],
  },

  {
    questions: [
      `What do the following CSS selectors mean?
div, p
div p
div ~ p
div + p
div > p`,
    ],
    answers: [
      `div, p: Selects all div and p elements. div p: Selects all p elements that are descendants of a div. div ~ p: Selects all p elements that are siblings and come after a div. div + p: Selects the first p element that is a sibling and immediately comes after a div. div > p: Selects all p elements that are direct children of a div.`,
    ],
    hints: [
      `All div And p`,
      `All p inside div`,
      `p That Are Siblings And After div`,
      `First p Sibling And Immediately After div`,
      `p That Are Direct Child Of A div.`,
    ],
  },

  {
    questions: [
      `How will you align content inside the p tag at the exact center inside the div?`,
    ],
    answers: [
      `To center content inside a p tag within a div, set text-align: center; display: flex; align-items: center;justify-content: center on the div.`,
    ],
    hints: [
      `text-align: center;`,
      `display: flex;`,
      `align-items: center;`,
      `justify-content: center`,
      `div.`,
    ],
  },

  {
    questions: [`How is margin different from padding in CSS?`],
    answers: [
      `Margin creates space outside the element, affecting its positioning in the layout, while padding creates space inside the element, influencing its internal content spacing.`,
    ],
    hints: [
      `Space Outside Element`,
      `Affect Layout Position`,
      `Space Inside Element`,
      `Influence Content Spacing`,
    ],
  },

  {
    questions: [
      `What do you have to do to automatically number the heading values of sections and categories?`,
    ],
    answers: [
      `The concept of CSS counters can be used. While using this, we need to first initialize the value of the counter-reset property which is 0 by default. The same property is also used for changing the value to any number that we need. After initialization, the counter’s value can be incremented or decremented by using the counter-increment property. We will set the tag name as the value for both. Then we will show the value using the content property of CSS. For example: body {
      counter-reset: section; /* Initialize counter */
    }
    h2::before {
      counter-increment: section; /* Increment counter for h2 */
      content: counter(section) ". "; /* Display counter before h2 */
    }
    h3::before {
      counter-increment: subsection; /* Increment counter for h3 */
      content: counter(section) "." counter(subsection) ". "; /* Display counters before h3 */
    }`,
    ],
    hints: [
      `CSS Counters`,
      `Initialize`,
      `counter-reset`,
      `Incremented/Decremented`,
      `counter-increment`,
      `Set Tag Name `,
      `content`,
    ],
  },
];
