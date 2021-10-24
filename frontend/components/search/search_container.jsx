import { connect } from 'react-redux';
import React from 'react';
import Search from './search';
import { fetchProducts } from '../../actions/product_actions';

const mSTP = state => {
    return {
        products: Object.values(state.entities.products),
    }
}

const mDTP = dispatch => {
    // console.log("fetching products")
    return {
        fetchProducts: () => dispatch(fetchProducts()),
    }
}

export default connect(mSTP, mDTP)(Search);

