import React from 'react';
import { Link } from 'react-router-dom';

class ProductShow extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.productId);
    }

    render() {
        console.log(this.props.match.params.productId);
        const { product } = this.props;
        if (!product) {
            return null;
        }
        // debugger
        return (
            <div>
                <p>All Products</p>
                <p>Name:{product.name}</p>
                <p>Description:{product?.description}</p>
                <p>Price:{product.price}</p>
                <img src={product.photoUrl} alt="" />
            </div>
        )
    }
}

export default ProductShow;