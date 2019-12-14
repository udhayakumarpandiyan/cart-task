import { GET_SHOPPING_LIST } from "../types";
const initialState = {
    shoppingList: undefined
}

export default function shoppingList(state = initialState, action) {
    switch (action.type) {
        case GET_SHOPPING_LIST:
            return {
                ...state,
                shoppingList: action.payload
            };

        default:
            return {
                ...state
            };
    }
};
