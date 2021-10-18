import React, { useEffect, useState } from 'react';
import logo2 from '../../images/logo2.png'
import { Navbar, Container, Nav } from 'react-bootstrap';
import './MainNav.css'
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth.';
import { getStoredCart } from '../../utilities/fakeDb';
const MainNav = () => {
    const { user, handleSignOut } = useAuth();
    const [totalCart, setTotalCart] = useState(0);
    console.log(totalCart);
    const cart = getStoredCart();

    useEffect(() => {
        const allKeys = Object.keys(cart);
        console.log(allKeys);
        setTotalCart(allKeys.length);

    }, [])
    return (
        <Navbar bg="white" fixed='top' expand="lg">
            <Container>
                <Navbar.Brand href="#"><img className='logo2' src={logo2} alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0 align-items-center"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link><span ><i className="fas fa-shopping-cart"></i> <sup className='text-danger fw-bold'>{totalCart}</sup></span></Nav.Link>
                        {
                            user.email
                                ?
                                <button className='btn  fw-bold' onClick={handleSignOut}>Log Out</button> : <Nav.Link as={HashLink} to='/login'>Login</Nav.Link>
                        }
                        {
                            !user.email
                            &&
                            <Nav.Link as={HashLink} to='/signup'>Sign Up</Nav.Link>
                        }

                        {
                            user.photoURL
                            &&
                            <img className='img-fluid user-img rounded-circle mx-2' src={user.photoURL} alt="" />
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MainNav;