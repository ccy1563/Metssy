import { connect } from 'react-redux';

import { createReview } from '../../actions/review_actions.js';
import ReviewForm from './review_form';

import { openModal } from '../../actions/modal_actions';

const mSTP = state => {

    debugger;

    return {
        user: state.session.id,
    }
}

const mDTP = dispatch => ({
    createReview: (review, productId) => dispatch(createReview(review, productId)),

    openModal: modal => dispatch(openModal(modal)),
});

export default connect(mSTP, mDTP)(ReviewForm);