import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import ExplicitIcon from '@material-ui/icons/Explicit';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';

class Footer extends React.Component {

    render() {
        return (
            <section className="footer-section">
                <div className="footer-option">
                    <p className="footer-option-head">Language</p>
                    {/* <li>Gift cards</li>
                    <li>Yeetsy blog</li> */}
                    <li>Java</li>
                    <li>Javascript</li>
                    <li>Ruby</li>
                    <li>Python</li>
                    <li>C++</li>
                </div>

                <div className="footer-option">
                    <p className="footer-option-head">Style</p>
                    {/* <li>Sell on Yeetsy</li>
                    <li>Teams</li>
                    <li>Forums</li>
                    <li>Affilites</li> */}
                    <li>HTML</li>
                    <li>CSS</li>

                </div>
                
                <div className="footer-option">
                    <p className="footer-option-head">Technology</p>
                    {/* <li>Yeetsy, Inc.</li>
                    <li>Policies</li>
                    <li>Investors</li>
                    <li>Careers</li>
                    <li>Press</li>
                    <li>Impact</li> */}
                    <li>Rails</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Node.js</li>
                    <li>Express</li>
                </div>

                <div className="footer-option">
                    <p className="footer-option-head">Database</p>
                    {/* <li>Help Center</li>
                    <li>Trust and safety</li>
                    <li>Privacy settings</li> */}
                    <li>PostSQL</li>
                    <li>MongoDB</li>
                    <div className="download-etsy-app-top">
                        <div className="download-etsy-app-head">
                            <button className="download-etsy-app-button-icon"><ExplicitIcon /></button>
                            <button className="download-etsy-app-button">
                                ccy1563@gmail.com
                            </button>
                        </div>
                        <ul className="links-to-social-media">
                            {/* <li className="social-media-options"><FacebookIcon /></li>
                            <li className="social-media-options"><InstagramIcon /></li>
                            <li className="social-media-options"><PinterestIcon /></li>
                            <li className="social-media-options"><TwitterIcon /></li>
                            <li className="social-media-options"><YouTubeIcon /></li> */}
                            
                            {/* <li> <img className="cart-footer-united-states-img" src={window.github} /></li>
                            <li> <img className="cart-footer-united-states-img" src={window.linkedin} /></li>
                            <li> <img className="cart-footer-united-states-img" src={window.angellist} /></li> */}

                            <li>
                                <a href="https://github.com/ccy1563">
                                    <img className="footer-social" src={window.github} alt="logo" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/chris-c-160950221/">
                                    <img className="footer-social" src={window.linkedin} alt="logo" />
                                </a>
                            </li>
                            <li>
                                <a href="https://angel.co/u/christopher-chung-16">
                                    <img className="footer-social" src={window.angellist} alt="logo" />
                                </a>
                            </li>
                            {/* <li><img className="cart-footer-united-states-img" src={logo} alt="logo" /></li>
                            <li><img className="cart-footer-united-states-img" src={logo} alt="logo" /></li> */}
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}

export default Footer;