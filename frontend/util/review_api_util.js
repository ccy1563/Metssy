 // resources :reviews, only: [:index, :show, :create, :update, :destroy]

export const fetchReviews = () => (
    $.ajax({
        method: 'get',
        url: '/api/reviews',
    })
);

export const fetchReview = reviewId => (
    $.ajax({
        method: 'get',
        url: `/api/reviews/${reviewId}`,
    })
);

export const createReview = review => (
    $.ajax({
        method: 'post',
        url: '/api/reviews',
        data: { review },
    })
);

export const deleteReview = review => (
    $.ajax({
        method: 'delete',
        url: `/api/reviews/${review.id}`,
    })
);

export const updateReview = review => (
    $.ajax({
        method: 'patch',
        url: `/api/reviews/${review.id}`,
        data: { review },
    })
);