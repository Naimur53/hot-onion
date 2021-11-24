import { handleBreakpoints } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row, Spinner, Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import useAuth from '../../hooks/useAuth.';
import { getStoredCart, removeOrders } from '../../utilities/fakeDb';
import SmallCard from '../SmallCard/SmallCard';

const CheckOut = () => {
    const [items, setItems] = useState([])

    console.log('items', items);
    const { user, updateCart, setUpdateCart } = useAuth();
    const { register, formState: { errors }, handleSubmit, } = useForm();
    useEffect(() => {
        setItems(getStoredCart());

    }, [updateCart])
    const onSubmit = data => {
        data['orders'] = items;
        axios.post('https://frozen-woodland-58819.herokuapp.com/order', data)
            .then(res => {
                console.log(res.data)
                if (res.data?.insertedId) {
                    alert('successfully order');
                    setUpdateCart(0);
                    removeOrders();
                }
            });
        console.log('submit', data);
    }
    let subTotal = 0;
    if (!items.length) {
        return <div style={{ height: '100vh' }} className='d-flex justify-content-center align-items-center'>
            <h3>No cart available</h3>
        </div>
    }
    return (
        <div className='container py-5 mt-5'>
            <div className='row gx-4'>
                <div className="col-md-5">
                    <div>
                        <h2 className='py-2 border-bottom border-1  border-dark'>Edit Delivery Details</h2>
                        {
                            user.email ? <form className=' ' onSubmit={handleSubmit(onSubmit)}>
                                <input value={user.email} className='mt-4 ps-2 py-2 bg-light border-0 w-100' type='email' placeholder='Email'{...register("email", { required: true })} />
                                {errors.email && <span className='text-danger  '>This field is required</span>}
                                <br />
                                <input value='Deliver to Door' className='mt-4 ps-2 py-2 bg-light border-0 w-100' type='text' placeholder='Deliver to'{...register("deliverTo", { required: true })} />
                                <br />
                                {errors.deliverTo && <span className='text-danger  '>This field is required</span>}
                                <input className='mt-4 ps-2 py-2 bg-light border-0 w-100' type='text' placeholder='Flat,suite or floor'{...register("flat", { required: true })} />
                                <br />
                                {errors.flat && <span className='text-danger  '>This field is required</span>}
                                <input className='mt-4 ps-2 py-2 bg-light border-0 w-100' type='text' placeholder='Business name'{...register("business name")} />
                                <br />
                                <input className='mt-4 ps-2 py-2 bg-light border-0 w-100' type='text' placeholder='Add delivery instructor' {...register("instructor", { required: true })} />
                                {errors.instructor && <span className='text-danger  '>This field is required</span>}
                                <br />
                                <input className='btn btn-danger mt-4 ps-2 py-2 border-0 w-100 text-white' type="submit" value='Confirm' />
                            </form>
                                : <Spinner variant='border' color='danger'></Spinner>
                        }
                    </div>
                </div>
                <div className="col-md-2">
                </div>
                <div className="col-md-4">
                    <div className='mb-3'>
                        <h6>Arriving in 20-30 min</h6>
                        <div className="row ">
                            {

                                items[0] && items.map(data => {
                                    subTotal += data.price;
                                    console.log(subTotal);
                                    return <SmallCard data={data}></SmallCard>
                                })
                            }
                        </div>
                    </div>
                    <Table striped hover>
                        <tbody >
                            <tr>
                                <td>subtotal</td>
                                <td>${subTotal}</td>
                            </tr>
                            <tr>
                                <td>Delivery Charge</td>
                                <td>$5</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>${subTotal + 5}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>

        </div>
    );
};

export default CheckOut;