import React from 'react';
import './InfoCard.css'
const InfoCard = () => {
    return (
        <div className='container my-5 py-5'>
            <div className='w-50 mb-5 '>
                <h2>Why you choose us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolor facere, quas quam quasi, fuga minima ducimus  !</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100 rounded-4">
                        <img src='https://i.ibb.co/ggCTWfT/adult-blur-blurred-background-687824.png' className="card-img-top" alt="..." />
                        <div className="card-body d-flex">
                            <div className='px-2'>
                                <i className="fas text-white p-2 bg-danger rounded-circle fa-car"></i>

                            </div>
                            <div>
                                <h4 className='fs-5 mb-3'>Fast Delivery</h4>
                                <p className='fs-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores architecto obcaecati quas dolorum?  </p>
                                <span className='text-primary text-decoration-none' href="#">See more <i className="fas ms-2 fs-6 p-1 bg-success rounded-circle text-white fa-arrow-right"></i> </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 rounded-4">
                        <img src='https://i.ibb.co/mDXH0wN/chef-cook-food-33614.png' className="card-img-top" alt="..." />
                        <div className="card-body d-flex">
                            <div className='px-2'>
                                <i className="far fa-bell text-white p-2 bg-danger rounded-circle "></i>

                            </div>
                            <div>
                                <h4 className='fs-5 mb-3'>A Good Auto Responder</h4>
                                <p className='fs-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores architecto obcaecati quas dolorum?  </p>
                                <span className='text-primary text-decoration-none' href="#">See more <i className="fas ms-2 fs-6 p-1 bg-success rounded-circle text-white fa-arrow-right"></i> </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 rounded-4">
                        <img src='https://i.ibb.co/vBk7L3c/architecture-building-city-2047397.png' className="card-img-top" alt="..." />
                        <div className="card-body d-flex">
                            <div className='px-2'>
                                <i className="fas fa-truck text-white p-2 bg-danger rounded-circle "></i>

                            </div>
                            <div>
                                <h4 className='fs-5 mb-3'>Fast Delivery</h4>
                                <p className='fs-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores architecto obcaecati quas dolorum?  </p>
                                <span className='text-primary text-decoration-none pointer ' href="#">See more <i className="fas ms-2 fs-6 p-1 bg-success rounded-circle text-white fa-arrow-right"></i> </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default InfoCard;