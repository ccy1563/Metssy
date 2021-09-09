import React from 'react';

import image1 from '../../../app/assets/images/subcategories/clothes.jpeg'

// change redirects eventually
class SquareCategories extends React.Component {
    render() {
        return (
            <div>
                <p className="square-category-text">Popular gifts right now</p>
                <div className="square-category-list">
                    <li className="sub-square-categories">
                        <img className="square-category-image" src={window.clothesURL} />
                        <p className="square-category-description">Anniversary Gift for Him, Personalized Wallet, Mens Wallet,Engraved Wallet,Leather Wallet,Custom Wallet, Boyfriend Gift for Men,Gift for Dad</p>
                    </li>
                    <li className="sub-square-categories">
                        <img className="square-category-image" src={window.clothesURL} />
                        <p className="square-category-description">Personalized Charcuterie Planks and Beer Flights - 4 Styles and Gift Sets Available</p>
                    </li>
                    <li className="sub-square-categories">
                        <img className="square-category-image" src={window.clothesURL} />
                        <p className="square-category-description">Birth Flower Birthday Gift Box, Personalized birthday ideas, birthday present, gift for best friend - BdayFlower-dEGB</p>
                    </li>
                    <li className="sub-square-categories">
                        <img className="square-category-image" src={window.clothesURL} />
                        <p className="square-category-description">Personalized Gift Glass Art First Anniversary Gift for Boyfriend Custom Album Cover Music Plaque, Personalize Gift with Photo, Wedding</p>
                    </li>
                    <li className="sub-square-categories">
                        <img className="square-category-image" src={window.clothesURL} />
                        <p className="square-category-description">Personalized Turkish Towel, personalized gifts, Holiday, Home Decor, Bachelorette Towel, Bridesmaid Gift Box, Wedding Towel</p>
                    </li>
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
        )
    }
}

export default SquareCategories;