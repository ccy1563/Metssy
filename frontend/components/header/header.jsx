import React from 'react';

class Header extends React.Component {

    handleSignin(e) {
        e.preventDefault();
    }

    handleCart(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <label>Logo

                </label>
                <label>
                    <input 
                        type="search" 
                        placeholder="Search for anything"
                        // size="50"
                    />
                </label>
                <label>
                    <button onClick={(e) => this.handleSignIn(e)}>Sign In</button>
                </label>
                <label>
                    <button onClick={(e) => this.handleCart(e)}>Cart</button>
                </label>
            </div>
        )
    }
}

export default Header;