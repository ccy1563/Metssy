import React from 'react'
import { connect } from 'react-redux';

import { withRouter } from 'react-router';

import {
    fetchReviews,
    fetchReview,
    createReview,
    deleteReview,
    updateReview
} from '../../actions/review_actions';
import ReviewEditForm from './review_edit_form';

// import { fetchPro}


class ReviewEditContainer extends React.Component {

    componentDidMount() {
        this.props.fetchReview(this.props.match.params.reviewId);
    }

    render() {
        const { review, updateReview, user } = this.props;
        // debugger
        if (!review || !user || !(user === review.author_id)) return null;
        return (
            <ReviewEditForm
                review={review}
                updateReview={updateReview} />
        );
    }
}

const mSTP = (state, ownProps) => {
    // debugger
    return {
        review: state.entities.reviews[ownProps.match.params.reviewId],
        user: state.session.id,
        currentUser: state.entities.users[state.session.id],
    }
};

const mDTP = dispatch => ({
    fetchReview: reviewId => dispatch(fetchReview(reviewId)),
    updateReview: (review, productId) => dispatch(updateReview(review, productId))
});

export default withRouter(connect(mSTP, mDTP)(ReviewEditContainer));