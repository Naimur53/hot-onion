import React from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <>
            <div data-aos="fade-in" className='bg-header  mt-5'>
                <div className="container d-flex justify-content-center align-items-center h-100">
                    <div className="w-50 d-flex justify-content-center align-items-center flex-column">
                        <h1 data-aos="fade-right">Best food waiting for your belly</h1>
                        <InputGroup data-aos="fade-left" className="mb-3 mt-3 w-75">
                            <FormControl
                                className='rounded-pill header-input py-2 '
                                placeholder="Search your food"
                            />
                            <Button className="header-btn rounded-pill bg-danger text-white px-4 border-0 position-relative" id="button-addon2">
                                Search
                            </Button>
                        </InputGroup>
                    </div>
                </div>
            </div>
            <div className='text-center py-5 mb-5'>
                <NavLink className='text-decoration-none fw-bold me-3 unselect' activeClassName='text-danger border-danger' to='/home/breakfast'>Breakfast</NavLink>
                <NavLink className='text-decoration-none fw-bold  me-3 unselect' activeClassName='text-danger border-danger' to='/home/lunch'>Lunch</NavLink>
                <NavLink className='text-decoration-none fw-bold me-3 unselect' activeClassName='text-danger border-danger' to='/home/dinner'>Dinner</NavLink>
            </div>

        </>
    );
};

export default Header;