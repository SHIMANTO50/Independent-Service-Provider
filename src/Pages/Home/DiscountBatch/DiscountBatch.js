import React, { useEffect, useState } from 'react';
import SingleCourseDiscount from './../SingleCourseDiscount/SingleCourseDiscount';

const DiscountBatch = () => {
    const [discounts, setDiscount] = useState([]);
    useEffect(() => {
        fetch('discount.json')
            .then(res => res.json())
            .then(data => setDiscount(data))
    }, [])
    return (
        <div>
            <h1 className='text-center text-info mt-5'>Limited Offer On Courses</h1>
            <div className="container">
                <div className="row">
                    {
                        discounts.map(discountTotal => <SingleCourseDiscount id={discountTotal.id} discountTotal={discountTotal}></SingleCourseDiscount>)
                    }
                </div>
            </div>
        </div>
    );
};

export default DiscountBatch;