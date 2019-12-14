import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import RoutePath from '../../route';
import ShoppingList from '../../modules/shopping-list/containers/ShoppingList';
import CartItems from '../../modules/cart-items/containers/CartItems';

const MainContent = (props) => {


    return (<div className="content">
        <Switch>
            <Redirect exact from='/' to={RoutePath.SHOPPING_LIST} />
            <Route exact path={RoutePath.SHOPPING_LIST} component={ShoppingList} />
            <Route exact path={RoutePath.CART_ITEMS} component={CartItems} />
        </Switch>

    </div>)
}


export default MainContent;

