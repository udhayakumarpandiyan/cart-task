import { GET_CART_ITEMS, ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from "../types";
const initialState = {
    cartItems: [],

}

export default function cartItems(state = initialState, action) {
    switch (action.type) {
        case GET_CART_ITEMS:
            return {
                ...state,
                cartItems: action.payload
            };

        case REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: action.payload
            };

        case ADD_ITEM_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload.item]
            };
        default:
            return {
                ...state
            };
    }
};
