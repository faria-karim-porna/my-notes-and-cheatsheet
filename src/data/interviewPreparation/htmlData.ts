import { QuestionsAndAnswersType } from "../../types/questionsAndAnswersType";

export const htmlData: QuestionsAndAnswersType[] = [
  {
    questions: [`What is HTML?`],
    answers: [
      `HTML stands for Hyper Text Markup Language. It is used to create and display pages on the Web. It uses tags such as headings, paragraphs, images, links, and more. to define the structure and content of a webpage`,
    ],
    hints: [`Hyper Text Markup Language`, `Display Pages`, `Web`],
  },

  {
    questions: [`What are Tags?`],
    answers: [
      `In HTML, tags are the building blocks. They are used to define the structure of a webpage. They are enclosed in angle brackets (< >). They come in pairs: opening tags and closing tags. Opening tags indicate the beginning of an element, while closing tags mark the end. Some tags, known as self-closing or void tags, do not have a corresponding closing tag. Tags provide instructions to web browsers about the content.`,
    ],
    hints: [
      `Building Blocks`,
      `Define Structure`,
      `Angle Brackets`,
      `Com`,
      `Instructions About Content.`,
    ],
  },

  {
    questions: [`Do all HTML tags have an end tag?`],
    answers: [
      `No. There are some HTML tags that don't need a closing tag. For example: <image> tag, <br> tag.`,
    ],
    hints: [`No`, `<image />`, `<br>`],
  },

  {
    questions: [`What is formatting in HTML?`],
    answers: [
      `In HTML, formatting means deciding how things look on a webpage. For example, the <b> tag is used to make text bold, <i> tag is for italicizing text, and <u> tag is for underlining text.`,
    ],
    hints: [
      `How Things Look`,
      `<b>`,
      `Bold`,
      `<i>`,
      `Italicizing`,
      `<u>`,
      `Underlining`,
    ],
  },

  {
    questions: [`How many types of heading does an HTML contain?`],
    answers: [
      `The HTML contains six types of headings. These are defined with the <h1> to <h6> tags. Each type of heading tag displays different size of texts. <h1> is the largest heading tag and <h6> is the smallest one.`,
    ],
    hints: [
      `6`,
      `<h1> To <h6>`,
      `Different Size`,
      `<h1> Is Largest`,
      `<h6> Is Smallest`,
    ],
  },

  {
    questions: [`How to create a hyperlink in HTML?`],
    answers: [
      `The HTML provides an anchor tag to create a hyperlink. The href attribute of the tag specifies the URL of the link. The color of unvisited link is blue and the text of the link is underlined. Visited link is also underlined but the color is purple.And active link is underlined and red.`,
    ],
    hints: [
      `Anchor Tag`,
      `Href Attribute`,
      `Unvisited Is Blue And Underlined`,
      `Visited Is Purple And Underlined`,
      `Active Is Red And Underlined`,
    ],
  },

  {
    questions: [
      `Which HTML tag is used to display the data in the tabular form?`,
    ],
    answers: [
      `The <table> tag is used to display data in a tabular form in HTML. It shows data in row and column fashion. It uses other related tags to structure the table. <table> defines a table. <tr> defines a row. <th> defines a header cell. <td> defines a cell. <caption> defines the table caption. <colgroup>	specifies a group of one or more columns. <col>	is used with <colgroup> element to specify column properties for each column. <tbody>	is used to group the body content. <thead> is used to group the header content. <tfooter>	is used to group the footer content.`,
    ],
    hints: [
      `<table>`,
      `Other Related Tags To Structure Table`,
      `<tr> For Row`,
      `<th> For Header Cell`,
      `<td> For Cell`,
      `<caption> For Table Caption`,
      `<colgroup> For Group Of Columns`,
      `<col> With <colgroup>`,
      `Each Column`,
      `<tbody> For Group Body Content`,
      `<thead> For Group Header Content`,
      `<tfooter> For Group Footer Content`,
    ],
  },

  {
    questions: [
      `What are some common lists that are used when designing a page?`,
    ],
    answers: [
      `Some common lists used when designing a webpage include ordered lists (<ol>) for numbered items, unordered lists (<ul>) for bullet-pointed items, and definition lists (<dl>) for terms and their definitions. These lists can be nested within each other.`,
    ],
    hints: [
      `Ordered Lists (<ol>)`,
      `Numbered`,
      `Unordered Lists (<ul>)`,
      `Bullet-Pointed`,
      `Definition Lists (<dl>)`,
      `Terms And Their Definitions`,
      `Nested`,
    ],
  },

  {
    questions: [`What is the difference between HTML elements and tags?`],
    answers: [
      `An HTML element refers to a component of a webpage, such as a heading, paragraph, image, or link. When the elements are enclosed by brackets <>, they form HTML tags.`,
    ],
    hints: [
      `Component`,
      `A Heading, Paragraph, Image, Link`,
      `Elements Enclosed By Brackets Are Tags`,
    ],
  },

  {
    questions: [`What is semantic HTML?`],
    answers: [
      `Semantic HTML refers to the use of HTML elements that carry meaning of the content within them. It makes the webpages more accessible to both humans and search engines. Semantic tags, like <header>, <nav>, <article>, and <footer>, provide semantic information about the role of the content they enclose. In semantic HTML <b> </b> tag is not used for bold statement as well as <i> </i> tag is used for italic. Instead of these we use <strong></strong> and <em></em> tags.`,
    ],
    hints: [
      `Elements Carry Meaning`,
      `More Accessible`,
      `Humans`,
      `Search Engines`,
      `<header>, <nav>, <article>, <footer>`,
      `Instead Of <b> </b>, <strong></strong>`,
      `Instead Of <i> </i>, <em></em>`,
    ],
  },

  {
    questions: [`What is an image map?`],
    answers: [
      `An image map in HTML is a technique used to add specific links or actions in different regions of an image. It allows for interactive image-based navigation. The <map> tag is used to define the map, and <area> tags are used to specify the clickable areas within the image map.`,
    ],
    hints: [
      `Add Specific Links Or Actions In Different Regions Of An Image`,
      `Image-Based Navigation`,
      `<map> IS For Map`,
      `<area> Is For Clickable Areas Within The Image Map`,
    ],
  },

  {
    questions: [`How to insert a copyright symbol on a browser page?`],
    answers: [
      `A copyright symbol can be used by using &copy; or &#169; in an HTML file.`,
    ],
    hints: [`&copy;`, `&#169;`],
  },

  {
    questions: [`How to create a nested webpage in HTML?`],
    answers: [
      `The HTML iframe tag is used to display a nested webpage. The <iframe> tag embed another HTML document within the current webpage. The URL of the nested webpage is written inside the src attribute. `,
    ],
    hints: [`iframe`, `Url Is Written In src`],
  },

  {
    questions: [`How do you keep list elements straight in an HTML file?`],
    answers: [
      `To keep list elements straight in an HTML file, CSS provides properties like list-style-type to control the appearance of bullets or numbering, text-indent to control indentation, and margin or padding properties to adjust spacing around list items can be used.`,
    ],
    hints: [
      `CSS list-style-type Control Appearance`,
      `text-indent Control Indentation`,
      `Margin`,
      `Padding`,
    ],
  },

  {
    questions: [`Does a hyperlink only apply to text?`],
    answers: [
      `No, hyperlinks can be used on various elements, including text, images, buttons, or any other element that supports user interaction.`,
    ],
    hints: [`No`, `Text`, `Images`, `Buttons`],
  },

  {
    questions: [`What is a style sheet?`],
    answers: [
      `A style sheet is used to build a consistent, transportable, and well-designed style template. It provides a set of rules and properties that determine how elements should be displayed, including fonts, colors, sizes, positioning, and more.`,
    ],
    hints: [
      `Style Template`,
      `Set Of Rules And Properties`,
      `Fonts, Colors, Sizes, Positioning, And More`,
    ],
  },

  {
    questions: [`Can you create a multi-colored text on a web page?`],
    answers: [
      `Yes, I can use HTML and CSS to create multi-colored text on a web page by applying different color styles to specific text elements.
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .multi-color-text {
      color: red;
      font-weight: bold;
    }

    .highlight-text {
      color: blue;
      text-decoration: underline;
    }
  </style>
  <title>Multi-Colored Text Example</title>
</head>
<body>
  <p>This is <span class="multi-color-text">bold red</span> text and <span class="highlight-text">underlined blue</span> text.</p>
</body>
</html>

or

<p style="color: red;">This is red text.</p>
<p style="color: blue;">This is blue text.</p>
<p style="color: green;">This is green text.</p>
`,
    ],
    hints: [`Yes`, `Different Color Styles`],
  },

  {
    questions: [`Is it possible to change the color of the bullet?`],
    answers: [
      `The color of the bullet is always the color of the first text of the list. So, to change the color of the bullet, the color of the text has to be changed.  Additionally, using the ::before pseudo-element with CSS, the appearance of the bullet can be customized.`,
    ],
    hints: [`Yes`, `Change Color Text`, `::before pseudo-element`],
  },

  {
    questions: [`Explain the layout of HTML?`],
    answers: [
      `The layout of an HTML document refers to the arrangement of elements on a webpage. HTML provides various tags and techniques to structure and organize content, <header> is used to define a header for a document or a section. <nav> is used to define a container for navigation links <section> is used to define a section in a document <article> is used to define an independent, self-contained article <aside> is used to define content aside from the content (like a sidebar) <footer> is used to define a footer for a document or a section`,
    ],
    hints: [
      `Arrangement Of Elements`,
      `Various Tags And Techniques To Structure And Organize Content`,
    ],
  },

  {
    questions: [`What is a marquee?`],
    answers: [
      `Marquee is used to put the scrolling text or image on a web page. It scrolls the image or text up, down, left or right automatically.`,
    ],
    hints: [`Scrolling Text/Image`],
  },

  {
    questions: [`How many tags can be used to separate a section of texts?`],
    answers: [
      `There is no specific limit on the number of tags that can be used to separate a section of texts in HTML. You can use tags like <div>, <section>, <article>, or even <p> (paragraph) to logically group and separate sections of text. <br> tag is used to separate the line of text. It breaks the current line. The <p> tag contains the text in the form of a new paragraph. <blockquote> tag is used to define a large quoted section.`,
    ],
    hints: [
      `No Specific Limit`,
      `<div>, <section>, <article>, <p>`,
      `<br>`,
      `<blockquote>`,
      `Large Quoted Section`,
    ],
  },

  {
    questions: [`How to make a picture of a background image of a web page?`],
    answers: [
      "To make a picture a background image on a web page, <body background = `image.gif`>  can be used.",
    ],
    hints: [
      `<body background = "image.gif">`,
      `body{
        background-image: "image.gif"
      }`,
    ],
  },

  {
    questions: [`What are empty elements?`],
    answers: [
      `HTML elements with no content are called empty elements. For example: <br>, <hr> etc.`,
    ],
    hints: [`No Content`, `<br>`, `<hr>`],
  },

  {
    questions: [`What is the use of a span tag? Give one example.`],
    answers: [
      `The <span> tag in HTML is an inline element used to apply styling on specific sections of text within a larger block of content. We can use span tag for adding color on text, for adding background on text, for highlighting any color text.`,
    ],
    hints: [
      `Inline Element`,
      `Specific Sections`,
      `Color`,
      `Background`,
      `Highlighting`,
    ],
  },

  {
    questions: [`What is the use of an iframe tag?`],
    answers: [
      `The <iframe> tag in HTML is used to embed another HTML document or external content within the current webpage. <iframe> is commonly used for embedding videos, maps, or other external content.`,
    ],
    hints: [
      `Embed Another Html Document`,
      `External Content`,
      `Videos`,
      `Maps`,
    ],
  },

  {
    questions: [`What are the entities in HTML?`],
    answers: [
      `Entities in HTML are special characters that cannot be directly represented in HTML code. They are represented using entity references, such as &amp; for & or &lt; - for <.`,
    ],
    hints: [`Special Characters`, `&amp; For &`, `&lt; For <`],
  },

  {
    questions: [`Why is a URL encoded in HTML?`],
    answers: [
      `URLs are encoded in HTML to handle special characters and ensure their proper representation within a URL. Encoding converts special characters into a format that can be safely transmitted over the internet. This prevents conflicts with reserved characters, such as spaces or symbols.`,
    ],
    hints: [
      `Handle Special Characters`,
      `Proper Representation`,
      `Safely Transmission Over Internet`,
      `Prevents Conflicts With Reserved Characters`,
    ],
  },

  {
    questions: [`Does a <!DOCTYPE html> tag is a HTML tag?`],
    answers: [
      `No, the *<!DOCTYPE html> declaration is not an HTML tag. It is an instruction or document type declaration that specifies the HTML version. There are many type of HTML e.g. HTML 4.01 Strict, HTML 4.01 Transitional, HTML 4.01 Frameset, XHTML 1.0 Strict, XHTML 1.0 Transitional, XHTML 1.0 Frameset etc.
`,
    ],
    hints: [`No`, `Instruction/Document Type Declaration`],
  },

  {
    questions: [`What is the canvas element in HTML5?`],
    answers: [
      `The <canvas> element is a container that is used to draw graphics on the web page using scripting language like JavaScript. It allows for dynamic rendering of 2D shapes and bitmap images. For Example: <canvas id="myCanvas1" width="300" height="100" style="border:2px solid;">    
Your browser does not support the HTML5 canvas tag.    
</canvas>`,
    ],
    hints: [
      `Container To Draw Graphics`,
      `Dynamic Rendering Of 2d Shapes`,
      `Bitmap Images`,
    ],
  },

  {
    questions: [`What is SVG?`],
    answers: [
      `SVG stands for Scalable Vector Graphics. It is an XML-based markup language. It allows for the creation of vector-based graphics and illustrations in a web browser.SVG graphics can be scaled and manipulated without losing image quality.SVG is commonly used for logos, icons, charts, and interactive graphics. <svg width="100" height="100">    
<circle cx="50" cy="50" r="40" stroke="yellow" stroke-width="4" fill="red" />    
</svg>`,
    ],
    hints: [
      `Scalable Vector Graphics`,
      `Xml-Based Markup Language`,
      `Vector-Based Graphics`,
      `Without Losing Image Quality`,
    ],
  },

  {
    questions: [`What are the different new form element types in HTML 5?`],
    answers: [
      `HTML5 introduces several new form element types, including Color, Date, Datetime-local, Email, Time, Url, Range, Telephone, Number, Search. For example: <input type="date">`,
    ],
    hints: [
      `Several`,
      `Color`,
      `Date`,
      `Datetime-Local`,
      `Email`,
      `Time`,
      `Url`,
      `Range`,
      `Telephone`,
      `Number`,
      `Search`,
    ],
  },

  {
    questions: [
      `Is there any need to change the web browsers to support HTML5?`,
    ],
    answers: [
      `No, web browsers need to be updated to support HTML5 features fully. Almost all the updated versions of all modern browsers support HTML 5. For example Chrome, Firefox, Opera, Safari, IE.`,
    ],
    hints: [`No`, `Almost All The Updated Versions`],
  },

  {
    questions: [`Which type of video formats are supported by HTML5?`],
    answers: [`HTML 5 supports three types of video format: mp4, WebM, Ogg,`],
    hints: [`mp4`, `WebM`, `Ogg`],
  },

  {
    questions: [`Is audio tag supported in HTML 5?`],
    answers: [
      `Yes. It is used to add sound or music files on the web page. There are three supported file formats for HTML 5 audio tag. mp3, WAV, Ogg. For example: <audio controls><source src="koyal.mp3" type="audio/mpeg"> Your browser does not support the html audio tag. </audio>`,
    ],
    hints: [`Yes`, `Add Sound/Music Files`, `mp3`, `Wav`, `Ogg`],
  },

  {
    questions: [`What is the difference between progress and meter tag?`],
    answers: [
      `The progress tag is used to represent the progress of the task such as file uploads or form submissions. And the meter tag is used to measure data within a given range such as disk usage or battery level.`,
    ],
    hints: [
      `Progress Of Task`,
      `File Uploads`,
      `Form Submissions`,
      `Measure Data In A Range`,
      `Disk Usage`,
      `Battery Level`,
    ],
  },

  {
    questions: [`What is the use of figure tag in HTML 5?`],
    answers: [
      `The <figure> tag in HTML5 is used to group together a piece of content, such as an images, illustrations, diagrams, or videos along with its related content, like a caption or description. It is particularly useful for semantically associating an image and its caption. For example: <figure>
<img src="example.jpg" alt="An example image">
  <figcaption>This is a caption for the image.</figcaption>
</figure>
`,
    ],
    hints: [
      `To Group Together A Piece Of Content With Its Related Content`,
      `, Images, Illustrations, Diagrams, Or Videos`,
      `Caption`,
      `Semantic`,
    ],
  },

  {
    questions: [`What is the use of figcaption tag in HTML 5?`],
    answers: [
      `The <figcaption> element is used to provide a caption to an image. It is an optional tag. The <figcaption> element is used with <figure> element and it can be placed as the first or last child of the <figure> element. For example: <figure>    
      <img src="htmlpages/images/tajmahal.jpg" alt="Taj Mahal"/>    
    <figcaption>Fig.1.1 - A front view of the great Taj Mahal in Agra.</figcaption>    
    </figure>`,
    ],
    hints: [`Caption To Image`, `Optional Tag`, `First/Last Child`],
  },

  {
    questions: [`What is button tag?`],
    answers: [
      `The <button> tag in HTML represents a clickable button on a webpage. It can be used to perform a specific function when clicked by the user. For example: <button name="button" type="button">Click Here</button> `,
    ],
    hints: [`Clickable Button`, `Perform Function`, `Clicked By`],
  },

  {
    questions: [`What is the use of details and summary tag?`],
    answers: [
      `The <details> and <summary> tags are used to create collapsible and expandable sections of content. The <details> tag defines the container for the collapsible content, while the <summary> tag provides a visible header or summary for the section. When the user clicks on the summary, the associated content expands or collapses.`,
    ],
    hints: [
      `Collapsible And Expandable`,
      `Container For The Collapsible Content`,
      `Visible Header/Summary`,
    ],
  },

  {
    questions: [`What is datalist tag?`],
    answers: [
      `The <datalist> tag is used to provide a predefined list of options for an input field. It contains <option>- tags that define the selectable options. When a user click on an input field associated with a <datalist>, they presented with a dropdown of suggested options. For example: <label>Enter your favorite cricket player: Press any character
      <br />
      <input type="text" id="favCktPlayer" list="CktPlayers">
      <datalist id="CktPlayers">
      <option value="Sachin Tendulkar">
      <option value="Brian Lara">
      <option value="Jacques Kallis"> 
      <option value="Ricky Ponting"> 
      <option value="Rahul Dravid"> 
      <option value="Shane Warne"> 
      <option value="Rohit Sharma"> 
      <option value="Donald Bradman"> 
      <option value="Saurav Ganguly "> 
      <option value="AB diVilliers"> 
      <option value="Mahendra Singh Dhoni"> 
      <option value="Adam Gilchrist">

      </datalist>
    </label>  `,
    ],
    hints: [
      `Predefined List Of Options For An Input Field`,
      `<option>`,
      `Selectable Options`,
      `Dropdown Of Suggested Options`,
    ],
  },

  {
    questions: [`How are tags migrated from HTML4 to HTML5?`],
    answers: [
      `When migrating tags from HTML4 to HTML5, it is important to consider the semantic structure and replace deprecated or obsolete tags with their appropriate HTML5 counterparts. For example : <div id="header"> to	<header>
      <div id="menu"> to <nav>
      <div id="content"> to	<section>
      <div id="post"> to <article>
      <div id="footer"> to <footer>`,
    ],
    hints: [
      `Semantic Structure`,
      `Deprecated/Obsolete`,
      `Counterparts`,
      `<div id="header"> to	<header>`,
      `<div id="menu"> to <nav>`,
      `<div id="content"> to	<section>`,
      `<div id="post"> to <article>`,
      `<div id="footer"> to <footer>`,
    ],
  },

  {
    questions: [`If I do not put <!DOCTYPE html> will HTML 5 work?`],
    answers: [
      `HTML5 will still work without the <!DOCTYPE html> declaration, but it is strongly recommended to include it at the beginning of the HTML document. The <!DOCTYPE html> declaration ensures that the browser interprets the document as HTML5 and follows the correct standards for rendering and parsing the code.`,
    ],
    hints: [
      `Yes`,
      `Recommended`,
      `Interprets`,
      `Correct Standards`,
      `Rendering And Parsing`,
    ],
  },

  {
    questions: [`What is the use of the required attribute in HTML5?`],
    answers: [
      `It forces a user to fill text on the text field or text area before submitting the form. It is used for form validation. For Example: Name: <input type="text" name="name" required>`,
    ],
    hints: [`Forces To Fill Text Before Submitting Form`, `Form Validation`],
  },

  {
    questions: [`What are the new <input> types for form validation in HTML5?`],
    answers: [
      `The new input types for form validation are email, URL, number, tel, and date. For example: <input type="email">`,
    ],
    hints: [`email`, `URL`, `number`, `tel`, `date`],
  },

  {
    questions: [`What is the difference between <div> and <span> in HTML?`],
    answers: [
      `<div> and <span> are both container elements, but they differ in their default behavior. <div> is a block-level element and <span> is an inline element.`,
    ],
    hints: [`Container Elements`, `Block-Level`, `Inline Element`],
  },

  {
    questions: [`How do you create a responsive webpage in HTML?`],
    answers: [
      `To create a responsive webpage, viewport meta tag in the head of your HTML document, CSS media queries, CSS Grid or Flexbox, relative units like percentages or ems can be used.`,
    ],
    hints: [
      `Viewport Meta Tag`,
      `CSS Media Queries`,
      `Grid/Flexbox`,
      `Relative Units`,
    ],
  },

  {
    questions: [`What is the purpose of the <form> tag in HTML?`],
    answers: [
      `The <form> tag provides a way to collect user input and submit it to a server. It acts as a container for form elements such as input fields, checkboxes, radio buttons, and buttons.`,
    ],
    hints: [`Collect Input`, `Submit To Server`, `Container For Form Elements`],
  },

  {
    questions: [
      `How can you include external CSS and JavaScript files in an HTML document?`,
    ],
    answers: [
      `To include external CSS files, <link> tag within the <head> section of the HTML document can be used. The <link> tag specifies the location and filename of the external CSS file. Similarly, for external JavaScript files, <script> tag can be used and the source file has to be specified using the src attribute. <script> tag can be placed either in the <head> or <body> section.`,
    ],
    hints: [
      `<link>`,
      `Within The <head>`,
      `<script>`,
      `src Attribute`,
      `<head> / <body>`,
    ],
  },

  {
    questions: [`What is the purpose of the alt attribute in the <img> tag?`],
    answers: [
      `The alt attribute in the <img> tag is used to provide alternative text for an image. It serves as a text description of the image content, which is useful for users who cannot see the image or for SEO purposes.`,
    ],
    hints: [`Alternative Text`, `Text Description`, `Blind`, `Seo Purposes`],
  },

  {
    questions: [
      `What is the difference between the <script>, <script async>, and <script defer> attributes?`,
    ],
    answers: [
      `The <script> tag is used to include JavaScript code in an HTML document. <script> tag without any attribute, fetched and execute synchronously. It blocks the parsing and rendering of the HTML until it's loaded. The async attribute allows the script to be downloaded in parallel to parsing the page, and executed as soon as it is available even before parsing completes. It is used only for external scripts. It does not block the parsing and rendering of the HTML. The defer attribute almost similar as async but ensures that it executes only after the HTML parsing is complete.`,
    ],
    hints: [
      `Without -> Fetched And Execute Synchronously`,
      `Blocks`,
      ` Parsing And Rendering Of Html`,
      `Async -> Parallel`,
      `Non Block`,
      `Defer -> After`,
    ],
  },

  {
    questions: [`What are data attributes in HTML and how are they used?`],
    answers: [
      `Data attributes, denoted by the data-* format. It is used to store custom data private to the page or application. These attributes can be accessed and manipulated using JavaScript. It provides a way to associate additional data or behavior with specific elements. For example: <ul>
  <li onclick="showDetails(this)" id="owl" data-animal-type="bird">Owl</li>
  <li onclick="showDetails(this)" id="salmon" data-animal-type="fish">Salmon</li>  
  <li onclick="showDetails(this)" id="tarantula" data-animal-type="spider">Tarantula</li>  
</ul>`,
    ],
    hints: [
      `data-*`,
      `Store Custom Data Private`,
      `Accessed And Manipulated Using Javascript`,
    ],
  },

  {
    questions: [
      `How can you handle cross-site scripting (XSS) vulnerabilities in HTML?`,
    ],
    answers: [
      `To mitigate XSS vulnerabilities, it is important to validate user input before displaying it on a webpage. This involves properly encoding or escaping special characters and ensuring that user-generated content is treated as data, not code. Additionally, implementing Content Security Policy (CSP) headers can further protect against XSS attacks. A CSP compatible browser will then only execute scripts loaded in source files received from those allowed domains and ignores all other scripts.`,
    ],
    hints: [
      `Validate User Input`,
      `Encode`,
      `Escaping Special Characters`,
      `Data, Not Code`,
      `Content Security Policy (CSP) Headers`,
      `Allowed Domains`,
      `Ignores All Other Scripts`,
    ],
  },

  {
    questions: [`What is the Document Object Model (DOM) in relation to HTML?`],
    answers: [
      `It provides methods and properties to dynamically access, manipulate, and update the elements and content of a webpage using JavaScript or other scripting languages. The DOM allows developers to interact with and modify the HTML document programmatically.`,
    ],
    hints: [`Interact`, `Modify Html Programmatically`],
  },

  {
    questions: [
      `What are the differences between the <input type="file"> and <input type="text"> elements?`,
    ],
    answers: [
      `The <input type="file"> element is used to select and upload files. On the other hand, <input type="text"> is a text input field where users can enter alphanumeric text.`,
    ],
    hints: [`Upload Files`, `Alphanumeric Text`],
  },

  {
    questions: [`What are HTML Attributes?`],
    answers: [
      `HTML attributes provide additional information about HTML elements and are defined within the opening tag, influencing their behavior or appearance. For example, the src attribute in an <img> tag specifies the image source, and the href attribute in an <a> tag defines the hyperlink destination.`,
    ],
    hints: [
      `Additional Information`,
      `Within Opening Tag`,
      `Influencing Behavior/Appearance`,
      `src`,
      `href`,
    ],
  },

  {
    questions: [`Differentiate between an Ordered list and an Unordered list`],
    answers: [
      `An ordered list (<ol>) displays items in a numbered sequence, while an unordered list (<ul>) presents items with bullet points.`,
    ],
    hints: [`Numbered Sequence`, `Bullet Points`],
  },

  {
    questions: [`What is an element in HTML?`],
    answers: [
      `In HTML, an element is a fundamental building block that defines the structure and content of a webpage. It consists of a start tag, content, and an end tag. For example, <p> is the opening tag of a paragraph element, and </p> is the closing tag. The content between these tags represents the paragraph's text or other nested elements.`,
    ],
    hints: [
      `Building Block`,
      `Defines Structure`,
      `Content`,
      `Start Tag, Content, End Tag`,
      `Paragraph`,
    ],
  },

  {
    questions: [`What is the difference between HTML and CSS?`],
    answers: [
      `HTML is for structuring content, while CSS is for styling and layout. In essence, HTML focuses on structure, while CSS focuses on presentation.`,
    ],
    hints: [`Structuring`, `Styling`, `Layout`, `Presentation`],
  },

  {
    questions: [`What is the advantage of collapsing white space?`],
    answers: [
      `Collapsing white space in HTML is advantageous for cleaner code and easier readability, preventing multiple spaces and line breaks from affecting layout. For example:  <div class="example">
    This   is   an   example   of   collapsing   white    space.
  </div>
In this example, the spaces between the words "This," "is," "an," "example," "of," "collapsing," and "white," are collapsed into a single space when rendered in the browser.
.example {
      border: 1px solid black;
      white-space: pre;
    }
 <div class="example">
    Line 1
    Line 2
    Line 3
  </div>
In this example, the white-space: pre; CSS property is used to preserve both spaces and line breaks. Without collapsing white space, each line break is maintained, resulting in distinct lines in the rendered output.`,
    ],
    hints: [
      `Cleaner Code`,
      `Easier Readability`,
      `Preventing Multiple Spaces`,
      `Layout`,
    ],
  },

  {
    questions: [`How do we insert a comment in HTML?`],
    answers: [`Use <!-- --> for HTML comments.`],
    hints: [`<!-- -->`],
  },

  {
    questions: [`What is white space in HTML?`],
    answers: [
      `White space is extra space, tabs, or line breaks between HTML elements.`,
    ],
    hints: [`Extra Space`, `Tabs`, `Line Breaks`],
  },

  {
    questions: [
      `How do you create links to different sections within the same HTML web page?`,
    ],
    answers: [
      `Use the anchor tag <a> and set href to the section's ID, like this: <a href="#sectionID">Link Text</a>.`,
    ],
    hints: [`Set href To The Section's Id`],
  },

  {
    questions: [`Why do we use a style sheet in HTML?`],
    answers: [
      `Style sheets enhance HTML layout and design. They are used to control the look and feel of a webpage.`,
    ],
    hints: [`Layout`, `Design`, `Look`, `Feel`],
  },

  {
    questions: [`What would happen if there is no text between the HTML tags`],
    answers: [`Empty HTML tags won't display any content.`],
    hints: [`Don't Display Content.`],
  },

  {
    questions: [`How do you add buttons in HTML?`],
    answers: [`Use <button> tag for buttons in HTML.`],
    hints: [`<button>`],
  },

  {
    questions: [`How do you add CSS styling in HTML?`],
    answers: [`Apply styles using <style> or link a CSS file.`],
    hints: [`<style>`, `Link`],
  },

  {
    questions: [`How do you add JavaScript to an HTML webpage?`],
    answers: [`Include <script> tag with JS code in HTML.`],
    hints: [`<script>`],
  },

  {
    questions: [`What is the ‘class' attribute in HTML?`],
    answers: [
      `The 'class' attribute in HTML is used to define a class for one or more HTML elements. It is primarily used for styling and applying CSS rules to multiple elements.`,
    ],
    hints: [`One/More Elements`, `CSS Rules`, `Multiple Elements`],
  },

  {
    questions: [
      `What is the difference between the ‘id' and ‘class' attributes of HTML elements?`,
    ],
    answers: [
      `The 'id' attribute in HTML is used to uniquely identify a single element, while the 'class' attribute is used to label and group multiple elements.`,
    ],
    hints: [`Single Elemen`, `Group Multiple Elements`],
  },

  {
    questions: [`What is the difference between HTML and XHTML?`],
    answers: [
      `HTML is forgiving and allows for some flexibility in syntax, while XHTML is stricter, demanding well-formed and XML-compliant documents. XHTML requires proper nesting, closing tags, and lowercase attribute names, enforcing a more rigorous structure compared to HTML.`,
    ],
    hints: [
      `Forgiving`,
      `Flexible In Syntax`,
      `Stricter`,
      `Well-Formed`,
      `Xml-Compliant Documents`,
      `Nesting`,
      `Closing Tags`,
      `Lowercase Attribute Names`,
      `Rigorous`,
    ],
  },

  {
    questions: [`What is the difference between HTML and HTML5?`],
    answers: [
      `HTML5 is the latest and enhanced version with new elements (like <section> and <article>), improved multimedia support, and better compatibility with modern web standards. HTML5 is essentially a more advanced and feature-rich evolution of HTML.`,
    ],
    hints: [
      `Latest`,
      `Enhanced`,
      `<Section> And <Article>`,
      `Improved Multimedia Support`,
      `Better Compatibility`,
      `Modern Web Standards`,
      `Feature-Rich`,
    ],
  },

  {
    questions: [`What is the role of the <head> tag in HTML?`],
    answers: [
      `<head> tag contains metadata, linking stylesheets, scripts, and setting page properties.`,
    ],
    hints: [
      `Metadata`,
      `Linking Stylesheets`,
      `Scripts`,
      `Setting Page Properties.
`,
    ],
  },

  {
    questions: [`What is the role of the <meta> tag in HTML?`],
    answers: [
      `It includes information like character set, viewport settings for responsive design, and description for search engines. It helps browsers and search engines understand and display the webpage correctly.`,
    ],
    hints: [
      `Character Set`,
      `Viewport Settings`,
      `Description`,
      `Search Engines`,
    ],
  },

  {
    questions: [`What is the difference between an absolute and relative URL?`],
    answers: [
      `Absolute URLs contain full paths, while relative URLs specify the path from the current location.`,
    ],
    hints: [`Full Paths`, `From Current Location`],
  },

  {
    questions: [`What is the role of the title attribute in HTML?`],
    answers: [
      `The title attribute in HTML provides additional information about an element, appearing as a tooltip when the user hovers over the element. It enhances accessibility and provides supplementary details.`,
    ],
    hints: [
      `Additional Information`,
      `Tooltip While Hovering`,
      `Supplementary`,
    ],
  },

  {
    questions: [`What are the different types of form input fields in HTML?`],
    answers: [
      `HTML has various form input fields like text, password, checkbox, radio, submit, and more for collecting user data.`,
    ],
    hints: [
      `Text`,
      `Password`,
      `Checkbox`,
      `Radio`,
      `Submit`,
      `Collect User Data`,
    ],
  },

  {
    questions: [`What is the role of the action attribute in HTML forms?`],
    answers: [
      `The action attribute in HTML forms specifies the URL to which the form data is sent when submitted. It defines the destination where the form data is processed, typically pointing to a server-side script or endpoint that handles the submitted information.`,
    ],
    hints: [
      `Url Where Form Data Is Sent`,
      `Destination`,
      `Processed`,
      `Point To A Server-Side Script/Endpoint`,
    ],
  },

  {
    questions: [`What is the role of the method attribute in HTML forms?`],
    answers: [
      `The method attribute in HTML forms defines the HTTP method (GET or POST) used to send form data to the specified action URL.`,
    ],
    hints: [`Defines Http Method`, `Get Or Post`],
  },

  {
    questions: [`In how many ways can you display HTML elements?`],
    answers: [
      `HTML elements can be displayed in three ways: inline, block, and inline-block. It helps decide how elements appear and behave on a webpage.`,
    ],
    hints: [`Inline`, `Block`, `Inline-Block`, `Appear`, `Behavior`],
  },

  {
    questions: [
      `What is the difference between “display: none” and “visibility: hidden” when used as attributes to the HTML element?`,
    ],
    answers: [
      `"display: none" hides the element, removing it from layout; "visibility: hidden" hides the element but retains its space.`,
    ],
    hints: [`Hides Element`, `Retains Its Space`],
  },

  {
    questions: [
      `How to specify the link in HTML and explain the target attribute?`,
    ],
    answers: [
      `To specify a link in HTML, use the <a> (anchor) tag. The href attribute is used to define the destination URL. The target attribute specifies where to open the linked document. For example: Open link in a new tab:
<a href="https://www.example.com" target="_blank">Visit Example</a> 
Open link in the same tab (default behavior):
<a href="https://www.example.com" target="_self">Visit Example</a> 
Open link in a specific named window or frame:
<a href="https://www.example.com" target="myWindow">Visit Example</a> 
Open link in the parent frame (if applicable):
<a href="https://www.example.com" target="_parent">Visit Example</a> 
Open link in the full body of the window:
<a href="https://www.example.com" target="_top">Visit Example</a>
`,
    ],
    hints: [`Anchor Tag`, `Where To Open`],
  },

  {
    questions: [
      `What is the difference between link tag <link> and anchor tag <a>?`,
    ],
    answers: [
      `<link> Used in the <head> section of an HTML document. Primarily used to link external resources, such as stylesheets (CSS) or icons.Does not create a clickable link or navigate to another page. <a> Used in the body of the HTML document. Creates a hyperlink, allowing users to navigate to another page or resource. Requires the href attribute to specify the destination URL. `,
    ],
    hints: [
      `Link Stylesheets/Icons`,
      `Not A Clickable Link`,
      `Not Navigate`,
      `Hyperlink`,
      `Destination Url`,
    ],
  },

  {
    questions: [
      `When to use scripts in the head and when to use scripts in the body?`,
    ],
    answers: [
      `If your script contains essential functions or dependencies needed for the page to render correctly, placing it in the <head> ensures it's loaded early. When the script needs to run before the page content loads to set up initial configurations. If the script is non-essential for the initial page load and won't impact the user experience, placing it in the <body> allows other page elements to load first. If the script relies on elements in the body, placing it there ensures those elements exist when the script runs.`,
    ],
    hints: [
      `Contains Essential Functions`,
      `Dependencies For Render Page`,
      `Loaded Early`,
      `Needs To Run Before Page`,
      `Set Up Initial Configurations`,
      `Non-Essential For Initial Page Load`,
      `Won't Impact User Experience`,
      `Other Page Elements Load First`,
      `Script Relies On Elements In The Body`,
    ],
  },

  {
    questions: [`How to handle events in HTML?`],
    answers: [
      `Handle events in HTML using attributes like "onclick" or "onchange" within tags, specifying JavaScript code to run when the event occurs.`,
    ],
    hints: [
      `"onclick"/"onchange"`,
      `Within Tags`,
      `Specifying`,
      `When Event Occurs.`,
    ],
  },

  {
    questions: [
      `What are some advantages of HTML5 over its previous versions?`,
    ],
    answers: [
      `HTML5 offers better multimedia support, improved semantics for cleaner code, and native support for offline applications compared to previous HTML versions.`,
    ],
    hints: [
      `Better Multimedia Support`,
      `Improved Semantics`,
      `Native Support`,
      `Previous Versions`,
    ],
  },

  {
    questions: [`What are the 3 required parts of HTML?`],
    answers: [
      `HTML requires a document type declaration (<!DOCTYPE html>), an opening and closing <html> tag, and a pair of <head> and <body> tags for structure.`,
    ],
    hints: [
      `Document Type Declaration (<!Doctype Html>)`,
      `<html>`,
      `<head>`,
      `<body>`,
    ],
  },

  {
    questions: [`Define multipart form data.`],
    answers: [
      `Multipart form data is a way to send binary and text data together in HTTP requests, commonly used for file uploads.`,
    ],
    hints: [`Send Binary And Text Data Together`, `File Uploads`],
  },

  {
    questions: [`How to optimize website assets loading?`],
    answers: [
      `Optimize website asset loading by minimizing and combining CSS and JavaScript files, compressing images and using modern image formats, enabling browser caching for static resources.`,
    ],
    hints: [
      `Minimizing And Combining CSS And JS Files`,
      `Compressing Images`,
      `Modern Image Formats`,
      `Caching For Static Resources`,
    ],
  },

  {
    questions: [`What are the various formatting tags in HTML?`],
    answers: [
      `HTML formatting tags include: <b> for bold text, <i> for italic text, <u> for underlined text, <strong> for strong importance, <em> for emphasized text, <s> for strikethrough, <sub> for subscript, <sup> for superscript, <ins> for inserted text, <del> for deleted text.`,
    ],
    hints: [
      `Bold`,
      `Italic`,
      `Underlined`,
      `Strong Importance,`,
      `Emphasized`,
      `Strikethrough`,
      `Subscript`,
      `Superscript,`,
      `Inserted`,
      `Deleted`,
    ],
  },

  {
    questions: [`What are the different kinds of Doctypes available?`],
    answers: [
      `Doctypes in HTML include: HTML5: <!DOCTYPE html>, HTML 4.01 Strict: <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN">, HTML 4.01 Transitional: <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">, HTML 4.01 Frameset: <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN">`,
    ],
    hints: [
      `Html5`,
      `Html 4.01 Strict`,
      `Html 4.01 Transitional`,
      `Html 4.01 Frameset`,
    ],
  },

  {
    questions: [
      `Please explain how to indicate the character set being used by a document in HTML.`,
    ],
    answers: [
      `To indicate the character set in HTML, use <meta charset="UTF-8"> within the <head> section.`,
    ],
    hints: [`<meta charset="UTF-8">`],
  },
];
