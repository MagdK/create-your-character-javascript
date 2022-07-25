const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();


const myLogger = function (req, res, next) {
	console.log(req.path)
	next()
}

app.use(myLogger)

// statikus fajlok kiszolgalasa
app.use(express.static('public'));

app.listen(3000);