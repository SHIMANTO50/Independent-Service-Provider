import React, { useEffect, useState } from 'react';
import CheckOutDetails from '../CheckoutDetails/CheckOutDetails';


const Checkout = () => {
    const [checkout, setCheckout] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setCheckout(data))
    }, [])
    return (
        <div>
            <h2>Checkout Details</h2>
            <div className="container">
                <div className="row">
                    {
                        checkout.map(checkoutInfo => <CheckOutDetails key={checkout.id} checkoutInfo={checkoutInfo}></CheckOutDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Checkout;