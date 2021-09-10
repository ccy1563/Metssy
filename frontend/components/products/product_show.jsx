import React from 'react';
import { Link } from 'react-router-dom';

class ProductShow extends React.Component {
    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.productId);
    }

    render() {
        const { product } = this.props;
        // const product = this.props.fetchProduct(this.props.match.params.productId);
        // debugger;
        return (
            <div>
                <p>All Products</p>
                <p>Name:{product.name}</p>
                <p>Description:{product.description}</p>
                <p>Price:{product.price}</p>
            </div>
        )
    }
}

export default ProductShow;