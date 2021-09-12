import { SatelliteTwoTone } from '@material-ui/icons';
import { connect } from 'react-redux';
import { fetchProducts, fetchProduct } from '../../actions/product_actions';
import { withRouter } from 'react-router-dom';

import ProductIndex from './product_index';

const mSTP = state => {
    // debugger;

    return {
        products: Object.values(state.entities.products),
    }
};

const mDTP = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts()),
    fetchProduct: productId => dispatch(fetchProduct(productId)),
});

export default withRouter(connect(mSTP, mDTP)(ProductIndex));