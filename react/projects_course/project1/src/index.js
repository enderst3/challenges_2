import React from 'react';
import { createElement } from 'react';
import ReactDom from 'react-dom';


// CSS
import './index.css'



function BookList() {
    return (
        <section className='bookList'>
            <Book />
        </section>
    )   
}

const author = 'Amelia Hepworth'
const Book = () => {
    const title = 'I Love You to the Moon and Back'
        return (
        <article className='book'>
            <img src="https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX258_BO1,204,203,200_.jpg" alt="" />

            <h1>{title}</h1>
            <h3 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}>{author}</h3>
           
        </article>
    )
}

// arrow function
// const BookList = () => {
//     return  React.createElement('h4', {}, "This is my first react arrow component")
// }

ReactDom.render(<BookList />, document.getElementById('root'))