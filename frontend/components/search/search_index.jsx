import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchIndexItem from './search_index_item';

class SearchIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        const { products } = this.props;
        const query = this.props.location.search.slice(1);
        if (!products) return null;

        const filteredProducts = this.props.products.filter(product => {
            return product.name.toLowerCase().includes(query.toLowerCase())
        })

        const filteredProductsComponents = filteredProducts.map(product => {
            return (
                <SearchIndexItem
                    key={product.id}
                    product={product}
                />
            )
        })

        return (
            <div>
                {filteredProductsComponents}
            </div>
        )
    }
}

export default withRouter(SearchIndex);