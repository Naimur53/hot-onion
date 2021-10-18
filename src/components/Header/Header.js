import React from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <>
            <div className='bg-header'>
                <div className="container d-flex justify-content-center align-items-center h-100">
                    <div className="w-50 d-flex justify-content-center align-items-center flex-column">
                        <h1>Best food waiting for your belly</h1>
                        <InputGroup className="mb-3 mt-3 w-75">
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
                <NavLink className='text-decoration-none fw-bold me-3 unselect' activeClassName='text-danger border-danger' to='/breakfast'>Breakfast</NavLink>
                <NavLink className='text-decoration-none fw-bold  me-3 unselect' activeClassName='text-danger border-danger' to='/lunch'>Lunch</NavLink>
                <NavLink className='text-decoration-none fw-bold me-3 unselect' activeClassName='text-danger border-danger' to='/dinner'>Dinner</NavLink>
            </div>

        </>
    );
};

export default Header;