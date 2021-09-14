import React from 'react';
import { Link } from 'react-router-dom';

import CartItemIndexItem from './cart_item_index_item';

class CartItemIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCartItems();
    }

    handleCheckout(e) {
        e.preventDefault();
        this.props.cartItems.forEach(item => {
            this.props.deleteCartItem(item)
        })
    }

    render() {
        
        // debugger
        if (!this.props.cartItems) return null
        const allCartItems = this.props.cartItems.map(cartItem => {
            // console.log(this.props.product);
            // debugger
            return (
                <CartItemIndexItem
                    key={cartItem.id}
                    cartItem={cartItem}
                />
            )
        });

        return (
            <div className="cart-top">
                <div>{allCartItems}</div>
                <div>
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