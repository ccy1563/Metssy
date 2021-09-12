import { connect } from 'react-redux';
import { fetchProducts, fetchProduct } from '../../actions/product_actions';
import ProductShow from './product_show';

import { fetchReviews } from '../../actions/review_actions';

const mSTP = (state, ownProps) => ({
    product: state.entities.products[ownProps.match.params.productId],
});

const mDTP = dispatch => ({
    fetchProduct: productId => dispatch(fetchProduct(productId)),
    fetchReviews: productId => dispatch(fetchReviews(productId)),
});

export default connect(mSTP, mDTP)(ProductShow);
