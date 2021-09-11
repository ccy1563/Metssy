import React from 'react';
import ProductIndexItemFirst from './product_index_item_first';
import ProductIndexItemSecond from './product_index_item_second';
import { Link } from 'react-router-dom';

class ProductIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProducts();
    }

    shuffle(array) {
        var currentIndex = array.length, randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    render() {
        // debugger
        let allProductsFirst = this.props.products.map(product => {
            // console.log(product)
            return (
                <div>
                    <ProductIndexItemFirst
                        key={product.id}
                        product={product}
                        name={product.name}
                        price={product.price}
                        description={product.description}
                    />
                </div>
            )
        });

        let allProductsSecond = this.props.products.map(product => {
            // console.log(product)
            return (
                <div>
                    <ProductIndexItemSecond
                        key={product.id}
                        product={product}
                        name={product.name}
                        price={product.price}
                        description={product.description}
                    />
                </div>
            )
        });

        allProductsFirst = this.shuffle(allProductsFirst);
        allProductsSecond = this.shuffle(allProductsSecond);

        return (
            <div className="toptop">
                
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
                        {allProductsFirst[0]}
                        {allProductsFirst[1]}
                        {allProductsFirst[2]}
                        {allProductsFirst[3]}
                        {allProductsFirst[4]}
                    </div>

                    <p className="small-square-category-text">Shop Editors' Picks</p>
                    <p className="smaller-category-text">Curated collections hand-picked by Etsy editors</p>
                    <div className="outer-grid">
                        <div className="big-div">
                            <li className="big-category-link">
                                <img className="big-category-image" src={window.clothesURL} />
                                <p className="big-grid-category-description">Honey Dijon's Creator Collab</p>
                            </li>
                        </div>

                        <div>
                            <div className="first-small-div">
                                <li className="small-category-link">
                                    <img className="small-category-image" src={window.clothesURL} />
                                    <p className="grid-category-description">Black-owned Etsy shops</p>
                                </li>
                                <li className="small-category-link">
                                    <img className="small-category-image" src={window.clothesURL} />
                                    <p className="grid-category-description">The Wedding Shop</p>
                                </li>
                                <li className="small-category-link">
                                    <img className="small-category-image" src={window.clothesURL} />
                                    <p className="grid-category-description">Masks and more</p>
                                </li>
                            </div>

                            <div className="second-small-div">
                                <li className="small-category-link">
                                    <img className="small-category-image" src={window.clothesURL} />
                                    <p className="grid-category-description">Design ideas</p>
                                </li>
                                <li className="small-category-link">
                                    <img className="small-category-image" src={window.clothesURL} />
                                    <p className="grid-category-description">Gifts by Recipient</p>
                                </li>
                                <li className="small-category-link">
                                    <img className="small-category-image" src={window.clothesURL} />
                                    <p className="grid-category-description">Inspiration</p>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductIndex;