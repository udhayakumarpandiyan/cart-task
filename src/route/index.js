import history from './history';

const SHOPPING_LIST = '/shopping-list';
const CART_ITEMS = "/cart-items";

const redirect = (path, state) => {
    history.push(path, state);
}

export default {
    redirect: redirect,
    SHOPPING_LIST: SHOPPING_LIST,
    CART_ITEMS: CART_ITEMS,


}

