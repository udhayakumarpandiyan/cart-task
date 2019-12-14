import React, { useState } from 'react';
import '../styles/index.scss';

const Card = (props) => {
    // const [selectedIndex, setTab] = useState(0);
    // const [selectedLanguageIndex, setLanguage] = useState(props.selectedLanguageIndex);
    // const [collapsed, setCollapsed] = useState(false);
    // category: "fiction"
    // discount: 10
    // id: 9090
    // img_url: "http://lorempixel.com/500/600/technics/"
    // name: "Item1"
    // price: 200
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
            <button className="add-to-cart-button"
                onClick={() => props.onAddToCartClick(props.item)}>
                Add to Cart
                </button>
        </div >
    )
}
export default Card;