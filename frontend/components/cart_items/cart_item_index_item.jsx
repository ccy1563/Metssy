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

    handleQuantity(e) {
        e.preventDefault();

        // debugger
        // const cartItemId = this.props.cartItem.id;
        const cartItem = Object.assign({}, this.state, {
            photoUrl: this.state.photoUrl,
        });
        this.props.updateCartItem(cartItem);
        // this.setState({ quantity: e.currentTarget.value });
        // document.getElementById("review-submit-button").value = "";
        // this.navigateToReviewShow();
    }

    update(property) {
        return e => this.setState({ [property]: e.currentTarget.value });
    }

    onChange(e) {
        // debugger
        e.preventDefault();
        // debugger
        // this.handleQuantity(e);
        // this.setState({ quantity: e.currentTarget.value })
        // const cartItem = {
        //     id: this.props.cartItem.id,
        //     user_id: this.props.cartItem.user_id,
        //     product_id: this.props.cartItem.product_id,
        //     quantity: e.currentTarget.value,
            
        // };
        const newCartItem = {
            id: this.state.id,
            name: this.state.name,
            photoUrl: this.state.photoUrl,
            price: this.state.price,
            product_id: this.state.productId,
            quantity: e.currentTarget.value,
        }
        // debugger
        this.setState({ ...newCartItem})
        // debugger
        this.props.updateCartItem(newCartItem);
        // debugger
    }

    render() {
        // debugger 

        // debugger
        // if (!this.state.photoUrl || !this.state.photoUrl===undefined) {
        //     // debugger
        //     console.log("jdlfajsaklfhsajlkfsjlkhaf")
        //     return null;
        // }

        const {
            price,
            product_id,
            quantity 
        } = this.props.cartItem;

        const { photoUrl } = this.state;
        
        // debugger

        return (
            <div>
                <div>
                    <Link
                        className="cart-items"
                        to={`/products/${product_id}`}>
                        <img
                            className="cart-item-img"
                            src={photoUrl} alt=""
                        />
                    </Link>
                </div>

                <div>
                    <label htmlFor="qty">Qty:
                        <select id="qty" onChange={this.onChange} value={this.state.quantity}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                        </select>
                    </label>
                </div>

                <div>

                </div>
            </div>
        )
    }
}

export default CartItemIndexItem;