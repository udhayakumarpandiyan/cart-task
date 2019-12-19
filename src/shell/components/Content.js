import React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';

import RoutePath from '../../route';
import ShoppingList from '../../modules/shopping-list/containers/ShoppingList';
import CartItems from '../../modules/cart-items/containers/CartItems';

const MainContent = (props) => {


    return (<div className="content">
        <HashRouter basename={'/'}>
            <Redirect exact from='/' to={RoutePath.SHOPPING_LIST} />
            <Route path={RoutePath.SHOPPING_LIST} component={ShoppingList} />
            <Route path={RoutePath.CART_ITEMS} component={CartItems} />
        </HashRouter>

    </div>)
}


export default MainContent;

