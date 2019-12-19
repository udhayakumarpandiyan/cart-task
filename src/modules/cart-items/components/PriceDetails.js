import React from 'react';
import '../styles/index.scss';

const PriceDetails = (props) => {
    let details = props.cartDetails || {};
    return (
        <div className="price-details">
            <label className="title">Price Details</label>
            <div className="details-with-border">
                {`Price (${details.totalItems} items`}) : <label> &#8377; {details.totalPrice ? details.totalPrice : 0}</label>
            </div>
            <div className="details">
                Discount :<label>&#8377; {details.totalDiscount ? details.totalDiscount.toFixed(2) : 0}</label>
            </div>
            <div className="total-payable">
                <label>Total Payable</label>
                <label> &#8377; {details.totalPayable ? details.totalPayable.toFixed(2) : 0}</label>
            </div>
        </div >
    )
}
export default PriceDetails;