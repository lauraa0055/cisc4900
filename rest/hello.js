const express = require("express");
const app = express();
const port = 3000;

const path = require('path');

// app.get("/", function (req, res) {
//   res.send("Hello World!");
// });


app.use(express.static(path.join(__dirname, '..')));

// sendFile will go here
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '..', 'index.html'));
	//res.sendFile(path.join(__dirname, '..', 'js/index'));
	//res.sendFile(path.join(__dirname, '../css/style.css'))
});


app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
