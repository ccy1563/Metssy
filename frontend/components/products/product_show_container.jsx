import { connect } from 'react-redux';
import { fetchProducts, fetchProduct } from '../../actions/product_actions';
import ProductShow from './product_show';

const mSTP = (state, ownProps) => {
    // console.log(state);
    // debugger
    return {
        product: state.entities.products[ownProps.match.params.productId],
    }
};

const mDTP = dispatch => ({
    fetchProduct: productId => dispatch(fetchProduct(productId)),
    fetchProducts: () => dispatch(fetchProduct()),
});

export default connect(mSTP, mDTP)(ProductShow);
