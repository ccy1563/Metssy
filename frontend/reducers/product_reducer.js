import {
    RECEIVE_PRODUCTS,
    RECEIVE_PRODUCT,
} from '../actions/product_actions';
import merge from 'lodash/merge';

const ProductReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_EVENTS:
            return { ...action.products };
        case RECEIVE_EVENT:
            return { ...oldState, [action.product.id]: action.product }
        default:
            return oldState;
    }
}

export default ProductReducer;