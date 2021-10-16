import React from 'react';
import useCard from '../../hooks/useCard';
import SingleCart from '../SingleCart/SingleCart';
import Skeleton from '@mui/material/Skeleton';
import { Avatar } from '@mui/material';

const Breakfast = () => {
    const { data, loading } = useCard();
    console.log(data);
    return (
        <div className='container text-center'>
            <div className="card-container">

                {
                    loading ? Array.from({ length: 6 }).map((_, idx) => (
                        <div>
                            <Skeleton className='rounded-3' variant="rectangular" height={290} />
                            <Skeleton className='mt-3 mx-auto rounded-3' variant="rectangular" width={300} height={20} />
                            <Skeleton className='mt-3 rounded-3' variant="rectangular" height={20} />
                            <Skeleton className='mt-3 mx-auto rounded-3' variant="rectangular" width={50} height={20} />

                        </div>
                    ))
                        :
                        data?.slice(0, 6).map(SingleData => <SingleCart data={SingleData}></SingleCart>)
                }
            </div>
            <button className="btn btn-warning mt-5">Checkout Your Food</button>


        </div>
    );
};

export default Breakfast;