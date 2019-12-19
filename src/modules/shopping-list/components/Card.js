import React from 'react';
import '../styles/index.scss';

const Card = (props) => {
    return (
        <div className="card">
            <img className="item-image"
                src={props.item.img_url} />
            <label className="item-name">{props.item.name}</label>
            <div className="card-content">
                <label className="price-after-discount">&#8377;{props.item.price}</label>
                {props.item.discount > 0 ? <div><label className="original-price">
                    {(props.item.price / (100 - props.item.discount) * 100).toFixed(0)}
                </label>
                    <label className="off-label">{`${props.item.discount} % off`}</label>
                </div> : <label className="no-discount">No Discount</label>
                }
            </div>
            <button className="add-to-cart-button" disabled={props.item.isAddedToCart}
                onClick={() => props.onAddToCartClick(props.item)}>
                {props.item.isAddedToCart ? "Added to Cart" : "Add to Cart"}
            </button>
        </div >
    )
}
export default Card;