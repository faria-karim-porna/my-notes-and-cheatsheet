import React from "react";
import { TextToVoice } from "../../common/TextToVoice";

const InterviewPreparationHtmlComponent = () => {
  return (
    <>
      <TextToVoice className="que-voice" text="1. What is HTML?" shouldAlwaysView={true} />
      <TextToVoice
        className="ans-voice"
        text="HTML stands for Hyper Text Markup Language. It is used to create and display pages on the Web. It uses tags such as headings, paragraphs, images, links, and more. to define the structure and content of a webpage"
      />

      <TextToVoice className="que-voice" text="2. What are Tags?" shouldAlwaysView={true} />
      <TextToVoice
        className="ans-voice"
        text="In HTML, tags are the building blocks used to define the structure of a webpage. They are enclosed in angle brackets (< >) and come in pairs: opening tags and closing tags. Opening tags indicate the beginning of an element, while closing tags mark the end. Some tags, known as self-closing or void tags, do not have a corresponding closing tag. Tags provide instructions to web browsers about the content."
      />

      <TextToVoice className="que-voice" text="3. Do all HTML tags have an end tag?" shouldAlwaysView={true} />
      <TextToVoice
        className="ans-voice"
        text="No. There are some HTML tags that don't need a closing tag. For example: <image> tag, <br> tag."
      />

      <TextToVoice className="que-voice" text="4. What is formatting in HTML?" shouldAlwaysView={true} />
      <TextToVoice
        className="ans-voice"
        text="Formatting in HTML refers to the way to control the appearance of content. For example, the <b> tag is used to make text bold, <i> tag is for italicizing text, and <u> tag is for underlining text."
      />

      <TextToVoice className="que-voice" text="5. How many types of heading does an HTML contain?" shouldAlwaysView={true} />
      <TextToVoice
        className="ans-voice"
        text="The HTML contains six types of headings which are defined with the <h1> to <h6> tags. Each type of heading tag displays different size of texts. <h1> is the largest heading tag and <h6> is the smallest one. "
      />

      <TextToVoice className="que-voice" text="6. How to create a hyperlink in HTML?" shouldAlwaysView={true} />
      <TextToVoice
        className="ans-voice"
        text="The HTML provides an anchor tag to create a hyperlink. The href attribute of the tag specifies the URL of the link. The color of unvisited link is blue and the text of the link is underlined. Visited link is also underlined but the color is purple.And active link is underlined and red."
      />

      <TextToVoice
        className="que-voice"
        text="7. Which HTML tag is used to display the data in the tabular form?"
        shouldAlwaysView={true}
      />
      <TextToVoice
        className="ans-voice"
        text="The <table> tag is used to display data in a tabular form in HTML. It shows data in row and column fashion. It uses other related tags to structure the table. <table> defines a table. <tr> defines a row. <th> defines a header cell. <td> defines a cell. <caption> defines the table caption. <colgroup>	specifies a group of one or more columns. <col>	is used with <colgroup> element to specify column properties for each column. <tbody>	is used to group the body content. <thead> is used to group the header content. <tfooter>	is used to group the footer content."
      />

      <TextToVoice
        className="que-voice"
        text="8. What are some common lists that are used when designing a page?"
        shouldAlwaysView={true}
      />
      <TextToVoice
        className="ans-voice"
        text="Some common lists used when designing a webpage include ordered lists (<ol>) for numbered items, unordered lists (<ul>) for bullet-pointed items, and definition lists (<dl>) for terms and their definitions. These lists can be nested within each other."
      />

      <TextToVoice className="que-voice" text="9. What is the difference between HTML elements and tags?" shouldAlwaysView={true} />
      <TextToVoice
        className="ans-voice"
        text="An HTML element refers to a component of a webpage, such as a heading, paragraph, image, or link. When the elements are enclosed by brackets <>, they form HTML tags."
      />

      <TextToVoice className="que-voice" text="10. What is semantic HTML?" shouldAlwaysView={true} />
      <TextToVoice
        className="ans-voice"
        text="Semantic HTML refers to the use of HTML elements that carry meaning of the content within them. It makes the webpages more accessible to both humans and search engines. Semantic tags, like <header>, <nav>, <article>, and <footer>, provide semantic information about the role of the content they enclose. In semantic HTML <b> </b> tag is not used for bold statement as well as <i> </i> tag is used for italic. Instead of these we use <strong></strong> and <em></em> tags."
      />

      <TextToVoice className="que-voice" text="11. What is an image map?" shouldAlwaysView={true} />
      <TextToVoice
        className="ans-voice"
        text="An image map in HTML is a technique used to add specific links or actions in different regions of an image. It allows for interactive image-based navigation. The <map> tag is used to define the map, and <area> tags are used to specify the clickable areas within the image map."
      />

      <TextToVoice className="que-voice" text="12. How to insert a copyright symbol on a browser page?" shouldAlwaysView={true} />
      <TextToVoice className="ans-voice" text="A copyright symbol can be used by using &copy; or &#169; in an HTML file." />

      <TextToVoice className="que-voice" text="13. How to create a nested webpage in HTML?" shouldAlwaysView={true} />
      <TextToVoice
        className="ans-voice"
        text="The HTML iframe tag is used to display a nested webpage. The <iframe> tag embed another HTML document within the current webpage. The URL of the nested webpage is written inside the src attribute. "
      />

      <TextToVoice className="que-voice" text="14. How do you keep list elements straight in an HTML file?" shouldAlwaysView={true} />
      <TextToVoice
        className="ans-voice"
        text="To keep list elements straight in an HTML file, CSS provides properties like list-style-type to control the appearance of bullets or numbering, text-indent to control indentation, and margin or padding properties to adjust spacing around list items can be used."
      />

      <TextToVoice className="que-voice" text="15. Does a hyperlink only apply to text?" shouldAlwaysView={true} />
      <TextToVoice
        className="ans-voice"
        text="No, hyperlinks can be used on various elements, including text, images, buttons, or any other element that supports user interaction."
      />

      <TextToVoice className="que-voice" text="16. What is a style sheet?" shouldAlwaysView={true} />
      <TextToVoice
        className="ans-voice"
        text="A style sheet is used to build a consistent, transportable, and well-designed style template. It provides a set of rules and properties that determine how elements should be displayed, including fonts, colors, sizes, positioning, and more."
      />

      <TextToVoice className="que-voice" text="17. Can you create a multi-colored text on a web page?" shouldAlwaysView={true} />
      <TextToVoice
        className="ans-voice"
        text='Yes. To create a multicolor text on a web page <font color ="color"> </font> can be used for the specific texts to add color.'
      />

      <TextToVoice className="que-voice" text="18. Is it possible to change the color of the bullet?" shouldAlwaysView={true} />
      <TextToVoice
        className="ans-voice"
        text="The color of the bullet is always the color of the first text of the list. So, to change the color of the bullet, the color of the text has to be changed.  Additionally, using the ::before pseudo-element with CSS, the appearance of the bullet can be customized."
      />

      <TextToVoice className="que-voice" text="19. Explain the layout of HTML?" shouldAlwaysView={true} />
      <TextToVoice
        className="ans-voice"
        text="The layout of an HTML document refers to the arrangement of elements on a webpage. HTML provides various tags and techniques to structure and organize content, <header> is used to define a header for a document or a section. <nav> is used to define a container for navigation links <section> is used to define a section in a document <article> is used to define an independent, self-contained article <aside> is used to define content aside from the content (like a sidebar) <footer> is used to define a footer for a document or a section"
      />

      <TextToVoice className="que-voice" text="20. What is a marquee?" shouldAlwaysView={true} />
      <TextToVoice
        className="ans-voice"
        text="Marquee is used to put the scrolling text or image on a web page. It scrolls the image or text up, down, left or right automatically."
      />

      <TextToVoice className="que-voice" text="21. How many tags can be used to separate a section of texts?" shouldAlwaysView={true} />
      <TextToVoice
        className="ans-voice"
        text="There is no specific limit on the number of tags that can be used to separate a section of texts in HTML. You can use tags like <div>, <section>, <article>, or even <p> (paragraph) to logically group and separate sections of text. <br> tag is used to separate the line of text. It breaks the current line. The <p> tag contains the text in the form of a new paragraph. <blockquote> tag is used to define a large quoted section."
      />

      <TextToVoice className="que-voice" text="22. How to make a picture of a background image of a web page?" shouldAlwaysView={true} />
      <TextToVoice
        className="ans-voice"
        text='To make a picture a background image on a web page, <body background = "image.gif">  can be used.'
      />

      <TextToVoice className="que-voice" text="23. What are empty elements?" shouldAlwaysView={true} />
      <TextToVoice className="ans-voice" text="HTML elements with no content are called empty elements. For example: <br>, <hr> etc." />

      <TextToVoice className="que-voice" text="24. What is the use of a span tag? Give one example." shouldAlwaysView={true} />
      <TextToVoice
        className="ans-voice"
        text="The <span> tag in HTML is an inline element used to apply styling on specific sections of text within a larger block of content. We can use span tag for adding color on text, for adding background on text, for highlighting any color text."
      />

      <TextToVoice className="que-voice" text="25. What is the use of an iframe tag?" shouldAlwaysView={true} />
      <TextToVoice
        className="ans-voice"
        text="The <iframe> tag in HTML is used to embed another HTML document or external content within the current webpage. <iframe> is commonly used for embedding videos, maps, or other external content."
      />

      <TextToVoice className="que-voice" text="26. What are the entities in HTML?" shouldAlwaysView={true} />

      <TextToVoice className="que-voice" text="27. Why is a URL encoded in HTML?" shouldAlwaysView={true} />

      <TextToVoice className="que-voice" text="28. Does a <!DOCTYPE html> tag is a HTML tag?" shouldAlwaysView={true} />

      <TextToVoice className="que-voice" text="29. What is the canvas element in HTML5?" shouldAlwaysView={true} />

      <TextToVoice className="que-voice" text="30. What is SVG?" shouldAlwaysView={true} />

      <TextToVoice className="que-voice" text="31. What are the different new form element types in HTML 5?" shouldAlwaysView={true} />

      <TextToVoice
        className="que-voice"
        text="32. Is there any need to change the web browsers to support HTML5?"
        shouldAlwaysView={true}
      />

      <TextToVoice className="que-voice" text="33. Which type of video formats are supported by HTML5?" shouldAlwaysView={true} />

      <TextToVoice className="que-voice" text="34. Is audio tag supported in HTML 5?" shouldAlwaysView={true} />

      <TextToVoice className="que-voice" text="35. What is the difference between progress and meter tag?" shouldAlwaysView={true} />

      <TextToVoice className="que-voice" text="36. What is the use of figure tag in HTML 5?" shouldAlwaysView={true} />

      <TextToVoice className="que-voice" text="37. What is the use of figcaption tag in HTML 5?" shouldAlwaysView={true} />

      <TextToVoice className="que-voice" text="38. What is button tag?" shouldAlwaysView={true} />

      <TextToVoice className="que-voice" text="39. What is the use of details and summary tag?" shouldAlwaysView={true} />

      <TextToVoice className="que-voice" text="40. What is datalist tag?" shouldAlwaysView={true} />

      <TextToVoice className="que-voice" text="41. How are tags migrated from HTML4 to HTML5?" shouldAlwaysView={true} />

      <TextToVoice className="que-voice" text="42. If I do not put <!DOCTYPE html> will HTML 5 work?" shouldAlwaysView={true} />

      <TextToVoice className="que-voice" text="43. What is the use of the required attribute in HTML5?" shouldAlwaysView={true} />

      <TextToVoice className="que-voice" text="44. What are the new <input> types for form validation in HTML5?" shouldAlwaysView={true} />

      <TextToVoice className="que-voice" text="25. What is the use of an iframe tag?" shouldAlwaysView={true} />

      <TextToVoice className="que-voice" text="25. What is the use of an iframe tag?" shouldAlwaysView={true} />

      <TextToVoice className="que-voice" text="25. What is the use of an iframe tag?" shouldAlwaysView={true} />

      <TextToVoice className="que-voice" text="25. What is the use of an iframe tag?" shouldAlwaysView={true} />

      <TextToVoice className="que-voice" text="25. What is the use of an iframe tag?" shouldAlwaysView={true} />

      <TextToVoice className="que-voice" text="25. What is the use of an iframe tag?" shouldAlwaysView={true} />
    </>
  );
};

export const InterviewPreparationHtml = React.memo(InterviewPreparationHtmlComponent);
