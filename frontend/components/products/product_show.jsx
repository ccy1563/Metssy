import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ReviewContainer from '../reviews/review_container'
import ReviewFormContainer from '../reviews/review_form_container'
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import { DriveEtaRounded } from '@material-ui/icons';
import PanToolIcon from '@material-ui/icons/PanTool';
import RedeemIcon from '@material-ui/icons/Redeem';

class ProductShow extends React.Component {


    // cart item needs 
    // t.integer "user_id", null: false
    // t.integer "product_id", null: false
    // t.integer "quantity", null: false

    constructor(props) {
        super(props);
        this.state = {
            // user_id: null,
            // product_id: null,
            quantity: 1,
        }
        this.navigateToCartItemIndex = this.navigateToCartItemIndex.bind(this);
        this.handleAddToCart = this.handleAddToCart.bind(this);
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
            this.props.createCartItem(cartItem).then(this.navigateToCartItemIndex)
        }
    }

    navigateToCartItemIndex() {
        // debugger
        const url = `/cart_items`
        this.props.history.push(url);
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.productId)
            .then(this.props.fetchReviews(this.props.match.params.productId));
    }

    getShippingDate() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = today.getMonth();
        var yyyy = today.getFullYear();
        var month = new Array();
        month[0] = "Jan";
        month[1] = "Feb";
        month[2] = "Mar";
        month[3] = "Apr";
        month[4] = "May";
        month[5] = "Jun";
        month[6] = "Jul";
        month[7] = "Aug";
        month[8] = "Sep";
        month[9] = "Oct";
        month[10] = "Nov";
        month[11] = "Dec";

        return month[mm] + ' ' + (parseInt(dd) + 4) + '-' + yyyy;
    }

    getShippingDate2(num) {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = today.getMonth();
        var yyyy = today.getFullYear();
        var month = new Array();
        month[0] = "Jan";
        month[1] = "Feb";
        month[2] = "Mar";
        month[3] = "Apr";
        month[4] = "May";
        month[5] = "Jun";
        month[6] = "Jul";
        month[7] = "Aug";
        month[8] = "Sep";
        month[9] = "Oct";
        month[10] = "Nov";
        month[11] = "Dec";

        return month[mm] + ' ' + (parseInt(dd) + num) + '-' + yyyy;
    }

    showDescription() {
        // debugger
        var element = document.getElementById("show-description");
        if (element.style.display === "none") {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
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



                        {/* 
                        return {product: state.entities.products[ownProps.match.params.productId],
                        user: state.session.id,
                        currentUser: state.entities.users[state.session.id],}

                        fetchProduct: productId => dispatch(fetchProduct(productId)),
                        fetchReviews: productId => dispatch(fetchReviews(productId)),

                        createCartItem: cartItem => dispatch(createCartItem(cartItem)), 
                        */}

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
                        onClick={this.handleAddToCart}>
                            Add to cart
                    </button>

                    <div>
                        <div className="cart-and-van-list-item">
                            <div><ShoppingCartTwoToneIcon /></div>
                            <div className="van-sen-div">
                                <div className='cart-and-van-desc'>Other people want this.</div>
                                <div className='cart-and-van-desc'>18 people have this in their carts right now.</div>
                            </div>
                        </div>
                        <div className="cart-and-van-list-item">
                            <div><LocalShippingOutlinedIcon /></div>
                            <div>
                                <div className="van-sen-div">
                                    <div className='cart-and-van-desc'>Arrives by</div>
                                    <div className='cart-and-van-desc'>{this.getShippingDate()}</div>
                                    <div className='cart-and-van-desc'>if you order today.</div>
                                    <div className='cart-and-van-desc'>Nice choice!</div>
                                    <div className='cart-and-van-desc'>Enjoy free shipping to the US when you spend $35+ at this shop.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="show-page-description-list">
                        <button 
                            onClick={() => this.showDescription()}                  className="show-page-description-button">
                                Description
                        </button>
                        <p id="show-description" className="show-page-description">{product.description}</p>
                    </div>

                    <div className="show-page-description-list">
                        <button 
                            onClick={() => this.showPolicyDescription()}
                            className="show-page-description-button">Shipping and return policies
                        </button>

                        <div id="show-policies" className="policy-descriptions">
                            <div className='policy-desc-something-1'>
                                <div className='policy-desc-1'>Estimated arrival</div>
                                <div className='policy-desc-2'>{this.getShippingDate()}</div>
                            </div>
                            <div className="show-page-ship-icons-list-top">
                                <div className='show-page-ship-icons-list'>
                                    <div className="show-page-ship-icons">
                                        <PanToolIcon className='show-page-ship-icons' />
                                    </div>
                                    <div className='show-page-ship-line-divide'></div>
                                    <div className="show-page-ship-icons">
                                        <LocalShippingOutlinedIcon className='show-page-ship-icons'/>
                                    </div>
                                    <div className='show-page-ship-line-divide'></div>
                                    <div className="show-page-ship-icons">
                                        <RedeemIcon className='show-page-ship-icons'/>
                                    </div>
                                </div>
                            </div>
                            <div className='running-out-of-names-1'>
                                <div>
                                    <div>{this.getShippingDate2(1)}</div>
                                </div>
                                <div className='jank-css'>
                                    <div>{this.getShippingDate2(2)}</div>
                                </div>
                                <div>
                                    <div>{this.getShippingDate()}</div>
                                </div>
                            </div>

                            <div className='running-out-of-names-2'>
                                <div>
                                    <div className='running-out-of-names-2-inner'>Order Placed</div>
                                </div>
                                <div>
                                    <div className='running-out-of-names-2-inner'>Order Ships</div>
                                </div>
                                <div>
                                    <div className='running-out-of-names-2-inner'>Delivered!</div>
                                </div>
                            </div>

                            <div className='cost-return-top'>
                                <div>
                                    <div className='cost-return-cost-to-ship'>
                                        Cost to ship
                                    </div>
                                    <div className='cost-return-free'>
                                        Free
                                    </div>
                                </div>


                                <div className='cost-return-top-list-2'>
                                    <div className='cost-return-cost-to-ship'>
                                        Returns
                                    </div>
                                    <div className='cost-return-free'>
                                        Accepted
                                    </div>
                                    <div className='cost-return-cost-to-ship-2'>
                                        Exceptions may apply
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
    


                </div>
            </div>
        )
    }
    showPolicyDescription() {
        var element = document.getElementById("show-policies");
        if (element.style.display === "none") {
            element.style.display = "block";
            element.style.easing
        } else {
            element.style.display = "none";
        }
    }
}


export default withRouter(ProductShow);