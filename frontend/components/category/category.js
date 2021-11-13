import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';

class Category extends React.Component {

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

    handleRedirect() {
        this.setState({
            redirect: false,
        })
    }

    render() {

        const { products } = this.props;
        if (!products) return null;
        // debugger
        // console.log(this.props.products)
        
        // return (
        //     <div>
        //         <ul className="categories">
        //             {/* <li>Labor Day Sales Event</li> */}
        //             <li>
        //                 <button 
        //                 className='categories-bttn'
        //                 onClick={(e)=>this.handleFilter(e, "sales")}>
        //                     Sales
        //                 </button>
        //             </li>
        //             <li>Jewelry & Accessories</li>
        //             <li>Clothes and Shoes</li>
        //             <li>Home & Livin</li>
        //             <li>Wedding & Party</li>
        //             <li>Toys & Entertainment</li>
        //             <li>Art & Collectibles</li>
        //             <li>Craft Supplies</li> 
        //             <li>Gift & Gift Cards</li>
        //         </ul>
        //         <div className='categories-line'>

        //         </div>
        //     </div>
        // )

        // debugger
        if (this.state.redirect) {
            {this.handleRedirect()}
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
            <div>
                <ul className="categories">
                    {/* <li>Labor Day Sales Event</li> */}
                    <li>
                        <button
                            className='categories-bttn'
                            onClick={(e) => this.handleFilter(e, ["sales"])}>
                            Sales
                        </button>
                    </li>
                    <li>
                        <button
                            className='categories-bttn'
                            onClick={(e) => this.handleFilter(e, ["jewelry", "fashion"])}>
                            Jewelry & Accessories
                        </button>
                    </li>
                    <li>
                        <button
                            className='categories-bttn'
                            onClick={(e) => this.handleFilter(e, ["clothes", "shoes"])}>
                            Clothes & Shoes
                        </button>
                    </li>
                    <button
                        className='categories-bttn'
                        onClick={(e) => this.handleFilter(e, ["furniture"])}>
                        Home & Living
                    </button>
                    <button
                        className='categories-bttn'
                        onClick={(e) => this.handleFilter(e, ["decoration"])}>
                        Wedding & Party
                    </button>
                    <button
                        className='categories-bttn'
                        onClick={(e) => this.handleFilter(e, ["toys"])}>
                        Toys & Entertainment
                    </button>
                    <button
                        className='categories-bttn'
                        onClick={(e) => this.handleFilter(e, ["art"])}>
                        Art & Collectibles
                    </button>
                    <button
                        className='categories-bttn'
                        onClick={(e) => this.handleFilter(e, ["utility", "kitchenware"])}>
                        Craft & Supplies
                    </button>
                    <button
                        className='categories-bttn'
                        onClick={(e) => this.handleFilter(e, ["cosmetic", "fashion", "clothes", "art", "jewelry", "shoes"])}>
                        Gift & Giftcards
                    </button>
                </ul>
                <div className='categories-line'>

                </div>
            </div>
        )
    }
}

export default withRouter(Category);