import React from 'react';
import ProductIndexItem from './product_index_item';
import { Link } from 'react-router-dom';

class ProductIndex extends React.Component {

    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        // debugger
        const allProducts = this.props.products.map(product => {
            console.log(product)
            return (
                <div>
                    <img src={product.photoUrl} alt="" />
                    <ProductIndexItem
                        key={product.id}
                        product={product}
                        name={product.name}
                        price={product.price}
                        description={product.description}
                    />
                </div>
            )
        });
// 
        return (
            <div>
                <ul>{allProducts}</ul>
            </div>
        )
    }
}

export default ProductIndex;