import React from 'react';
import DiscountBatch from '../DiscountBatch/DiscountBatch';
import Services from './../Services/Services';

const Home = () => {
    return (
        <div>
            <Services></Services>
            <DiscountBatch></DiscountBatch>
        </div>
    );
};

export default Home;