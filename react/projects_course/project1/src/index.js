import React from 'react';
import { createElement } from 'react';
import ReactDom from 'react-dom';


// CSS
import './index.css'



function BookList() {
    return (
        <section className='bookList'>
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    )   
}

const Book = () => {
    return (
        <article className='book'>
            <Image />
            <Title />
            <Author />
        </article>
    )
}

const Image = () => (
    <img src="https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX258_BO1,204,203,200_.jpg" alt="" />
)

const Author = () => (  
    <h3>Amelia Hepworth</h3>
)

const Title = () => (
    <h1>I Love You to the Moon and Back</h1>
)

// arrow function
// const BookList = () => {
//     return  React.createElement('h4', {}, "This is my first react arrow component")
// }

ReactDom.render(<BookList />, document.getElementById('root'))