import * as ProductApiUtil from "../util/product_api_util";

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';

export const receiveProducts = products => ({
    type: RECEIVE_PRODUCTS,
    products: products,
});

export const receiveProduct = product => ({
    type: RECEIVE_PRODUCT,
    product: product,
})

export const fetchProducts = () => dispatch => {
    return ProductApiUtil.fetchProducts().
        then(res => dispatch(receiveProducts(res)))
}


export const fetchProduct = productId => dispatch => {
    return ProductApiUtil.fetchProduct(productId).
        then(res => dispatch(receiveProduct(res)))
}