import React from 'react';
import { Link } from 'react-router-dom';

import CartItemIndexItem from './cart_item_index_item';

class CartItemIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCartItems();
        // this.props.fetchProduct(this.props.cartItem.product_id)
    }

    handleCheckout(e) {
        e.preventDefault();
        this.props.cartItems.forEach(item => {
            this.props.deleteCartItem(item)
        })
    }

    render() {
        
        // debugger
        if (this.props.cartItems.length === 0 ||
            this.props.products.length === 0) {
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

        return (
            <div className="cart-top">
                <div>{allCartItems}</div>
                <div className="all-cards-list-top">
                    <div className="all-cards-list">
                        <div className="cc-img-list">
                            <form>
                                <div className="radio-cc-top">
                                    <div>
                                        <input type="radio" id="credit-card" />
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
                                        <input type="radio" id="paypal" />
                                    </div>
                                    <div>
                                        <img className="cc-img" src={window.paypal} />
                                    </div>
                                </div>
                                <div className="klarna-top">
                                    <input type="radio" id="klarna" />
                                    <img className="cc-img" src={window.klarna} />
                                    <div>
                                        <p className="klarna-text">4-interest free installments</p>
                                    </div>
                                    
                                </div>
                                <div className="cart-installment-text">
                                    <div className="cart-installment-text-1">Pay in 4 installments of $14.20. &nbsp;</div>
                                    <div className="cart-installment-text-2">Klarna. &nbsp;</div>
                                    <div className="cart-installment-text-3">Learn more</div>
                                </div>

                                <div className="item-total-list">
                                    <div className="item-price-thing-1-1">Item(s) total</div>
                                    <div className="item-price-thing-1-2">PRICE GOES HERE</div>
                                </div>
                                <div className="shop-discount-list">
                                    <div className="item-price-thing-2-1">Shop discount</div>
                                    <div className="item-price-thing-2-2">DISCOUNT GOES HERE</div>
                                </div>
                                <div className="subtotal-list">
                                    <div>Subtotal</div>
                                    <div>SUB TOTAL GOES HERE</div>
                                </div>
                                <div className="shipping-list">
                                    <div>Shipping</div>
                                    <div>FREE</div>
                                </div>
                                <div>(To United States)</div>
                            </form>
                        </div>
                    </div>
                    <button 
                        className="checkout-button"
                        onClick={(e) => this.handleCheckout(e)}>
                        Proceed to checkout
                    </button>
                </div>
            </div>
        )
    }
}

export default CartItemIndex;