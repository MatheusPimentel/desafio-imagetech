import Rest from 'src/service/Rest.js'

/**
 * @typedef UsuarioService
 */
export default class UsuarioService extends Rest {

  /**
   * @type {string}
   */
  static resource = 'user'

  login (user) {
    return this.post('/login', user)
  }
}
