import React from 'react';

class Footer extends React.Component {

    render() {
        return (
            <section className="footer-section">
                <div className="footer-option">
                    <p className="footer-option-head">Shop</p>
                    <li>Gift cards</li>
                    <li>Etsy blog</li>
                </div>

                <div className="footer-option">
                    <p className="footer-option-head">Sell</p>
                    <li>Sell on Etsy</li>
                    <li>Teams</li>
                    <li>Forums</li>
                    <li>Affilites</li>
                </div>
                
                <div className="footer-option">
                    <p className="footer-option-head">About</p>
                    <li>Etsy, Inc.</li>
                    <li>Policies</li>
                    <li>Investors</li>
                    <li>Careers</li>
                    <li>Press</li>
                    <li>Impact</li>
                </div>

                <div className="footer-option">
                    <p className="footer-option-head">Help</p>
                    <li>Help Center</li>
                    <li>Trust and safety</li>
                    <li>Privacy settings</li>
                </div>
            </section>
        )
    }
}

export default Footer;