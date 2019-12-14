import * as TYPES from '../types';
import { API } from '../../config';

const onFail = msg => ({
    type: TYPES.ON_ERROR,
    msg
});

const ongetCartItemsSuccess = payload => {
    return {
        payload,
        type: TYPES.GET_SHOPPING_LIST,
    };
};
export const getCartItems = (user) => {
    return (dispatch) => {

        fetch(API.cartItems.getCartItems)
            .then(
                function (response) {
                    if (response.status !== 200) {
                        return;
                    }
                    response.json().then(function (data) {
                        dispatch(ongetCartItemsSuccess(data));
                    });
                }
            )
            .catch(function (err) {
                dispatch(onFail(err));
            });
    };

}
const onAddItemSuccess = payload => {
    return {
        payload,
        type: TYPES.ADD_ITEM_TO_CART,
    };
};

export const addItemToCart = (item) => {
    return (dispatch) => {
        dispatch(onAddItemSuccess({ item }));
    };
}

const onRemoveItemSuccess = payload => {
    console.log("Payload", payload);
    return {
        payload,
        type: TYPES.REMOVE_ITEM_FROM_CART,
    };
};
export const removeItemFromCart = (items) => {
    return (dispatch) => {
        dispatch(onRemoveItemSuccess({ ...items }));
    };
}