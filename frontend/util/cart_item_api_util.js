export const fetchCartItem = cartItemId => (
    $.ajax({
        method: 'get',
        url: `/api/cart_items/${cartItemId}`,
    })
);

//  /api/products/:product_id/reviews/:id
export const fetchCartItems = () => (
    $.ajax({
        method: 'get',
        url: '/api/cart_items',
    })
);

// /api/products/:product_id/reviews
export const createCartItem = cartItem => (
    $.ajax({
        method: 'post',
        url: `/api/cart_items`,
        data: { cartItem },
    })
);

export const deleteCartItem = (cartItem) => (
    $.ajax({
        method: 'delete',
        url: `/api/cart_items/${cartItem.id}`,
    })
);

// /api/products/:product_id/reviews/:id
export const updateCartItem = cartItem => (
    $.ajax({
        method: 'patch',
        url: `/api/cart_items/${cartItem.id}`,
        data: { cartItem },
    })
);