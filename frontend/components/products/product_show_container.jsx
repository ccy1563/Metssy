import { connect } from 'react-redux';
import { fetchProducts, fetchProduct } from '../../actions/product_actions';
import ProductShow from './product_show';
import { fetchReviews } from '../../actions/review_actions';

import { openModal } from '../../actions/modal_actions';

import {
    fetchCartItems,
    fetchCartItem,
    createCartItem,
    updateCartItem,
    deleteCartItem
} from '../../actions/cart_item_actions';

const mSTP = (state, ownProps) => ({
    product: state.entities.products[ownProps.match.params.productId],
    user: state.session.id,
    currentUser: state.entities.users[state.session.id],
});

const mDTP = dispatch => ({
    fetchProduct: productId => dispatch(fetchProduct(productId)),
    fetchReviews: productId => dispatch(fetchReviews(productId)),

    // shows login modal when guest tries to add item to cart without logging in
    openModal: modal => dispatch(openModal(modal)),

    createCartItem: cartItem => dispatch(createCartItem(cartItem)),
});

export default connect(mSTP, mDTP)(ProductShow);
