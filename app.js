const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

const port = 3000;

// Middleware
app.use(express.json()); // If we don't use this we wont have the data in the body of the request

// Routes
app.get('/hello', (req, res) => {
	res.send('Task Manager App');
});

// This is the ROUTE for the TASKS ROUTER (routes/tasks.js)
app.use('/api/v1/tasks', tasks);

// This function first trys to connect to the Database, if the promise the connectDB function
// returns is not resolved, it will log the error, otherwise it will listen on the port
const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(port, () => {
			console.log(`Server is listening on port ${port}...`);
		});
	} catch (error) {
		console.log(error);
	}
};

start();
