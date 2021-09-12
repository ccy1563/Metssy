import React from 'react';
import ProductIndexItem from './product_index_item';
import { Link } from 'react-router-dom';

import ReviewIndexItem from '../reviews/review_index_item';

class ProductIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProducts();
        // this.props.fetchReviews();
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


        return (
            <div className="toptop">
                {/* {allReviews} */}
                {/* these would be categories, i'll bootstrap these images for now */}
                <div className="sub-categories">
                    <li className="sub-cat-list">
                        <img className="category-image" src={window.cat_clothes} />
                        <p className="category-text">Clothes</p>
                    </li>
                    <li className="sub-cat-list">
                        <img className="category-image" src={window.cat_decorations} />
                        <p className="category-text">Decorations</p>
                    </li>
                    <li className="sub-cat-list">
                        <img className="category-image" src={window.cat_jewelry} />
                        <p className="category-text">Jewlery</p>
                    </li>
                    <li className="sub-cat-list">
                        <img className="category-image" src={window.cat_skincare} />
                        <p className="category-text">Skincare</p>
                    </li>
                    <li className="sub-cat-list">
                        <img className="category-image" src={window.cat_halloween} />
                        <p className="category-text">Halloween</p>
                    </li>
                    <li className="sub-cat-list">
                        <img className="category-image" src={window.cat_sale} />
                        <p className="category-text">For Sale</p>
                    </li>
                </div>




                <div className="square-category-top">
                    <p className="square-category-text">Popular gifts right now</p>
                    <div className="square-category-list">
                        {productSection1[0]}
                        {productSection1[1]}
                        {productSection1[2]}
                        {productSection1[3]}
                        {productSection1[4]}
                    </div>
                </div>

                <p className="small-square-category-text">Shop Editors' Picks</p>
                <p className="smaller-category-text">Curated collections hand-picked by Etsy editors</p>
                
                <div className="square-cat-outer">
                    <li className="square-cat-item-big">
                        {bigImage}
                    </li>
                    <li className="square-cat-item-small">
                        <li className="square-cat-item-small-1">
                            <div className="square-cat-item-small-1-item">
                                {productSection2[0]}
                            </div>
                            <div className="square-cat-item-small-1-item">
                                {productSection2[1]}
                            </div>
                            <div className="square-cat-item-small-1-item">
                                {productSection2[2]}
                            </div>
                        </li>
                        <li className="square-cat-item-small-2">
                            <div className="square-cat-item-small-2-item">
                                {productSection2[3]}
                            </div>
                            <div className="square-cat-item-small-2-item">
                                {productSection2[4]}
                            </div>
                            <div className="square-cat-item-small-2-item">
                                {productSection2[5]}
                            </div>
                        </li>
                    </li>

                </div>
            </div>
        )
    }
}

export default ProductIndex;