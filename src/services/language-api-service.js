import config from '../config'
import TokenService from './token-service'

const LanguageApiService = {

  getLanguage(user) {
    return (
      fetch(`${config.API_ENDPOINT}/language`, {
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`
        },
      user: JSON.stringify({ 
        id: user.id
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(err => Promise.reject(err))
          : res.json()
      )
      .catch(er => {
        console.log(er);
      })
    )
  },

  getHead() {
    return fetch(`${config.API_ENDPOINT}/language/head`, {
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`
        },
      }).then(res =>
        (!res.ok)
          ? res.json().then(err => Promise.reject(err))
          : res.json()
      )
      .catch(er => {
        console.log(er);
      })
  },

  makeGuess(guess) {
    return fetch(`${config.API_ENDPOINT}/language/guess`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`
        },
      body: JSON.stringify(guess)
      }).then(res =>
        (!res.ok)
          ? res.json().then(err => Promise.reject(err))
          : res.json()
      )
      .catch(er => {
        console.log(er);
      })
  }

}

export default LanguageApiService
