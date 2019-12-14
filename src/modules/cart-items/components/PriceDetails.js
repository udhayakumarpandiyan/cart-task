import React, { useState } from 'react';
import '../styles/index.scss';

const PriceDetails = (props) => {
    let details = props.cartDetails || {};
    return (
        <div className="price-details">
            <label className="title">Price Details</label>
            <div className="details-with-border">
                {`Price (${details.totalItems} items`}) : <label> &#8377; {details.totalPrice}</label>
            </div>
            <div className="details">
                Discount :<label>&#8377; {details.totalDiscount}</label>
            </div>
            <div className="total-payable">
                <label>Total Payable</label>
                <label> &#8377; {details.totalPayable}</label>
            </div>
        </div >
    )
}
export default PriceDetails;