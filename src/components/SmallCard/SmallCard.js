import React from 'react';

const SmallCard = props => {
    console.log(props);
    const { name, price, quantity, img } = props.data;
    return (
        <div className='col-md-12  ' >
            <div >
                <div className="card shadow-none py-3 rounded bg-light border-0  mb-3">
                    <div class="row g-0">
                        <div class="col-md-4 ps-2">
                            <img src={img} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h6 className="card-title">{name}</h6>
                                <h6 className="card-title text-danger">${price}</h6>
                                <h6 className="card-title ">Quantity:{quantity}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default SmallCard;