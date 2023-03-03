const express = require('express');
const eventRouter = require('./routes/events');

const app = express();

app.use(express.json());
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

app.use('/events', eventRouter);

app.use((error, req, res, next) => {
	const status = error.status || 500;
	const message = error.message || 'Something went wrong.';
	res.status(status).json({ message: message });
});

const PORT = process.env.PORT || 4200;

const start = () => {
	app.listen(PORT, () => {
		console.log('Server is running at port ' + PORT);
	});
};

start();
