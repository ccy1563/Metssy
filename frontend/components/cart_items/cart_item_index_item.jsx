import React from 'react';
import { Link } from 'react-router-dom';

class CartItemIndexItem extends React.Component {


    //cartItem:
    // id: 5
    // name: "Modern Swing Arm Wall Lamp Bronze Plug-In Fixture Bedroom Bedside Living Room"
    // photoUrl: "/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ed927712b1ac562a28e72e30a674056cb123afe6/prod_lamp.jpg"
    // price: 9.99
    // product_id: 2
    // quantity: 1
    // user_id: 1

    constructor(props) {
        super(props);
        this.state = this.props.cartItem;
        this.onChange = this.onChange.bind(this)
    }

    componentDidMount() {
        this.props.fetchCartItems();
    }

    onChange(e) {
        // debugger
        e.preventDefault();


        const newCartItem = Object.assign({}, this.state, {
            product_id: this.state.productId,
            quantity: e.currentTarget.value,
        });
        // debugger
        this.setState({ ...newCartItem })
        // debugger
        this.props.updateCartItem(newCartItem);
        // debugger
    }

    handleDelete(e) {
        e.preventDefault();
        // debugger
        this.props.deleteCartItem(this.props.cartItem)
    }

    render() {
        // debugger 

        // debugger
        if (
            !this.state.photoUrl ||
            !this.state.price ||
            !this.state.name) {
            // debugger
            location.reload();
            // return null;
        } else {
            const {
                product_id,
                quantity,
            } = this.props.cartItem;

            const { photoUrl, price, name } = this.state;

            return (
                <div className="cart-items-list-top">
                    <div className="cart-items-element">
                        <Link
                            className="cart-items"
                            to={`/products/${product_id}`}>
                            <img
                                className="cart-item-img"
                                src={photoUrl} alt=""
                            />
                        </Link>
                    </div>

                    <div className="cart-items-element">
                        <div className="cart-item-name">{name}</div>
                        <div>
                            <button 
                                className="cart-item-delete"
                                onClick={(e) => this.handleDelete(e)}>
                                Remove
                            </button>
                        </div>
                    </div>

                    <div className="cart-items-element">
                        <select
                            className="cart-quantity-button"
                            onChange={this.onChange} 
                            value={this.state.quantity}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                        </select>
                    </div>

                    <div className="cart-items-element">
                        <div className="cart-item-price">${price * this.state.quantity}</div>
                    </div>
                </div>
            )
        }
    }
}

export default CartItemIndexItem;