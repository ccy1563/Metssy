import React from 'react';

import image1 from '../../../app/assets/images/subcategories/clothes.jpeg'

// change redirects eventually
class SubCategories extends React.Component {
    render() {
        return (
            <div className="sub-categories">
                <li>
                    <img className="category-image" src={window.clothesURL} />
                    <p className="category-text">Gifts</p>
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

export default SubCategories;