import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import './Books.css'

const Books = ({handleAddToCart}) => {
    const [books, setBooks]= useState([])
    useEffect(() => {
        fetch("./data.json")
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div >
            <h2>Total Books: {books.length} </h2>
            <div className='books-container'>
                {
                    books.map(book => <Book handleAddToCart={handleAddToCart} book={book}></Book>)
                }
            </div>

        </div>
    );
};

export default Books;