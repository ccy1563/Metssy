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
        <form onSubmit={this.handleSubmit}>
          <div onClick={this.props.closeModal} className="close-x">X</div>
          {this.renderErrors()}
          <br />
          <label>email:
            <input type="email"
              value={this.state.email}
              onChange={this.update('email')}
            />
          </label>
          <br />
          <label>Password:
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
            />
          </label>
          <br />
          <input type="submit" value={this.props.formType} />
        </form>
        <button onClick={(e) => this.handleDemoUser(e)}>Demo User</button>
      </div>
    );
  }
}

export default SessionForm;
