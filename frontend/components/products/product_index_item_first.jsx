import React from 'react';
import { Link } from 'react-router-dom';

class ProductIndexItemFirst extends React.Component {

    render() {
        const product = this.props.product;
        return (
            <div>
                <li className="sub-square-categories">
                    <Link to={`/products/${product.id}`}>
                        <img className="square-category-image" src={product.photoUrl} alt="" />
                    </Link>
                    <Link className="square-category-description" to={`/products/${product.id}`}>{product.name}</Link>
                </li>
            </div>
        )
    }
}

export default ProductIndexItemFirst;