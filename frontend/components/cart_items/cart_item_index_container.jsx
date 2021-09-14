import { connect } from 'react-redux';

import {
    fetchCartItems,
    fetchCartItem,
    createCartItem,
    updateCartItem,
    deleteCartItem
} from '../../actions/cart_item_actions';

import CartItemIndex from './cart_item_index'

const mSTP = state => {
    // debugger
    return {
        user: state.session.id,
        currentUser: state.entities.users[state.session.id],
        cartItems: Object.values(state.entities.cartItems),
    }
};

const mDTP = dispatch => ({
    fetchCartItems: () => dispatch(fetchCartItems()),
    fetchCartItem: cartItemId => dispatch(fetchCartItem(cartItemId)),
    updateCartItem: cartItem => dispatch(updateCartItem(cartItem)),
    deleteCartItem: cartItem => dispatch(deleteCartItem(cartItem)),

    // createCartItem: cartItem => dispatch(createCartItem(cartItem)),
});

export default connect(mSTP, mDTP)(CartItemIndex);
