import React from 'react';
import ProductIndexItem from './product_index_item';
import { Link, withRouter, Redirect } from 'react-router-dom';

import ReviewIndexItem from '../reviews/review_index_item';

class ProductIndex extends React.Component {

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
        // this.props.fetchReviews();
        this.handleRedirect();
        window.scrollTo(0, 0);
    }

    // shuffle(array) {
    //     var currentIndex = array.length, randomIndex;
    //     while (currentIndex != 0) {
    //         randomIndex = Math.floor(Math.random() * currentIndex);
    //         currentIndex--;
    //         [array[currentIndex], array[randomIndex]] = [
    //             array[randomIndex], array[currentIndex]];
    //     }
    //     return array;
    // }

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

    createProductIndexItem(i, j, div, top, image, price) {
        const ret = this.props.products.slice(i, j).map(product => {
            // console.log(product)
            return (
                <div>
                    <ProductIndexItem
                        key={product.id}
                        product={product}
                        name={product.name}
                        price={product.price}
                        description={product.description}
                        classDiv={div}
                        classTop={top}
                        classImage={image}
                        classPrice={price}
                    />
                </div>
            )
        });
        return ret;
    }

    render() {
        // debugger

        let productSection1 = this.createProductIndexItem(
            0,
            5,
            "sub-square-categories-div",
            "sub-square-categories",
            "square-category-image",
            "square-category-price"
        )

        let bigImage = this.createProductIndexItem(
            5,
            6,
            "square-cat-list-div-big",
            "square-cat-list-big",
            "square-cat-image-big",
            "square-cat-price-big"
        )

        let productSection2 = this.createProductIndexItem(
            6,
            14,
            "square-cat-list-div",
            "square-cat-list",
            "square-cat-image",
            "square-cat-price"
        )

        let productSection3 = this.createProductIndexItem(
            13,
            19,
            "third-cat-list-div",
            "third-cat-list",
            "third-cat-image",
            "third-cat-price"
        )

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
            <div className="toptop">
                {/* {allReviews} */}
                {/* these would be categories, i'll bootstrap these images for now */}
                <div className="sub-categories">
                    <div className="sub-cat-list">
                        <img 
                            className="category-image" 
                            src={window.cat_clothes}
                            onClick={(e) => this.handleFilter(e, ["clothes"])}/>
                        <p 
                            className="category-text"
                            onClick={(e) => this.handleFilter(e, ["clothes"])}>
                            Clothes
                        </p>
                    </div>
                    <div className="sub-cat-list">
                        <img 
                            className="category-image"
                            src={window.cat_decorations}
                            onClick={(e) => this.handleFilter(e, ["decoration"])}/>
                        <p 
                            className="category-text"
                            onClick={(e) => this.handleFilter(e, ["decoration"])}>
                            Decorations
                        </p>
                    </div>
                    <div className="sub-cat-list">
                        <img 
                            className="category-image"
                            src={window.cat_jewelry}
                            onClick={(e) => this.handleFilter(e, ["jewelry"])}/>
                        <p 
                            className="category-text"
                            onClick={(e) => this.handleFilter(e, ["jewelry"])}>
                            Jewelery
                        </p>
                    </div>
                    <div className="sub-cat-list">
                        <img
                            className="category-image"
                            src={window.cat_skincare}
                            onClick={(e) => this.handleFilter(e, ["cosmetic"])}
                        />
                        <p
                            className="category-text"
                            onClick={(e) => this.handleFilter(e, ["cosmetic"])}>
                            Skincare
                        </p>
                    </div>
                    <div className="sub-cat-list">
                        <img
                            className="category-image" 
                            src={window.cat_halloween}
                            onClick={(e) => this.handleFilter(e, ["halloween"])}/>
                        <p 
                            className="category-text"
                            onClick={(e) => this.handleFilter(e, ["halloween"])}>
                            Halloween
                        </p>
                    </div>
                    <div className="sub-cat-list">
                        <img 
                            className="category-image" 
                            src={window.cat_sale}
                            onClick={(e) => this.handleFilter(e, ["sale"])}/>
                        <p
                            className="category-text"
                            onClick={(e) => this.handleFilter(e, ["sale"])}>
                            For Sale
                        </p>
                    </div>
                </div>




                <div className="square-category-top">
                    <div className='square-cat-main'>
                        <p className="square-category-text">Popular gifts right now</p>
                        <div className="square-category-list">
                            {productSection1[0]}
                            {productSection1[1]}
                            {productSection1[2]}
                            {productSection1[3]}
                            {productSection1[4]}
                        </div>
                    </div>
                </div>


                <div className='small-square-cat-main'>
                    <div className='small-square-cat-main-2'>
                        <p className="small-square-category-text">Shop Editors' Picks</p>
                        <p className="smaller-category-text">Curated collections hand-picked by Etsy editors</p>

                        <div className="square-cat-outer">
                            <div className="square-cat-item-big">
                                {bigImage[0]}
                            </div>
                            <div className="square-cat-item-small">
                                <div className="square-cat-item-small-1">
                                    <div className="square-cat-item-small-1-item">
                                        {productSection2[0]}
                                    </div>
                                    <div className="square-cat-item-small-1-item">
                                        {productSection2[1]}
                                    </div>
                                    <div className="square-cat-item-small-1-item">
                                        {productSection2[2]}
                                    </div>
                                </div>
                                <div className="square-cat-item-small-2">
                                    <div className="square-cat-item-small-2-item">
                                        {productSection2[3]}
                                    </div>
                                    <div className="square-cat-item-small-2-item">
                                        {productSection2[4]}
                                    </div>
                                    <div className="square-cat-item-small-2-item">
                                        {productSection2[5]}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>



                <div className='last-cat-main'>
                    <div className='last-cat-main-2'>
                        <p className="prints-text-big">Prints</p>
                        <p className="prints-text-small">Based on your activity</p>

                        {/* <div className="prod-sec-3-top">
                            <div className="prod-sec-3-list">
                                <div className="prod-sec-3-list-items">
                                    <div>{productSection3[0]}</div>
                                    <div><p className="prod-sec-3-list-items-text">Holographic</p></div>
                                </div>
                                <div className="prod-sec-3-list-items">
                                    <div>{productSection3[1]}</div>
                                    <div><p className="prod-sec-3-list-items-text">Dismaland</p></div>
                                </div>
                                <div className="prod-sec-3-list-items">
                                    <div>{productSection3[2]}</div>
                                    <div><p className="prod-sec-3-list-items-text">Pizza Joint</p></div>
                                </div>
                                <div className="prod-sec-3-list-items">
                                    <div>{productSection3[3]}</div>
                                    <div><p className="prod-sec-3-list-items-text">Hexen 2.0</p></div>
                                </div>
                                <div className="prod-sec-3-list-items">
                                    <div>{productSection3[4]}</div>
                                    <div><p className="prod-sec-3-list-items-text">Untitled Skull</p></div>
                                </div>
                            </div>
                        </div> */}
                        <div className="prod-sec-3-list">
                            <div className="prod-sec-3-list-items">
                                <div>{productSection3[0]}</div>
                                <div><p className="prod-sec-3-list-items-text">Holographic</p></div>
                            </div>
                            <div className="prod-sec-3-list-items">
                                <div>{productSection3[1]}</div>
                                <div><p className="prod-sec-3-list-items-text">Dismaland</p></div>
                            </div>
                            <div className="prod-sec-3-list-items">
                                <div>{productSection3[2]}</div>
                                <div><p className="prod-sec-3-list-items-text">Pizza Joint</p></div>
                            </div>
                            <div className="prod-sec-3-list-items">
                                <div>{productSection3[3]}</div>
                                <div><p className="prod-sec-3-list-items-text">Hexen 2.0</p></div>
                            </div>
                            <div className="prod-sec-3-list-items">
                                <div>{productSection3[4]}</div>
                                <div><p className="prod-sec-3-list-items-text">Untitled Skull</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ProductIndex);