import { connect } from 'react-redux';

import { withRouter } from 'react-router';

import {
    fetchReviews,
    fetchReview,
    createReview,
    deleteReview,
    updateReview
} from '../../actions/review_actions';
import ReviewEditForm from './review_index';

const mSTP = (state, ownProps) => {
    debugger
    return {
        review: state.entities.reviews[ownProps.match.params.reviewId],
    }
};

const mDTP = dispatch => ({
    fetchReview: reviewId => dispatch(fetchReview(reviewId)),
    updateReview: (review, productId) => dispatch(updateReview(review, productId))
});

export default withRouter(connect(mSTP, mDTP)(ReviewEditForm));