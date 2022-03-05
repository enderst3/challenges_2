import React from 'react';
import { createElement } from 'react';
import ReactDom from 'react-dom';


// normal function
function Greeting() {
    return (
        <h4>This is my first react component!</h4>
    )
}

// arrow function
// const Greeting = () => {
//     return  React.createElement('h4', {}, "This is my first react arrow component")
// }

ReactDom.render(<Greeting />, document.getElementById('root'))