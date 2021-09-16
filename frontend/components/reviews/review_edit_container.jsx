import React from 'react'
import { connect } from 'react-redux';

import { withRouter } from 'react-router';

import { fetchProduct } from '../../actions/product_actions'

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
        this.props.fetchProduct(this.props.match.params.productId)
    }

    render() {
        const { review, updateReview, user, product} = this.props;
        // debugger
        if (!review || !user || !product || !(user === review.author_id)) return null;
        return (
            <ReviewEditForm
                review={review}
                updateReview={updateReview}
                product={product}
                // deleteReview={deleteReview}
            />
        );
    }
}

const mSTP = (state, ownProps) => {
    // debugger
    return {
        review: state.entities.reviews[ownProps.match.params.reviewId],
        user: state.session.id,
        currentUser: state.entities.users[state.session.id],
        product: state.entities.products[ownProps.match.params.productId],
    }
};

const mDTP = dispatch => ({
    fetchReview: reviewId => dispatch(fetchReview(reviewId)),
    updateReview: (review, productId) => dispatch(updateReview(review, productId)),
    fetchProduct: productId => dispatch(fetchProduct(productId)),
    // deleteReview: reviewId => dispatch(deleteReview(reviewId)),
});

export default withRouter(connect(mSTP, mDTP)(ReviewEditContainer));