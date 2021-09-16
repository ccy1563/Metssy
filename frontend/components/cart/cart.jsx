import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';

class Cart extends React.Component {

    render() {
        return (
            <div className="cart-icon">
                <button className="cart-button">
                    <Link to="/cart_items">
                        <ShoppingCartIcon />    
                    </Link>
                </button>
            </div>
        )
    }
}

export default Cart;