/* create a new component producing some HTML */ 
import React from 'react';
import ReactDOM from 'react-dom';
/** 
 * This is JSX, that contains html in js 
 * JSX is not understandable by the browser, so it need webpack and babel to translate
 * It simplify the codes needed to be writen with the same functionality in javascript
 * 
 * */
const App = () => {     // this is essentially creating a class
    return <div><span>Hello World</span></div>;
}

// this is equal to the following javascript codes
// "use strict";

// var App = function App() {
//     return React.createElement(
//         "div",
//         null,
//         React.createElement(
//             "span",
//             null,
//             "Hello World"
//         )
//     );
// };

// React.render(App);
//This will fail because the react has splitted into react and reactDom (2 libraries);
// where react is used to create component, and react-dom is used to manipulate dom

// ReactDOM.render(App);
//This will also fail because this is passing the App class instead of its instantiation

// ReactDOM.render(<App />);
// Creating an instance is just wrap it into a tag, but this will still fail because it need a container
// where it is targeted to be put.

ReactDOM.render(<App></App>, document.querySelector('.container'));
// The target container is the DOM element where the component is wrapped, it should be passed as 2nd parameter

