import { connect } from 'react-redux';

import { createReview } from '../../actions/review_actions.js';
import ReviewForm from './review_form';

const mSTP = state => {

    // debugger;

    return {

    }
}

const mDTP = dispatch => ({
    createReview: (review, productId) => dispatch(createReview(review, productId)),
});

export default connect(mSTP, mDTP)(ReviewForm);
