import * as TYPES from '../types';
import { API } from '../../config';

const onFail = msg => ({
    type: TYPES.ON_ERROR,
    msg
});

const ongetShoppingListSuccess = payload => {
    return {
        payload,
        type: TYPES.GET_SHOPPING_LIST,
    };
};
export const getShoppingList = () => {
    return (dispatch) => {

        fetch(API.shoppingList.getShoppingList)
            .then(
                function (response) {
                    if (response.status !== 200) {
                        return;
                    }
                    response.json().then(function (data) {
                        console.log("Dataaa", data);
                        dispatch(ongetShoppingListSuccess(data));
                    });
                }
            )
            .catch(function (err) {
                dispatch(onFail(err));
            });
    };

}

