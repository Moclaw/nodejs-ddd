
const { model } = require('mongoose');
class BaseRepository {
	constructor(model) {
		this.model = model;
	}

	async findAll() {
		return this.model.find();
	}

	async findByKey(key, value) {
		return this.model.findOne({ [key]: value });
	}

	async findById(id) {
		return this.model.findById(id);
	}

	async create(data) {
		return this.model.create(data);
	}

	async update(id, data) {
		return this.model.findByIdAndUpdate(id, data, { new: true });
	}

	async delete(id) {
		return this.model.findByIdAndDelete(id);
	}
}

module.exports = BaseRepository;
