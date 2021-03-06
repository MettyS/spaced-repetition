import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'

class LoginRoute extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  render() {
    return (
      <section id='login' className='margin-container margin-bar'>
        <div>
        <h2>Login</h2>
        </div>

        <div>
          <div>
            <LoginForm
            onLoginSuccess={this.handleLoginSuccess}
          />
          </div>
        </div>
      </section>
    );
  }
}

export default LoginRoute
