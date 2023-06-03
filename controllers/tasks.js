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

const getTask = (req, res) => {
	res.json(req.body);
};

const updateTask = (req, res) => {
	res.json(req.body);
};

const deleteTask = (req, res) => {
	res.json(req.body);
};

module.exports = {
	getAllTasks,
	createTask,
	getTask,
	updateTask,
	deleteTask,
};
