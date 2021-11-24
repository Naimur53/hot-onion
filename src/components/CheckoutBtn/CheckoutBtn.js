import React from 'react';
import { useNavigate } from 'react-router';
import { getStoredCart } from '../../utilities/fakeDb';

const CheckoutBtn = () => {
    const exists = getStoredCart();
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/checkout')
    }
    return (
        Object.keys(exists).length ? <button onClick={handleClick} className="btn btn-warning mt-5">Checkout Your Food</button> : <button disabled className="btn btn-warning mt-5">Checkout Your Food</button>
    );
};

export default CheckoutBtn;