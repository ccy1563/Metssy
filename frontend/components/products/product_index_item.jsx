import React from 'react';
import { Link } from 'react-router-dom';

class ProductIndexItem extends React.Component {

    render() {
        const { product, classDiv, classTop, classImage, classPrice} = this.props;
        // debugger
        return (
            <div className={classDiv}>
                <li className={classTop}>
                    <Link to={`/products/${product.id}`}>
                        <img className={classImage} src={product.photoUrl} alt="" />
                    </Link>
                </li>
                <li className={classTop}>
                    <Link to={`/products/${product.id}`}>
                        <button className={classPrice}>
                            ${product.price}
                        </button>
                    </Link>
                </li>
            </div>
        )
    }
}

export default ProductIndexItem;