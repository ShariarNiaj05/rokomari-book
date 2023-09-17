import React from 'react';

const SingleCartItem = ({ singleCartItem }) => {
    const {bookTitle} = singleCartItem
    return (
        <div>
            <h4>{bookTitle}</h4>
        </div>
    );
};

export default SingleCartItem;