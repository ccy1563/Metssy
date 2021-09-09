import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  

  // componentDidMount() {
  //   console.log(this.props.currentUser);
  // }

  render() {
    if (this.props.currentUser) {
      return(
        <div>
          <button className="login-signup-button" onClick={this.props.logout}>Log Out</button>
        </div>
      ) 
    } else {
      return (
          <div>
            <button className="login-signup-button" onClick={() => this.props.openModal('login')}>Sign In</button>
          </div>
      )
    }
  }
}
export default Greeting;


// <div>
//   <Link to="/login">Sign in</Link>
//   {this.props.currentUser && <button onClick={this.props.logout}>Log Out</button>}
//   <br></br>
//   <Link to="/signup">Sign up</Link>
// </div>
