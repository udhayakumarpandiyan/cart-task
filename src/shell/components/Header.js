import React, { useState } from 'react';
import { AppLogo } from '../../constants/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faCircle } from '@fortawesome/free-solid-svg-icons';
import AlertModal from '../../common/alert-modal/alertModal';
import RoutePath from '../../route';

const Header = (props) => {
    const [showSearchTextInput, setTextInputVisibility] = useState(false);
    const [showAlert, setAlertVisibility] = useState(false);
    const [showCart, setCartVisibility] = useState(props.cartItems && props.cartItems.length > 0);
    const onCartClick = () => {
        if (props.cartItems && props.cartItems.length > 0) {
            RoutePath.redirect(RoutePath.CART_ITEMS, { cartItems: props.cartItems });
            setCartVisibility(false);
        }
        else {
            setAlertVisibility(true);
            
        }
    }
    const onAlertClose = () => {
        setAlertVisibility(false);
    }
    return (
        <div className="header">
            <img src={AppLogo} />
            <div className="header-right-content">
                {showSearchTextInput && <input className="search-text-input" type="text" placeholder="Type here for Search" />}
                <button onClick={() => setTextInputVisibility(!showSearchTextInput)}>
                    <FontAwesomeIcon icon={faSearch} color="white" size="1x" />
                </button>
                {showCart && <button onClick={onCartClick}>
                    <FontAwesomeIcon icon={faShoppingCart} color="white" />
                    {props.cartItems && props.cartItems.length > 0 &&
                        <div className="cart-info" >{props.cartItems.length}</div>
                    }
                </button>
                }
            </div>
            <AlertModal
                title={`No Items in your cart`}
                open={showAlert}
                info={"Ok"}
                style={{ width: "764px" }}
                content={<div>
                    <h2 style={{ color: "#666666" }}
                        className="text-center">You can add 1 more or more items into your cart</h2>
                </div>}
                onClose={onAlertClose} />
        </div>
    )
}
export default Header;