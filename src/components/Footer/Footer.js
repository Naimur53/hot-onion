import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../images/logo.png"
const Footer = () => {
    return (
        <footer className='bg-dark'>
            <div className='container'>
                <div className="row py-5">
                    <div className="col-md-6">
                        <img className='w-25' src={logo} alt="" />
                    </div>
                    <div className="col-md-3 text-white">
                        <ul className='list-unstyled' >
                            <li className='mb-2'>About online food</li>
                            <li className='mb-2'>Read our blog </li>
                            <li className='mb-2'><NavLink className='text-decoration-none text-danger' to='/signup'>Sign up to deliver</NavLink></li>
                            <li className='mb-2'>Add your restaurant</li>
                        </ul>
                    </div>
                    <div className="col-md-3  text-white">
                        <ul className='list-unstyled'>
                            <li className='mb-2'>Get help</li>
                            <li className='mb-2'>Read FAQs</li>
                            <li className='mb-2'>View all cities</li>
                            <li className='mb-2'>Restaurants near me</li>
                        </ul>
                    </div>
                </div>
                <div className='text-white d-flex justify-content-between pt-4'>
                    <small>Copyright &#169; 2021 Online Food</small>
                    <ul className='list-unstyled list-inline'>
                        <li className="list-inline-item mx-3">Privacy Policy</li>
                        <li className="list-inline-item mx-3">Terms of Use</li>
                        <li className="list-inline-item mx-3">Pricing</li>

                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;