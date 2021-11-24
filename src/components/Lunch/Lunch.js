import React from 'react';
import useCard from '../../hooks/useCard';
import SingleCart from '../SingleCart/SingleCart';
import { Skeleton } from '@mui/material';
import CheckoutBtn from '../CheckoutBtn/CheckoutBtn';
const Lunch = props => {
    const { loading, data } = props.info;
    return (
        <div data-aos="fade-up" className="container  text-center">
            <div className="card-container">
                {
                    loading ? Array.from({ length: 6 }).map((_, idx) => (
                        <div key={idx}>
                            <Skeleton className='rounded-3' variant="rectangular" height={290} />
                            <Skeleton className='mt-3 mx-auto rounded-3' variant="rectangular" width={300} height={20} />
                            <Skeleton className='mt-3 rounded-3' variant="rectangular" height={20} />
                            <Skeleton className='mt-3 mx-auto rounded-3' variant="rectangular" width={50} height={20} />

                        </div>
                    ))
                        :
                        data?.slice(6, 12).map(SingleData => <SingleCart key={SingleData.id} data={SingleData}></SingleCart>)
                }

            </div>
            <CheckoutBtn></CheckoutBtn>
        </div>
    );
};

export default Lunch;