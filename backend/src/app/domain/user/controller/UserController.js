import Controller from '../../../crud/controller/Controller.js'
import UserRepository from '../repository/UserRepository.js'

/**
 * @typedef {UserController}
 */
export default class UserController extends Controller {
	/**
	 * @type {UserRepository}
	 */
	repository = UserRepository.instance()

	/**
	 * @param req
	 * @param res
	 * @param next
	 * @returns {*}
	 */
	login (req, res, next) {
		this.repository.login(req.body)
			.then((result) => {
				if (!result) {
					res.status(404).send({
						err: 'Email or password are incorrect!'
					})
					return
				}
				res.status(200).send(result)
			}).catch((error) => {
			res.status(500).send({
				err: 'Was not possible to find the register!',
				detail: error
			})
		})
	}
}
