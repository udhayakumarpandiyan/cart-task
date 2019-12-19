import * as TYPES from '../types';
import { API } from '../../config';

const onFail = msg => ({
    type: TYPES.ON_ERROR,
    msg
});

const onGetCartItemsSuccess = payload => {
    return {
        payload,
        type: TYPES.GET_SHOPPING_LIST,
    };
};
export const getCartItems = (items) => {
    return (dispatch) => {
        dispatch(onGetCartItemsSuccess({ items }));
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
    return {
        payload,
        type: TYPES.REMOVE_ITEM_FROM_CART,
    };
};
export const removeItemFromCart = (items) => {
    return (dispatch) => {
        dispatch(onRemoveItemSuccess([...items]));
    };
}