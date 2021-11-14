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
                            ccy1563@gmail.com
                        </div>
                        {/* <div className='cart-footer-right-item-3'>
                            Privacy
                        </div> */}
                        <a className='cart-footer-right-item-3-link' href="https://github.com/ccy1563" target="_blank">
                            <div className='cart-footer-right-item-3'>Github</div>
                        </a>
                        {/* <div className='cart-footer-right-item-4'>
                            ,
                        </div> */}
                        {/* <div className='cart-footer-right-item-5'>
                            Interest-based ads
                        </div> */}
                        <a className='cart-footer-right-item-3-link' href="https://www.linkedin.com/in/chris-c-160950221/" target="_blank">
                            <div className='cart-footer-right-item-3'>Linkedin</div>
                        </a>
                        {/* <div className='cart-footer-right-item-6'>
                            Help Center
                        </div> */}
                        <a className='cart-footer-right-item-3-link' href="https://angel.co/u/christopher-chung-16" target="_blank">
                            <div className='cart-footer-right-item-3'>Angellist</div>
                        </a>
                    </div>
                </div>

                <div>
                    <div className='cart-footer-merchant-top'>
                        <div className='cart-footer-merchant-left'>
                            {/* Merchant is Yeetsy, Inc. (USA) or Yeetsy Ireland UC (Ireland), depending on the currency in which the Seller transacts. See */}
                            Don't like my work? Check out some of my friends' work instead!
                        </div>
                        {/* <div className='cart-footer-merchant-right'>
                            Yeetsy Payments Terms of Use.
                        </div> */}
                    </div>
                    <div className='cart-footer-merchant-donate'>
                        <div className='special-thanks-list'>
                            {/* If you donate to the Uplift Fund, your Merchant for the donation amount will be Brooklyn Community Fund. */}
                            <a className='special-thanks' href="https://github.com/alexsaintlam" target="_blank">
                                <div className='special-thanks-name'>Alex Lam</div>
                            </a>
                            <a className='special-thanks' href="https://github.com/anthill499" target="_blank">
                                <div className='special-thanks-name'>Anthony Huang</div>
                            </a>
                            <a className='special-thanks' href="https://github.com/rzleu" target="_blank">
                                <div className='special-thanks-name'>Richard Leung</div>
                            </a>
                            <a className='special-thanks' href="https://github.com/cindyj301" target="_blank">
                                <div className='special-thanks-name'>Cindy Jiang</div>
                            </a>
                            <a className='special-thanks' href="https://github.com/Dustin-Adler" target="_blank">
                                <div className='special-thanks-name'>Dustin Adler</div>
                            </a>
                            <a className='special-thanks' href="https://github.com/dmechenko" target="_blank">
                                <div className='special-thanks-name'>Daniel Mechenko</div>
                            </a>
                            <a className='special-thanks' href="https://github.com/WinnieNg3210" target="_blank">
                                <div className='special-thanks-name'>Winnie Ng</div>
                            </a>
                            <a className='special-thanks' href="https://github.com/sunmeiappprep" target="_blank">
                                <div className='special-thanks-name'>Sunny Mei</div>
                            </a>
                            <a className='special-thanks' href="https://github.com/KevLin2358" target="_blank">
                                <div className='special-thanks-name'>Kevin Lin</div>
                            </a>
                        </div>
                        {/* <div className='cart-footer-merchant-donate-right'>
                            See Round Up Feature Terms and Conditions.
                        </div> */}
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