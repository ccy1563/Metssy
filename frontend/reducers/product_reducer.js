import {
    RECEIVE_PRODUCTS,
    RECEIVE_PRODUCT,
} from '../actions/product_actions';

const productReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return { ...action.products };
        case RECEIVE_PRODUCT:
            return { ...oldState, [action.product.id]: action.product }
        default:
            return oldState;
    }
}

export default productReducer;