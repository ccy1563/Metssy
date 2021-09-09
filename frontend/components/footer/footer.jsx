import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import ExplicitIcon from '@material-ui/icons/Explicit';

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
                    <div className="download-etsy-app-top">
                        <div className="download-etsy-app-head">
                            <button className="download-etsy-app-button-icon"><ExplicitIcon /></button>
                            <button className="download-etsy-app-button">
                                Download the Etsy App
                            </button>
                        </div>
                        <ul className="links-to-social-media">
                            <li className="social-media-options"><FacebookIcon /></li>
                            <li className="social-media-options"><InstagramIcon /></li>
                            <li className="social-media-options"><PinterestIcon /></li>
                            <li className="social-media-options"><TwitterIcon /></li>
                            <li className="social-media-options"><YouTubeIcon /></li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}

export default Footer;