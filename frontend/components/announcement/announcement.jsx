import React from 'react';

class Announcement extends React.Component {

    render() {
        return (
            <div className="announcement-top">
                <div className="announcement-head">
                    <div className="announcement-head-top">
                        What is Yeetsy?
                    </div>
                    <div className="announcement-head-bottom">
                        {/* Read our wonderfully weird story */}
                    </div>
                </div>

                <div className="announcement-list">
                    <li className="announcement-list-items">
                        <p className="announcement-big-option">
                            A community doing good
                        </p>
                        <p className="announcement-small-option">
                            Yeetsy is a global online marketplace, where people come together to make, sell, buy, and collect unique items. We’re also a community pushing for positive change for small businesses, people, and the planet. Here are some of the ways we’re making a positive impact, together.
                        </p>
                    </li>
                    <li className="announcement-list-items">
                        <p className="announcement-big-option">
                            Support independent creators
                        </p>
                        <p className="announcement-small-option">
                            There’s no Yeetsy warehouse – just millions of people selling the things they love. We make the whole process easy, helping you connect directly with makers to find something extraordinary.
                        </p>
                    </li>
                    <li className="announcement-list-items">
                        <p className="announcement-big-option">Peace of mind</p>
                        <p className="announcement-small-option">
                            Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.
                        </p>
                    </li>
                </div>

                <div className="announcement-bottom">
                    Have a question? Well, we’ve got some answers.
                    {/* <button className="get-help-button">
                        Go to Help Center
                    // </button> */}
                </div>

            </div>
        )
    }
}

export default Announcement;