import React from 'react';
import { Link } from 'react-router-dom';

class ProductIndexItemSecond extends React.Component {

    render() {
        const product = this.props.product;
        return (
            <li className="square-cat-list">
                <Link to={`/products/${product.id}`}>
                    <img className="square-cat-image" src={product.photoUrl} alt="" />
                </Link>
                <Link className="square-cat-text" to={`/products/${product.id}`}>{product.name}</Link>
            </li>
        )
    }
}

export default ProductIndexItemSecond;