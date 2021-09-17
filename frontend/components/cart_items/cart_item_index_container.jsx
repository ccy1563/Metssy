import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import {
    fetchCartItems,
    fetchCartItem,
    createCartItem,
    updateCartItem,
    deleteCartItem
} from '../../actions/cart_item_actions';

import {
    fetchProduct,
    fetchProducts,
} from '../../actions/product_actions'

import CartItemIndex from './cart_item_index'

const mSTP = state => {
    // debugger
    return {
        user: state.session.id,
        currentUser: state.entities.users[state.session.id],
        cartItems: Object.values(state.entities.cartItems),
        // fetch products to state from componentdidmount
        // get fetched data from state add make it into an array (products)
        products: Object.values(state.entities.products),
    }
};

const mDTP = dispatch => ({
    fetchCartItems: () => dispatch(fetchCartItems()),
    fetchCartItem: cartItemId => dispatch(fetchCartItem(cartItemId)),
    updateCartItem: cartItem => dispatch(updateCartItem(cartItem)),
    deleteCartItem: cartItem => dispatch(deleteCartItem(cartItem)),
    fetchProducts: () => dispatch(fetchProducts())

    // fetchProduct: productId => dispatch(fetchProduct(productId)),
    // createCartItem: cartItem => dispatch(createCartItem(cartItem)),
});

export default connect(mSTP, mDTP)(CartItemIndex);
