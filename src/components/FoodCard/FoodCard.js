import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import useAuth from '../../hooks/useAuth.';
import { addToDb } from '../../utilities/fakeDb';
import './FoodCard.css';
// import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
// Import Swiper styles
import 'swiper/swiper.min.css';
import { Spinner } from 'react-bootstrap';

const FoodCard = () => {
    const [data, setData] = useState({});
    const [count, setCount] = useState(1);
    const [upDatePrice, setUpDatePrice] = useState(0);
    const { updateCart, setUpdateCart } = useAuth();
    const { _id } = useParams();
    useEffect(() => {
        fetch(`https://frozen-woodland-58819.herokuapp.com/products/${_id}`)
            .then(res => res.json())
            .then(result => {
                setData(result);
                setUpDatePrice(result.price);
            })
    }, []);
    const { name, img, description, price } = data;
    const handlePlus = () => {
        setUpDatePrice(upDatePrice + price);
        setCount(count + 1);
    }
    const handleMinus = () => {
        if (count > 1) {
            setUpDatePrice(upDatePrice - price);
            setCount(count - 1);

        }
    }
    // console.log(data);
    if (!data.name) {
        return <div style={{ height: '100vh' }} className='d-flex justify-content-center align-items-center'>
            <Spinner animation="border" variant="warning" ></Spinner>
        </div>
    }
    return (
        <div className='container py-5 mt-5'>
            <div className="row flex-sm-column-reverse flex-md-row   g-4">
                <div className="col-md-6">
                    <div className='d-flex justify-content-center align-items-center  '>
                        <div>
                            <h1 className='mb-4'>{name}</h1>
                            <p className='mb-4'>{description}</p>
                            <div className="d-flex align-items-center">
                                <span className=' d-inline-block me-5 fs-2 '>${upDatePrice.toFixed(2)}</span>
                                <div className='d-inline-block py-3 px-3 border rounded-pill position-relative '>
                                    <i onClick={handleMinus} className="fas fa-minus  p-2"></i>
                                    <span className='mx-4 user-select-none'>{count}</span>
                                    <i onClick={handlePlus} className="fas fa-plus text-danger p-2"></i>
                                </div>
                            </div>
                            <button onClick={() => { addToDb(data, count); setUpdateCart(updateCart + 1) }} className="btn btn-danger my-5 py-3 px-5 rounded-pill"><i className="fas me-3 fa-shopping-cart"></i> Add</button>
                        </div>
                    </div>
                    {/* <div className='my-5'>
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={3}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide>Slide 1</SwiperSlide>
                            <SwiperSlide>Slide 2</SwiperSlide>
                            <SwiperSlide>Slide 3</SwiperSlide>
                            <SwiperSlide>Slide 4</SwiperSlide>
                        </Swiper>
                    </div> */}
                </div>
                <div className="col-md-6">
                    <img className='img-fluid' src={img} alt="" />
                </div>
            </div>


        </div>
    );
};

export default FoodCard;