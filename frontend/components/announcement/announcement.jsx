import React from 'react';

class Announcement extends React.Component {

    render() {
        return (
            <div>
                <div announcement-head>
                    What is Etsy?
                    Read our wonderfully weird story
                </div>

                <div announcement-list>
                    <li>
                        <p>
                            A community doing good
                        </p>
                        <p>
                            Etsy is a global online marketplace, where people come together to make, sell, buy, and collect unique items. We’re also a community pushing for positive change for small businesses, people, and the planet. Here are some of the ways we’re making a positive impact, together.
                        </p>
                    </li>
                    <p>
                        Support independent creators
                    </p>
                    <p>
                        There’s no Etsy warehouse – just millions of people selling the things they love. We make the whole process easy, helping you connect directly with makers to find something extraordinary.
                    </p>
                    <li>
                        <p>Peace of mind</p>
                        <p>
                            Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.
                        </p>
                    </li>
                </div>

                <div announcement-floor>
                    Have a question? Well, we’ve got some answers.
                </div>
            </div>
        )
    }
}

export default Announcement;