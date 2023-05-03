import React, { useEffect, useContext } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/books';


function App() {
    const { fetchBooks } = useContext(BooksContext)
    useEffect(() => {
        fetchBooks()
        // useCallback will stop infinate loop this creates
    }, [fetchBooks])


    return (
        <div className='app'>
            <BookList />
            <BookCreate />
        </div>
    )
}

export default App