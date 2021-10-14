import React from 'react';
import { useForm } from 'react-hook-form';
import './SingUp.css'
import logo2 from '../../images/logo2.png'
import useFirebase from '../../hooks/useFirebase';

const SingUp = () => {
    const { user, googleSignIn, signInWithEmail } = useFirebase();
    console.log(user, 'up');
    const { register, formState: { errors }, watch, handleSubmit, } = useForm();
    const onSubmit = e => {
        signInWithEmail(e);
    }
    return (
        <div className='container-fluid d-flex justify-content-center flex-column align-items-center bg-logo'>
            <img className='w-25 mb-5' src={logo2} alt="" />
            <form className='w-25' onSubmit={handleSubmit(onSubmit)}>
                <input className='ps-2 py-2 bg-light border-0 w-100' type='text' placeholder='Name' {...register("name", { required: true })} />
                {errors.name && <span className='text-danger  '>This field is required</span>}

                <br />
                <input className='mt-4 ps-2 py-2 bg-light border-0 w-100' type='email' placeholder='Email'{...register("email", { required: true })} />
                {errors.email && <span className='text-danger  '>This field is required</span>}
                <br />
                <input className='mt-4 ps-2 py-2 bg-light border-0 w-100' type='password' placeholder='Password' {...register("password", { required: true, minLength: 6 })} />
                {
                    errors.password?.type === 'minLength' && <span>length 6 is need</span>
                }
                {errors.password && <span className='text-danger d-block'>This field is required</span>}

                <br />
                <input className='mt-4 ps-2 py-2 bg-light border-0 w-100' type='password' placeholder='Re-Enter Password' {...register("reEnterPassword", { required: true })} />
                <br />
                {
                    watch('password') === watch("reEnterPassword") || <span className=''>password do not match </span>
                }
                <input className='btn btn-danger mt-4 ps-2 py-2 border-0 w-100 text-white' type="submit" value='Sign Up' />
            </form>
            <div className='text-center mt-4'>
                <button onClick={googleSignIn} className="text-danger outline-0 btn btn-transparent">Sign in with google</button>
                <br />
                <span className="text-danger ">already have a account?</span>

            </div>
        </div>
    );
};

export default SingUp;