const mongoose = require('mongoose');

// Setting up the structure of all the documents in the DB with validation
const TaskSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Must provide name'],
		trim: true,
		maxlength: [20, 'Name can not be longer than 20 chars'],
	},
	completed: {
		type: Boolean,
		default: false,
	},
});

module.exports = mongoose.model('Task', TaskSchema);
