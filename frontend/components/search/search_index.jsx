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

        if (query !== "" && filteredProductsComponents.length > 0) {
            return (
                <div >
                    <div className='search-index-top'>
                        {filteredProductsComponents}
                    </div>
                    <div className='footer-stopper'></div>
                </div>
            )
        } else {
            return (
                <div >
                    <div className='search-index-top-empty'>
                        <div className='search-not-found-1'>
                            {`We couldn't find any results for ${query}`}
                        </div>
                        <div className='search-not-found-2'>
                            Try searching for something else instead?
                        </div>
                    </div>
                    <div className='footer-stopper'></div>
                </div>
            )
        }
    }
}

export default withRouter(SearchIndex);