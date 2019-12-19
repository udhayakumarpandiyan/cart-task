import React, { useState } from 'react';
import AlertModal from '../../../common/alert-modal/alertModal';
import '../styles/index.scss';

const Card = (props) => {
    let [cartItemsCount, setCartItemsCount] = useState(1);
    let [cartItemsPrice, setCardItemsPrice] = useState(props.item && props.item.price);
    let [showRemoveDialog, setRemoveDialogVisibility] = useState(false);
    let item = props.item;
    let originalPrice = (item.price / (100 - item.discount) * 100).toFixed(0);

    const decreaseCartItems = () => {
        if (cartItemsCount > 1) {
            cartItemsCount -= 1;
            cartItemsPrice += item.price;
            setCartItemsCount(cartItemsCount);
            setCardItemsPrice(cartItemsPrice);
            props.setPriceDetails({
                increase: false,
                cartItemsPrice: originalPrice,
                discount: originalPrice - item.price
            });
        }
    }
    const increaseCartItems = () => {
        if (cartItemsCount < 10) {
            cartItemsCount += 1;
            cartItemsPrice += item.price;
            setCartItemsCount(cartItemsCount);
            setCardItemsPrice(cartItemsPrice);
            props.setPriceDetails({
                increase: true,
                cartItemsPrice: originalPrice,
                discount: originalPrice - item.price
            });
        }
    }
    const onRemoveItemClick = () => {
        setRemoveDialogVisibility(true);
    }
    const onAlertClose = () => {
        setRemoveDialogVisibility(false);
    }
    const onYesClick = () => {
        props.onRemoveItemClick();
        setRemoveDialogVisibility(false);
    }

    return (
        <div className="cart-card">
            <div className="item-details">
                <img className="item-image"
                    src={item.img_url} />
                <div className="item-content">
                    <div className="item-left-content">
                        <label className="item-name">{item.name}</label>
                        <div className="card-content">
                            <label className="price-after-discount">&#8377;{item.price}</label>
                            <label className="original-price">
                                {originalPrice}
                            </label>
                            <label className="off-label">{`${item.discount} % off`}</label>
                        </div>
                    </div>
                    <div className="cart-controls">
                        <button onClick={decreaseCartItems}>-</button>
                        <input value={cartItemsCount}></input>
                        <button onClick={increaseCartItems}>+</button>

                    </div>
                    <button className="remove-button"
                        onClick={onRemoveItemClick}>
                        Remove
                    </button>
                </div>
            </div>
            <AlertModal confirmation
                title={`Remove Cart Item `}
                open={showRemoveDialog}
                content={<div style={{ padding: "10px 0px 30px 0px" }}>
                    Are you sure want to remove this item from your cart ?
                </div>}
                btnTtl="Remove"
                onYesClick={onYesClick}
                onClose={onAlertClose} />

        </div >
    )
}
export default Card;