import React from 'react';
import SingleCartItem from '../SingleCartItem/SingleCartItem';

const Cart = ({ addToCart }) => {

    return (
        <div>
            <h3>Total Selected Books: {addToCart.length}</h3>

            {
                addToCart.map(singleCartItem => <SingleCartItem singleCartItem={singleCartItem}></SingleCartItem>)
            }

        </div>
    );
};

export default Cart;