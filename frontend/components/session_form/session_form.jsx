import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      option: "login",
      exit: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleState = this.handleState.bind(this);
  }

  componentWillUnmount() {
    this.props.removeErrors();
    // this.props.closeModal();
    // if (!this.state.exit) {
    //   this.props.openModal(this.state.option)
    // }
  }

  componentDidMount() {
    // debugger
    if (this.props.formType === "signup") {
      this.setState({
        option: 'signup',
      })
    } else {
      this.setState({
        option: 'login',
      })
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    }
    this.props.processForm(user).then(this.props.closeModal);
  }

  handleDemoUser(e) {
    e.preventDefault();
    const caveman = {email: "caveman@gmail.com", password: "123456password"}
    this.props.processForm(caveman).then(this.props.closeModal)
  }

  // handleSwap(e) {
  //   e.preventDefault();
  //   if (!this.state.signup) {
  //     this.setState({
  //       signup: true,
  //     })
  //   } else {
  //     this.setState({
  //       signup: false,
  //     })
  //   }
  //   console.log(this.state.signup)
  //   if (this.state.signup) {
  //     // this.props.closeModal('login')
  //     this.props.openModal('signup')
  //   } else {
  //     // this.props.closeModal('signup')
  //     this.props.openModal('login')
  //   }
  //   // debugger
  // }

  handleState(e) {
    e.preventDefault();
    // if(this.state.opened) {
    //   this.setState({
    //     opened: false,
    //   })
    // }

    // this.props.closeModal();

    if (this.state.option === "login") {
      this.setState({
        option: "signup",
      })
    } else {
      this.setState({
        option: "login",
      })
    }
  }
  
  handleSignup(e) {
    e.preventDefault();
    // this.setState({
    //   signup: true,
    // })
    // this.props.closeModal()
    // this.props.openModal('signup')
    this.handleState(e)
    this.props.openModal('signup')
    // this.props.closeModal()
    // console.log(this.state.option)
  }

  handleLogin(e) {
    e.preventDefault();
    // this.setState({
    //   signup: false,
    // })
    // this.props.closeModal()
    // this.props.openModal('login')
    // debugger
    this.handleState(e)
    this.props.openModal('login')
    // this.props.closeModal()
    // console.log(this.state.option)
  }

  // handleExit() {
  //   this.setState({
  //     exit: true,
  //   })
  //   debugger
  //   this.props.closeModal()
  // }

  renderErrors() {
    // removing dup errors, super janky, find root problem
    const uniq = [... new Set(this.props.errors)]
    return (
      <ul>
        {uniq.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    // debugger
    if (this.state.option === "login") {
      return (
        <div>
          <div>
            <form className="modal-form" onSubmit={(e) => this.handleSubmit(e)}>
              <div>
                <div className='sign-in-to-continue'>
                  Sign in to continue
                </div>
                <div className='sign-in-or-register'>
                  Sign in or register with your email address
                </div>
              </div>
              <div onClick={this.props.closeModal} className="close-x">X</div>
              <div className='modal-error'>
                {this.renderErrors()}
              </div>
              {/* <div className="email-item"> */}
              <div className="form-text-box">
                <label className="form-text" htmlFor="email-label1">Email Address
                </label>
                <input
                  className="form-input"
                  id="email-label1"
                  type="email"
                  value={this.state.email}
                  onChange={this.update('email')}
                />
              </div>
              {/* </div> */}
              <div className="form-text-box">
                <label className="form-text" htmlFor="email-label2">Password
                </label>
                <input
                  className="form-input"
                  id="email-label2"
                  type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                />
              </div>
              <div className="submit-button-list">
                <li><input className="submit-button" type="submit" value="Continue"></input></li>
              </div>
              {/* <div className='sign-in-trouble'>Trouble signing in?</div> */}
              <div className='modal-form-thingy-top'>
                <div className='modal-form-line'></div>
                <div className='modal-form-or'>OR</div>
                <div className='modal-form-line'></div>
              </div>
              <div>
                <div><button className="other-modal-buttons" onClick={(e) => this.handleDemoUser(e)}>Demo User</button></div>
                <div>
                  <button className="other-modal-buttons" onClick={(e)=>this.handleSignup(e)}>Sign Up</button>
                  {/* <button className="other-modal-buttons" onClick={() => this.props.openModal('signup')}>Sign Up</button> */}
                </div>
              </div>
              <div className='sign-up-policy'>
                By clicking Continue or Continue with Google, Facebook, or Apple, you agree to Yeetsy's Terms of Use and Privacy Policy. Yeetsy may send you communications; you may change your preferences in your account settings. We'll never post without your permission.
              </div>
            </form>
          </div>
        </div>
      )
    }

    if (this.state.option === "signup") {
      return (
        <div>
          <div>
            <form className="modal-form" onSubmit={(e) => this.handleSubmit(e)}>
              <div>
                <div className='sign-in-to-continue'>
                  Create your account
                </div>
                <div className='sign-in-or-register'>
                  Registration is easy
                </div>
              </div>
              <div onClick={this.props.closeModal} className="close-x">X</div>
              <div className='modal-error'>
                {this.renderErrors()}
              </div>
              {/* <div className="email-item"> */}
              <div className="form-text-box">
                <label className="form-text" htmlFor="email-label1">Email Address
                </label>
                <input
                  className="form-input"
                  id="email-label1"
                  type="email"
                  value={this.state.email}
                  onChange={this.update('email')}
                />
              </div>
              {/* </div> */}
              <div className="form-text-box">
                <label className="form-text" htmlFor="email-label2">Password
                </label>
                <input
                  className="form-input"
                  id="email-label2"
                  type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                />
              </div>
              <div className="submit-button-list">
                <li><input className="submit-button" type="submit" value="Continue"></input></li>
              </div>
              {/* <div className='sign-in-trouble'>Trouble signing in?</div> */}
              <div className='modal-form-thingy-top'>
                <div className='modal-form-line'></div>
                <div className='modal-form-or'>OR</div>
                <div className='modal-form-line'></div>
              </div>
              <div>
                <div><button className="other-modal-buttons" onClick={(e) => this.handleDemoUser(e)}>Demo User</button></div>
                <div>
                  <button className="other-modal-buttons" onClick={(e)=>this.handleLogin(e)}>Sign In</button>
                  {/* {(!this.state.signup) ? <button className="other-modal-buttons" onClick={(e) => this.handleSwap(e)}>Sign Up</button> : <button className="other-modal-buttons" onClick={(e) => this.handleSwap(e)}>Sign In</button>} */}
                  {/* <button className="other-modal-buttons" onClick={() => this.props.openModal('signup')}>Sign Up</button> */}
                </div>
              </div>
              <div className='sign-up-policy'>
                By clicking Continue or Continue with Google, Facebook, or Apple, you agree to Yeetsy's Terms of Use and Privacy Policy. Yeetsy may send you communications; you may change your preferences in your account settings. We'll never post without your permission.
              </div>
            </form>
          </div>
        </div>
      )
    }
  }
}

export default SessionForm;
