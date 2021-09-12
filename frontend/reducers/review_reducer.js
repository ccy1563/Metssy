import {
    RECEIVE_REVIEWS,
    RECEIVE_REVIEW,
    REMOVE_REVIEW
} from '../actions/review_actions';

const reviewReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_REVIEWS:
            return { ...action.reviews };
        case RECEIVE_REVIEW:
            return { ...oldState, [action.review.id]: action.review }
        case REMOVE_REVIEW:
            delete nextState[action.reviewId]
            return nextState;
            // return { ...oldState, [action.review.id]: undefined }
        default:
            return oldState;
    }
}

export default reviewReducer;