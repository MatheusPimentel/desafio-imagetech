/**
 * @typedef {Repository}
 */
export default class Repository {
	/**
	 * @type {Repository}
	 * @private
	 */
	static _instance = undefined

	/**
	 * @type {Sequelize}
	 */
	entity = undefined
	/**
	 */
	constructor () {
	}

	/**
	 * @param {Number} id
	 * @returns {Promise<unknown>}
	 */
	getById (id) {
		return this.entity.findByPk(id)
	}

	/**
	 * @returns {Promise<unknown>}
	 */
	getAll (offset, limit) {
		return this.entity.findAndCountAll({
			offset: offset,
			limit: limit,
			order: [
				['id', 'ASC']
			]
		})
	}

	/**
	 * @param {Number} id
	 * @returns {Promise<unknown>}
	 */
	deleteById (id) {
		return this.entity.destroy({ where: { 'id': id } })
	}

	/**
	 * @param {Object} register
	 * @returns {Promise<unknown>}
	 */
	insert (register) {
		return this.entity.create(register)
	}

	/**
	 * @param {Object} register
	 * @returns {Promise<unknown>}
	 */
	update (register) {
		return this.entity.update(register)
	}

	/**
	 * @returns {this}
	 */
	static build () {
		return new this()
	}

	/**
	 * @returns {this}
	 */
	static instance () {
		if (!this._instance) {
			this._instance = this.build()
		}
		console.log('repository ->', this._instance.constructor.name)
		return this._instance
	}
}
