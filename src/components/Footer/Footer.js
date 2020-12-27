import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext'
import './Footer.css'

class Footer extends Component {
  static contextType = UserContext

  handleLogoutClick = () => {
    this.context.processLogout()
  }

  renderLogoutLink() {
    return (
      <div>
        <div>
          <span>
            {this.context.user.name}
          </span>
        </div>
        <nav>
          <Link
            to='#logout'>
            Logout
          </Link>
        </nav>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <nav>
        <Link to='/login'>Spaced repetition</Link>
      </nav>
    )
  }

  render() {
    return (
      <footer>
        <span id='signature'>
          Created by Metty Schroeder
        </span>
        <div className='panel-middle'></div>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </footer>
    );
  }
}

export default Footer
