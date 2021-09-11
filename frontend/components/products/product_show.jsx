import React from 'react';
import { Link } from 'react-router-dom';

class ProductShow extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.productId);
    }

    render() {
        console.log(this.props.match.params.productId);
        const { product } = this.props;
        if (!product) {
            return null;
        }
        // debugger
        return (
            <div className="show-page-top">
                <div className="show-page-image-div">
                    <img className="show-page-image" src={product.photoUrl} alt="" />
                </div>
                <div className="show-page-other-div">
                    <p className="show-page-name">{product.name}</p>
                    <p className="show-page-price">${product.price}</p>
                    <div className="installments-top">
                        <div className="installments-text">Pay as low as</div>
                        <div className="installments-link1">$52/mo.</div>
                        <div className="installments-bold">Klarna.</div>
                        <div className="installments-link2">See if you're prequalified</div>
                    </div>
                    <button className="show-page-add-cart-button">Add to cart</button>
                    <div className="show-page-description-list">
                        <button className="show-page-description-button">Description</button>
                        <p className="show-page-description">{product?.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductShow;