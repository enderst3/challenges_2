import React, { useEffect, useContext } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/books';


function App() {
    const { fetchBooks } = useContext(BooksContext)
    useEffect(() => {
        fetchBooks()
        // need to fix this.  adding fetchBooks made it call over and over.
    }, [])


    return (
        <div className='app'>
            <BookList />
            <BookCreate />
        </div>
    )
}

export default App