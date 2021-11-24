import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header';
import InfoCard from '../InfoCard/InfoCard';

const Home = props => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <InfoCard></InfoCard>


        </>
    );
};

export default Home;