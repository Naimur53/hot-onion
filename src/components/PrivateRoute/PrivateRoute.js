import React from 'react';
import { Spinner } from 'react-bootstrap';
import {
    Routes,
    Route,
    Link,
    useNavigate,
    useLocation,
    Navigate,
    Outlet
} from "react-router-dom";
import useAuth from '../../hooks/useAuth.';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    let location = useLocation();
    if (loading) {
        return <div style={{ height: '100vh' }} className='d-flex justify-content-center align-items-center'>
            <Spinner animation="grow" variant="warning" />
        </div>
    }
    if (!user.email) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return children;
};

export default PrivateRoute;