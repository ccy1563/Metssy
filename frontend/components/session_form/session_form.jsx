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
    return (
      <ul>
        {this.props.errors.map((error, i) => (
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
              <label htmlFor="email-label1">Email Address
              </label>
              <input 
                id="email-label1"
                type="email"
                value={this.state.email}
                onChange={this.update('email')}
              />
            {/* </div> */}
            <label htmlFor="email-label2">Password
            </label>
            <input 
              id="email-label2"
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
            />
            <div className="submit-button">
              <input className="submit-button" type="submit" value="Continue" />
            </div>
            <div className="submit-button">
              <button className="submit-button" onClick={(e) => this.handleDemoUser(e)}>Demo User</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SessionForm;
