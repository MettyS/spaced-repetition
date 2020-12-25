import React, { Component } from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'

class RegistrationRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleRegistrationSuccess = () => {
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return (
      <section>
        <div className='margin-container'>
          <p className='margin-bar'>
            Practice learning a language with the spaced reptition revision technique.
          </p>
        </div>
       
        <div className='margin-container'>
          <h2 className='margin-bar'>Sign up</h2>
        </div>
        <div className='margin-container'>
          <div class='margin-bar'>
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
