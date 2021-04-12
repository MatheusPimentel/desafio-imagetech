import Route from '../../../crud/router/Route.js'
import UserController from '../controller/UserController.js'

/**
 * @typedef {UserRouter}
 */
export default class UserRouter extends Route {
	/**
	 * @type {string}
	 */
	domain = 'user'

	/**
	 * @type {UserController}
	 */
	controller = UserController.instance()

	/**
	 */
	login () {
		this.app.post(`/${this.domain}/login`, (req, res, next) => {
			this.controller.login(req, res, next)
		})
	}

	/**
	 */
	startRoutes () {
		this.login()
		super.startRoutes()
	}
}
