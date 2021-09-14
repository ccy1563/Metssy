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

    render() {
        // debugger 
        const {
            photoUrl,
            price,
            product_id,
            quantity 
        } = this.props.cartItem;
        
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
                    <select name="cars" id="cars">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>

                <div>
                    
                </div>
            </div>
        )
    }
}

export default CartItemIndexItem;