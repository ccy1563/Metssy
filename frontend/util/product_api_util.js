export const fetchProducts = () => (
    $.ajax({
        method: 'get',
        url: '/api/session',
        data: { product }
    })
);

export const fetchProduct = productId => (
    $.ajax({
        method: 'get',
        url: `api/products/${productId}`
    })
);

// export const createProduct = product => (
//     $.ajax({
//         method: 'post',
//         url: '/api/product/',
//         data: { product }
//     })
// );