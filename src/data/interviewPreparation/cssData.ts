import { QuestionsAndAnswersType } from "../../types/questionsAndAnswersType";

export const cssData: QuestionsAndAnswersType[] = [
  {
    questions: [`What is CSS?`],
    answers: [
      `CSS stands for Cascading Style Sheet. It is a popular styling language. It is used with HTML to design websites. It can also be used with any XML documents including plain XML, SVG, and XUL.`,
    ],
    hints: [
      `Css Stands For Cascading Style Sheet. It Is A Popular Styling Language. It Is Used With Html To Design Websites. It Can Also Be Used With Any Xml Documents Including Plain Xml, Svg, And Xul.`,
    ],
  },

  {
    questions: [`What is the origin of CSS?`],
    answers: [
      `SGML (Standard Generalized Markup Language) is the origin of CSS. It is a language that defines markup languages.`,
    ],
    hints: [
      `Sgml (Standard Generalized Markup Language) Is The Origin Of Css. It Is A Language That Defines Markup Languages.`,
    ],
  },

  {
    questions: [`What are the different variations of CSS?`],
    answers: [
      `The different variations of CSS are CSS1, CSS2, CSS2.1, CSS3, CSS4.`,
    ],
    hints: [
      `The Different Variations Of Css Are Css1, Css2, Css2.1, Css3, Css4.`,
    ],
  },

  {
    questions: [`How can you integrate CSS on a web page?`],
    answers: [
      `CSS can be integrated into a web page in three ways: inline, internal, and external. Inline CSS is directly added within the HTML tags using the "style" attribute. Internal CSS is placed within the "style" tags in the head section of an HTML document. External CSS is stored in a separate CSS file and linked to the HTML document using the "link" tag.`,
    ],
    hints: [
      `Css Can Be Integrated Into A Web Page In Three Ways: Inline, Internal, And External. Inline Css Is Directly Added Within The Html Tags Using The "Style" Attribute. Internal Css Is Placed Within The "Style" Tags In The Head Section Of An Html Document. External Css Is Stored In A Separate Css File And Linked To The Html Document Using The "Link" Tag.`,
    ],
  },

  {
    questions: [`What are the advantages of CSS?`],
    answers: [
      `The advantages of CSS include separation of style from content, which makes maintenance and updates easier; consistent styling across multiple web pages; improved page loading speed due to reduced HTML code; the ability to create responsive designs for different devices and screen sizes; and a wide range of design options and flexibility.`,
    ],
    hints: [
      `The Advantages Of Css Include Separation Of Style From Content, Which Makes Maintenance And Updates Easier; Consistent Styling Across Multiple Web Pages; Improved Page Loading Speed Due To Reduced Html Code; The Ability To Create Responsive Designs For Different Devices And Screen Sizes; And A Wide Range Of Design Options And Flexibility.`,
    ],
  },

  {
    questions: [`What are the limitations of CSS?`],
    answers: [
      `Limitations of CSS include browser compatibility issues, as different browsers may interpret CSS code differently; CSS is primarily a styling language and has limited capabilities for interactivity and dynamic behavior. More complex interactions often require JavaScript or other scripting languages. Css provides basic mathematical operators for values like width and height, but it lacks the ability to perform more advanced calculations without the use of CSS preprocessors or JavaScript.`,
    ],
    hints: [
      `Limitations Of Css Include Browser Compatibility Issues, As Different Browsers May Interpret Css Code Differently; Css Is Primarily A Styling Language And Has Limited Capabilities For Interactivity And Dynamic Behavior. More Complex Interactions Often Require Javascript Or Other Scripting Languages. Css Provides Basic Mathematical Operators For Values Like Width And Height, But It Lacks The Ability To Perform More Advanced Calculations Without The Use Of Css Preprocessors Or Javascript.`,
    ],
  },

  {
    questions: [`What are the CSS frameworks?`],
    answers: [
      `They offer ready-to-use CSS styles, layout grids, and components, allowing developers to streamline the development process and create responsive and consistent designs more efficiently. Examples of popular CSS frameworks include Bootstrap, Foundation, and Bulma. Bootstrap, Foundation, Semantic UI, Gumby, Ulkit,`,
    ],
    hints: [
      `They Offer Ready-To-Use Css Styles, Layout Grids, And Components, Allowing Developers To Streamline The Development Process And Create Responsive And Consistent Designs More Efficiently. Examples Of Popular Css Frameworks Include Bootstrap, Foundation, And Bulma. Bootstrap, Foundation, Semantic Ui, Gumby, Ulkit,`,
    ],
  },

  {
    questions: [
      `Why background and color are the separate properties if they should always be set together?`,
    ],
    answers: [
      `Background and color are separate properties in CSS because they serve different purposes. The background property defines the background color or image of an element, while the color property defines the text color.`,
    ],
    hints: [
      `Background And Color Are Separate Properties In Css Because They Serve Different Purposes. The Background Property Defines The Background Color Or Image Of An Element, While The Color Property Defines The Text Color.`,
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
    hints: [
      `An Embedded Style Sheet Is Css Code That Is Placed Within The Html Document Itself, Typically Within The "Style" Tags In The Head Section.For Example: <Style>    
            Body {    
                Background-Color: Linen;    
            }    
            H1 {    
                Color: Red;    
                Margin-Left: 80px;    
            }     
            </Style> `,
    ],
  },

  {
    questions: [`What are the advantages of Embedded Style Sheets?`],
    answers: [
      `The advantages of Embedded Style Sheets simplifying maintenance as the styles are contained within the document, and No extra download is required to import the information.`,
    ],
    hints: [
      `The Advantages Of Embedded Style Sheets Simplifying Maintenance As The Styles Are Contained Within The Document, And No Extra Download Is Required To Import The Information.`,
    ],
  },

  {
    questions: [`What is a CSS selector?`],
    answers: [
      `It is a string that used to target and select specific HTML elements on a web page for styling. It is equivalent of HTML elements. There are several different types of selectors in CSS such as CSS Element Selector, CSS Id Selector, CSS Class Selector, CSS Universal Selector, CSS Group Selector,`,
    ],
    hints: [
      `It Is A String That Used To Target And Select Specific Html Elements On A Web Page For Styling. It Is Equivalent Of Html Elements. There Are Several Different Types Of Selectors In Css Such As Css Element Selector, Css Id Selector, Css Class Selector, Css Universal Selector, Css Group Selector,`,
    ],
  },

  {
    questions: [`Name some CSS style components.`],
    answers: [
      `Some CSS Style components are color, font-size, padding, margin, background-color, border , width, height, text-align, display and more.`,
    ],
    hints: [
      `Some Css Style Components Are Color, Font-Size, Padding, Margin, Background-Color, Border , Width, Height, Text-Align, Display And More.`,
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
      `It Specifies The Clarity/Transparency Of The Image. In Technical Terms, Opacity Is Defined As The Degree To Which Light Is Allowed To Travel Through An Object. For Example: <Style>    
Img.Trans {    
    Opacity: 0.4;    
    Filter: Alpha(Opacity=40); /* For Ie8 And Earlier */    
}    
</Style> `,
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
    hints: [
      `The Universal Selector In Css Is Represented By The Asterisk Symbol (*). It Matches And Selects All Elements In The Document.For Example: <Style>    
* {    
   Color: Green;    
   Font-Size: 20px;    
}     
</Style> `,
    ],
  },

  {
    questions: [
      `Which command is used for the selection of all the elements of a paragraph?`,
    ],
    answers: [
      `The p[lang] command is used for selecting all the elements of a paragraph.`,
    ],
    hints: [
      `The P[Lang] Command Is Used For Selecting All The Elements Of A Paragraph.`,
    ],
  },

  {
    questions: [`What is the use of % unit?`],
    answers: [
      `The % unit in CSS represents a percentage value relative to another value. It can be used in various properties like width, height, padding, margin, and more.`,
    ],
    hints: [
      `The % Unit In Css Represents A Percentage Value Relative To Another Value. It Can Be Used In Various Properties Like Width, Height, Padding, Margin, And More.`,
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
      `The Background-Color Property Is Used To Specify The Background Color Of The Element. A Specific Color Value (E.G., "Red", "#Ffffff") Or Color Representations Like Rgb Or Hsl Can Be Assigned In The The Background Color. For Example:<Style>    
H2,P{    
    Background-Color: #B0d4de;    
}    
</Style> `,
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
      `The Background-Repeat Property Repeats The Background Image Horizontally And Vertically. Some Images Are Repeated Only Horizontally Or Vertically. Values Like "Repeat", "No-Repeat", "Repeat-X", And "Repeat-Y" Can Be Used To Control The Repetition Behavior.For Example: <Style>    
Body {    
Background-Image: Url("Paper1.Gif");    
Background-Repeat: Repeat-Y;   
}    
</Style>`,
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
      `The Background-Position Property Is Used To Define The Initial Position Of The Background Image. By Default, The Background Image Is Placed On The Top-Left Of The Webpage. Keywords Like "Top", "Center", "Bottom", Or Specific Units Like Pixels Or Percentages Can Be Used To Define The Position.For Example: <Style>
Div{ Background: White Url('Good-Morning.Jpg');  
Background-Repeat: No-Repeat;  
Background-Attachment: Fixed;  
Background-Position: Center;}
</Style>`,
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
    hints: [
      `The Background-Attachment Property Is Used To Specify If The Background Image Is Fixed Or Scroll As The User Scrolls The Page. Values Like "Scroll" Or "Fixed" Can Be Used To Control The Scroll Behavior.For Example: <Style>
Div{Background: White Url('Bbb.Gif');  
Background-Repeat: No-Repeat;  
Background-Attachment: Fixed;}
</Style>`,
    ],
  },

  {
    questions: [`What is the use of ruleset?`],
    answers: [
      `A ruleset in CSS consists of a selector and a declaration block. Selector indicates the HTML element where the style to be applied. The declaration block contains the specific styles (red) and properties (color) to be applied. The declaration block can contain one or more declarations separated by a semicolon.`,
    ],
    hints: [
      `A Ruleset In Css Consists Of A Selector And A Declaration Block. Selector Indicates The Html Element Where The Style To Be Applied. The Declaration Block Contains The Specific Styles (Red) And Properties (Color) To Be Applied. The Declaration Block Can Contain One Or More Declarations Separated By A Semicolon.`,
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
      `Class Selectors (Defined With A Dot, E.G., ".My-Class") Can Be Applied To Multiple Elements, Allowing For Group Styling. Id Selectors (Defined With A Hash, E.G., "#My-Id") Should Be Used For Single Elements Only. Ids Have Higher Specificity. For Example: Css Class Selector: <Style>    
.Center {    
    Text-Align: Center;    
    Color: Blue;    
}    
</Style>  
Css Id Selector: <Style>    
#Para1 {    
    Text-Align: Center;    
    Color: Blue;    
}    
</Style>`,
    ],
  },

  {
    questions: [`What are the advantages of External Style Sheets?`],
    answers: [
      `External Style Sheets offer several advantages. It keeps style information separate from HTML markup and enhance maintainability. The styles of multiple documents can be controlled from one file. External Style Sheets can also be cached by the browser which improves page loading speed and reduces bandwidth usage.`,
    ],
    hints: [
      `External Style Sheets Offer Several Advantages. It Keeps Style Information Separate From Html Markup And Enhance Maintainability. The Styles Of Multiple Documents Can Be Controlled From One File. External Style Sheets Can Also Be Cached By The Browser Which Improves Page Loading Speed And Reduces Bandwidth Usage.`,
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
    hints: [
      `Inline Style Sheet Is Used To Style Only A Small Piece Of Code. Syntax: <Htmltag Style="Cssproperty1:Value; Cssproperty2:Value;"> </Htmltag>     
Embedded Style Sheets Are Put Between The <Head> </Head> Tags Inside The <Style></Style> Tags. Syntax: <Style>    
Body {    
    Background-Color: Linen;    
}    
H1 {    
    Color: Red;    
    Margin-Left: 80px;    
}     
</Style>
External Style Sheets Are Separate Css Files Linked To The Html Document Using The "Link" Tag. Syntax: <Head>    
<Link Rel="Stylesheet" Type="Text/Css" Href="Mystyle.Css">    
</Head>`,
    ],
  },

  {
    questions: [`What is RWD?`],
    answers: [
      `RWD stands for Responsive Web Design. This technique is used to display the designed page perfectly on every screen size and device. RWD involves using fluid layouts, flexible images, and CSS media queries to ensure optimal user experience across all devices.`,
    ],
    hints: [
      `Rwd Stands For Responsive Web Design. This Technique Is Used To Display The Designed Page Perfectly On Every Screen Size And Device. Rwd Involves Using Fluid Layouts, Flexible Images, And Css Media Queries To Ensure Optimal User Experience Across All Devices.`,
    ],
  },
];
