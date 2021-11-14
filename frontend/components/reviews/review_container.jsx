import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import {
    fetchReviews,
    fetchReview,
    createReview,
    deleteReview,
    updateReview
} from '../../actions/review_actions';
import ReviewIndex from './review_index';

import { fetchUser } from '../../actions/user_actions'

import { openModal } from '../../actions/modal_actions';

const mSTP = state => {
    // debugger
    return {
        reviews: Object.values(state.entities.reviews),
        user: state.session.id,
        currentUser: state.entities.users[state.session.id],
    }
};

const mDTP = dispatch => ({
    fetchReviews: productId => dispatch(fetchReviews(productId)),
    createReview: (review, productId) => dispatch(createReview(review, productId)),

    fetchUser: userId => dispatch(fetchUser(userId)),
    openModal: modal => dispatch(openModal(modal)),
    deleteReview: (review, productId) => dispatch(deleteReview(review, productId)),
    updateReview: (review, productId) => dispatch(updateReview(review, productId)),
});

export default withRouter(connect(mSTP, mDTP)(ReviewIndex));
