import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';

// import image1 from '../../../app/assets/images/subcategories/clothes.jpeg'

// change redirects eventually
class SubCategories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cat_filter: [],
            redirect: false,
        }
        this.handleRedirect = this.handleRedirect.bind(this)
    }

    componentDidMount() {
        this.props.fetchProducts();
        // debugger
        this.handleRedirect()
    }

    handleFilter(e, cats) {
        e.preventDefault();
        // console.log("clicking");
        this.setState({
            cat_filter: cats,
            redirect: true,
        })
    }

    handleRedirect(e) {
        this.setState({
            redirect: false,
        })
    }

    render() {
        const { products } = this.props;
        if (!products) return null;

        if (this.state.redirect) {
            { this.handleRedirect() }
            // debugger
            return (
                <Redirect to={{
                    pathname: '/category',
                    state: { stateName: this.state.cat_filter },
                    category: "?" + this.state.cat_filter,
                    fetchProducts: this.props.fetchProducts,
                }}>
                </Redirect>
            )
        }

        return (
            <div className="sub-categories">
                <li
                    onClick={(e) => this.handleFilter(e, ["sales"])}>
                    <img 
                        className="category-image"
                        src={window.clothesURL}
                    />
                    <p className="category-text">
                        Gifts
                    </p>
                </li>
                <li>
                    <img className="category-image" src={window.clothesURL} />
                    <p className="category-text">Decorations</p>
                </li>
                <li>
                    <img className="category-image" src={window.clothesURL} />
                    <p className="category-text">Jewerly</p>
                </li>
                <li>
                    <img className="category-image" src={window.clothesURL} />
                    <p className="category-text">Clothing</p>
                </li>
                <li>
                    <img className="category-image" src={window.clothesURL} />
                    <p className="category-text">Candles</p>
                </li>
                <li>
                    <img className="category-image" src={window.clothesURL} />
                    <p className="category-text">On Sale</p>
                </li>
            </div>
        )
    }
}

export default withRouter(SubCategories);