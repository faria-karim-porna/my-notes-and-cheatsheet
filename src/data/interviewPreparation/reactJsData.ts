export const reactJsData = [
  {
    questions: `What is React?`,
    answers: `React is a popular JavaScript library used for building user interfaces (UIs) in web applications. It is developed by Facebook in 2011. It allows developers to create reusable UI components and efficiently manage the state of those components. React follows a component-based architecture and employs a virtual DOM for efficient rendering.`,
  },

  {
    questions: `What are the features of React?`,
    answers: `The main features of React are JSX, Components, One-way Data Binding, Virtual DOM, Simplicity, Performance`,
  },

  {
    questions: `What are the most crucial advantages of using React?`,
    answers: `React has many crucial advantages. React has strong community and ecosystem. React follows the MVC architecture. React uses Virtual DOM to improve efficiency. In React, creating a dynamic web application is much easier. It requires less coding and gives more functionality. React is SEO-friendly. React allows reusable components. React provides a lot of handy tools that can make the task of the developers understandable and easier. Use these tools in Chrome and Firefox dev extension, allowing us to inspect the React component hierarchies in the virtual DOM. React has a huge ecosystem of libraries. React web applications are easy to test.`,
  },

  {
    questions: `What are the biggest limitations of React?`,
    answers: `The biggest limitations of React are it is continuously evolving  and changing. Sometimes developers find it difficult to cope up with the changed versions. React is just a library. It is not a complete framework. React itself doesn't provide official solutions for routing, state management, or other common aspects. So developers need to add external modules to make things work. Like for routing we need additional module. It may be difficult for the new programmers to understand and code. React uses inline templating and JSX, which may be difficult and act as a barrier. It also makes the coding complex.`,
  },

  {
    questions: `What is JSX?`,
    answers: `JSX stands for JavaScript XML. JSX allows developers to write HTML-like code within JavaScript, making it easier to create and manage the component's markup. JSX is then transformed into regular JavaScript using transpilers like Babel, so that it can be understood and rendered by the browser.`,
  },

  {
    questions: `Why can't browsers read JSX?`,
    answers: `Browsers cannot read JSX directly because they can only understand JavaScript objects, and JSX is not a regular JavaScript object. Thus, we need to transform the JSX file into a JavaScript object using transpilers like Babel and then pass it to the browser.`,
  },

  {
    questions: `Why we use JSX?`,
    answers: `It is faster than regular JavaScript because it performs optimization while translating the code to JavaScript. It allows developers to write code by combining HTML-like syntax with JavaScript logic which makes the development faster. It is type-safe, and most of the errors can be found at compilation time. JSX helps in creating reusable and modular components, which makes the code more maintainable and easier to understand.`,
  },

  {
    questions: `What do you understand by Virtual DOM?`,
    answers: `A Virtual DOM is a lightweight JavaScript object which is an in-memory representation of real DOM. It is an intermediary step between the render function being called and the displaying of elements on the screen.`,
  },

  {
    questions: `Explain the working of Virtual DOM.`,
    answers: `Virtual DOM works in three steps:
    1. Whenever any data changes in the React App, the entire UI is re-rendered in Virtual DOM representation.
    2. Now, the difference between the previous DOM representation and the new DOM is calculated.
    3. Once the calculations are completed, the real DOM updated with only those things which are changed.`,
  },

  {
    questions: `How is React different from Angular?`,
    answers: `React is a library focused on the view layer. Angular, on the other hand, is a full-fledged framework that offers a comprehensive solution including features like data binding, dependency injection, and routing. Author of Angular is Google and author of react is	Facebook Community. Angular is developed by Misko Hevery and react is developed by Jordan Walke. Angular got released on 2010 and react got released 2013. Angular uses JavaScript, HTML but react uses JSX. Angular uses Regular DOM but react uses Virtual DOM. The performance of angular is slow but react is fast, due to virtual DOM. Data-Binding of angular is Bi-directional and of react is Uni-directional`,
  },

  {
    questions: `How React's ES6 syntax is different from ES5 syntax?`,
    answers: `The React's ES6 syntax has changed from ES5 syntax in many aspects. In the case of importing any module, exporting any component, props passing, state declation and usage, arrow functions, template literals, classes, destructuring. It makes the code more concise and readable compared to the older ES5 syntax.For example: require vs. Import
    // ES5  
    var React = require('react');  
    // ES6  
    import React from 'react';  
    exports vs. export
    // ES5  
    module.exports = Component;  
    // ES6  
    export default Component;  
    component and function
    // ES5  
    var MyComponent = React.createClass({  
        render: function() {  
            return(  
              <h3>Hello JavaTpoint</h3>  
            );  
        }  
    });  
    // ES6  
    class MyComponent extends React.Component {  
        render() {  
            return(  
              <h3>Hello Javatpoint</h3>  
            );  
        }  
    }  
    props
    // ES5  
    var App = React.createClass({  
        propTypes: { name: React.PropTypes.string },  
        render: function() {  
            return(  
               <h3>Hello, {this.props.name}!</h3>  
            );  
        }  
    });  
    // ES6  
    class App extends React.Component {  
        render() {  
            return(  
              <h3>Hello, {this.props.name}!</h3>  
            );  
        }  
    }  
    state
    var App = React.createClass({  
        getInitialState: function() {  
            return { name: 'world' };  
        },  
        render: function() {  
            return(  
              <h3>Hello, {this.state.name}!</h3>  
            );  
        }  
    });  
    // ES6  
    class App extends React.Component {  
        constructor() {  
            super();  
            this.state = { name: 'world' };  
        }  
        render() {  
            return(  
              <h3>Hello, {this.state.name}!</h3>  
            );  
        }  
    }`,
  },

  {
    questions: `What is the difference between ReactJS and React Native?`,
    answers: `There are many differences between ReactJS and React Native. First of all ReactJS initially released in 2013. React Native initially released in 2015. ReactJS is used for developing web applications.	React Native is used for developing mobile applications. ReactJS can be executed on all platforms. React Native is not platform independent. It takes more effort to be executed on all platforms. ReactJS uses a JavaScript library and CSS for animations. React Native comes with built-in animation libraries. ReactJS uses React-router for navigating web pages. React Native has built-in Navigator library for navigating mobile applications. ReactJS uses HTML tags. React Native does not use HTML tags. In ReactJS, the Virtual DOM renders the browser code. In React Native, it uses its API to render code for mobile applications.`,
  },

  {
    questions: `What is the difference between Real DOM and Virtual DOM?`,
    answers: `The real DOM updates slower. The virtual DOM updates faster. The real DOM can directly update HTML.	The virtual DOM cannot directly update HTML.
    The virtual DOM updates the JSX if the element updates. In real DOM, DOM manipulation is very expensive. In virtual DOM, DOM manipulation is very easy. There is a lot of memory wastage in The real DOM. There is no memory wastage in the virtual DOM.
    React Component Interview Questions`,
  },

  {
    questions: `What do you understand from "In React, everything is a component."`,
    answers: `In React, components are the building blocks of React applications. These components divide the entire React application's UI into small, independent, and reusable pieces of code. React renders each of these components independently without affecting the rest of the application UI. Hence, we can say that, in React, everything is a component.`,
  },

  {
    questions: `Explain the purpose of render() in React.`,
    answers: `It is mandatory for each React component to have a render() function. Render function is used to return the HTML which we want to display in a component. If we need to rendered more than one HTML element, we need to grouped together inside single enclosing tag (parent tag) such as <div>, <form>, <group> etc.`,
  },
];
