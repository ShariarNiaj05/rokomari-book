import React from 'react';
import SingleCartItem from '../SingleCartItem/SingleCartItem';

const Cart = ({ addToCart, totalPrice }) => {

    return (
        <div>
            <h3>Total Selected Books: {addToCart.length}</h3>
            <h4>Total Price: {totalPrice}</h4>

            {
                addToCart.map(singleCartItem => <SingleCartItem singleCartItem={singleCartItem}></SingleCartItem>)
            }

            

        </div>
    );
};

export default Cart;