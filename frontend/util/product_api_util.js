export const fetchProducts = () => (
    $.ajax({
        method: 'get',
        url: '/api/products',
    })
);
// export const fetchProducts = () => (
//     $.ajax({
//         method: 'get',
//         url: '/api/products',
//     }).then(products => {
//         debugger
//         this.setState({products});
//     })
// )

export const fetchProduct = productId => (
    $.ajax({
        method: 'get',
        url: `/api/products/${productId}`
    })
);

// export const createProduct = product => (
//     $.ajax({
//         method: 'post',
//         url: '/api/product/',
//         data: { product }
//     })
// );