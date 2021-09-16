import React from 'react';

class Category extends React.Component {
    render() {
        return (
            <div>
                <ul className="categories">
                    <li>Labor Day Sales Event</li>
                    <li>Jewelry & Accessories</li>
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
    }
}

export default Category;