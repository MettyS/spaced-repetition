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
      <section>
        <div className='margin-container'>
        <h2 className='margin-bar'>Login</h2>
        </div>

        <div className='margin-container'>
          <div className='margin-bar'>
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
