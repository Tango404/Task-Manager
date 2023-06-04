const Task = require('../models/Task');

// This controller uses the mongoose find method, and once completed without errors, it sends a 200
// response and sends all the tasks from the database in JSON format
const getAllTasks = async (req, res) => {
	try {
		const tasks = await Task.find({});
		res.status(200).json({ tasks });
	} catch (error) {
		res.status(500).json({ msg: error });
	}
};

// Create task uses waits for the task to be created using the request body, and then
// once completed sends a 201 status code and the json of the created task back to the client
const createTask = async (req, res) => {
	try {
		const task = await Task.create(req.body);
		res.status(201).json({ task });
	} catch (error) {
		res.status(500).json({ msg: error });
	}
};

const getTask = async (req, res) => {
	try {
		const { id: taskID } = req.params;

		const task = await Task.findOne({ _id: taskID });

		// Checks if the task search returns null, if it does we return this response
		if (!task) {
			return res.status(404).json({ msg: `No task with ID: ${taskID}` });
		}

		res.status(200).json({ task });
	} catch (error) {
		res.status(500).json({ msg: error });
	}
};

const updateTask = async (req, res) => {
	try {
		const { id: taskID } = req.params;
		const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, { new: true, runValidators: true });

		res.status(200).json({ task });
	} catch (error) {
		res.status(500).json({ msg: error });
	}
};

const deleteTask = async (req, res) => {
	try {
		const { id: taskID } = req.params;

		const task = await Task.findOneAndDelete({ _id: taskID });

		// Checks if the task search returns null, if it does we return this response
		if (!task) {
			return res.status(404).json({ msg: `No task with ID: ${taskID}` });
		}

		res.status(200).json({ task });
	} catch (error) {
		res.status(500).json({ msg: error });
	}
};

module.exports = {
	getAllTasks,
	createTask,
	getTask,
	updateTask,
	deleteTask,
};
