import React from 'react';
import { createElement } from 'react';
import ReactDom from 'react-dom';


// normal function
function Greeting() {
    return (
        <div>
            <h1>Hello World!</h1>
            <h4>This is my first react component!</h4>
        </div>
    )   
}

// arrow function
// const Greeting = () => {
//     return  React.createElement('h4', {}, "This is my first react arrow component")
// }

ReactDom.render(<Greeting />, document.getElementById('root'))