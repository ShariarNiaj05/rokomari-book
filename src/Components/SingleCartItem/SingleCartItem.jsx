import React from 'react';

const SingleCartItem = ({ singleCartItem }) => {
    const {bookTitle, bookPrice} = singleCartItem
    // console.log(singleCartItem);
    return (
        <div>
            <h4>{bookTitle}</h4>
            {/* <p>{bookPrice }</p> */}
        </div>
    );
};

export default SingleCartItem;