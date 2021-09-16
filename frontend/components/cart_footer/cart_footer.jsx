import React from 'react';
import { connect } from 'react-redux'


class CartFooter extends React.Component {
    render() {
        return (
            <div>
                <div className='cart-footer-head'>
                    <div className='cart-footer-left'>
                        <div>
                            <img className="cart-footer-united-states-img" src={window.united_states} />
                        </div>
                        <div className='cart-footer-left-flag'>
                            United States
                        </div>
                        <div className='cart-footer-left-line'>
                            |
                        </div>
                        <div className='cart-footer-left-lang'>
                            English (US)
                        </div>
                        <div className='cart-footer-left-line'>
                            |
                        </div>
                        <div className='cart-footer-left-currency'>
                            $ (USD)
                        </div>
                    </div>

                    <div className='cart-footer-right'>
                        <div className='cart-footer-right-item-1'>
                            © 2021 Yeetsy, Inc.
                        </div>
                        <div className='cart-footer-right-item-2'>
                            Terms of Use
                        </div>
                        <div className='cart-footer-right-item-3'>
                            Privacy
                        </div>
                        <div className='cart-footer-right-item-4'>
                            ,
                        </div>
                        <div className='cart-footer-right-item-5'>
                            Interest-based ads
                        </div>
                        <div className='cart-footer-right-item-6'>
                            Help Center
                        </div>
                    </div>
                </div>

                <div>
                    <div className='cart-footer-merchant-top'>
                        <div className='cart-footer-merchant-left'>
                            Merchant is Yeetsy, Inc. (USA) or Yeetsy Ireland UC (Ireland), depending on the currency in which the Seller transacts. See
                        </div>
                        <div className='cart-footer-merchant-right'>
                            Yeetsy Payments Terms of Use.
                        </div>
                    </div>
                    <div className='cart-footer-merchant-donate'>
                        <div className='cart-footer-merchant-donate-left'>
                            If you donate to the Uplift Fund, your Merchant for the donation amount will be Brooklyn Community Fund.
                        </div>
                        <div className='cart-footer-merchant-donate-right'>
                            See Round Up Feature Terms and Conditions.
                        </div>
                    </div>
                </div>

                <div className='cart-footer-address'>
                    <div className='cart-footer-address-1'>
                        Yeetsy, Inc., USA 117 Adams Street Brooklyn, NY 11201
                    </div>
                    <div className='cart-footer-address-2'>
                        Yeetsy Ireland UC 66/67 Great Strand Street Dublin 1
                    </div>
                </div>
            </div>
        )
    }
}   

export default connect(null, null)(CartFooter);

// const mSTP = state => ({

// });

// const mDTP = dispatch => ({
// });

// export default connect(null, null)(CartFooter);