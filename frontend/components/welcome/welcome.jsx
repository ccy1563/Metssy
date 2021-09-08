import React from 'react';

class Welcome extends React.Component {

    // should say "Welcome back, [username]" when logged in
    render() {
        return (
            <div className="welcome-form">
                <p className="welcome-text">
                    Prep for fall with unique picks
                </p>
            </div>
        )
    }
}

export default Welcome;