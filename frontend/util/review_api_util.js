 // resources :reviews, only: [:index, :show, :create, :update, :destroy]

 // /api/products/:product_id/reviews(.:format) 
export const fetchReviews = productId => (
    $.ajax({
        method: 'get',
        url: `/api/products/${productId}/reviews`,
    })
);

//  /api/products/:product_id/reviews/:id
export const fetchReview = (reviewId, productId) => (
    $.ajax({
        method: 'get',
        url: `/api/products/${productId}/reviews/${reviewId}`,
    })
);

// /api/products/:product_id/reviews
export const createReview = (review, productId) => (
    $.ajax({
        method: 'post',
        url: `/api/products/${productId}/reviews`,
        data: { review },
    })
);

export const deleteReview = (review, productId) => (
    $.ajax({
        method: 'delete',
        url: `/api/products/${productId}/reviews/${review.id}`,
    })
);

// /api/products/:product_id/reviews/:id
export const updateReview = (review, productId) => (
    $.ajax({
        method: 'patch',
        url: `/api/products/${productId}/reviews/${review.id}`,
        data: { review },
    })
);