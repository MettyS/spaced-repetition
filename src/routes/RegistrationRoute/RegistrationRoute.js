import React, { Component } from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'

class RegistrationRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleRegistrationSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  render() {
    return (
      <section id='registration' className='margin-container margin-bar'>
        <div>
          <p>
            Practice learning a language with the spaced reptition revision technique.
          </p>
        </div>
       
        <div>
          <h2>Sign up</h2>
        </div>
        <div>
          <div>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
        </div>
        </div>
      </section>
    );
  }
}

export default RegistrationRoute
