import React from 'react';
import './SingleCart.css'
import { useNavigate } from "react-router-dom";

const SingleCart = props => {
    const { _id, img, price, name, description } = props.data;
    let navigate = useNavigate();
    const handleCardClick = e => {
        e.stopPropagation();
        navigate(`/home/${_id}`);
        console.log('call');
    }
    return (
        <div onClick={handleCardClick} >
            <div className='card border-0 text-center rounded rounded-3 px-4 pb-3'>
                <img className='img-fluid mb-3' src={img} alt="" />
                <h5 className='text-dark fs-6 mt-1'>{name}</h5>
                <h6 className='text-secondary fs-6 mt-1'>{description.slice(0, 30)}</h6>
                <h4 className='fs-5 mt-1 text-dark'>${price}</h4>
            </div>
        </div>
    );
};

export default SingleCart;