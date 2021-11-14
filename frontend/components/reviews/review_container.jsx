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

import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = state => {
    // debugger
    return {
        reviews: Object.values(state.entities.reviews),
        user: state.session.id,
        currentUser: state.entities.users[state.session.id],
        formType: 'editReview',
    }
};

const mDTP = dispatch => ({
    fetchReviews: productId => dispatch(fetchReviews(productId)),
    createReview: (review, productId) => dispatch(createReview(review, productId)),

    fetchUser: userId => dispatch(fetchUser(userId)),
    deleteReview: (review, productId) => dispatch(deleteReview(review, productId)),
    // updateReview: review => dispatch(updateReview(review)),
    closeModal: () => dispatch(closeModal()),
    openModal: modal => dispatch(openModal(modal)),
});

export default withRouter(connect(mSTP, mDTP)(ReviewIndex));
