import React from 'react';
import logo2 from '../../images/logo2.png'
import { Navbar, Container, Nav } from 'react-bootstrap';
import './MainNav.css'
import useFirebase from '../../hooks/useFirebase';
import { HashLink } from 'react-router-hash-link';
const MainNav = () => {
    const { user, handleSignOut } = useFirebase();

    console.log(user, 'main');

    return (
        <Navbar bg="white" sticky='top' expand="lg">
            <Container>
                <Navbar.Brand href="#"><img className='logo2' src={logo2} alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0 align-items-center"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link><span ><i className="fas fa-shopping-cart"></i> <sup className='text-danger fw-bold'>0</sup></span></Nav.Link>
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