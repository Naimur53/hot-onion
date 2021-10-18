import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Slider from 'react-slick';
import { addToDb } from '../../utilities/fakeDb';
import './SingleDetails.css'
const FoodCard = () => {
    const [data, setData] = useState([]);
    const [count, setCount] = useState(1);
    const [upDatePrice, setUpDatePrice] = useState(0);

    const { Id } = useParams();
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(res => {
                const singleData = res[0] && res.filter(allData => allData.id === Id)[0];
                setData(singleData);
                setUpDatePrice(singleData.price);
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
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    return (
        <div className='container'>
            <div className="row g-4">
                <div className="col-md-6">
                    <div className='d-flex justify-content-center align-items-center  '>
                        <div>
                            <h1 className='mb-4'>{name}</h1>
                            <p className='mb-4'>{description}</p>
                            <div className="d-flex justify-content-between w-50 align-items-center">
                                <span className='w-25  fs-2 '>${upDatePrice.toFixed(2)}</span>
                                <div className='d-inline-block py-3 px-3 border rounded-pill position-relative '>
                                    <i onClick={handleMinus} className="fas fa-minus  p-2"></i>
                                    <span className='mx-4 user-select-none'>{count}</span>
                                    <i onClick={handlePlus} className="fas fa-plus text-danger p-2"></i>
                                </div>
                            </div>
                            <button onClick={() => addToDb(Id, count)} className="btn btn-danger my-5 py-3 px-5 rounded-pill"><i className="fas me-3 fa-shopping-cart"></i> Add</button>

                        </div>

                    </div>
                    <Slider className='bg-warning' {...settings}>
                        <div>
                            <h3 className='text-danger'>1 </h3>
                        </div>
                        <div>
                            <h3>2 </h3>
                        </div>
                        <div>
                            <h3>3 </h3>
                        </div>
                        <div>
                            <h3>4 </h3>
                        </div>
                        <div>
                            <h3>5 </h3>
                        </div>
                        <div>
                            <h3>6</h3>
                        </div>
                    </Slider>

                </div>
                <div className="col-md-6">
                    <img className='img-fluid' src={img} alt="" />
                </div>
            </div>


        </div>
    );
};

export default FoodCard;