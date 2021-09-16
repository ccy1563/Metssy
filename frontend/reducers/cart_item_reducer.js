import {
    RECEIVE_CART_ITEMS,
    RECEIVE_CART_ITEM,
    REMOVE_CART_ITEM
} from '../actions/cart_item_actions';

const cartItemReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_CART_ITEMS:
            return { ...action.items };
        case RECEIVE_CART_ITEM:
            // debugger;
            nextState[action.item.id] = action.item;
            return nextState;
        case REMOVE_CART_ITEM:
            delete nextState[action.item.id]
            return nextState;
        // return { ...oldState, [action.review.id]: undefined }
        default:
            return oldState;
    }
}

export default cartItemReducer;