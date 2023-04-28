import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';



function App() {
    const [books, setBooks] = useState([])

    async function fetchBooks() {
        const response = await axios.get("http://localhost:3001/books")

        setBooks(response.data)
    }

    useEffect(() => {
        fetchBooks()
    }, [])

    async function editBookById(id, newTitle) {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle
        })

        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, ...response.data }
            }
            return book
        })
        setBooks(updatedBooks)
    }

    async function deleteBookById(id) {
        await axios.delete(`http://localhost:3001/${id}`)
        
        const updatedBooks = books.filter((book) => {
            return book.id !== id
        })
        setBooks(updatedBooks)
    }

    async function createBook(title) {
        const response = await axios.post("http://localhost:3001/books", {
            // title: title can also be just title
            title
        })
        const updatedBooks = [
            ...books,
            response.data
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