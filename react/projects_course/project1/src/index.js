import React from 'react';
import { createElement } from 'react';
import ReactDom from 'react-dom';


// CSS
import './index.css'

// create data list 
const books = [
    {
        id: 1,
        author: 'Amelia Hepworth',
        title: 'I Love You to the Moon and Back',
        img: "https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX258_BO1,204,203,200_.jpg",
    },
    {
        id: 2,
        author: 'Margaret Wise Brown, Clement Hurd',
        title: 'Goodnight Moon',
        img: "https://images-na.ssl-images-amazon.com/images/I/51kpoART0HL._AC_SX368_.jpg"
    },
    {
        id: 3,
        author: 'Eric Carle',
        title: 'The Very Hungry Caterpillar',
        img: "https://images-na.ssl-images-amazon.com/images/I/41w4B0f21VL._AC_SX368_.jpg"
    }
]
function BookList() {
    return (
        <section className='bookList'>
            {books.map((book) => {
                const { img, title, author } = book;
                return <Book key={book.id} {...book}></Book>
            })}
        </section>
    )   
}


const Book = (props) => {
    const { img, title, author } = props;
    // Event handler
    // onClick
    const clickHandler = (e) => {
        console.log('button clicked')
    }
    return (
    <article className='book'>
        <img src={img} alt="" />
        <h1>{title}</h1>
        <h3>{author}</h3>
        <button 
            type="button" 
            onClick = {clickHandler}
        > 
        Click here to see an alert pop up!
        </button>
    </article>
    )
}

// arrow function
// const BookList = () => {
//     return  React.createElement('h4', {}, "This is my first react arrow component")
// }

ReactDom.render(<BookList />, document.getElementById('root'))