import React from 'react';
import { getStoredCart } from '../../utilities/fakeDb';

const CheckoutBtn = () => {
    const exists = getStoredCart();
    return (
        Object.keys(exists).length ? <button className="btn btn-warning mt-5">Checkout Your Food</button> : <button disabled className="btn btn-warning mt-5">Checkout Your Food</button>
    );
};

export default CheckoutBtn;