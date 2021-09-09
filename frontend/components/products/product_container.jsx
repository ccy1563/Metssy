import { connect } from 'react-redux';
import { fetchProducts, fetchProduct } from '../../actions/product_actions';
import ProductIndex from './product_index';

const mSTP = state => ({
    products: Object.values(state.entities.products),
});

const mDTP = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts()),
    fetchProduct: productId => dispatch(fetchProduct(productId)),
});

export default connect(mSTP, mDTP)(ProductIndex);