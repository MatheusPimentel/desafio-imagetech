import Repository from '../../../crud/repository/Repository.js'
import User from '../entity/user.js'

/**
 * @typedef {UserRepository}
 */
export default class UserRepository extends Repository {
	entity = User

	login (user) {
		this.entity.findAll()
		return this.entity.findOne({ where: user })
	}
}
