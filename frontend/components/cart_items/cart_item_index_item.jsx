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
        // this.state = this.props.cartItem;
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
        this.setState({ ...newCartItem})
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
        const {
            product_id,
            quantity
        } = this.props.cartItem;

        
        // debugger;
        if (
            !product_id-1 ||
            !quantity ||
            !this.props.products[product_id-1].photoUrl ||
            !this.props.products[product_id-1].price ||
            !this.props.products[product_id-1].name)
            {
                // debugger
                // location.reload();
                return null;
            } else {
                // debugger 
                // debugger
                const { photoUrl, price, name } = this.props.products[product_id-1];
                
                return (
                    <div>
                    <div>
                        <Link
                            className="cart-items"
                            to={`/products/${product_id-1}`}>
                            <img
                                className="cart-item-img"
                                src={photoUrl} alt=""
                            />
                        </Link>
                    </div>

                    <div>
                        <div>{name}</div>
                        <div>
                            <button onClick={(e) => this.handleDelete(e)}>
                                Remove
                            </button>
                        </div>
                    </div>

                    <div>
                        <select onChange={this.onChange} value={quantity}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                        </select>
                    </div>

                    <div>
                        <div>{price*quantity}</div>
                    </div>
                </div>
            )
        }

    }
}

export default CartItemIndexItem;