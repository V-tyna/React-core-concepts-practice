const express = require('express');
const eventRouter = require('./routes/events');
const cors = require('cors');
const authRouter = require('./routes/auth');

const app = express();

app.use(express.json());
app.use(cors());

app.use(authRouter);
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
