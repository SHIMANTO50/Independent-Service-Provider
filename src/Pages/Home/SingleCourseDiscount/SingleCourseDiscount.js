import React from 'react';

const SingleCourseDiscount = ({ discountTotal }) => {
    const { coursename, discount, time } = discountTotal;
    return (
        <div className='gx-5 gy-3 col-sm-12 col-md-6 col-lg-4'>
            <div className="card shadow" style={{ width: "18rem" }}>
                <div className="card-body">
                    <p>Subject:{coursename}</p>
                    <p className="card-text">Discount: {discount}</p>
                    <p className="card-text">Time Remaining: {time}</p>

                </div>
            </div>
        </div>
    );
};

export default SingleCourseDiscount;