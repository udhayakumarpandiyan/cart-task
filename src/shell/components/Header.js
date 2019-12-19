import React, { useState } from 'react';
import { AppLogo } from '../../constants/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import AlertModal from '../../common/alert-modal/alertModal';
import RoutePath from '../../route';

const Header = (props) => {
    const [showSearchTextInput, setTextInputVisibility] = useState(false);
    const [showAlert, setAlertVisibility] = useState(false);

    const onCartClick = () => {
        if (props.cartItems && props.cartItems.length > 0) {
            RoutePath.redirect(RoutePath.CART_ITEMS, { cartItems: props.cartItems });

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
                {props.showCart && <button onClick={onCartClick}>
                    <FontAwesomeIcon icon={faShoppingCart} color="white" />
                    {props.cartItems && props.cartItems.length > 0 &&
                        <div className="cart-info" >{props.cartItems.length}</div>
                    }
                </button>
                }

            </div>
            <AlertModal
                title={`No items in your cart`}
                open={showAlert}
                info={"Ok"}
                content={<div>
                    <h2 style={{ color: "#666666", fontSize: 14 }}
                        className="text-center">You can your start adding the items into your cart now</h2>
                </div>}
                onClose={onAlertClose} />
        </div>
    )
}
export default Header;