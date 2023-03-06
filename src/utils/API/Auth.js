import Fetch from '.'

class AuthModel {
  constructor() {
    this.BASE_SLUG = NEXT_PUBLIC_BASE_AUTH
  }
  async login(username, password) {
    try {
      return await Fetch.post(this.BASE_SLUG + '/login', {
        username,
        password
      })
    } catch (error) {
      return error
    }
  }
  async logout() {
    try {
      return await Fetch.post(this.BASE_SLUG)
    } catch (error) {
      return error
    }
  }
}

const Auth = new AuthModel()

export default Auth
