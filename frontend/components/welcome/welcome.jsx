import React from 'react';

class Welcome extends React.Component {

    // should say "Welcome back, [username]" when logged in
    render() {
        return (
            <div className="welcome-form">
                <p className="welcome-text">
                    Welcome to Yeetsy!
                </p>
            </div>
        )
    }
}

export default Welcome;