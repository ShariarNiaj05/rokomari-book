import React from 'react';
import './Book.css'

const Book = ({ book, handleAddToCart }) => {
    const {bookImg, bookAuthor, bookPrice, bookTitle} = book;
    return (
        <div className='book'>
            <img src={bookImg} alt="" />
            <h2>{bookTitle}</h2>
            <h3>{ bookAuthor}</h3>
            <h4>{bookPrice}</h4>
            <button onClick={()=>handleAddToCart(book)}>Select</button>
            
        </div>
    );
};

export default Book;