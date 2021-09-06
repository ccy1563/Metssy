import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  

  componentDidMount() {
    console.log(this.props.currentUser);
  }

  render() {
    if (this.props.currentUser) {
      return(
        <button onClick={this.props.logout}>Log Out</button>
      ) 
    } else {
      return (
        <div>
          <button onClick={() => this.props.openModal('login')}>Sign In</button>
          <br></br>
          <button onClick={() => this.props.openModal('signup')}>Sign Up</button>
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
