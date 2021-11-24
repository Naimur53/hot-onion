import React from 'react';
import { useForm } from 'react-hook-form';
import "./Login.css";
import logo2 from '../../images/logo2.png';
import useAuth from '../../hooks/useAuth.';
import { Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { useLocation, useNavigate } from 'react-router';

const Login = () => {
    const { logInWithEmail, googleSignIn } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    console.log(location);
    const onSubmit = e => {
        logInWithEmail(e);
    }
    const { register, formState: { errors }, handleSubmit, } = useForm();
    return (
        <div className='login  d-flex justify-content-center align-items-center'>
            <div className='w-25'>
                <img className='img-fluid  my-5' src={logo2} alt="" />
                <form className=' ' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mt-4 ps-2 py-2 bg-light border-0 w-100' type='email' placeholder='Email'{...register("email", { required: true })} />
                    {errors.email && <span className='text-danger  '>This field is required</span>}
                    <br />
                    <input className='mt-4 ps-2 py-2 bg-light border-0 w-100' type='password' placeholder='Password' {...register("password", { required: true, minLength: 6 })} />
                    {
                        errors.password?.type === 'minLength' && <span>length 6 is need</span>
                    }
                    {errors.password && <span className='text-danger d-block'>This field is required</span>}

                    <br />
                    <input className='btn btn-danger mt-4 ps-2 py-2 border-0 w-100 text-white' type="submit" value='Sign in' />
                </form>
                <div className='text-center mt-4'>
                    <button onClick={() => googleSignIn(location, navigate)} className="text-danger outline-0 btn btn-transparent">Sign in with google</button>
                    <br />
                    <Nav.Link as={HashLink} to="/login" className="text-danger btn ">already have a account?</Nav.Link>

                </div>
            </div>
        </div>
    );
};

export default Login;