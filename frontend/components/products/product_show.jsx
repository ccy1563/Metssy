import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ReviewContainer from '../reviews/review_container'
import ReviewFormContainer from '../reviews/review_form_container'
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import { DriveEtaRounded } from '@material-ui/icons';

class ProductShow extends React.Component {
    

    // cart item needs 
    // t.integer "user_id", null: false
    // t.integer "product_id", null: false
    // t.integer "quantity", null: false

    constructor(props) {
        super(props);
        this.state = {
            user_id: null,
            product_id: null,
            quantity: 1,
        }

        this.navigateToCartItemIndex = this.navigateToCartItemIndex.bind(this);
    }

    handleAddToCart(e) {
        e.preventDefault();
        if (!this.props.user) {
            this.props.openModal('login');
        } else {
            const productId = this.props.match.params.productId;
            const cartItem = Object.assign({}, this.state, {
                product_id: productId,
                user_id: this.props.user,
            });
            if (cartItem.product_id) { // if item is alreayd in cart, ONLY go to
                this.navigateToCartItemIndex();
            } else { // item not in cart
                this.props.createCartItem(cartItem);
                this.navigateToCartItemIndex();
            }
        }
    }

    navigateToCartItemIndex() {
        const url = `/cart_items`
        this.props.history.push(url);
    }
    
    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.productId);
        this.props.fetchReviews(this.props.match.params.productId);
    }

    render() {
        // console.log(this.props.match.params.productId);

        // debugger;

        const { product } = this.props;
        if (!product) {
            return null;
        }
        // debugger
        return (
            <div className="show-page-top">
                <div className="show-page-image-div">
                    <img className="show-page-image" src={product.photoUrl} alt="" />
                    <div className="review-top">
                        <ReviewFormContainer
                            product={product}
                        />
                        <ReviewContainer
                            product={product}
                        />
                    </div>
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

                    <button 
                        className="show-page-add-cart-button"
                        onClick={(e) => this.handleAddToCart(e)}>
                            Add to cart
                    </button>

                    <div>
                        <div className="cart-and-van-list-item">
                            <div><ShoppingCartTwoToneIcon /></div>
                            <div className="cart-and-van-div-item-1">
                                <div>Other people want this.</div>
                                <div>18 people have this in their carts right now.</div>
                            </div>
                        </div>
                        <div className="cart-and-van-list-item">
                            <div><LocalShippingOutlinedIcon /></div>
                            <div>
                                <div className="van-sen-div">
                                    <div className="van-sen-items">Arrives by</div>
                                    <div className="van-sen-items">Sep 16-21</div>
                                    <div className="van-sen-items">if you order today.</div>
                                    <div className="van-sen-items">Nice choice!</div>
                                    <div className="van-sen-items">Enjoy free shipping to the US when you spend $35+ at this shop.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="show-page-description-list">
                        <button className="show-page-description-button">Description</button>
                        <p className="show-page-description">{product.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ProductShow);