import * as CartItemAPIUtil from '../util/cart_item_api_util'
export const RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEMS";
export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";

const receiveAllCartItems = (items) => ({
    type: RECEIVE_CART_ITEMS,
    items
})

const receiveCartItem = (item) => ({
    type: RECEIVE_CART_ITEM,
    item
})

const removeCartItem = (item) => ({
    type: REMOVE_CART_ITEM,
    item
})

export const fetchCartItems = () => dispatch => (
    CartItemAPIUtil.fetchCartItems().then(cartItems => dispatch(receiveAllCartItems(cartItems)))
)

export const fetchCartItem = (cartItemId) => dispatch => (
    CartItemAPIUtil.fetchCartItem(cartItemId).then(cartItem => dispatch(receiveCartItem(cartItem)))
)

export const createCartItem = (cartItem) => dispatch => (
    CartItemAPIUtil.createCartItem(cartItem).then(cartItem => dispatch(receiveCartItem(cartItem)))
)

export const deleteCartItem = (cartItem) => dispatch => (
    CartItemAPIUtil.destroyCartItem(cartItem).then(cartItem => dispatch(removeCartItem(cartItem)))
)
