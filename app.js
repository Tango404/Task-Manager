const express = require('express');
const app = express();
const routes = require('./routes/tasks');
const tasks = require('./routes/tasks');

const port = 3000;

// Middleware
app.use(express.json()); // If we dont use this we wont have the data in the body of the request

// Routes
app.get('/hello', (req, res) => {
	res.send('Task Manager App');
});

// This is the ROUTE for the TASKS ROUTER (routes/tasks.js)
app.use('/api/v1/tasks', tasks);

app.listen(port, () => {
	console.log(`Server is listening on port ${port}...`);
});
