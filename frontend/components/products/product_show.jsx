import React from 'react';
import { Link } from 'react-router-dom';

class ProductShow extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        // debugger
        this.props.fetchProduct(this.props.match.params.productId);
        // console.log(this.props.fetchProduct(1));
        // debugger
        // this.forceUpdate();
    }

    render() {
        console.log(this.props.match.params.productId);
        const { product } = this.props;
        if (!product) {
            // debugger;
            return null;
        }
        return (
            <div>
                <p>All Products</p>
                <p>Name:{product?.name}</p>
                <p>Description:{product?.description}</p>
                <p>Price:{product?.price}</p>
            </div>
        )
    }
}

export default ProductShow;