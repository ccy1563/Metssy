import { connect } from 'react-redux';

import {
    fetchReviews,
    fetchReview,
    createReview,
    deleteReview,
    updateReview
} from '../../actions/review_actions';
import ReviewEditForm from './review_edit_form';

const mSTP = (state, ownProps) => {
    // debugger
    return {
        review: state.entities.reviews[ownProps.match.params.reviewId]
    }
};

const mDTP = dispatch => ({
    fetchReviews: productId => dispatch(fetchReviews(productId)),
    createReview: review => dispatch(createReview(review)),
    // deleteReview: reviewId => dispatch(deleteReview(reviewId)),
    // updateReview: review => dispatch(updateReview(review)),
});

export default connect(mSTP, mDTP)(ReviewEditForm);
