import React, { useState } from 'react';
import '../styles/index.scss';

const Card = (props) => {
    let [cartItemsCount, setCartItemsCount] = useState(1);
    let item = props.item && props.item.item;
    const decreaseCartItems = () => {
        if (cartItemsCount > 0) {
            cartItemsCount -= 1;
            setCartItemsCount(cartItemsCount);
        }
    }
    const increaseCartItems = () => {
        if (cartItemsCount < 10) {
            cartItemsCount += 1;
            setCartItemsCount(cartItemsCount);
        }
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
                                {(item.price / (100 - item.discount) * 100).toFixed(0)}
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
                        onClick={props.onRemoveItemClick}>
                        Remove
                    </button>
                </div>
            </div>


        </div >
    )
}
export default Card;