import React from 'react';
import Banner from '../Banner/Banner';
import DiscountBatch from '../DiscountBatch/DiscountBatch';
import Services from './../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <DiscountBatch></DiscountBatch>
        </div>
    );
};

export default Home;