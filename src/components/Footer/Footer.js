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
        <div className='nav'>
        <Link
            onClick={this.handleLogoutClick}
            to='/login'>
            Logout
          </Link>
        </div>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='nav' >
        <Link to='/'>Spaced repetition</Link>
      </div>
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
