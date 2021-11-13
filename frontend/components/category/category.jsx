import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';

class Category extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cat_filter: [],
        }
    }

    componentDidMount() {
        this.props.fetchProducts();
        // debugger
    }

    handleFilter(e, cats) {
        e.preventDefault();
        console.log("clicking");
        this.setState({cat_filter: cats})
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
        if (this.state.cat_filter == 0) {
            return (
                <div>
                    <ul className="categories">
                        {/* <li>Labor Day Sales Event</li> */}
                        <li>
                            <button
                                className='categories-bttn'
                                onClick={(e) => this.handleFilter(e, ["shoes"])}>
                                Shoes
                            </button>
                        </li>
                        <li>
                            <button
                                className='categories-bttn'
                                onClick={(e) => this.handleFilter(e, ["jewelry"])}>
                                Jewelry
                            </button>
                        </li>
                        <li>Clothes and Shoes</li>
                        <li>Home & Livin</li>
                        <li>Wedding & Party</li>
                        <li>Toys & Entertainment</li>
                        <li>Art & Collectibles</li>
                        <li>Craft Supplies</li>
                        <li>Gift & Gift Cards</li>
                    </ul>
                    <div className='categories-line'>

                    </div>
                </div>
            )
        } else {
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
    }
}

export default withRouter(Category);