import React from 'react';
import { Link } from 'react-router-dom';

import CartItemIndexItem from './cart_item_index_item';

class CartItemIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCartItems();
        this.props.fetchProducts();
    }

    handleCheckout(e) {
        e.preventDefault();
        this.props.cartItems.forEach(item => {
            this.props.deleteCartItem(item)
        })
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

    render() {

        // debugger
        if (!this.props.cartItems) {
            return null;
        }
        const allCartItems = this.props.cartItems.map(cartItem => {
            // console.log(this.props.product);
            // debugger
            return (
                <CartItemIndexItem
                    key={cartItem.id}
                    cartItem={cartItem}
                    updateCartItem={this.props.updateCartItem}
                    fetchCartItems={this.props.fetchCartItems}
                    deleteCartItem={this.props.deleteCartItem}
                    products={this.props.products}
                />
            )
        });

        // debugger

        let totalPrice = 0;
        this.props.cartItems.forEach(cartItem => {
            // debugger

            totalPrice += (cartItem.price * cartItem.quantity);
        })

        let totalCartItems = this.props.cartItems.length    ;

        const discount = 0.01;

        if (totalCartItems === undefined || totalCartItems === 0) {
            // debugger
            return (
                <div className="cart-item-empty-top">
                    <div className='cart-item-counter-text-empty'>Your cart is empty.</div>
                    <div className='cart-item-counter-text2-empty'>
                        <Link to={`/`} className='cart-item-counter-text2-empty-link'>
                            Discover something unique to fill it up
                        </Link>
                    </div>
                    <div className='carbon-message2'>
                        <img className="leaf-img" src={window.leaf} />
                        <div className='carbon-message-text'>Yeetsy offsets carbon emissions from every delivery</div>
                    </div>
                </div>
            )
        }

        // debugger
        return (
            <div className="very-top">
                <div>
                    <div className='cart-item-counter-top'>
                        <div className='cart-item-counter-text'>{totalCartItems === 0 ? "Your cart is empty." : null}</div>
                        <div className='cart-item-counter-text'>{totalCartItems === 1 ? `${totalCartItems} item in your cart` : null}</div>
                        <div className='cart-item-counter-text'>{totalCartItems > 1 ? `${totalCartItems} items in your cart` : null}</div>
                    </div>
                    <div className="cart-top">
                        <div>
                            <div className="cart-items-top">
                                <div>{allCartItems}</div>
                            </div>
                            <div className='bottom-left-cart-top-top'>
                                <div className='bottom-left-cart-top-left'>
                                    <div className='bottom-left-cart-radio'>
                                        <div>
                                            <div className='this-order-gift'>
{/*                                
                                                <label class='container'>
                                                    <input type="checkbox"/>
                                                    <span class ="checkmark"></span>
                                                </label> */}

                                                <label class='container'>
                                                    <input type="checkbox"/>
                                                    <span class ="checkmark"></span>
                                                </label>

                                                <div className='bottom-left-cart-radio-thing-desc'>This order is a gift</div>
                                            </div>
                                            <div className='price-not-shown'>Prices will not be shown on packing slip</div>
                                            <div>
                                                <textarea
                                                    className='cart-item-textarea'
                                                    name=""
                                                    id=""
                                                    cols="50"
                                                    rows="4"
                                                    placeholder='Add a note (optional)' />
                                            </div>
                                        </div>
                                        <div>
                                            <div className='coupon-top'>
                                                <div className='apply-shop-coupon-code-1'>
                                                    {/* <img className="ticket-img" src={window.ticket} /> */}
                                                    {/* <p className='apply-shop-coupon-text'>Apply shop coupon code</p> */}
                                                </div>
                                                <div className='apply-shop-coupon-code-2'>
                                                    {/* Estimated delivery: Sep 21-27 */}
                                                    {`Estimated delivery: ${this.getShippingDate()}`}
                                                </div>
                                                <div className='apply-shop-coupon-code-3'>
                                                    from United States
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='carbon-message'>
                                        <img className="leaf-img" src={window.leaf} />
                                        <div className='carbon-message-text'>Yeetsy offsets carbon emissions from every delivery</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='toptoptop'>
                            <div className="all-cards-list-top">
                                <div className="all-cards-list">
                                    <div className="cc-img-list">
                                        <form className='cc-main'>
                                            <div className="radio-cc-top">
                                                <div>
                                                    <input type="radio" name="card" id="credit-card" />
                                                </div>
                                                <div>
                                                    <img className="cc-img" src={window.mastercard} />
                                                    <img className="cc-img" src={window.visa} />
                                                    <img className="cc-img" src={window.americanExpress} />
                                                    <img className="cc-img" src={window.discover} />
                                                </div>
                                            </div>
                                            <div className="radio-pp-top">
                                                <div>
                                                    <input type="radio" name="card" id="paypal" />
                                                </div>
                                                <div>
                                                    <img className="cc-img" src={window.paypal} />
                                                </div>
                                            </div>
                                            <div className="klarna-top">
                                                <input type="radio" name="card" id="klarna" />
                                                <img className="cc-img" src={window.klarna} />
                                                <div>
                                                    <p className="klarna-text">4-interest free installments</p>
                                                </div>

                                            </div>
                                            <div className="cart-installment-text">
                                                <div className="cart-installment-text-1">Pay in 4 installments of $14.20. &nbsp;</div>
                                                <div className="cart-installment-text-2">Klarna. &nbsp;</div>
                                                {/* <div className="cart-installment-text-3">Learn more</div> */}
                                            </div>

                                            <div className="item-total-list">
                                                <div className="item-price-thing-1-1">Item(s) total</div>
                                                <div className="item-price-thing-1-2">${totalPrice.toFixed(2)}</div>
                                            </div>
                                            <div className="shop-discount-list">
                                                <div className="item-price-thing-2-1">Shop discount</div>
                                                <div className="item-price-thing-2-2">-${discount}</div>
                                            </div>
                                            <div className="shop-line-divide"></div>
                                            <div className="subtotal-list">
                                                <div>Subtotal</div>
                                                <div>{(totalPrice - discount).toFixed(2)}</div>
                                            </div>
                                            <div className="shipping-list">
                                                <div className="shipping-list-1">Shipping</div>
                                                <div className="shipping-list-2">FREE</div>
                                            </div>
                                            <div className="shipping-location-top">
                                                <div className="shipping-location-1">(To &nbsp;</div>
                                                <div className="shipping-location-2">United States)</div>
                                            </div>
                                            <div className='checkout-bttn-box'>
                                                <button
                                                    className="checkout-button"
                                                    onClick={(e) => this.handleCheckout(e)}>
                                                    Proceed to checkout
                                                </button>
                                            </div>
                                        </form>
                                        <div className="uplift-fund">
                                            {/* <div className="uplift-fund-1">
                                            The Uplift Fund supports nonprofits that provide resources to creative entrepreneurs in communities that need it most. You can donate your change at Checkout. Learn more
                                        </div> */}
                                            <div className="uplift-fund-1">
                                                The Uplift Fund supports nonprofits that provide resources to creative entrepreneurs in communities that need it most. You can donate your change at Checkout.
                                            </div>
                                            <div>
                                                <img className="hand-img" src={window.hand} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartItemIndex;