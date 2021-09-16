import * as CartItemAPIUtil from '../util/cart_item_api_util'
export const RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEMS";
export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";

const receiveAllCartItems = items => ({
    type: RECEIVE_CART_ITEMS,
    items
})

const receiveCartItem = item => ({
    type: RECEIVE_CART_ITEM,
    item
})

const removeCartItem = item => ({
    type: REMOVE_CART_ITEM,
    item
})

export const fetchCartItems = () => dispatch => (
    CartItemAPIUtil.fetchCartItems()
        .then(res => dispatch(receiveAllCartItems(res)))
)

export const fetchCartItem = cartItemId => dispatch => (
    CartItemAPIUtil.fetchCartItem(cartItemId)
        .then(res => dispatch(receiveCartItem(res)))
)

export const createCartItem = cartItem => dispatch => (
    CartItemAPIUtil.createCartItem(cartItem)
        .then(res => {
            // debugger;
            dispatch(receiveCartItem(res));
        })
)

export const updateCartItem = cartItem => dispatch => (
    CartItemAPIUtil.updateCartItem(cartItem)
        .then(res => dispatch(receiveCartItem(res)))
)

export const deleteCartItem = cartItem => dispatch => (
    CartItemAPIUtil.deleteCartItem(cartItem)
        .then(res => dispatch(removeCartItem(res)))
)
