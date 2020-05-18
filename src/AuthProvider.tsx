import { AuthProvider } from 'ra-core'

const authProvider: AuthProvider = {
  login: ({ username }) => {
    localStorage.setItem('username', username)
    // accept all username/password combinations
    return Promise.resolve()
  },
  logout: () => {
    localStorage.removeItem('username')
    return Promise.resolve()
  },
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem('username')
      return Promise.reject()
    }
    return Promise.resolve()
  },
  checkAuth: () =>
    localStorage.getItem('username') ? Promise.resolve() : Promise.reject(),
  getPermissions: () => Promise.reject('Unknown method'),
}

export default authProvider
