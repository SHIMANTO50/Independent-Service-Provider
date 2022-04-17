import React from 'react';

const CheckOutDetails = ({ checkoutInfo }) => {
    const { name, price, img, description } = checkoutInfo;
    return (
        <div className='gx-5 gy-3 col-sm-12 col-md-6 col-lg-4'>
            <div className="card shadow" style={{ width: "18rem" }}>
                <img style={{ height: "400px" }} src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Subject: {name}</h5>
                    <p>Price:{price}</p>
                    <p className="card-text">Description: {description}</p>

                </div>
            </div>
        </div>
    );
};

export default CheckOutDetails;