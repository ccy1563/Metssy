import React from 'react';
import { Link } from 'react-router-dom';

class SearchIndexItem extends React.Component {

    render() {
        const { product } = this.props;
        return (
            <div className='search-item'>
                <div className='search-img'>
                    <Link to={`/products/${product.id}`}>
                        <img className='search-img-link' src={product.photoUrl} alt="" />
                    </Link>
                </div>
                <div className='search-price'>
                    <Link to={`/products/${product.id}`}>
                        <button className='search-price-link'>
                            ${product.price}
                        </button>
                    </Link>
                </div>
                <div className='search-name'>
                    <Link className='search-name-link' to={`/products/${product.id}`}>
                        {product.name}
                    </Link>
                </div>
            </div>
        )
    }
}

export default SearchIndexItem;