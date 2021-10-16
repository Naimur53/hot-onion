import React from 'react';
import './SingleCart.css'

const SingleCart = props => {
    const { img, price, name, description } = props.data;
    return (
        <div className='card border-0 text-center rounded rounded-3 px-4 '>
            <img className='img-fluid mb-3' src={img} alt="" />
            <h5 className='text-dark fs-6 mt-1'>{name}</h5>
            <h6 className='text-secondary fs-6 mt-1'>{description}</h6>
            <h4 className='fs-5 mt-1'>${price}</h4>
        </div>
    );
};

export default SingleCart;