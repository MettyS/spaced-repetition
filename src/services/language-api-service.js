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
  }
}

export default LanguageApiService
