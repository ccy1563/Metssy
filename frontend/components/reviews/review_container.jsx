import { connect } from 'react-redux';

import {
    fetchReviews,
    fetchReview,
    createReview,
    deleteReview,
    updateReview
} from '../../actions/review_actions';
import ReviewIndex from './review_index';

const mSTP = state => {
    // debugger
    return {
        reviews: Object.values(state.entities.reviews),
    }
};

const mDTP = dispatch => ({
    fetchReviews: productId => dispatch(fetchReviews(productId)),
    createReview: review => dispatch(createReview(review)),
    // deleteReview: reviewId => dispatch(deleteReview(reviewId)),
    // updateReview: review => dispatch(updateReview(review)),
});

export default connect(mSTP, mDTP)(ReviewIndex);
