//Express js

const express = require('express');
const app = express();
const port = 3000;

//get server

app.get('/', (req, res) => {
	res.send('Today is the 6th of July 2026.');
});

//listen to server

app.listen(port, () => {
	console.log(`Express server is running on port ${port}`);
});