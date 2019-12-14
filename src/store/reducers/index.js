import { combineReducers } from 'redux'
import shoppingListReducer from './ShoppingListReducer';
import cartReducer from './CartReducer';

const rootReducer = combineReducers({
    shoppingListReducer, cartReducer
})

export default rootReducer;
