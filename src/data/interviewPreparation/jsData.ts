export const jsData = [
  {
    questions: `What is JavaScript?`,
    answers: `JavaScript is a popular scripting language. It is used for creating interactive and dynamic web content. It allows developers to add behavior, interactivity, and functionality to web pages to make them more engaging for users. It is object-based, lightweight, cross-platform translated language.`,
  },

  {
    questions: `List some features of JavaScript.`,
    answers: `Some features of JavaScript include:
    Variables can hold different types of data and can be changed dynamically.
    It Supports object-oriented programming concepts like objects, classes, and inheritance.
    It reacts to user actions or events and can trigger specific actions or functions.
    It runs in the web BrowserRouter.
    It supports asynchronous programming`,
  },

  {
    questions: `Who developed JavaScript, and what was the first name of JavaScript?`,
    answers: `JavaScript was developed by Brendan Eich at Netscape Communications Corporation in 1995. Its original name was "Mocha," which was later changed to "LiveScript" and finally to "JavaScript".`,
  },

  {
    questions: `List some of the advantages of JavaScript.`,
    answers: `Some of the advantages of JavaScript are:
    It improves the overall user experience.
    It can be used for both client-side and server-side development.
    It has large developer community and resources like extensive libraries, frameworks, and resources available for support.
    Easy integration with HTML and CSS.`,
  },

  {
    questions: `List some of the disadvantages of JavaScript.`,
    answers: `Some of the disadvantages of JavaScript are:
    Different browsers may interpret JavaScript code differently, leading to inconsistencies in behavior.
    Since JavaScript runs on the client-side, it can be vulnerable to security threats like cross-site scripting (XSS) attacks if not implemented properly.
    Heavy JavaScript code or poorly optimized scripts can negatively impact page loading speed and responsiveness.
    No support for multithreading
    No support for multiprocessing
    Reading and writing of files is not allowed without Node.js`,
  },

  {
    questions: `Define a named function in JavaScript.`,
    answers: `The function which has named at the time of definition is called a named function. For example: function msg()  
    {  
      document.writeln("Named Function");  
    }  
    msg();`,
  },

  {
    questions: `Name the types of functions`,
    answers: `JavaScript supports different types of functions, including named functions, anonymous functions, arrow functions, and immediately invoked function expressions (IIFEs).
    Named - These type of functions contains name at the time of definition. For Example: function display()  
    {  
      document.writeln("Named Function");  
    }  
    display();  
    Anonymous - These type of functions doesn't contain any name. They are declared dynamically at runtime.
    var display=function()  
    {  
      document.writeln("Anonymous Function");  
    }  
    display();`,
  },

  {
    questions: `Define anonymous function`,
    answers: `It is a function that has no name. These functions are declared dynamically at runtime using the function operator instead of the function declaration. For example: var display=function()  
    {  
      alert("Anonymous Function is invoked");  
    }  
    display();`,
  },

  {
    questions: `Can an anonymous function be assigned to a variable?`,
    answers: `Yes, an anonymous function can be assigned to a variable.`,
  },

  {
    questions: `In JavaScript what is an argument object?`,
    answers: `Arguments is an array-like object accessible inside functions. It consider each parameter of the function as the element of the argument array. For example: function func1(a, b, c) {
        console.log(arguments[0]);
        // Expected output: 1
        console.log(arguments[1]);
        // Expected output: 2
        console.log(arguments[2]);
        // Expected output: 3
      }
      func1(1, 2, 3);`,
  },

  {
    questions: `Define closure.`,
    answers: `We need closures when a variable which is defined outside the scope in reference is accessed from some inner scope.For example: var num = 10;  
    function sum()   
    {  
    document.writeln(num+num);  
    }   
    sum();`,
  },

  {
    questions: `If we want to return the character from a specific index which method is used?`,
    answers: `To return the character from a specific index in JavaScript, the charAt() method can be used. It is called on a string and takes the index as an argument. For example, myString.charAt(2) will return the character at index 2 of the string myString.`,
  },

  {
    questions: `What is the difference between JavaScript and JScript?`,
    answers: `Netscape provided the JavaScript language. Microsoft changed the name and called it JScript to avoid the trademark issue. In other words, you can say JScript is the same as JavaScript, but Microsoft provides it.`,
  },

  {
    questions: `How to write a hello world example of JavaScript?`,
    answers: `A simple example of JavaScript hello world is given below. <script type="text/javascript">  
    console.log("Hello, World!");  
    </script>`,
  },

  {
    questions: `What are the key differences between Java and JavaScript? / How is JavaScript different from Java?`,
    answers: `Java and JavaScript are two distinct programming. Both languages has different purposes and usage. Java is a general-purpose, object-oriented programming language primarily used for building large-scale applications, including desktop, mobile, and server-side development. JavaScript, on the other hand, is a lightweight scripting language designed for web development, enabling interactive and dynamic features in web pages. The syntax, language features, and use cases differ significantly between Java and JavaScript. Java supports multithreading.	JavaScript doesn't support multithreading. Java uses a thread-based approach to concurrency.	JavaScript uses an event-based approach to concurrency. The file extension of the Java program is written as ".Java" and it translates source code into bytecodes which are then executed by JVM (Java Virtual Machine).	The JavaScript file extension is written as ".js" and it is interpreted but not compiled. Every browser has a JavaScript interpreter to execute the JS code.`,
  },
];
