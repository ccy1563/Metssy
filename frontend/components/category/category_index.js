import React from 'react';
import { withRouter } from 'react-router-dom';
import CategoryIndexItem from './category_index_item';

class CategoryIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProducts();
    }

    arrayFilter(array1,array2) {
        let ret = array1.filter(function (item) {
            // debugger 
            return array2.includes(item);
        })
        // debugger
        return ret.length > 0;
    }

    render() {
        const { products } = this.props;
        // debugger 
        const cats = this.props.location.state.stateName
        if (!products) return null;

        // debugger

        const filteredProducts = this.props.products.filter(product => {
            // debugger
            return this.arrayFilter(product.category, cats);
        })

        // debugger

        const filteredProductsComponents = filteredProducts.map(product => {
            return (
                <CategoryIndexItem
                    key={product.id}
                    product={product}
                />
            )
        })

        return (
            <div className='search-index-top'>
                {filteredProductsComponents}
            </div>
        )
    }
}

export default withRouter(CategoryIndex);