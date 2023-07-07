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

  {
    questions: `How to use external JavaScript file?`,
    answers: `To use an external JavaScript file, a separate file with a .js extension containing JavaScript code need to be created. Then, in the HTML file, we have to link the external file using the <script> tag and the src attribute will point to the file's location. For example: <script type="text/javascript" src="message.js"></script>`,
  },

  {
    questions: `Is JavaScript case sensitive language?`,
    answers: `Yes, JavaScript is a case-sensitive language. For example, myVariable and myvariable would be treated as different variables in JavaScript.`,
  },

  {
    questions: `What is BOM?`,
    answers: `BOM stands for Browser Object Model. It provides interaction with the browser. The default object of a browser is a window. The window object provides various properties like document, history, screen, navigator, location, innerHeight, innerWidth,`,
  },

  {
    questions: `What is DOM? What is the use of document ,object?`,
    answers: `DOM stands for Document Object Model. A document object represents the HTML document. It represents the structure of an HTML or XML document as a tree-like structure of objects. It can be used to access and change the content of HTML.`,
  },

  {
    questions: `What is the use of window object?`,
    answers: `The window object represents the current browser window or tab. It is created automatically by the browser that represents a window of a browser. It is a global object in JavaScript and serves as the entry point to access various browser-related features and functionalities. The window object allows to control aspects of the browser window, such as opening or closing windows, manipulating the browser history, controlling the browser location, setting timeouts or intervals, and handling events related to the window. For example: alert()	displays the alert box containing the message with ok button.
confirm() displays the confirm dialog box containing the message with ok and cancel button.
prompt() displays a dialog box to get input from the user.
open() opens the new window.
close()	closes the current window.
setTimeout() performs the action after specified time like calling function, evaluating expressions.`,
  },

  {
    questions: `What is the use of history object?`,
    answers: `The history object of a browser can be used to switch to history pages such as back and forward from the current page or another page. There are three methods of history object. history.back() loads the previous page. history.forward() loads the next page. history.go(number) The number may be positive for forward, negative for backward. It loads the given page number.`,
  },

  {
    questions: `How to write a comment in JavaScript?`,
    answers: `There are two types of comments in JavaScript. For a single-line comment, we can prefix the comment with //. For a multi-line comment, we have to enclose the comment between /* and */.`,
  },

  {
    questions: `How to create a function in JavaScript?`,
    answers: `To create a function in JavaScript, we have to use the function keyword followed by the function name, parentheses for optional parameters, and curly braces for the function body. For example: function greet(name) {
    console.log("Hello, " + name + "!");
  }`,
  },

  {
    questions: `What are the different data types present in JavaScript?`,
    answers: `There are two types of data types in JavaScript: Primitive data types and Non- Primitive data types
The primitive data types are string, number, boolean, bigInt undefined, null, symbol, typeof:
String: Represents a sequence of characters.
Number: Represents numeric values, including integers and floating-point numbers.
Boolean: Represents either true or false.
BigInt: The BigInt data type is used to store large integers and is represented by adding "n" to an integer literal.  
Undefined: The Undefined data type is used when a variable is declared but not assigned. The value of this data type is undefined, and its type is also undefined.
Null: Represents the intentional absence of any object value.
Symbol: Symbol is a new data type introduced in the ES6 version of JavaScript. It is used to store an anonymous and unique value. 
typeof: The typeof operator is used to determine what type of data a variable or operand contains. For example: typeof 10;  // Returns: "number"  
typeof 10.0;  // Returns: "number"  
typeof 2.5e-4;  // Returns: "number"  
typeof Infinity;  // Returns: "number"  
typeof NaN;  // Returns: "number". Despite being "Not-A-Number"  
// Strings  
typeof '';  // Returns: "string"  
typeof 'Welcome to JavaTpoint';  // Returns: "string"  
typeof '12';  // Returns: "string". Number within quotes is typeof string  
// Booleans  
typeof true;  // Returns: "boolean"  
typeof false;  // Returns: "boolean"  
// Undefined  
typeof undefined;  // Returns: "undefined"  
typeof undeclaredVariable; // Returns: "undefined"  
// Null  
typeof Null;  // Returns: "object"  
// Objects  
typeof {name: "John", age: 18};  // Returns: "object"  
// Arrays  
typeof [1, 2, 3];  // Returns: "object"  
// Functions  
typeof function(){};  // Returns: "function"  
In the above examples, we can see that the primitive data types can store only a single value. To store multiple and complex values, we have to use non-primitive data types. The non-primitive data types are object and array:
Object: The Object is a non-primitive data type. It is used to store collections of data. An object contains properties, defined as a key-value pair. The value can be any data type, such as strings, numbers, Booleans, or complex data types like arrays, functions, and other objects.
Array: The Array data type is used to represent a group of similar values.`,
  },

  {
    questions: `What is the difference between == and ===?`,
    answers: `The == operator checks equality of values whereas === checks equality of values and data types.`,
  },
];
