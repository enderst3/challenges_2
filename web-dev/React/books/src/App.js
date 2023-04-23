import React, { useState } from 'react'
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';


function App() {
    const [books, setBooks] = useState([])

    function editBookById(id, newTitle) {
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, title: newTitle }
            }
            return book
        })
        setBooks(updatedBooks)
    }

    function deleteBookById(id) {
        const updatedBooks = books.filter((book) => {
            return book.id !== id
        })
        setBooks(updatedBooks)
    }

    function createBook(title) {
        const updatedBooks = [
            ...books,
            { 
                id: Math.round(Math.random()*9999),
                title: title
            }
        ]
        setBooks(updatedBooks)
    }



    return (
        <div className='app'>
            <BookList onEdit={editBookById} onDelete={deleteBookById} books={books} />
            <BookCreate onCreate={createBook} />
        </div>
    )
}

export default App