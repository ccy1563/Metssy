import { SatelliteTwoTone } from '@material-ui/icons';
import { connect } from 'react-redux';
import { fetchProducts, fetchProduct } from '../../actions/product_actions';

import {
    fetchReviews,
    fetchReview,
    createReview,
    deleteReview,
    updateReview
} from '../../actions/review_actions';

import ProductIndex from './product_index';

const mSTP = state => {
    // debugger;

    return {
        products: Object.values(state.entities.products),
        // reviews: Object.values(state.entities.reviews),
    }
};

const mDTP = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts()),
    fetchProduct: productId => dispatch(fetchProduct(productId)),
    // fetchReviews: () => dispatch(fetchReviews()),
});

export default connect(mSTP, mDTP)(ProductIndex);