import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.removeErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  handleDemoUser(e) {
    e.preventDefault();
    const caveman = {email: "caveman@gmail.com", password: "123456password"}
    this.props.processForm(caveman).then(this.props.closeModal)
  }

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
    return (
      <div>
        <div>
          <form className="modal-form" onSubmit={this.handleSubmit}>
            <div onClick={this.props.closeModal} className="close-x">X</div>
            {this.renderErrors()}
            {/* <div className="email-item"> */}
              <label className="form-text" htmlFor="email-label1">Email Address
              </label>
              <input 
                className="form-input"
                id="email-label1"
                type="email"
                value={this.state.email}
                onChange={this.update('email')}
              />
            {/* </div> */}
            <label className="form-text" htmlFor="email-label2">Password
            </label>
            <input
              className="form-input" 
              id="email-label2"
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
            />
            <div className="submit-button-list">
              <li><input className="submit-button" type="submit" value="Continue"></input></li>
              <li><button className="submit-button" onClick={(e) => this.handleDemoUser(e)}>Demo User</button></li>
              <li><button className="submit-button" onClick={() => this.props.openModal('signup')}>Sign Up</button></li>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SessionForm;
