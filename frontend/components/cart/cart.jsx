import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

class Cart extends React.Component {

    render() {
        return (
            <div className="cart-icon">
                <button className="cart-button">
                    <ShoppingCartIcon />
                </button>
            </div>
        )
    }
}

export default Cart;