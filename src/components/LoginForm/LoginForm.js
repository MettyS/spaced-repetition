import React, { Component } from 'react'
import { Input, Label } from '../Form/Form'
import AuthApiService from '../../services/auth-api-service'
import UserContext from '../../contexts/UserContext'
import Button from '../Button/Button'

class LoginForm extends Component {
  static contextType = UserContext

  state = { error: null }

  firstInput = React.createRef()
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  

  handleSubmit = ev => {
    ev.preventDefault()
    const { username, password } = ev.target

    this.setState({ error: null })

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then(res => {
        username.value = ''
        password.value = ''
        this.context.processLogin(res.authToken)
        this.props.onLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  componentDidMount() {
    this.firstInput.current.focus()
  }

  render() {
    const { error } = this.state
    return (
      <>
      <form
        className='LoginForm'
        onSubmit={this.handleSubmit}
      >
        <div role='alert' className='er-msg'>
          {error && <p>{error}</p>}
        </div>
        <div>
          <Label htmlFor='login-username-input'>
            Username
          </Label>
          <Input
            ref={this.firstInput}
            id='login-username-input'
            name='username'
            required
          />
        </div>
        <div>
          <Label htmlFor='login-password-input'>
            Password
          </Label>
          <Input
            id='login-password-input'
            name='password'
            type='password'
            required
          />
        </div>
        <Button type='submit'>
          Login
        </Button>
      </form>
      <div className='about'>
        <p>Spaced repetition is a proof-of-concept demo for learning a language using spaced-repetition implemented with a linked list</p>
        <p>Demo Credentials: username:  BobbyJoe  |  password:  My123!@# </p>
      </div>
      </>
    )
  }
}

export default LoginForm
