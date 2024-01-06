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
    hints: [
      `The HTML iframe tag is used to display a nested webpage. The <iframe> tag embed another HTML document within the current webpage. The URL of the nested webpage is written inside the src attribute. `,
    ],
  },

  {
    questions: [`How do you keep list elements straight in an HTML file?`],
    answers: [
      `To keep list elements straight in an HTML file, CSS provides properties like list-style-type to control the appearance of bullets or numbering, text-indent to control indentation, and margin or padding properties to adjust spacing around list items can be used.`,
    ],
    hints: [
      `To keep list elements straight in an HTML file, CSS provides properties like list-style-type to control the appearance of bullets or numbering, text-indent to control indentation, and margin or padding properties to adjust spacing around list items can be used.`,
    ],
  },

  {
    questions: [`Does a hyperlink only apply to text?`],
    answers: [
      `No, hyperlinks can be used on various elements, including text, images, buttons, or any other element that supports user interaction.`,
    ],
    hints: [
      `No, hyperlinks can be used on various elements, including text, images, buttons, or any other element that supports user interaction.`,
    ],
  },

  {
    questions: [`What is a style sheet?`],
    answers: [
      `A style sheet is used to build a consistent, transportable, and well-designed style template. It provides a set of rules and properties that determine how elements should be displayed, including fonts, colors, sizes, positioning, and more.`,
    ],
    hints: [
      `A style sheet is used to build a consistent, transportable, and well-designed style template. It provides a set of rules and properties that determine how elements should be displayed, including fonts, colors, sizes, positioning, and more.`,
    ],
  },

  {
    questions: [`Can you create a multi-colored text on a web page?`],
    answers: [
      "Yes. To create a multicolor text on a web page <font color =`color`> </font> can be used for the specific texts to add color.",
    ],
    hints: [
      "Yes. To create a multicolor text on a web page <font color =`color`> </font> can be used for the specific texts to add color.",
    ],
  },

  {
    questions: [`Is it possible to change the color of the bullet?`],
    answers: [
      `The color of the bullet is always the color of the first text of the list. So, to change the color of the bullet, the color of the text has to be changed.  Additionally, using the ::before pseudo-element with CSS, the appearance of the bullet can be customized.`,
    ],
    hints: [
      `The color of the bullet is always the color of the first text of the list. So, to change the color of the bullet, the color of the text has to be changed.  Additionally, using the ::before pseudo-element with CSS, the appearance of the bullet can be customized.`,
    ],
  },

  {
    questions: [`Explain the layout of HTML?`],
    answers: [
      `The layout of an HTML document refers to the arrangement of elements on a webpage. HTML provides various tags and techniques to structure and organize content, <header> is used to define a header for a document or a section. <nav> is used to define a container for navigation links <section> is used to define a section in a document <article> is used to define an independent, self-contained article <aside> is used to define content aside from the content (like a sidebar) <footer> is used to define a footer for a document or a section`,
    ],
    hints: [
      `The layout of an HTML document refers to the arrangement of elements on a webpage. HTML provides various tags and techniques to structure and organize content, <header> is used to define a header for a document or a section. <nav> is used to define a container for navigation links <section> is used to define a section in a document <article> is used to define an independent, self-contained article <aside> is used to define content aside from the content (like a sidebar) <footer> is used to define a footer for a document or a section`,
    ],
  },

  {
    questions: [`What is a marquee?`],
    answers: [
      `Marquee is used to put the scrolling text or image on a web page. It scrolls the image or text up, down, left or right automatically.`,
    ],
    hints: [
      `Marquee is used to put the scrolling text or image on a web page. It scrolls the image or text up, down, left or right automatically.`,
    ],
  },

  {
    questions: [`How many tags can be used to separate a section of texts?`],
    answers: [
      `There is no specific limit on the number of tags that can be used to separate a section of texts in HTML. You can use tags like <div>, <section>, <article>, or even <p> (paragraph) to logically group and separate sections of text. <br> tag is used to separate the line of text. It breaks the current line. The <p> tag contains the text in the form of a new paragraph. <blockquote> tag is used to define a large quoted section.`,
    ],
    hints: [
      `There is no specific limit on the number of tags that can be used to separate a section of texts in HTML. You can use tags like <div>, <section>, <article>, or even <p> (paragraph) to logically group and separate sections of text. <br> tag is used to separate the line of text. It breaks the current line. The <p> tag contains the text in the form of a new paragraph. <blockquote> tag is used to define a large quoted section.`,
    ],
  },

  {
    questions: [`How to make a picture of a background image of a web page?`],
    answers: [
      "To make a picture a background image on a web page, <body background = `image.gif`>  can be used.",
    ],
    hints: [
      "To make a picture a background image on a web page, <body background = `image.gif`>  can be used.",
    ],
  },

  {
    questions: [`What are empty elements?`],
    answers: [
      `HTML elements with no content are called empty elements. For example: <br>, <hr> etc.`,
    ],
    hints: [
      `HTML elements with no content are called empty elements. For example: <br>, <hr> etc.`,
    ],
  },

  {
    questions: [`What is the use of a span tag? Give one example.`],
    answers: [
      `The <span> tag in HTML is an inline element used to apply styling on specific sections of text within a larger block of content. We can use span tag for adding color on text, for adding background on text, for highlighting any color text.`,
    ],
    hints: [
      `The <span> tag in HTML is an inline element used to apply styling on specific sections of text within a larger block of content. We can use span tag for adding color on text, for adding background on text, for highlighting any color text.`,
    ],
  },

  {
    questions: [`What is the use of an iframe tag?`],
    answers: [
      `The <iframe> tag in HTML is used to embed another HTML document or external content within the current webpage. <iframe> is commonly used for embedding videos, maps, or other external content.`,
    ],
    hints: [
      `The <iframe> tag in HTML is used to embed another HTML document or external content within the current webpage. <iframe> is commonly used for embedding videos, maps, or other external content.`,
    ],
  },

  {
    questions: [`What are the entities in HTML?`],
    answers: [
      `Entities in HTML are special characters that cannot be directly represented in HTML code. They are represented using entity references, such as &amp; for & or &lt; - for <.`,
    ],
    hints: [
      `Entities in HTML are special characters that cannot be directly represented in HTML code. They are represented using entity references, such as &amp; for & or &lt; - for <.`,
    ],
  },

  {
    questions: [`Why is a URL encoded in HTML?`],
    answers: [
      `URLs are encoded in HTML to handle special characters and ensure their proper representation within a URL. Encoding converts special characters into a format that can be safely transmitted over the internet. This prevents conflicts with reserved characters, such as spaces or symbols.`,
    ],
    hints: [
      `URLs are encoded in HTML to handle special characters and ensure their proper representation within a URL. Encoding converts special characters into a format that can be safely transmitted over the internet. This prevents conflicts with reserved characters, such as spaces or symbols.`,
    ],
  },

  {
    questions: [`Does a <!DOCTYPE html> tag is a HTML tag?`],
    answers: [
      `No, the *<!DOCTYPE html> declaration is not an HTML tag. It is an instruction or document type declaration that specifies the HTML version. There are many type of HTML e.g. HTML 4.01 Strict, HTML 4.01 Transitional, HTML 4.01 Frameset, XHTML 1.0 Strict, XHTML 1.0 Transitional, XHTML 1.0 Frameset etc.
`,
    ],
    hints: [
      `No, the *<!DOCTYPE html> declaration is not an HTML tag. It is an instruction or document type declaration that specifies the HTML version. There are many type of HTML e.g. HTML 4.01 Strict, HTML 4.01 Transitional, HTML 4.01 Frameset, XHTML 1.0 Strict, XHTML 1.0 Transitional, XHTML 1.0 Frameset etc.
`,
    ],
  },

  {
    questions: [`What is the canvas element in HTML5?`],
    answers: [
      `The <canvas> element is a container that is used to draw graphics on the web page using scripting language like JavaScript. It allows for dynamic rendering of 2D shapes and bitmap images. For Example: <canvas id="myCanvas1" width="300" height="100" style="border:2px solid;">    
Your browser does not support the HTML5 canvas tag.    
</canvas>`,
    ],
    hints: [
      `The <canvas> element is a container that is used to draw graphics on the web page using scripting language like JavaScript. It allows for dynamic rendering of 2D shapes and bitmap images. For Example: <canvas id="myCanvas1" width="300" height="100" style="border:2px solid;">    
Your browser does not support the HTML5 canvas tag.    
</canvas>`,
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
      `SVG stands for Scalable Vector Graphics. It is an XML-based markup language. It allows for the creation of vector-based graphics and illustrations in a web browser.SVG graphics can be scaled and manipulated without losing image quality.SVG is commonly used for logos, icons, charts, and interactive graphics. <svg width="100" height="100">    
<circle cx="50" cy="50" r="40" stroke="yellow" stroke-width="4" fill="red" />    
</svg>`,
    ],
  },

  {
    questions: [`What are the different new form element types in HTML 5?`],
    answers: [
      `HTML5 introduces several new form element types, including Color, Date, Datetime-local, Email, Time, Url, Range, Telephone, Number, Search. For example: <input type="date">`,
    ],
    hints: [
      `HTML5 introduces several new form element types, including Color, Date, Datetime-local, Email, Time, Url, Range, Telephone, Number, Search. For example: <input type="date">`,
    ],
  },

  {
    questions: [
      `Is there any need to change the web browsers to support HTML5?`,
    ],
    answers: [
      `No, web browsers need to be updated to support HTML5 features fully. Almost all the updated versions of all modern browsers support HTML 5. For example Chrome, Firefox, Opera, Safari, IE.`,
    ],
    hints: [
      `No, web browsers need to be updated to support HTML5 features fully. Almost all the updated versions of all modern browsers support HTML 5. For example Chrome, Firefox, Opera, Safari, IE.`,
    ],
  },

  {
    questions: [`Which type of video formats are supported by HTML5?`],
    answers: [`HTML 5 supports three types of video format: mp4, WebM, Ogg,`],
    hints: [`HTML 5 supports three types of video format: mp4, WebM, Ogg,`],
  },

  {
    questions: [`Is audio tag supported in HTML 5?`],
    answers: [
      `Yes. It is used to add sound or music files on the web page. There are three supported file formats for HTML 5 audio tag. mp3, WAV, Ogg. For example: <audio controls><source src="koyal.mp3" type="audio/mpeg"> Your browser does not support the html audio tag. </audio>`,
    ],
    hints: [
      `Yes. It is used to add sound or music files on the web page. There are three supported file formats for HTML 5 audio tag. mp3, WAV, Ogg. For example: <audio controls><source src="koyal.mp3" type="audio/mpeg"> Your browser does not support the html audio tag. </audio>`,
    ],
  },

  {
    questions: [`What is the difference between progress and meter tag?`],
    answers: [
      `The progress tag is used to represent the progress of the task such as file uploads or form submissions. And the meter tag is used to measure data within a given range such as disk usage or battery level.`,
    ],
    hints: [
      `The progress tag is used to represent the progress of the task such as file uploads or form submissions. And the meter tag is used to measure data within a given range such as disk usage or battery level.`,
    ],
  },

  {
    questions: [`What is the use of figure tag in HTML 5?`],
    answers: [
      `The "<figure>* tag in HTML5 is used to encapsulate and represent self-contained content, such as images, illustrations, diagrams, or videos, along with an optional caption. It provides a semantic and structured way to group and describe content within a document. For example: <p>The Taj Mahal is widely recognized as "the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage."</p>    
      <figure>    
        <img src="htmlpages/images/tajmahal.jpg" alt="Taj Mahal"/>    
      </figure>`,
    ],
    hints: [
      `The "<figure>* tag in HTML5 is used to encapsulate and represent self-contained content, such as images, illustrations, diagrams, or videos, along with an optional caption. It provides a semantic and structured way to group and describe content within a document. For example: <p>The Taj Mahal is widely recognized as "the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage."</p>    
      <figure>    
        <img src="htmlpages/images/tajmahal.jpg" alt="Taj Mahal"/>    
      </figure>`,
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
    hints: [
      `The <figcaption> element is used to provide a caption to an image. It is an optional tag. The <figcaption> element is used with <figure> element and it can be placed as the first or last child of the <figure> element. For example: <figure>    
      <img src="htmlpages/images/tajmahal.jpg" alt="Taj Mahal"/>    
    <figcaption>Fig.1.1 - A front view of the great Taj Mahal in Agra.</figcaption>    
    </figure>`,
    ],
  },

  {
    questions: [`What is button tag?`],
    answers: [
      `The <button> tag in HTML represents a clickable button on a webpage. It can be used to perform a specific function when clicked by the user. For example: <button name="button" type="button">Click Here</button> `,
    ],
    hints: [
      `The <button> tag in HTML represents a clickable button on a webpage. It can be used to perform a specific function when clicked by the user. For example: <button name="button" type="button">Click Here</button> `,
    ],
  },

  {
    questions: [`What is the use of details and summary tag?`],
    answers: [
      `The <details> and <summary> tags are used to create collapsible and expandable sections of content. The <details> tag defines the container for the collapsible content, while the <summary> tag provides a visible header or summary for the section. When the user clicks on the summary, the associated content expands or collapses.`,
    ],
    hints: [
      `The <details> and <summary> tags are used to create collapsible and expandable sections of content. The <details> tag defines the container for the collapsible content, while the <summary> tag provides a visible header or summary for the section. When the user clicks on the summary, the associated content expands or collapses.`,
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
      `When migrating tags from HTML4 to HTML5, it is important to consider the semantic structure and replace deprecated or obsolete tags with their appropriate HTML5 counterparts. For example : <div id="header"> to	<header>
      <div id="menu"> to <nav>
      <div id="content"> to	<section>
      <div id="post"> to <article>
      <div id="footer"> to <footer>`,
    ],
  },

  {
    questions: [`If I do not put <!DOCTYPE html> will HTML 5 work?`],
    answers: [
      `HTML5 will still work without the <!DOCTYPE html> declaration, but it is strongly recommended to include it at the beginning of the HTML document. The <!DOCTYPE html> declaration ensures that the browser interprets the document as HTML5 and follows the correct standards for rendering and parsing the code.`,
    ],
    hints: [
      `HTML5 will still work without the <!DOCTYPE html> declaration, but it is strongly recommended to include it at the beginning of the HTML document. The <!DOCTYPE html> declaration ensures that the browser interprets the document as HTML5 and follows the correct standards for rendering and parsing the code.`,
    ],
  },

  {
    questions: [`What is the use of the required attribute in HTML5?`],
    answers: [
      `It forces a user to fill text on the text field or text area before submitting the form. It is used for form validation. For Example: Name: <input type="text" name="name" required>`,
    ],
    hints: [
      `It forces a user to fill text on the text field or text area before submitting the form. It is used for form validation. For Example: Name: <input type="text" name="name" required>`,
    ],
  },

  {
    questions: [`What are the new <input> types for form validation in HTML5?`],
    answers: [
      `The new input types for form validation are email, URL, number, tel, and date. For example: <input type="email">`,
    ],
    hints: [
      `The new input types for form validation are email, URL, number, tel, and date. For example: <input type="email">`,
    ],
  },

  {
    questions: [`What is the difference between <div> and <span> in HTML?`],
    answers: [
      `<div> and <span> are both container elements, but they differ in their default behavior. <div> is a block-level element and <span> is an inline element.`,
    ],
    hints: [
      `<div> and <span> are both container elements, but they differ in their default behavior. <div> is a block-level element and <span> is an inline element.`,
    ],
  },

  {
    questions: [`How do you create a responsive webpage in HTML?`],
    answers: [
      `To create a responsive webpage, CSS media queries can be used. Media queries allow to define different CSS rules for different screen sizes.`,
    ],
    hints: [
      `To create a responsive webpage, CSS media queries can be used. Media queries allow to define different CSS rules for different screen sizes.`,
    ],
  },

  {
    questions: [`What is the purpose of the <form> tag in HTML?`],
    answers: [
      `The <form> tag provides a way to collect user input and submit it to a server. It acts as a container for form elements such as input fields, checkboxes, radio buttons, and buttons.`,
    ],
    hints: [
      `The <form> tag provides a way to collect user input and submit it to a server. It acts as a container for form elements such as input fields, checkboxes, radio buttons, and buttons.`,
    ],
  },

  {
    questions: [
      `How can you include external CSS and JavaScript files in an HTML document?`,
    ],
    answers: [
      `To include external CSS files, <link> tag within the <head> section of the HTML document can be used. The <link> tag specifies the location and filename of the external CSS file. Similarly, for external JavaScript files, <script> tag can be used and the source file has to be specified using the src attribute. <script> tag can be placed either in the <head> or <body> section.`,
    ],
    hints: [
      `To include external CSS files, <link> tag within the <head> section of the HTML document can be used. The <link> tag specifies the location and filename of the external CSS file. Similarly, for external JavaScript files, <script> tag can be used and the source file has to be specified using the src attribute. <script> tag can be placed either in the <head> or <body> section.`,
    ],
  },

  {
    questions: [`What is the purpose of the alt attribute in the <img> tag?`],
    answers: [
      `The alt attribute in the <img> tag is used to provide alternative text for an image. It serves as a text description of the image content, which is useful for users who cannot see the image or for SEO purposes.`,
    ],
    hints: [
      `The alt attribute in the <img> tag is used to provide alternative text for an image. It serves as a text description of the image content, which is useful for users who cannot see the image or for SEO purposes.`,
    ],
  },

  {
    questions: [
      `What is the difference between the <script>, <script async>, and <script defer> attributes?`,
    ],
    answers: [
      `The <script> tag is used to include JavaScript code in an HTML document. <script> tag without any attribute, fetched and execute synchronously. It blocks the parsing and rendering of the HTML until it's loaded. The async attribute allows the script to be downloaded in parallel to parsing the page, and executed as soon as it is available even before parsing completes. It is used only for external scripts. It does not block the parsing and rendering of the HTML. The defer attribute almost similar as async but ensures that it executes only after the HTML parsing is complete.`,
    ],
    hints: [
      `The <script> tag is used to include JavaScript code in an HTML document. <script> tag without any attribute, fetched and execute synchronously. It blocks the parsing and rendering of the HTML until it's loaded. The async attribute allows the script to be downloaded in parallel to parsing the page, and executed as soon as it is available even before parsing completes. It is used only for external scripts. It does not block the parsing and rendering of the HTML. The defer attribute almost similar as async but ensures that it executes only after the HTML parsing is complete.`,
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
      `Data attributes, denoted by the data-* format. It is used to store custom data private to the page or application. These attributes can be accessed and manipulated using JavaScript. It provides a way to associate additional data or behavior with specific elements. For example: <ul>
    <li onclick="showDetails(this)" id="owl" data-animal-type="bird">Owl</li>
    <li onclick="showDetails(this)" id="salmon" data-animal-type="fish">Salmon</li>  
    <li onclick="showDetails(this)" id="tarantula" data-animal-type="spider">Tarantula</li>  
  </ul>`,
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
      `To mitigate XSS vulnerabilities, it is important to validate user input before displaying it on a webpage. This involves properly encoding or escaping special characters and ensuring that user-generated content is treated as data, not code. Additionally, implementing Content Security Policy (CSP) headers can further protect against XSS attacks. A CSP compatible browser will then only execute scripts loaded in source files received from those allowed domains and ignores all other scripts.`,
    ],
  },

  {
    questions: [`What is the Document Object Model (DOM) in relation to HTML?`],
    answers: [
      `It provides methods and properties to dynamically access, manipulate, and update the elements and content of a webpage using JavaScript or other scripting languages. The DOM allows developers to interact with and modify the HTML document programmatically.`,
    ],
    hints: [
      `It provides methods and properties to dynamically access, manipulate, and update the elements and content of a webpage using JavaScript or other scripting languages. The DOM allows developers to interact with and modify the HTML document programmatically.`,
    ],
  },

  {
    questions: [
      `What are the differences between the <input type="file"> and <input type="text"> elements?`,
    ],
    answers: [
      `The <input type="file"> element is used to select and upload files. On the other hand, <input type="text"> is a text input field where users can enter alphanumeric text.`,
    ],
    hints: [
      `The <input type="file"> element is used to select and upload files. On the other hand, <input type="text"> is a text input field where users can enter alphanumeric text.`,
    ],
  },
];
