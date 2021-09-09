import React from 'react';
import { Link } from 'react-router-dom';

class ProductIndexItem extends React.Component {

    render() {
        const product = this.props.product;
        return (
            <div>
                <Link to={`/products/${product.id}`}>{product.name}</Link>
            </div>
        )
    }
}

export default ProductIndexItem;